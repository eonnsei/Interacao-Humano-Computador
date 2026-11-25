/* =========================================================
   ESTADO GLOBAL DA APLICAÇÃO
   (PROJECTS_CATALOG e CATEGORY_TITLES vêm de js/01-catalog.js)
   ========================================================= */
let currentView = 'home';
let previousView = 'home';
let currentHomePage = 1;
let activeCategorySlug = 'entidades';
let currentCategoryPage = 1;
let activeProject = PROJECTS_CATALOG[0];
let activeCampaignTab = 'campanha';
let lastFocusedBeforeModal = null;
let currentUser = null; // { email, name } após o login

const clockIconSvg = `
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
    <circle cx="12" cy="12" r="9"></circle>
    <polyline points="12 7 12 12 15 14"></polyline>
  </svg>
`;

function formatBRL(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  });
}

function formatProjectMeta(item) {
  // Caso o item já tenha uma string pronta em pt-BR ou não use financiamento
  if (item.requiresFunding === false) {
    return item.meta || '';
  }

  const days = Number(item.daysLeft);
  const funded = Number(item.fundedPercent);

  // Fallback caso algum item do catálogo ainda só tenha `item.meta` em texto
  if (Number.isNaN(days) || Number.isNaN(funded)) {
    return item.meta || '';
  }

  const daysText =
    days <= 0
      ? 'Encerrado'
      : days === 1
      ? '1 dia restante'
      : `${days} dias restantes`;

  return `${daysText} • ${funded}% financiado`;
}


/* =========================================================
   UTILITÁRIOS DE ACESSIBILIDADE E NAVEGAÇÃO POR TECLADO
   ========================================================= */
function bindCardKeyboardActivation(element, onActivate) {
  element.setAttribute('tabindex', '0');
  element.setAttribute('role', 'button');
  element.addEventListener('click', onActivate);
  element.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onActivate();
    }
  });
}

function enableHorizontalArrowNavigation(containerSelector, itemSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.addEventListener('keydown', (e) => {
    const items = Array.from(container.querySelectorAll(itemSelector));
    const currentIndex = items.indexOf(document.activeElement);
    if (currentIndex === -1) return;

    let nextIndex = null;
    if (e.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % items.length;
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + items.length) % items.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = items.length - 1;
    }

    if (nextIndex !== null) {
      e.preventDefault();
      items[nextIndex].focus();
    }
  });
}

function getFocusableElements(container) {
  return Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter((el) => el.offsetParent !== null);
}

function openAccessibleModal(modalEl) {
  lastFocusedBeforeModal = document.activeElement;
  modalEl.hidden = false;
  const focusables = getFocusableElements(modalEl);
  if (focusables.length > 0) {
    focusables[0].focus();
  }
}

function closeAccessibleModal(modalEl) {
  modalEl.hidden = true;
  if (lastFocusedBeforeModal && typeof lastFocusedBeforeModal.focus === 'function') {
    lastFocusedBeforeModal.focus();
  }
}

/* =========================================================
   CONTROLE DE TELAS (HOME / CATEGORIA / FINANCIAMENTO / INSTITUCIONAL)
   ========================================================= */
