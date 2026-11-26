/* =========================================================
   OPÇÕES SIMPLES DO PAINEL (data-a11y → [elemento, classe CSS])
   ========================================================= */
// Alternam apenas uma classe em <html> (documentElement) ou <body>
const A11Y_CLASS_TOGGLES = {
  'invert-colors': ['documentElement', 'a11y-invert'],
  'reduce-white': ['body', 'a11y-reduce-white'],
  'auto-brightness': ['body', 'a11y-auto-brightness'],
  'pause-animations': ['body', 'a11y-pause-motion'],
  'screen-orientation': ['body', 'a11y-wide-focus'],
  'font-family': ['body', 'a11y-alt-font'],
  'bold-text': ['body', 'a11y-bold-text'],
  
  'text-spacing': ['body', 'a11y-text-spacing'],
  'text-contrast': ['body', 'a11y-text-contrast']
};

/* =========================================================
   MENU COMPACTO DE ACESSIBILIDADE NO TOPO
   ========================================================= */
function initAccessibilityMenu() {
  const openBtn = document.getElementById('openA11yMenuBtn');
  const closeBtn = document.getElementById('closeA11yMenuBtn');
  const resetBtn = document.getElementById('resetA11yBtn');
  const popover = document.getElementById('a11yPopover');
  const badge = document.getElementById('a11yActiveCount');
  if (!openBtn || !popover) return;

  const state = {
    contrastStep: 0, // 0: normal, 1: médio, 2: alto
    fontSizeStep: 0, // índice em zoomLevels (100% a 200%)
    colorFilterStep: 0, // 0: nenhum, 1: protanopia, 2: deuteranopia, 3: tritanopia, 4: acromatopsia
    speechRateStep: 0, // 0: 1x, 1: 1.25x, 2: 1.5x
  };


  // Persistência local das preferências de acessibilidade (sem dados pessoais).
  const PREF_KEY = 'ufcrowd-a11y-preferences-v1';
  function saveA11yPreferences() {
    try {
      const pressed = [...popover.querySelectorAll('.a11y-tile')].filter((t) => t.getAttribute('aria-pressed') === 'true').map((t) => t.dataset.a11y);
      localStorage.setItem(PREF_KEY, JSON.stringify({ pressed, zoom: state.fontSizeStep, contrast: state.contrastStep, colorFilter: state.colorFilterStep }));
    } catch (_) { /* storage pode estar indisponível no modo privado */ }
  }
  function restoreA11yPreferences() {
    try {
      const saved = JSON.parse(localStorage.getItem(PREF_KEY) || 'null');
      if (!saved) return;
      (saved.pressed || []).forEach((action) => {
        const tile = popover.querySelector(`[data-a11y="${action}"]`);
        if (!tile || !A11Y_CLASS_TOGGLES[action]) return;
        const [target, className] = A11Y_CLASS_TOGGLES[action];
        document[target].classList.add(className);
        tile.setAttribute('aria-pressed', 'true');
      });
      if (Number.isInteger(saved.zoom) && saved.zoom >= 0 && saved.zoom < zoomLevels.length) {
        setZoom(saved.zoom);
        const zoomTile = popover.querySelector('[data-a11y="font-size"]');
        if (zoomTile) zoomTile.setAttribute('aria-pressed', String(saved.zoom > 0));
      }
      if (Number.isInteger(saved.contrast) && saved.contrast >= 0 && saved.contrast <= 2) {
        state.contrastStep = saved.contrast;
        document.body.classList.toggle('a11y-medium-contrast', state.contrastStep === 1);
        document.body.classList.toggle('high-contrast', state.contrastStep === 2);
        document.getElementById('tileContrastLabel').textContent = ['Contraste', 'Contraste médio', 'Alto contraste'][state.contrastStep];
        const contrastTile = popover.querySelector('[data-a11y="contrast-level"]');
        if (contrastTile) contrastTile.setAttribute('aria-pressed', String(state.contrastStep > 0));
      }
      if (Number.isInteger(saved.colorFilter) && saved.colorFilter >= 0 && saved.colorFilter < colorFilters.length) {
        setColorFilter(saved.colorFilter);
        const filterTile = popover.querySelector('[data-a11y="color-filter"]');
        if (filterTile) filterTile.setAttribute('aria-pressed', String(saved.colorFilter > 0));
      }
    } catch (_) { /* ignore invalid local preference */ }
  }
  function updateActiveBadge() {
    const activeCount = popover.querySelectorAll('.a11y-tile[aria-pressed="true"]').length;
    badge.textContent = String(activeCount);
    badge.hidden = activeCount === 0;
  }

  function togglePopover(forceOpen, restoreFocus = true) {
    const willOpen = typeof forceOpen === 'boolean' ? forceOpen : popover.hidden;
    popover.hidden = !willOpen;
    openBtn.setAttribute('aria-expanded', String(willOpen));
    if (willOpen) {
      closeBtn.focus();
    } else if (restoreFocus) {
      openBtn.focus();
    }
  }

  openBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePopover();
  });

  closeBtn.addEventListener('click', () => togglePopover(false));

  document.addEventListener('click', (e) => {
    if (!popover.hidden && !popover.contains(e.target) && !openBtn.contains(e.target)) {
      togglePopover(false, false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !popover.hidden) {
      togglePopover(false);
    }
  });

  // O link de salto direciona ao landmark principal atualmente visível.
  document.getElementById('skipToContentLink')?.addEventListener('click', (event) => {
    event.preventDefault();
    const viewIds = { home: 'homeView', category: 'categoryView', detail: 'projectDetailView', 'entity-profile': 'entityProfileView', 'entity-register': 'entityRegisterView' };
    const target = document.getElementById(viewIds[currentView] || 'homeView');
    target?.setAttribute('tabindex', '-1');
    target?.focus();
    target?.scrollIntoView({ block: 'start' });
  });

  // A leitura por voz é acionada somente por controles explícitos; nunca ao focar.
  const readSelectionBtn = document.getElementById('readSelectionBtn');
  const readPageBtn = document.getElementById('readPageBtn');
  const pauseSpeechBtn = document.getElementById('pauseSpeechBtn');
  const stopSpeechBtn = document.getElementById('stopSpeechBtn');
  const speechRateSelect = document.getElementById('speechRateSelect');
  const speechStatus = document.getElementById('speechStatus');

  function getCurrentReadableContent() {
    const ids = {
      home: 'homeView', category: 'categoryView', detail: 'projectDetailView',
      'entity-profile': 'entityProfileView', 'entity-register': 'entityRegisterView'
    };
    const active = document.getElementById(ids[currentView] || 'homeView');
    if (!active) return document.querySelector('main');
    const main = active.querySelector('main, [role="main"]') || active;
    // Ignore controls, navigation, hidden nodes, and repeated chrome.
    const clone = main.cloneNode(true);
    clone.querySelectorAll('nav, button, input, select, textarea, [hidden], [aria-hidden="true"], .pagination, .filters-sidebar-card').forEach((el) => el.remove());
    return clone;
  }

  function setSpeechControls(active, paused = false) {
    pauseSpeechBtn.disabled = !active;
    stopSpeechBtn.disabled = !active;
    pauseSpeechBtn.textContent = paused ? 'Continuar' : 'Pausar';
  }

  function speakText(text) {
    if (!('speechSynthesis' in window)) {
      speechStatus.textContent = 'Seu navegador não oferece suporte à leitura em voz alta. Use o leitor de tela do dispositivo.';
      showToast('Leitura em voz alta não suportada neste navegador.');
      return;
    }
    const cleanText = String(text || '').replace(/\s+/g, ' ').trim();
    if (!cleanText) {
      speechStatus.textContent = 'Não foi encontrado texto para leitura.';
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleanText.slice(0, 12000));
    utterance.lang = 'pt-BR';
    utterance.rate = Number(speechRateSelect.value || 1);
    utterance.onstart = () => { setSpeechControls(true, false); speechStatus.textContent = 'Leitura em andamento. Você pode pausar ou parar.'; };
    utterance.onend = () => { setSpeechControls(false); speechStatus.textContent = 'Leitura concluída.'; };
    utterance.onerror = (event) => { setSpeechControls(false); speechStatus.textContent = event.error === 'interrupted' ? 'Leitura interrompida.' : 'Não foi possível concluir a leitura.'; };
    window.speechSynthesis.speak(utterance);
  }

  readSelectionBtn?.addEventListener('click', () => {
    const selected = window.getSelection()?.toString().trim();
    if (!selected) {
      speechStatus.textContent = 'Selecione um trecho de texto na página primeiro.';
      showToast('Selecione um texto para ouvir.');
      return;
    }
    speakText(selected);
  });

  readPageBtn?.addEventListener('click', () => {
    const content = getCurrentReadableContent();
    speakText(content?.innerText || document.title);
  });

  pauseSpeechBtn?.addEventListener('click', () => {
    if (!('speechSynthesis' in window)) return;
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setSpeechControls(true, false);
      speechStatus.textContent = 'Leitura retomada.';
    } else if (window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      setSpeechControls(true, true);
      speechStatus.textContent = 'Leitura pausada.';
    }
  });

  stopSpeechBtn?.addEventListener('click', () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setSpeechControls(false);
    speechStatus.textContent = 'Leitura parada.';
  });

  document.addEventListener('selectionchange', () => {
    const hasSelection = Boolean(window.getSelection()?.toString().trim());
    readSelectionBtn.disabled = !hasSelection;
  });

  const colorFilters = [
    { id: null, label: 'Filtro de cor', note: 'Filtro de cor desativado.' },
    { id: 'protanopia', label: 'Protanopia', note: 'Filtro para protanopia (dificuldade com vermelho) ativado.' },
    { id: 'deuteranopia', label: 'Deuteranopia', note: 'Filtro para deuteranopia (dificuldade com verde) ativado.' },
    { id: 'tritanopia', label: 'Tritanopia', note: 'Filtro para tritanopia (dificuldade com azul e amarelo) ativado.' },
    { id: 'achromatopsia', label: 'Acromatopsia', note: 'Filtro em escala de cinza ativado.' }
  ];
  const zoomLevels = [100, 125, 150, 175, 200];
  const screenPresets = [
    { name: 'Padrão claro', bg: '#ffffff', fg: '#1f2322' },
    { name: 'Creme', bg: '#f5efe2', fg: '#2b2620' },
    { name: 'Azul suave', bg: '#e6f0fa', fg: '#12263a' },
    { name: 'Amarelo sobre preto', bg: '#000000', fg: '#ffe600' },
    { name: 'Escuro', bg: '#121413', fg: '#f1f3f2' }
  ];
  const defaultScreenColors = { bg: '#f5efe2', fg: '#1f2322' };
  const screenColors = { ...defaultScreenColors };
  const editor = document.getElementById('screenColorEditor');
  const bgInput = document.getElementById('screenBgInput');
  const fgInput = document.getElementById('screenFgInput');
  const presetRow = document.getElementById('screenPresets');

  function setColorFilter(step) {
    state.colorFilterStep = step;
    colorFilters.forEach((f) => f.id && document.documentElement.classList.remove(`a11y-cb-${f.id}`));
    if (colorFilters[step].id) document.documentElement.classList.add(`a11y-cb-${colorFilters[step].id}`);
    document.getElementById('tileColorFilterLabel').textContent = colorFilters[step].label;
  }

  function setZoom(step) {
    state.fontSizeStep = step;
    const pct = zoomLevels[step];
    const root = document.documentElement;
    root.style.fontSize = pct === 100 ? '' : `${pct}%`;
    root.classList.toggle('a11y-zoom-lg', pct >= 150);
    root.classList.toggle('a11y-zoom-xl', pct >= 200);
    document.getElementById('tileFontSizeLabel').textContent = pct === 100 ? 'Zoom' : `Zoom ${pct}%`;
  }

  restoreA11yPreferences();
  updateActiveBadge();

  function luminance(hex) {
    const n = parseInt(hex.slice(1), 16);
    const ch = (v) => (v / 255 <= 0.03928 ? v / 255 / 12.92 : ((v / 255 + 0.055) / 1.055) ** 2.4);
    return 0.2126 * ch(n >> 16) + 0.7152 * ch((n >> 8) & 255) + 0.0722 * ch(n & 255);
  }

  function applyScreenColors() {
    document.body.style.setProperty('--user-bg', screenColors.bg);
    document.body.style.setProperty('--user-fg', screenColors.fg);
    bgInput.value = screenColors.bg;
    fgInput.value = screenColors.fg;
    const [hi, lo] = [luminance(screenColors.bg), luminance(screenColors.fg)].sort((a, b) => b - a);
    const ratio = (hi + 0.05) / (lo + 0.05);
    document.getElementById('screenContrastNote').textContent =
      `Contraste ${ratio.toFixed(1).replace('.', ',')}:1 — ` +
      (ratio >= 7 ? 'excelente.' : ratio >= 4.5 ? 'adequado.' : 'baixo, o texto pode ficar difícil de ler.');
    presetRow.querySelectorAll('button').forEach((btn, i) => {
      const p = screenPresets[i];
      btn.setAttribute('aria-pressed', String(p.bg === screenColors.bg && p.fg === screenColors.fg));
    });
  }

  function resetScreenColors() {
    Object.assign(screenColors, defaultScreenColors);
    editor.hidden = true;
    document.body.style.removeProperty('--user-bg');
    document.body.style.removeProperty('--user-fg');
    popover.querySelector('[data-a11y="screen-color"]').setAttribute('aria-expanded', 'false');
  }

  screenPresets.forEach((p) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'a11y-preset';
    btn.textContent = 'Aa';
    btn.title = p.name;
    btn.setAttribute('aria-label', p.name);
    btn.style.backgroundColor = p.bg;
    btn.style.color = p.fg;
    btn.addEventListener('click', () => {
      screenColors.bg = p.bg;
      screenColors.fg = p.fg;
      applyScreenColors();
    });
    presetRow.appendChild(btn);
  });
  bgInput.addEventListener('input', () => { screenColors.bg = bgInput.value; applyScreenColors(); });
  fgInput.addEventListener('input', () => { screenColors.fg = fgInput.value; applyScreenColors(); });

  popover.querySelectorAll('.a11y-tile').forEach((tile) => {
    tile.addEventListener('click', () => {
      const action = tile.dataset.a11y;
      const nextPressed = tile.getAttribute('aria-pressed') !== 'true';
      const setPressed = (value) => tile.setAttribute('aria-pressed', String(value));

      if (A11Y_CLASS_TOGGLES[action]) {
        const [target, className] = A11Y_CLASS_TOGGLES[action];
        document[target].classList.toggle(className, nextPressed);
        setPressed(nextPressed);
      } else {
        // Opções com mais de dois estados ou com comportamento próprio
        switch (action) {
          case 'screen-color':
            document.body.classList.toggle('a11y-custom-screen', nextPressed);
            editor.hidden = !nextPressed;
            setPressed(nextPressed);
            tile.setAttribute('aria-expanded', String(nextPressed));
            if (nextPressed) {
              applyScreenColors();
              bgInput.focus();
            }
            break;
          case 'color-filter':
            setColorFilter((state.colorFilterStep + 1) % colorFilters.length);
            setPressed(state.colorFilterStep > 0);
            showToast(colorFilters[state.colorFilterStep].note);
            break;
          case 'contrast-level':
            state.contrastStep = (state.contrastStep + 1) % 3;
            document.body.classList.toggle('a11y-medium-contrast', state.contrastStep === 1);
            document.body.classList.toggle('high-contrast', state.contrastStep === 2);
            document.getElementById('tileContrastLabel').textContent =
              ['Contraste', 'Contraste médio', 'Alto contraste'][state.contrastStep];
            setPressed(state.contrastStep > 0);
            break;
          case 'font-size':
            setZoom((state.fontSizeStep + 1) % zoomLevels.length);
            setPressed(state.fontSizeStep > 0);
            showToast(`Zoom em ${zoomLevels[state.fontSizeStep]}%.`);
            break;
        }
      }

      updateActiveBadge();
      saveA11yPreferences();
    });
  });

  resetBtn.addEventListener('click', () => {
    setZoom(0);
    setColorFilter(0);
    resetScreenColors();
    Object.values(A11Y_CLASS_TOGGLES).forEach(([target, className]) => document[target].classList.remove(className));
    document.body.classList.remove('a11y-custom-screen', 'a11y-medium-contrast', 'high-contrast');
    state.contrastStep = 0;
    state.fontSizeStep = 0;
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (speechRateSelect) speechRateSelect.value = '1';
    setSpeechControls(false);
    if (speechStatus) speechStatus.textContent = 'Selecione um texto ou ouça o conteúdo principal. Esta ferramenta complementar não substitui VoiceOver, TalkBack ou NVDA.';

    document.getElementById('tileContrastLabel').textContent = 'Contraste';

    popover.querySelectorAll('.a11y-tile').forEach((tile) => { tile.setAttribute('aria-pressed', 'false'); if (tile.hasAttribute('aria-expanded')) tile.setAttribute('aria-expanded', 'false'); });
    updateActiveBadge();
    try { localStorage.removeItem(PREF_KEY); } catch (_) {}
    showToast('Configurações de acessibilidade restauradas.');
  });
}
