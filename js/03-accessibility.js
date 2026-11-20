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

// Recursos de vídeo (protótipo): só alternam o estado e avisam o usuário [ligado, desligado]
const A11Y_TOAST_TOGGLES = {
  captions: ['Legendas automáticas (CC) habilitadas.', 'Legendas desativadas.'],
  libras: ['Intérprete virtual VLibras ativado.', 'VLibras ocultado.'],
  'audio-desc': ['Audiodescrição de imagens habilitada.', 'Audiodescrição desativada.']
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
    speechPitchStep: 0, // 0: normal, 1: grave, 2: agudo
    screenReader: false
  };

  const rates = [1.0, 1.25, 1.5];
  const pitches = [1.0, 0.8, 1.25];
  const pitchNames = ['Timbre', 'Grave', 'Agudo'];

  function speakText(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = rates[state.speechRateStep];
    utterance.pitch = pitches[state.speechPitchStep];
    window.speechSynthesis.speak(utterance);
  }

  function updateActiveBadge() {
    const activeCount = popover.querySelectorAll('.a11y-tile[aria-pressed="true"]').length;
    badge.textContent = String(activeCount);
    badge.hidden = activeCount === 0;
  }

  function togglePopover(forceOpen) {
    const willOpen = typeof forceOpen === 'boolean' ? forceOpen : popover.hidden;
    popover.hidden = !willOpen;
    openBtn.setAttribute('aria-expanded', String(willOpen));
    if (willOpen) {
      closeBtn.focus();
    } else {
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
      togglePopover(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !popover.hidden) {
      togglePopover(false);
    }
  });

  // Leitura assistida ao focar elementos quando "Leitor de tela" está ativo
  document.addEventListener('focusin', (e) => {
    if (!state.screenReader) return;
    const label = e.target.getAttribute('aria-label') || e.target.innerText;
    if (label && label.trim().length > 1) {
      speakText(label.trim().slice(0, 140));
    }
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
      } else if (A11Y_TOAST_TOGGLES[action]) {
        const [onMessage, offMessage] = A11Y_TOAST_TOGGLES[action];
        setPressed(nextPressed);
        showToast(nextPressed ? onMessage : offMessage);
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
          case 'screen-reader':
            state.screenReader = nextPressed;
            setPressed(nextPressed);
            if (nextPressed) speakText('Leitor de tela ativado.');
            else if ('speechSynthesis' in window) window.speechSynthesis.cancel();
            break;
          case 'speech-rate':
            state.speechRateStep = (state.speechRateStep + 1) % rates.length;
            document.getElementById('tileRateLabel').textContent = `Velocidade ${rates[state.speechRateStep]}x`;
            setPressed(state.speechRateStep > 0);
            break;
          case 'speech-pitch':
            state.speechPitchStep = (state.speechPitchStep + 1) % pitches.length;
            document.getElementById('tilePitchLabel').textContent = pitchNames[state.speechPitchStep];
            setPressed(state.speechPitchStep > 0);
            break;
          case 'read-page':
            setPressed(nextPressed);
            if (nextPressed) {
              const visibleMain = document.querySelector('main:not([hidden]), section:not([hidden])');
              speakText(visibleMain ? visibleMain.innerText.slice(0, 900) : document.title);
              showToast('Lendo conteúdo da página em voz alta...');
            } else if ('speechSynthesis' in window) {
              window.speechSynthesis.cancel();
            }
            break;
        }
      }

      updateActiveBadge();
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
    state.speechRateStep = 0;
    state.speechPitchStep = 0;
    state.screenReader = false;
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();

    document.getElementById('tileContrastLabel').textContent = 'Contraste';
    document.getElementById('tileRateLabel').textContent = 'Velocidade 1x';
    document.getElementById('tilePitchLabel').textContent = 'Timbre';

    popover.querySelectorAll('.a11y-tile').forEach((tile) => tile.setAttribute('aria-pressed', 'false'));
    updateActiveBadge();
    showToast('Configurações de acessibilidade restauradas.');
  });
}