function switchView(targetView, focusHeading = true) {
  currentView = targetView;
  document.getElementById('homeView').hidden = targetView !== 'home';
  document.getElementById('categoryView').hidden = targetView !== 'category';
  document.getElementById('projectDetailView').hidden = targetView !== 'detail';
  document.getElementById('entityProfileView').hidden = targetView !== 'entity-profile';
  document.getElementById('entityRegisterView').hidden = targetView !== 'entity-register';

  document.querySelectorAll('.cat-link').forEach((btn) => {
    const isCurrentCat = targetView === 'category' && btn.getAttribute('data-category') === activeCategorySlug;
    btn.classList.toggle('active', isCurrentCat);
    btn.setAttribute('aria-current', isCurrentCat ? 'page' : 'false');
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (focusHeading) {
    if (targetView === 'home') {
      document.getElementById('newsHeading').focus({ preventScroll: true });
    } else if (targetView === 'category') {
      document.getElementById('categoryPageTitle').focus({ preventScroll: true });
    } else if (targetView === 'detail') {
      document.getElementById('detailTitle').focus({ preventScroll: true });
    } else if (targetView === 'entity-profile') {
      document.getElementById('entityProfileTitle').focus({ preventScroll: true });
    } else if (targetView === 'entity-register') {
      document.getElementById('registerTitle').focus({ preventScroll: true });
    }
  }
}

function showHomeView(focusHeading = true) {
  switchView('home', focusHeading);
}

function openCategoryView(categorySlug) {
  activeCategorySlug = categorySlug;
  currentCategoryPage = 1;
  document.getElementById('categoryPageTitle').textContent = CATEGORY_TITLES[categorySlug] || 'Entidades';
  updateCategoryPaginationUI();
  renderCategoryGrid();
  switchView('category', true);
}

/* =========================================================
   RENDERIZAÇÃO DA PÁGINA INICIAL (VITRINE)
   ========================================================= */
function renderFeaturedProject() {
  const container = document.getElementById('featuredProjectCard');
  const project = PROJECTS_CATALOG.find((p) => p.featured) || PROJECTS_CATALOG[0];

  container.setAttribute('aria-label', `Abrir projeto em destaque: ${project.title}`);
  container.innerHTML = `
    <div class="featured-thumb-wrap">
      <img src="${project.image}" alt="${project.title}" class="featured-thumb" />
    </div>
    <div class="card-title-row">
      <span class="entity-avatar" style="background-color: ${project.badgeColor};" aria-hidden="true">${project.badgeText}</span>
      <h3 class="featured-title">${project.title}</h3>
    </div>
    <div class="project-meta">
      ${project.requiresFunding ? clockIconSvg : ''}
      <span>${formatProjectMeta(project)}</span>
    </div>
    <p class="featured-desc">${project.shortDesc}</p>
    <span class="goal-pill">${project.goalType}</span>
  `;

  bindCardKeyboardActivation(container, () => openProjectDetail(project.id));
}

function renderRecommendedProjects() {
  const grid = document.getElementById('recommendedGrid');
  const homeRecommendedIds = {
    1: ['green-team', 'scuderia', 'biomarcadores', 'lixo-eletronico'],
    2: ['atletica-geral', 'tamandutech', 'algoritmos-geneticos', 'cursinho-popular'],
    3: ['harpia', 'neurociencia', 'atletica-natacao', 'gpda']
  };

  const targetIds = homeRecommendedIds[currentHomePage] || homeRecommendedIds[1];
  const items = targetIds
    .map((id) => PROJECTS_CATALOG.find((p) => p.id === id))
    .filter(Boolean);

  grid.innerHTML = items
    .map(
      (item) => `
      <article class="rec-card" data-project-id="${item.id}" aria-label="Abrir ${item.title}">
        <div class="rec-thumb-wrap">
          <img src="${item.image}" alt="${item.title}" class="rec-thumb" />
        </div>
        <div class="card-title-row">
          <span class="entity-avatar" style="background-color: ${item.badgeColor};" aria-hidden="true">${item.badgeText}</span>
          <h3 class="rec-title">${item.title}</h3>
        </div>
        <div class="rec-meta">
          ${item.requiresFunding ? clockIconSvg : ''}
          <span>${formatProjectMeta(item)}</span>
        </div>
      </article>
    `
    )
    .join('');

  grid.querySelectorAll('.rec-card').forEach((card) => {
    const id = card.getAttribute('data-project-id');
    bindCardKeyboardActivation(card, () => openProjectDetail(id));
  });
}

function updateHomePaginationUI() {
  document.querySelectorAll('.page-btn[data-page]').forEach((btn) => {
    const pageNum = Number(btn.getAttribute('data-page'));
    const isActive = pageNum === currentHomePage;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-current', isActive ? 'page' : 'false');
  });
}

/* =========================================================
   RENDERIZAÇÃO DA PÁGINA DE CATEGORIA E FILTROS
   ========================================================= */
function getActiveFilters() {
  const checkedTypes = Array.from(document.querySelectorAll('.filter-type-checkbox:checked')).map((el) => el.value);
  const checkedGoals = Array.from(document.querySelectorAll('.filter-goal-checkbox:checked')).map((el) => el.value);
  const period = document.getElementById('filterPeriodSelect').value;
  return { checkedTypes, checkedGoals, period };
}

function renderCategoryGrid() {
  const grid = document.getElementById('categoryCardsGrid');
  const countLabel = document.getElementById('categoryResultsCount');
  const { checkedTypes, checkedGoals, period } = getActiveFilters();

  let items = PROJECTS_CATALOG.filter((item) => item.category === activeCategorySlug);

  if (checkedTypes.length > 0) {
    items = items.filter((item) => checkedTypes.includes(item.contentType));
  }

  if (checkedGoals.length > 0) {
    items = items.filter((item) => checkedGoals.includes(item.objective));
  }

  if (period !== 'all') {
    items = items.filter((item) => item.period === period);
  }

  const itemsPerPage = 6;
  const startIndex = (currentCategoryPage - 1) * itemsPerPage;
  const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

  countLabel.textContent =
    items.length === 1 ? '1 resultado encontrado' : `${items.length} resultados encontrados`;

  if (paginatedItems.length === 0) {
    grid.innerHTML = `
      <div class="empty-filter-state">
        <p>Nenhum item corresponde aos filtros selecionados nesta página.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = paginatedItems
    .map(
      (item) => `
      <article class="entity-showcase-card" data-entity-id="${item.id}" aria-label="Abrir detalhes de ${item.title}">
        <div class="entity-banner-box ${item.lightBorder ? 'light-border' : ''}">
          <img src="${item.image}" alt="${item.title}" />
        </div>
        <h3 class="entity-card-caption">${item.title}</h3>
      </article>
    `
    )
    .join('');

  grid.querySelectorAll('.entity-showcase-card').forEach((card) => {
    const id = card.getAttribute('data-entity-id');
    bindCardKeyboardActivation(card, () => openProjectDetail(id));
  });
}

function updateCategoryPaginationUI() {
  document.querySelectorAll('.cat-page-btn').forEach((btn) => {
    const pageNum = Number(btn.getAttribute('data-cat-page'));
    const isActive = pageNum === currentCategoryPage;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-current', isActive ? 'page' : 'false');
  });
}

/* =========================================================
   ROTEADOR ENTRE PÁGINA COM FINANCIAMENTO vs. VITRINE INSTITUCIONAL
   ========================================================= */
function openProjectDetail(projectId) {
  if (currentView !== 'detail' && currentView !== 'entity-profile') {
    previousView = currentView;
  }

  const project = PROJECTS_CATALOG.find((p) => p.id === projectId) || PROJECTS_CATALOG[0];
  activeProject = project;

  if (project.requiresFunding === false) {
    openEntityInstitutionalProfile(project);
    return;
  }

  activeCampaignTab = 'campanha';

  const backBtn = document.getElementById('backFromDetailBtn');
  if (previousView === 'category') {
    backBtn.innerHTML = `&larr; Voltar para ${CATEGORY_TITLES[activeCategorySlug] || 'Entidades'}`;
  } else {
    backBtn.innerHTML = '&larr; Voltar à página inicial';
  }

  document.getElementById('detailTitle').innerHTML = project.title;
  document.getElementById('detailSubtitle').innerHTML = project.subtitle;
  const mainImg = document.getElementById('detailMainImg');
  mainImg.src = project.image;
  mainImg.alt = project.title;
  document.getElementById('detailLeadDesc').innerHTML = project.fullDesc;

  document.getElementById('detailBadgeLabel').textContent = project.badgeLabel;
  updateFundingSidebarUI(project);

  document.getElementById('faqCountBadge').textContent = project.faqsCount;
  document.getElementById('updatesCountBadge').textContent = project.updatesCount;
  document.getElementById('commentsCountBadge').textContent = project.commentsCount;

  document.querySelectorAll('.campaign-tab').forEach((tab) => {
    const isCampaign = tab.getAttribute('data-tab') === 'campanha';
    tab.classList.toggle('active', isCampaign);
    tab.setAttribute('aria-selected', String(isCampaign));
  });

  renderCampaignTabContent();
  renderSimilarProjects(project.id);
  switchView('detail', true);
}

/* =========================================================
   VISÃO 3B: PÁGINA INSTITUCIONAL (SEM APOIO FINANCEIRO)
   ========================================================= */
function openEntityInstitutionalProfile(entity) {
  const backBtn = document.getElementById('backFromProfileBtn');
  if (previousView === 'category') {
    backBtn.innerHTML = `&larr; Voltar para ${CATEGORY_TITLES[activeCategorySlug] || 'Entidades'}`;
  } else {
    backBtn.innerHTML = '&larr; Voltar à página inicial';
  }

  const bannerImg = document.getElementById('entityFullBannerImg');
  bannerImg.src = entity.heroBannerImage || entity.image;
  bannerImg.alt = `Banner institucional ${entity.title}`;

  const emblemMarkup = entity.emblemSvg || ENTITY_EMBLEMS.researchDefault;
  document.getElementById('entityProfileAvatar').innerHTML = emblemMarkup;
  document.getElementById('entityProfileTitle').innerHTML = entity.title;

  const paragraphs = entity.bioParagraphs || [entity.fullDesc || entity.shortDesc];
  document.getElementById('entityProfileBio').innerHTML = paragraphs
    .map((text) => `<p>${text}</p>`)
    .join('');

  const highlightsGrid = document.getElementById('entityHighlightsGrid');
  const highlights = entity.highlights || [];
  document.querySelector('.entity-highlights-section').hidden = highlights.length === 0;

  highlightsGrid.innerHTML = highlights
    .map(
      (item, index) => `
      <article class="highlight-card" data-highlight-index="${index}" aria-label="Abrir destaque: ${item.title}">
        <div class="highlight-thumb-wrap">
          <img src="${item.image}" alt="${item.title}" class="highlight-thumb" />
        </div>
        <div class="highlight-card-body">
          <div class="highlight-mini-avatar" aria-hidden="true">${emblemMarkup}</div>
          <div>
            <h3 class="highlight-card-title">${item.title}</h3>
            <p class="highlight-card-meta">${item.meta}</p>
          </div>
        </div>
      </article>
    `
    )
    .join('');

  highlightsGrid.querySelectorAll('.highlight-card').forEach((card) => {
    const idx = Number(card.getAttribute('data-highlight-index'));
    bindCardKeyboardActivation(card, () => openHighlightModal(entity, highlights[idx]));
  });

  switchView('entity-profile', true);
}

function openHighlightModal(entity, highlight) {
  if (!highlight) return;
  const modal = document.getElementById('highlightModal');
  const img = document.getElementById('highlightModalImg');
  img.src = highlight.image;
  img.alt = highlight.title;
  document.getElementById('highlightModalMeta').textContent = `${entity.title} • ${highlight.meta}`;
  document.getElementById('highlightModalTitle').textContent = highlight.title;
  document.getElementById('highlightModalBody').textContent = highlight.detailBody;
  openAccessibleModal(modal);
}

/* =========================================================
   VISÃO 3A: FUNÇÕES DA PÁGINA COM FINANCIAMENTO
   ========================================================= */
function updateFundingSidebarUI(project) {
  const percentage = Math.min(Math.round((project.raised / project.goal) * 100), 100);
  document.getElementById('detailRaisedAmount').textContent = formatBRL(project.raised);
  document.getElementById('detailGoalText').textContent = `de uma meta de ${formatBRL(project.goal)}`;
  document.getElementById('detailProgressFill').style.width = `${percentage}%`;
  document.getElementById('detailProgressBar').setAttribute('aria-valuenow', String(percentage));
  document.getElementById('detailBackersCount').textContent = project.backers;
  document.getElementById('detailDaysLeft').textContent = project.daysLeft;
  document.getElementById('detailDeadlineText').innerHTML = `Este projeto será financiado até o dia <strong>${project.deadline}</strong>, às 23h59 (horário de Brasília).`;
}

function renderCampaignTabContent() {
  const panel = document.getElementById('campaignTabContent');
  const p = activeProject;

  if (activeCampaignTab === 'campanha') {
    panel.innerHTML = `
      <h2 class="story-heading">${p.storyHeading}</h2>
      <p class="story-paragraph">${p.storyBody}</p>
      <div class="story-secondary-img-wrap">
        <img src="${p.secondaryImage}" alt="Registro complementar de ${p.title}" class="story-secondary-img" />
      </div>
    `;
    return;
  }

  if (activeCampaignTab === 'recompensas') {
    panel.innerHTML = `
      <h2 class="story-heading">Recompensas e Contrapartidas Acadêmicas</h2>
      <div class="tab-cards-stack">
        <div class="info-box-card">
          <span class="info-box-meta">Apoio a partir de R$ 25</span>
          <h3>Agradecimento Oficial na Publicação</h3>
          <p>Seu nome incluído na seção de apoiadores da página e nos relatórios digitais divulgados pela equipe da UFABC.</p>
        </div>
        <div class="info-box-card">
          <span class="info-box-meta">Apoio a partir de R$ 75</span>
          <h3>Caderno Técnico & Resumo Executivo Ilustrado</h3>
          <p>Acesso antecipado aos resultados e entregas técnicas em formato digital.</p>
        </div>
        <div class="info-box-card">
          <span class="info-box-meta">Apoio a partir de R$ 200</span>
          <h3>Visita Guiada ao Laboratório / Sede da Entidade na UFABC</h3>
          <p>Encontro presencial com a equipe nos campi de Santo André ou São Bernardo do Campo.</p>
        </div>
      </div>
    `;
    return;
  }

  if (activeCampaignTab === 'criador') {
    panel.innerHTML = `
      <h2 class="story-heading">Sobre a Equipe e Responsáveis</h2>
      <div class="info-box-card">
        <span class="info-box-meta">Vinculação Institucional • UFABC</span>
        <h3>${p.author}</h3>
        <p>Iniciativa cadastrada e validada na vitrine acadêmica UFCROWD. Os recursos e apoios recebidos são destinados integralmente à execução das atividades estudantis e laboratoriais.</p>
      </div>
    `;
    return;
  }

  if (activeCampaignTab === 'faq') {
    panel.innerHTML = `
      <h2 class="story-heading">Perguntas frequentes</h2>
      <div class="tab-cards-stack">
        <div class="info-box-card">
          <h3>Como os recursos financeiros são utilizados?</h3>
          <p>Todo o valor arrecadado é aplicado na aquisição de insumos laboratoriais, componentes técnicos, materiais didáticos e participação em eventos científicos.</p>
        </div>
        <div class="info-box-card">
          <h3>Como participar dos processos seletivos ou colaborar?</h3>
          <p>Acompanhe as datas de abertura na página da entidade ou clique em "Salvar projeto" para receber notificações.</p>
        </div>
      </div>
    `;
    return;
  }

  if (activeCampaignTab === 'atualizacoes') {
    panel.innerHTML = `
      <h2 class="story-heading">Atualizações</h2>
      <div class="tab-cards-stack">
        <div class="info-box-card">
          <span class="info-box-meta">Atualização #3 • Novembro de 2026</span>
          <h3>Meta parcial atingida com apoio da comunidade UFABC!</h3>
          <p>Agradecemos a todos os apoiadores que estão tornando esta iniciativa possível.</p>
        </div>
      </div>
    `;
    return;
  }

  if (activeCampaignTab === 'comentarios') {
    panel.innerHTML = `
      <h2 class="story-heading">Comentários da Comunidade (${p.commentsCount})</h2>
      <div class="tab-cards-stack">
        <div class="info-box-card">
          <span class="info-box-meta">Mariana Costa • Discente BC&T</span>
          <p>Iniciativa fundamental para fortalecer as entidades e pesquisas da UFABC!</p>
        </div>
      </div>
    `;
    return;
  }

  panel.innerHTML = `
    <h2 class="story-heading">Comunidade de Apoiadores</h2>
    <div class="info-box-card">
      <span class="info-box-meta">${p.backers} pessoas apoiando esta iniciativa</span>
      <h3>Rede colaborativa UFABC e Sociedade</h3>
      <p>Estudantes, docentes, técnicos administrativos e egressos participam ativamente do fortalecimento deste projeto.</p>
    </div>
  `;
}

function renderSimilarProjects(excludeId) {
  const grid = document.getElementById('similarProjectsGrid');
  const similar = PROJECTS_CATALOG.filter((p) => p.id !== excludeId).slice(0, 3);

  grid.innerHTML = similar
    .map(
      (item) => `
      <article class="similar-card" data-similar-id="${item.id}" aria-label="Abrir projeto similar: ${item.title}">
        <div class="similar-thumb-wrap">
          <img src="${item.image}" alt="${item.title}" class="similar-thumb" />
        </div>
        <h3 class="similar-card-title">${item.title}</h3>
        <p class="similar-card-author">Feito por ${item.author}</p>
      </article>
    `
    )
    .join('');

  grid.querySelectorAll('.similar-card').forEach((card) => {
    const id = card.getAttribute('data-similar-id');
    bindCardKeyboardActivation(card, () => openProjectDetail(id));
  });
}

function showToast(message) {
  const toast = document.getElementById('toastNotification');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* =========================================================
   LOGIN E CADASTRO DA ENTIDADE
   ========================================================= */
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function nameFromEmail(email) {
  return email
    .split('@')[0]
    .split(/[._-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function updateAuthUI() {
  const loggedIn = Boolean(currentUser);
  document.getElementById('openLoginBtn').hidden = loggedIn;
  document.getElementById('registerEntityBtn').hidden = !loggedIn;
  document.getElementById('logoutBtn').hidden = !loggedIn;
  const chip = document.getElementById('userChip');
  chip.hidden = !loggedIn;
  chip.textContent = loggedIn ? `Olá, ${currentUser.name.split(' ')[0]}` : '';
}

function openEntityRegister() {
  if (!currentUser) return;
  document.getElementById('registerOwner').textContent =
    `Cadastro feito por ${currentUser.name} (${currentUser.email}).`;
  const email = document.getElementById('entEmail');
  if (!email.value) email.value = currentUser.email;
  switchView('entity-register', true);
}

function setFieldError(field, message) {
  const wrap = field.closest('.form-field');
  let err = wrap.querySelector('.field-error');
  if (!err && message) {
    err = document.createElement('p');
    err.className = 'field-error';
    err.id = `${field.id}Err`;
    wrap.appendChild(err);
  }
  if (!err) return;
  err.textContent = message;
  err.hidden = !message;
  field.setAttribute('aria-invalid', String(Boolean(message)));
  const ids = (field.getAttribute('aria-describedby') || '').split(' ').filter((id) => id && id !== err.id);
  if (message) ids.push(err.id);
  if (ids.length) field.setAttribute('aria-describedby', ids.join(' '));
  else field.removeAttribute('aria-describedby');
}

function validateField(field) {
  const v = field.validity;
  let message = '';
  if (v.valueMissing) {
    message =
      field.type === 'checkbox'
        ? 'Marque esta declaração para concluir o cadastro.'
        : field.tagName === 'SELECT'
        ? 'Escolha uma das opções.'
        : 'Preencha este campo.';
  } else if (v.typeMismatch) {
    message =
      field.type === 'email'
        ? 'Use um e-mail completo, como contato@entidade.com.br.'
        : 'Use um endereço completo, começando com https://.';
  } else if (v.tooShort) {
    message = `Escreva pelo menos ${field.minLength} caracteres. Você escreveu ${field.value.length}.`;
  } else if (v.rangeUnderflow) {
    message = field.type === 'date' ? 'Escolha uma data a partir de amanhã.' : `A meta mínima é R$ ${field.min}.`;
  } else if (v.badInput || v.stepMismatch) {
    message = field.type === 'date' ? 'Informe uma data válida.' : 'Use um valor inteiro, sem centavos.';
  }
  setFieldError(field, message);
  return !message;
}

function syncFundingFields() {
  const funded = document.querySelector('input[name="entFunding"]:checked').value === 'yes';
  ['fundingGoalField', 'fundingDeadlineField'].forEach((id) => {
    const wrap = document.getElementById(id);
    const input = wrap.querySelector('input');
    wrap.hidden = !funded;
    input.disabled = !funded;
    input.required = funded;
    if (!funded) {
      input.value = '';
      setFieldError(input, '');
    }
  });
  if (funded) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.getElementById('entDeadline').min = tomorrow.toLocaleDateString('sv-SE'); // AAAA-MM-DD, horário local
  }
}

function resetRegisterForm() {
  const form = document.getElementById('entityRegisterForm');
  form.reset();
  form.querySelectorAll('input, select, textarea').forEach((f) => setFieldError(f, ''));
  syncFundingFields();
}

// Arte gerada para entidades cadastradas: emblema (círculo com iniciais) e banner verde
function buildEntityEmblem(initials) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
    <circle cx="60" cy="60" r="52" fill="#eef6f3" stroke="#2e7d63" stroke-width="4"/>
    <text x="60" y="72" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="800" fill="#2e7d63" text-anchor="middle">${initials}</text>
  </svg>`;
}

function buildEntityBanner(initials, label) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340">
    <rect width="1200" height="340" fill="#215e4a"/>
    <circle cx="600" cy="124" r="68" fill="#eef6f3" stroke="#399e7b" stroke-width="5"/>
    <text x="600" y="140" font-family="Inter, Arial, sans-serif" font-size="46" font-weight="800" fill="#2e7d63" text-anchor="middle">${initials}</text>
    <text x="600" y="262" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="1.5">${label}</text>
  </svg>`;
}

function buildEntityFromForm() {
  const val = (id) => document.getElementById(id).value.trim();
  const name = val('entName');
  const words = name.split(/\s+/).filter((w) => w.length > 2);
  const initials = escapeHtml(
    words.length ? words.slice(0, 3).map((w) => w.charAt(0).toUpperCase()).join('') : name.slice(0, 2).toUpperCase()
  );
  const label = escapeHtml(name.length > 40 ? `${name.slice(0, 39)}…` : name);

  const emblem = buildEntityEmblem(initials);
  const banner = svgToDataUri(buildEntityBanner(initials, label));

  const contact = [val('entEmail'), val('entPhone'), val('entLink')].filter(Boolean).map(escapeHtml).join(' • ');
  const bio = val('entBio').split(/\n+/).filter(Boolean).map(escapeHtml);

  const funded = document.querySelector('input[name="entFunding"]:checked').value === 'yes';
  const entity = {
    id: `${name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${Date.now().toString(36)}`,
    requiresFunding: funded,
    featured: false,
    homePage: 0,
    category: val('entType'),
    categoryPage: 1,
    contentType: 'eventos',
    objective: val('entObjective'),
    period: '7d',
    lightBorder: false,
    author: `${escapeHtml(name)} • UFABC`,
    title: escapeHtml(name),
    subtitle: escapeHtml(val('entTagline')),
    shortDesc: escapeHtml(val('entTagline')),
    fullDesc: bio.join(' '),
    image: banner,
    heroBannerImage: banner,
    emblemSvg: emblem,
    bioParagraphs: [...bio, `Contato: ${contact}`],
    highlights: [],
    registeredBy: currentUser.email
  };

  if (funded) {
    const end = new Date(`${val('entDeadline')}T23:59:00`);
    const typeLabels = { entidades: 'Entidade Estudantil', atleticas: 'Atlética', extensao: 'Projeto de Extensão' };
    Object.assign(entity, {
      badgeLabel: typeLabels[entity.category],
      goal: Number(val('entGoal')),
      raised: 0,
      backers: 0,
      daysLeft: Math.max(1, Math.ceil((end - new Date()) / 86400000)),
      deadline: end.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' }),
      storyHeading: 'Sobre a entidade',
      storyBody: entity.bioParagraphs.join(' '),
      secondaryImage: banner,
      faqsCount: 0,
      updatesCount: 0,
      commentsCount: 0
    });
  }
  return entity;
}

function handleEntityRegisterSubmit(e) {
  e.preventDefault();
  const fields = Array.from(e.currentTarget.querySelectorAll('input, select, textarea'));
  const invalid = fields.filter((f) => !f.disabled && !validateField(f));
  if (invalid.length > 0) {
    invalid[0].focus();
    showToast(invalid.length === 1 ? 'Corrija 1 campo para continuar.' : `Corrija ${invalid.length} campos para continuar.`);
    return;
  }

  const entity = buildEntityFromForm();
  PROJECTS_CATALOG.unshift(entity);
  resetRegisterForm();
  openCategoryView(entity.category);
  openProjectDetail(entity.id);
  showToast('Entidade cadastrada! Esta é a página que o público vai ver.');
}

/* =========================================================
   INICIALIZAÇÃO E EVENTOS
   ========================================================= */
/* Navegação: skip link, logo, botões voltar e menu de categorias */
function initNavigation() {
  // Skip Link para pular diretamente ao título principal da visão ativa
  document.getElementById('skipToContentLink').addEventListener('click', (e) => {
    e.preventDefault();
    if (currentView === 'home') {
      document.getElementById('newsHeading').focus();
    } else if (currentView === 'category') {
      document.getElementById('categoryPageTitle').focus();
    } else if (currentView === 'entity-register') {
      document.getElementById('registerTitle').focus();
    } else if (currentView === 'entity-profile') {
      document.getElementById('entityProfileTitle').focus();
    } else {
      document.getElementById('detailTitle').focus();
    }
  });
  // Logo e links para voltar à Home
  document.getElementById('brandHomeLink').addEventListener('click', (e) => {
    e.preventDefault();
    showHomeView(true);
  });

  document.querySelectorAll('.footer-home-trigger').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showHomeView(true);
    });
  });
  // Botões voltar nas telas de detalhes (Financiamento e Institucional)
  const handleBackNavigation = () => {
    if (previousView === 'category') {
      switchView('category', true);
    } else {
      showHomeView(true);
    }
  };

  document.getElementById('backFromDetailBtn').addEventListener('click', handleBackNavigation);
  document.getElementById('backFromProfileBtn').addEventListener('click', handleBackNavigation);
  // Cliques nas categorias do menu superior
  document.querySelectorAll('.cat-link').forEach((btn) => {
    btn.addEventListener('click', () => {
      const slug = btn.getAttribute('data-category');
      openCategoryView(slug);
    });
  });
}

/* Página de categoria: filtros laterais e paginação */
function initCategoryPage() {
  // Eventos dos filtros laterais da página de categoria
  document.querySelectorAll('.filter-type-checkbox, .filter-goal-checkbox').forEach((cb) => {
    cb.addEventListener('change', () => {
      currentCategoryPage = 1;
      updateCategoryPaginationUI();
      renderCategoryGrid();
    });
  });

  document.getElementById('filterPeriodSelect').addEventListener('change', () => {
    currentCategoryPage = 1;
    updateCategoryPaginationUI();
    renderCategoryGrid();
  });

  document.getElementById('clearFiltersBtn').addEventListener('click', () => {
    document.querySelectorAll('.filter-type-checkbox, .filter-goal-checkbox').forEach((cb) => {
      cb.checked = false;
    });
    document.getElementById('filterPeriodSelect').value = 'all';
    currentCategoryPage = 1;
    updateCategoryPaginationUI();
    renderCategoryGrid();
    showToast('Filtros limpos.');
  });
  // Paginação da página de categoria
  document.querySelectorAll('.cat-page-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      currentCategoryPage = Number(btn.getAttribute('data-cat-page'));
      updateCategoryPaginationUI();
      renderCategoryGrid();
    });
  });

  document.getElementById('catPrevPageBtn').addEventListener('click', () => {
    currentCategoryPage = currentCategoryPage > 1 ? currentCategoryPage - 1 : 3;
    updateCategoryPaginationUI();
    renderCategoryGrid();
  });

  document.getElementById('catNextPageBtn').addEventListener('click', () => {
    currentCategoryPage = currentCategoryPage < 3 ? currentCategoryPage + 1 : 1;
    updateCategoryPaginationUI();
    renderCategoryGrid();
  });
}

/* Página inicial: paginação e banner FAPESP */
function initHomePage() {
  // Paginação da página inicial
  document.querySelectorAll('.page-btn[data-page]').forEach((btn) => {
    btn.addEventListener('click', () => {
      currentHomePage = Number(btn.getAttribute('data-page'));
      updateHomePaginationUI();
      renderRecommendedProjects();
    });
  });

  document.getElementById('prevPageBtn').addEventListener('click', () => {
    currentHomePage = currentHomePage > 1 ? currentHomePage - 1 : 3;
    updateHomePaginationUI();
    renderRecommendedProjects();
  });

  document.getElementById('nextPageBtn').addEventListener('click', () => {
    currentHomePage = currentHomePage < 3 ? currentHomePage + 1 : 1;
    updateHomePaginationUI();
    renderRecommendedProjects();
  });
  // Banner FAPESP (mouse + teclado)
  bindCardKeyboardActivation(document.getElementById('newsBanner'), () => {
    showToast('Edital FAPESP 1º semestre 2027: consulte prazos na Pró-Reitoria de Pós-Graduação.');
  });
}

/* Abas internas da página de projeto com financiamento */
function initProjectTabs() {
  // Abas internas da página do projeto com financiamento
  document.querySelectorAll('.campaign-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.campaign-tab').forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      activeCampaignTab = tab.getAttribute('data-tab');
      renderCampaignTabContent();
    });
  });
}

/* Salvar, lembrar e compartilhar projeto (ambas as telas) */
function initProjectActions() {
  // Salvar projeto / Lembrar-me / Compartilhar (ambas as telas)
  document.getElementById('saveProjectBtn').addEventListener('click', (e) => {
    const btn = e.currentTarget;
    const isSaved = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', String(!isSaved));
    document.getElementById('saveProjectLabel').textContent = !isSaved ? 'Projeto salvo' : 'Salvar projeto';
    showToast(!isSaved ? 'Projeto adicionado aos seus salvos!' : 'Projeto removido dos salvos.');
  });

  document.getElementById('remindMeBtn').addEventListener('click', () => {
    showToast('Lembrete ativado! Você será notificado antes do encerramento da campanha.');
  });

  document.querySelectorAll('.mini-share-btn, .profile-share-circle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const channel = btn.getAttribute('data-share');
      showToast(`Link de compartilhamento (${channel}) copiado!`);
    });
  });
}

/* Modais de apoio, publicação e login, com ESC e focus trap */
function initModals() {
  // Modais (Apoio Financeiro, Publicação Institucional e Login)
  const supportModal = document.getElementById('supportModal');
  const highlightModal = document.getElementById('highlightModal');
  const loginModal = document.getElementById('loginModal');

  document.getElementById('openSupportModalBtn').addEventListener('click', () => {
    document.getElementById('supportModalProjectName').innerHTML = activeProject.title;
    openAccessibleModal(supportModal);
  });

  document.getElementById('barSupportBtn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('openSupportModalBtn').focus();
  });

  document.getElementById('closeSupportModal').addEventListener('click', () => {
    closeAccessibleModal(supportModal);
  });

  supportModal.addEventListener('click', (e) => {
    if (e.target === supportModal) closeAccessibleModal(supportModal);
  });

  document.getElementById('closeHighlightModal').addEventListener('click', () => {
    closeAccessibleModal(highlightModal);
  });

  highlightModal.addEventListener('click', (e) => {
    if (e.target === highlightModal) closeAccessibleModal(highlightModal);
  });

  document.getElementById('highlightModalActionBtn').addEventListener('click', () => {
    closeAccessibleModal(highlightModal);
    showToast('Redirecionando para o canal oficial da entidade na UFABC.');
  });

  document.querySelectorAll('.tier-btn').forEach((tierBtn) => {
    tierBtn.addEventListener('click', () => {
      document.querySelectorAll('.tier-btn').forEach((b) => b.classList.remove('active'));
      tierBtn.classList.add('active');
      document.getElementById('customSupportAmount').value = tierBtn.getAttribute('data-amount');
    });
  });

  document.getElementById('supportContributionForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = Number(document.getElementById('customSupportAmount').value) || 0;
    if (amount > 0) {
      activeProject.raised += amount;
      activeProject.backers += 1;
      updateFundingSidebarUI(activeProject);
      closeAccessibleModal(supportModal);
      showToast(`Obrigado! Apoio de ${formatBRL(amount)} registrado no protótipo.`);
    }
  });
  // Login modal
  document.getElementById('openLoginBtn').addEventListener('click', () => {
    openAccessibleModal(loginModal);
  });

  document.getElementById('closeLoginModal').addEventListener('click', () => {
    closeAccessibleModal(loginModal);
  });

  loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) closeAccessibleModal(loginModal);
  });

  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('ufabcEmail').value.trim();
    currentUser = { email, name: nameFromEmail(email) };
    e.currentTarget.reset();
    updateAuthUI();
    closeAccessibleModal(loginModal);
    showToast('Login institucional simulado com sucesso!');
    openEntityRegister(); // após o login, segue direto para o cadastro da entidade
  });
  // Gerenciamento global de teclado para Modais (ESC e Focus Trap)
  document.addEventListener('keydown', (e) => {
    const activeModal = !supportModal.hidden
      ? supportModal
      : !highlightModal.hidden
      ? highlightModal
      : !loginModal.hidden
      ? loginModal
      : null;

    if (!activeModal) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeAccessibleModal(activeModal);
      return;
    }

    if (e.key === 'Tab') {
      const focusables = getFocusableElements(activeModal);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  document.getElementById('downloadAppBtn').addEventListener('click', () => {
    showToast('Versão mobile UFCROWD (Android/iOS) em desenvolvimento.');
  });
}

/* Newsletter do rodapé */
function initNewsletter() {
  // Newsletter
  document.getElementById('newsletterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('newsletterEmail');
    const feedback = document.getElementById('newsletterFeedback');
    feedback.textContent = `E-mail ${input.value} cadastrado com sucesso!`;
    input.value = '';
  });
}

/* Cadastro da entidade e logout (após o login) */
function initEntityRegister() {
  // Cadastro da entidade (disponível após o login)
  const registerForm = document.getElementById('entityRegisterForm');
  document.getElementById('registerEntityBtn').addEventListener('click', openEntityRegister);
  document.getElementById('backFromRegisterBtn').addEventListener('click', () => showHomeView(true));
  document.getElementById('cancelRegisterBtn').addEventListener('click', () => showHomeView(true));
  registerForm.addEventListener('submit', handleEntityRegisterSubmit);
  registerForm.addEventListener('input', (e) => {
    if (e.target.getAttribute('aria-invalid') === 'true') validateField(e.target);
  });
  registerForm.addEventListener('change', (e) => {
    if (e.target.name === 'entFunding') syncFundingFields();
  });

  document.getElementById('logoutBtn').addEventListener('click', () => {
    currentUser = null;
    updateAuthUI();
    resetRegisterForm();
    if (currentView === 'entity-register') showHomeView(true);
    showToast('Você saiu da sua conta.');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedProject();
  renderRecommendedProjects();
  initAccessibilityMenu();

  enableHorizontalArrowNavigation('#primaryCategoryNav', '.cat-link');
  enableHorizontalArrowNavigation('#campaignTabsList', '.campaign-tab');

  initNavigation();
  initCategoryPage();
  initHomePage();
  initProjectTabs();
  initProjectActions();
  initModals();
  initNewsletter();
  initEntityRegister();
});
