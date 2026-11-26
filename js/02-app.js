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
let savedProjectIds = new Set();
let reminderProjectIds = new Set();

function readLocalStorageSet(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || '[]');
    return new Set(Array.isArray(value) ? value : []);
  } catch {
    return new Set();
  }
}

function writeLocalStorageSet(key, values) {
  try {
    localStorage.setItem(key, JSON.stringify(Array.from(values)));
    return true;
  } catch {
    return false;
  }
}

function deadlineToDate(deadlineText) {
  if (!deadlineText) return null;
  const months = {
    janeiro: 0, fevereiro: 1, março: 2, abril: 3, maio: 4, junho: 5,
    julho: 6, agosto: 7, setembro: 8, outubro: 9, novembro: 10, dezembro: 11
  };
  const match = String(deadlineText).match(/(\d{1,2})\s+de\s+([a-zçã]+)\s+de\s+(\d{4})/i);
  if (!match || months[match[2].toLowerCase()] === undefined) return null;
  return new Date(Number(match[3]), months[match[2].toLowerCase()], Number(match[1]), 23, 59, 59, 999);
}

function calculateDaysLeft(project) {
  const deadline = deadlineToDate(project?.deadline);
  if (!deadline) return Number(project?.daysLeft) || 0;
  return Math.max(0, Math.ceil((deadline.getTime() - Date.now()) / 86400000));
}

function initLocalPrototypeState() {
  savedProjectIds = readLocalStorageSet('ufcrowd:saved-projects');
  reminderProjectIds = readLocalStorageSet('ufcrowd:reminders');
  try {
    const savedEntities = JSON.parse(localStorage.getItem('ufcrowd:registered-entities') || '[]');
    if (Array.isArray(savedEntities)) {
      savedEntities.forEach((entity) => {
        if (entity?.id && !PROJECTS_CATALOG.some((item) => item.id === entity.id)) PROJECTS_CATALOG.unshift(entity);
      });
    }
  } catch {
    // Armazenamento local indisponível ou corrompido: o protótipo segue com o catálogo original.
  }
  PROJECTS_CATALOG.forEach((project) => {
    if (project.requiresFunding) {
      project.daysLeft = calculateDaysLeft(project);
      if (project.goal > 0) project.fundedPercent = Math.round((Number(project.raised) / Number(project.goal)) * 100);
    }
  });
}

function makeImageFallback() {
  return svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
      <rect width="800" height="500" fill="#e8f0eb"/>
      <path d="M-40 390 Q160 260 360 390 T840 350" fill="none" stroke="#b6c9bd" stroke-width="24"/>
      <circle cx="620" cy="120" r="80" fill="#d1e0d6"/>
      <rect x="270" y="150" width="260" height="200" rx="22" fill="#f7f4ec" stroke="#54765e" stroke-width="12"/>
      <path d="M330 220h140M330 260h110M330 300h90" stroke="#54765e" stroke-width="14" stroke-linecap="round"/>
      <text x="400" y="430" font-family="Arial,sans-serif" font-size="28" fill="#315d3b" text-anchor="middle">Imagem ilustrativa</text>
    </svg>
  `);
}

function initImageFallbacks() {
  const fallbackSrc = makeImageFallback();
  document.addEventListener('error', (event) => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement) || image.dataset.fallbackApplied) return;
    image.dataset.fallbackApplied = 'true';
    image.src = fallbackSrc;
  }, true);
}

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

  const days = calculateDaysLeft(item);
  const funded = item.goal > 0 ? Math.round((Number(item.raised) / Number(item.goal)) * 100) : Number(item.fundedPercent) || 0;

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

function enableHorizontalArrowNavigation(containerSelector, itemSelector, autoActivate = false) {
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
      if (autoActivate) items[nextIndex].click();
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

/* =========================================================
   HISTÓRICO E ROTAS (HASH ROUTER LEVE PARA O PROTÓTIPO)
   ========================================================= */
function routeHashFor(view, data = {}) {
  if (view === 'category') return `#categoria/${encodeURIComponent(data.category || activeCategorySlug)}`;
  if (view === 'detail') return `#projeto/${encodeURIComponent(data.projectId || activeProject?.id || '')}`;
  if (view === 'entity-profile') return `#entidade/${encodeURIComponent(data.projectId || activeProject?.id || '')}`;
  if (view === 'entity-register') return '#cadastro';
  return '#inicio';
}

function getRouteData() {
  return {
    view: currentView,
    category: activeCategorySlug,
    projectId: activeProject?.id || null,
    previousView,
    homePage: currentHomePage,
    categoryPage: currentCategoryPage,
    filters: {
      types: Array.from(document.querySelectorAll('.filter-type-checkbox:checked')).map((el) => el.value),
      goals: Array.from(document.querySelectorAll('.filter-goal-checkbox:checked')).map((el) => el.value),
      period: document.getElementById('filterPeriodSelect')?.value || 'all'
    }
  };
}

function commitRoute({ replace = false, parentHash = undefined } = {}) {
  const route = getRouteData();
  const hash = routeHashFor(route.view, route);
  const currentHash = window.location.hash || '#inicio';
  const inheritedParent = history.state?.ufcrowd ? history.state.parentHash : null;
  const state = {
    ufcrowd: true,
    route,
    parentHash: replace ? inheritedParent : (parentHash !== undefined ? parentHash : currentHash)
  };
  if (replace) history.replaceState(state, '', hash);
  else history.pushState(state, '', hash);
}

function updateRouteHistory({ replace = true } = {}) {
  if (!history.state?.ufcrowd) return;
  commitRoute({ replace });
}

function parseHashRoute(hash = window.location.hash) {
  const value = decodeURIComponent((hash || '').replace(/^#/, ''));
  if (!value || value === 'inicio' || value === 'home') return { view: 'home' };
  const [routeName, routeId] = value.split('/');
  if (routeName === 'categoria') return { view: 'category', category: routeId || 'entidades' };
  if (routeName === 'projeto') return { view: 'detail', projectId: routeId };
  if (routeName === 'entidade') return { view: 'entity-profile', projectId: routeId };
  if (routeName === 'cadastro') return { view: 'entity-register' };
  return { view: 'home' };
}

function restoreRoute(route = {}) {
  const view = route.view || 'home';
  if (route.homePage) currentHomePage = route.homePage;
  if (route.category) activeCategorySlug = route.category;
  if (route.categoryPage) currentCategoryPage = route.categoryPage;
  if (route.filters) {
    document.querySelectorAll('.filter-type-checkbox').forEach((el) => { el.checked = route.filters.types?.includes(el.value) || false; });
    document.querySelectorAll('.filter-goal-checkbox').forEach((el) => { el.checked = route.filters.goals?.includes(el.value) || false; });
    document.getElementById('filterPeriodSelect').value = route.filters.period || 'all';
  }
  previousView = route.previousView || 'home';

  if (view === 'category') {
    const slug = route.category || activeCategorySlug;
    if (CATEGORY_TITLES[slug]) openCategoryView(slug, { recordHistory: false, resetFilters: false, page: route.categoryPage || 1 });
    else showHomeView(false, { recordHistory: false });
  } else if (view === 'detail' || view === 'entity-profile') {
    const project = PROJECTS_CATALOG.find((p) => p.id === route.projectId);
    if (project) openProjectDetail(project.id, { recordHistory: false, previous: route.previousView || 'home' });
    else showHomeView(false, { recordHistory: false });
  } else if (view === 'entity-register') {
    // Cadastro é uma área protegida pelo login simulado; não abre por link direto.
    if (currentUser) openEntityRegister({ recordHistory: false });
    else showHomeView(false, { recordHistory: false });
  } else {
    showHomeView(false, { recordHistory: false });
  }
}

function initHistoryRouting() {
  const initialRoute = parseHashRoute();
  if (window.location.hash && initialRoute.view !== 'home') {
    restoreRoute(initialRoute);
    history.replaceState({ ufcrowd: true, route: getRouteData(), parentHash: null }, '', routeHashFor(currentView, getRouteData()));
  } else {
    showHomeView(false, { recordHistory: false });
    history.replaceState({ ufcrowd: true, route: getRouteData(), parentHash: null }, '', '#inicio');
  }

  window.addEventListener('popstate', (event) => {
    restoreRoute(event.state?.ufcrowd ? event.state.route : parseHashRoute());
  });
}

function navigateBack() {
  if (history.state?.ufcrowd && history.state.parentHash) {
    history.back();
    return;
  }
  if (previousView === 'category') openCategoryView(activeCategorySlug);
  else showHomeView();
}

function showHomeView(focusHeading = true, { recordHistory = true } = {}) {
  switchView('home', focusHeading);
  if (recordHistory) commitRoute();
}

function openCategoryView(categorySlug, { recordHistory = true, resetFilters = true, page = 1 } = {}) {
  activeCategorySlug = categorySlug;
  currentCategoryPage = page;
  if (resetFilters) {
    document.querySelectorAll('.filter-type-checkbox, .filter-goal-checkbox').forEach((el) => { el.checked = false; });
    document.getElementById('filterPeriodSelect').value = 'all';
  }
  document.getElementById('categoryPageTitle').textContent = CATEGORY_TITLES[categorySlug] || 'Entidades';
  renderCategoryGrid();
  switchView('category', true);
  if (recordHistory) commitRoute();
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

  const categoryItems = PROJECTS_CATALOG.filter((item) => item.category === activeCategorySlug);
  updateFilterCounts(categoryItems);
  let items = [...categoryItems];

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
  const pageCount = Math.max(1, Math.ceil(items.length / itemsPerPage));
  currentCategoryPage = Math.min(Math.max(1, currentCategoryPage), pageCount);
  const startIndex = (currentCategoryPage - 1) * itemsPerPage;
  const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

  countLabel.textContent =
    items.length === 1 ? '1 resultado encontrado' : `${items.length} resultados encontrados`;
  renderCategoryPagination(pageCount);

  if (paginatedItems.length === 0) {
    grid.innerHTML = `
      <div class="empty-filter-state">
        <p>Nenhum item corresponde aos filtros selecionados.</p>
        <p>Experimente remover um filtro ou limpar todos.</p>
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

function updateFilterCounts(categoryItems) {
  document.querySelectorAll('.filter-type-checkbox').forEach((checkbox) => {
    const count = categoryItems.filter((item) => item.contentType === checkbox.value).length;
    const pill = checkbox.closest('.filter-check-row')?.querySelector('.filter-count-pill');
    if (pill) pill.textContent = String(count);
    checkbox.disabled = count === 0;
    if (count === 0) checkbox.checked = false;
    checkbox.closest('.filter-check-row')?.classList.toggle('filter-option-unavailable', count === 0);
  });
}

function renderCategoryPagination(pageCount) {
  const nav = document.querySelector('.category-pagination');
  if (!nav) return;
  const previous = document.getElementById('catPrevPageBtn');
  const next = document.getElementById('catNextPageBtn');
  previous.disabled = currentCategoryPage <= 1;
  next.disabled = currentCategoryPage >= pageCount;
  nav.querySelectorAll('.cat-page-btn').forEach((button) => button.remove());

  const fragment = document.createDocumentFragment();
  for (let page = 1; page <= pageCount; page += 1) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `page-btn cat-page-btn${page === currentCategoryPage ? ' active' : ''}`;
    button.dataset.catPage = String(page);
    button.textContent = String(page);
    button.setAttribute('aria-label', `Página ${page}`);
    if (page === currentCategoryPage) button.setAttribute('aria-current', 'page');
    button.addEventListener('click', () => {
      currentCategoryPage = page;
      renderCategoryGrid();
      updateRouteHistory({ replace: true });
    });
    fragment.appendChild(button);
  }
  next.before(fragment);
}

/* =========================================================
   ROTEADOR ENTRE PÁGINA COM FINANCIAMENTO vs. VITRINE INSTITUCIONAL
   ========================================================= */
function openProjectDetail(projectId, { recordHistory = true, previous = null } = {}) {
  previousView = previous || currentView;

  const project = PROJECTS_CATALOG.find((p) => p.id === projectId);
  if (!project) {
    showToast('Não encontramos essa iniciativa. Voltando à página inicial.');
    showHomeView(false);
    return;
  }
  activeProject = project;

  if (project.requiresFunding === false) {
    openEntityInstitutionalProfile(project, { recordHistory });
    return;
  }

  activeCampaignTab = 'campanha';
  document.querySelectorAll('.campaign-tab').forEach((tab) => {
    const selected = tab.dataset.tab === 'campanha';
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
    tab.setAttribute('tabindex', selected ? '0' : '-1');
  });

  const backBtn = document.getElementById('backFromDetailBtn');
  if (previousView === 'category') {
    backBtn.innerHTML = `&larr; Voltar para ${CATEGORY_TITLES[activeCategorySlug] || 'Entidades'}`;
  } else if (previousView === 'detail') {
    backBtn.innerHTML = '&larr; Voltar ao projeto anterior';
  } else if (previousView === 'entity-profile') {
    backBtn.innerHTML = '&larr; Voltar à página institucional';
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

  document.getElementById('faqCountBadge').textContent = '2';
  document.getElementById('updatesCountBadge').textContent = '1';
  document.getElementById('commentsCountBadge').textContent = '1';

  document.querySelectorAll('.campaign-tab').forEach((tab) => {
    const isCampaign = tab.getAttribute('data-tab') === 'campanha';
    tab.classList.toggle('active', isCampaign);
    tab.setAttribute('aria-selected', String(isCampaign));
  });

  renderCampaignTabContent();
  renderSimilarProjects(project.id);
  switchView('detail', true);
  updateProjectActionsUI(project);
  if (recordHistory) commitRoute();
}

/* =========================================================
   VISÃO 3B: PÁGINA INSTITUCIONAL (SEM APOIO FINANCEIRO)
   ========================================================= */
function openEntityInstitutionalProfile(entity, { recordHistory = true } = {}) {
  const backBtn = document.getElementById('backFromProfileBtn');
  if (previousView === 'category') {
    backBtn.innerHTML = `&larr; Voltar para ${CATEGORY_TITLES[activeCategorySlug] || 'Entidades'}`;
  } else if (previousView === 'detail') {
    backBtn.innerHTML = '&larr; Voltar ao projeto anterior';
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
  updateProjectActionsUI(entity);
  if (recordHistory) commitRoute();
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
  project.daysLeft = calculateDaysLeft(project);
  const rawPercentage = project.goal > 0 ? Math.round((project.raised / project.goal) * 100) : 0;
  const percentage = Math.min(Math.max(rawPercentage, 0), 100);
  document.getElementById('detailRaisedAmount').textContent = formatBRL(project.raised);
  document.getElementById('detailGoalText').textContent = `de uma meta de ${formatBRL(project.goal)}`;
  document.getElementById('detailProgressFill').style.width = `${percentage}%`;
  document.getElementById('detailProgressBar').setAttribute('aria-valuenow', String(percentage));
  document.getElementById('detailProgressBar').setAttribute('aria-valuetext', `${percentage}% da meta${rawPercentage > 100 ? ' (meta ultrapassada)' : ''}`);
  document.getElementById('detailBackersCount').textContent = project.backers;
  document.getElementById('detailDaysLeft').textContent = Math.max(0, project.daysLeft);
  document.getElementById('detailDaysLeft').setAttribute('aria-label', project.daysLeft <= 0 ? 'Campanha encerrada' : `${project.daysLeft} dias restantes`);
  document.querySelector('#detailDaysLeft').closest('.metric-item').querySelector('.metric-label').textContent = project.daysLeft <= 0 ? 'campanha encerrada' : project.daysLeft === 1 ? 'dia restante' : 'dias restantes';
  document.getElementById('fundingStatusTitle').textContent = project.raised >= project.goal ? 'Meta' : 'Meta em';
  document.getElementById('fundingStatusLabel').textContent = project.raised >= project.goal ? 'atingida' : project.daysLeft <= 0 ? 'encerrada' : 'andamento';
  const supportButton = document.getElementById('openSupportModalBtn');
  supportButton.querySelector('span').textContent = project.daysLeft <= 0 ? 'Campanha encerrada' : project.raised >= project.goal ? 'Simular apoio adicional' : 'Simular apoio';
  supportButton.disabled = project.daysLeft <= 0;
  document.getElementById('barSupportBtn').disabled = project.daysLeft <= 0;
  document.getElementById('remindMeBtn').disabled = project.daysLeft <= 0;
  document.getElementById('detailProgressBar').setAttribute('aria-valuenow', String(percentage));
  document.getElementById('detailDeadlineText').innerHTML = project.daysLeft <= 0
    ? `Esta campanha foi encerrada em <strong>${project.deadline}</strong>.`
    : `Este projeto será financiado até o dia <strong>${project.deadline}</strong>, às 23h59 (horário de Brasília).`;
}

function renderCampaignTabContent() {
  const panel = document.getElementById('campaignTabContent');
  const p = activeProject;
  panel.setAttribute('aria-labelledby', `campaignTab-${activeCampaignTab}`);

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
      <p class="prototype-note">Exemplos demonstrativos de contrapartidas. As recompensas reais dependeriam de cada campanha.</p>
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
        <span class="info-box-meta">Perfil demonstrativo • UFABC</span>
        <h3>${p.author}</h3>
        <p>Perfil de responsável apresentado no protótipo. A validação institucional e a gestão de recursos não estão implementadas.</p>
      </div>
    `;
    return;
  }

  if (activeCampaignTab === 'faq') {
    panel.innerHTML = `
      <h2 class="story-heading">Perguntas frequentes — exemplos</h2>
      <p class="prototype-note">Estas respostas são exemplos do protótipo e não foram fornecidas por cada criador de campanha.</p>
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
      <h2 class="story-heading">Atualizações — exemplo</h2>
      <p class="prototype-note">Conteúdo demonstrativo. Não há publicação real de atualizações nesta versão.</p>
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
      <h2 class="story-heading">Comentários — exemplo</h2>
      <p class="prototype-note">Este comentário é demonstrativo; não existe sistema real de comentários.</p>
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
    <h2 class="story-heading">Comunidade de Apoiadores — demonstração</h2>
    <p class="prototype-note">Os números de apoiadores são dados de exemplo do catálogo.</p>
    <div class="info-box-card">
      <span class="info-box-meta">${p.backers} pessoas apoiando esta iniciativa</span>
      <h3>Rede colaborativa UFABC e Sociedade</h3>
      <p>Estudantes, docentes, técnicos administrativos e egressos participam ativamente do fortalecimento deste projeto.</p>
    </div>
  `;
}

function renderSimilarProjects(excludeId) {
  const grid = document.getElementById('similarProjectsGrid');
  const source = PROJECTS_CATALOG.find((p) => p.id === excludeId);
  const sameCategory = PROJECTS_CATALOG.filter((p) => p.id !== excludeId && p.category === source?.category);
  const similar = sameCategory.length >= 3
    ? sameCategory.slice(0, 3)
    : [...sameCategory, ...PROJECTS_CATALOG.filter((p) => p.id !== excludeId && p.category !== source?.category)].slice(0, 3);

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

function getCurrentShareUrl() {
  return window.location.href;
}

async function copyText(text) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // Fallback para contextos sem Clipboard API.
  }
  const field = document.createElement('textarea');
  field.value = text;
  field.setAttribute('readonly', '');
  field.style.position = 'fixed';
  field.style.opacity = '0';
  document.body.appendChild(field);
  field.select();
  let copied = false;
  try { copied = document.execCommand('copy'); } catch { copied = false; }
  field.remove();
  return copied;
}

function shareProject(channel) {
  const url = getCurrentShareUrl();
  const text = `${activeProject?.title || 'Projeto UFCROWD'} — conheça no UFCROWD`;
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);
  const destinations = {
    Facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    Twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
    X: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
    WhatsApp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
    'E-mail': `mailto:?subject=${encodedText}&body=${encodedUrl}`
  };
  if (destinations[channel] && !url.startsWith('file:')) {
    window.open(destinations[channel], '_blank', 'noopener,noreferrer');
    return;
  }
  copyText(url).then((copied) => showToast(copied ? 'Link do projeto copiado.' : 'Não foi possível copiar. Selecione e copie o endereço do navegador.'));
}

function updateProjectActionsUI(project = activeProject) {
  if (!project) return;
  const saveButton = document.getElementById('saveProjectBtn');
  if (saveButton) {
    const isSaved = savedProjectIds.has(project.id);
    saveButton.setAttribute('aria-pressed', String(isSaved));
    document.getElementById('saveProjectLabel').textContent = isSaved ? 'Projeto salvo' : 'Salvar projeto';
  }
  const reminderButton = document.getElementById('remindMeBtn');
  if (reminderButton) {
    const isReminded = reminderProjectIds.has(project.id);
    reminderButton.setAttribute('aria-pressed', String(isReminded));
    reminderButton.querySelector('span').textContent = isReminded ? 'Lembrete salvo' : 'Lembrar-me';
  }
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

function openEntityRegister({ recordHistory = true } = {}) {
  if (!currentUser) return;
  document.getElementById('registerOwner').textContent =
    `Cadastro feito por ${currentUser.name} (${currentUser.email}).`;
  const email = document.getElementById('entEmail');
  if (!email.value) email.value = currentUser.email;
  switchView('entity-register', true);
  if (recordHistory) commitRoute();
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
  let storageSaved = false;
  try {
    const registered = JSON.parse(localStorage.getItem('ufcrowd:registered-entities') || '[]');
    registered.unshift(entity);
    storageSaved = (localStorage.setItem('ufcrowd:registered-entities', JSON.stringify(registered)), true);
  } catch {
    storageSaved = false;
  }
  resetRegisterForm();
  openCategoryView(entity.category);
  openProjectDetail(entity.id);
  showToast(storageSaved
    ? 'Entidade cadastrada no protótipo e salva neste navegador.'
    : 'Entidade cadastrada temporariamente nesta sessão.');
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
  const handleBackNavigation = () => navigateBack();

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
  const filterToggle = document.getElementById('filtersToggleBtn');
  const filterBody = document.getElementById('filterPanelBody');
  if (filterToggle && filterBody) {
    filterToggle.addEventListener('click', () => {
      const expanded = filterToggle.getAttribute('aria-expanded') !== 'true';
      filterToggle.setAttribute('aria-expanded', String(expanded));
      filterBody.classList.toggle('filters-expanded', expanded);
      filterToggle.querySelector('span:first-child').textContent = expanded ? 'Ocultar filtros' : 'Mostrar filtros';
    });
  }

  // Eventos dos filtros laterais da página de categoria
  document.querySelectorAll('.filter-type-checkbox, .filter-goal-checkbox').forEach((cb) => {
    cb.addEventListener('change', () => {
      currentCategoryPage = 1;
      renderCategoryGrid();
      updateRouteHistory({ replace: true });
    });
  });

  document.getElementById('filterPeriodSelect').addEventListener('change', () => {
    currentCategoryPage = 1;
    renderCategoryGrid();
    updateRouteHistory({ replace: true });
  });

  document.getElementById('clearFiltersBtn').addEventListener('click', () => {
    document.querySelectorAll('.filter-type-checkbox, .filter-goal-checkbox').forEach((cb) => {
      cb.checked = false;
    });
    document.getElementById('filterPeriodSelect').value = 'all';
    currentCategoryPage = 1;
    renderCategoryGrid();
    updateRouteHistory({ replace: true });
    showToast('Filtros limpos.');
  });
  document.getElementById('catPrevPageBtn').addEventListener('click', () => {
    currentCategoryPage = Math.max(1, currentCategoryPage - 1);
    renderCategoryGrid();
    updateRouteHistory({ replace: true });
  });

  document.getElementById('catNextPageBtn').addEventListener('click', () => {
    const categoryCount = PROJECTS_CATALOG.filter((item) => item.category === activeCategorySlug).length;
    const pageCount = Math.max(1, Math.ceil(categoryCount / 6));
    currentCategoryPage = Math.min(pageCount, currentCategoryPage + 1);
    renderCategoryGrid();
    updateRouteHistory({ replace: true });
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
      updateRouteHistory({ replace: true });
    });
  });

  document.getElementById('prevPageBtn').addEventListener('click', () => {
    currentHomePage = currentHomePage > 1 ? currentHomePage - 1 : 3;
    updateHomePaginationUI();
    renderRecommendedProjects();
    updateRouteHistory({ replace: true });
  });

  document.getElementById('nextPageBtn').addEventListener('click', () => {
    currentHomePage = currentHomePage < 3 ? currentHomePage + 1 : 1;
    updateHomePaginationUI();
    renderRecommendedProjects();
    updateRouteHistory({ replace: true });
  });
  // O banner é um link externo real; mantém a ativação nativa por teclado.
  document.getElementById('newsBanner').addEventListener('click', () => {
    showToast('Abrindo a página oficial da FAPESP em outra aba.');
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
        t.setAttribute('tabindex', '-1');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      tab.setAttribute('tabindex', '0');
      activeCampaignTab = tab.getAttribute('data-tab');
      renderCampaignTabContent();
    });
  });
}

/* Salvar, lembrar e compartilhar projeto (ambas as telas) */
function initProjectActions() {
  // Salvar projeto / Lembrar-me / Compartilhar (ambas as telas)
  document.getElementById('saveProjectBtn').addEventListener('click', (e) => {
    const isSaved = savedProjectIds.has(activeProject.id);
    if (isSaved) savedProjectIds.delete(activeProject.id);
    else savedProjectIds.add(activeProject.id);
    const persisted = writeLocalStorageSet('ufcrowd:saved-projects', savedProjectIds);
    updateProjectActionsUI(activeProject);
    showToast(persisted
      ? (isSaved ? 'Projeto removido dos salvos neste navegador.' : 'Projeto salvo neste navegador.')
      : 'Estado atualizado apenas nesta sessão.');
  });

  document.getElementById('remindMeBtn').addEventListener('click', () => {
    const isReminded = reminderProjectIds.has(activeProject.id);
    if (isReminded) reminderProjectIds.delete(activeProject.id);
    else reminderProjectIds.add(activeProject.id);
    const persisted = writeLocalStorageSet('ufcrowd:reminders', reminderProjectIds);
    updateProjectActionsUI(activeProject);
    showToast(persisted
      ? (isReminded ? 'Lembrete removido deste navegador.' : 'Preferência de lembrete salva neste navegador. Não há notificações automáticas nesta versão.')
      : 'Preferência de lembrete atualizada apenas nesta sessão.');
  });

  document.querySelectorAll('.mini-share-btn, .profile-share-circle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const channel = btn.getAttribute('data-share');
      shareProject(channel);
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
    document.getElementById('customSupportAmount').value = '25';
    document.querySelectorAll('.tier-btn').forEach((button, index) => button.classList.toggle('active', index === 0));
    openAccessibleModal(supportModal);
  });

  document.getElementById('barSupportBtn').addEventListener('click', () => {
    document.getElementById('openSupportModalBtn').click();
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
    showToast('Este destaque não possui link externo cadastrado no protótipo.');
  });

  document.querySelectorAll('.tier-btn').forEach((tierBtn) => {
    tierBtn.addEventListener('click', () => {
      document.querySelectorAll('.tier-btn').forEach((b) => b.classList.remove('active'));
      tierBtn.classList.add('active');
      document.getElementById('customSupportAmount').value = tierBtn.getAttribute('data-amount');
    });
  });

  document.getElementById('customSupportAmount').addEventListener('input', () => {
    document.querySelectorAll('.tier-btn').forEach((button) => {
      button.classList.toggle('active', button.getAttribute('data-amount') === document.getElementById('customSupportAmount').value);
    });
  });

  document.getElementById('supportContributionForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = Number(document.getElementById('customSupportAmount').value) || 0;
    if (amount >= 5 && amount % 5 === 0) {
      activeProject.raised += amount;
      activeProject.backers += 1;
      updateFundingSidebarUI(activeProject);
      closeAccessibleModal(supportModal);
      showToast(`Apoio simulado de ${formatBRL(amount)} registrado nesta sessão.`);
    } else {
      document.getElementById('customSupportAmount').focus();
      showToast('Informe um valor mínimo de R$ 5, em múltiplos de R$ 5.');
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
    const domain = email.split('@')[1]?.toLowerCase() || '';
    if (domain !== 'ufabc.edu.br' && domain !== 'aluno.ufabc.edu.br') {
      showToast('Use um e-mail institucional da UFABC.');
      document.getElementById('ufabcEmail').focus();
      return;
    }
    currentUser = { email, name: nameFromEmail(email) };
    e.currentTarget.reset();
    updateAuthUI();
    closeAccessibleModal(loginModal);
    showToast('Acesso demonstrativo ativado. A autenticação não é real.');
  });
  document.getElementById('ufabcEmail').addEventListener('input', (e) => e.currentTarget.setCustomValidity(''));
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
    feedback.textContent = 'Demonstração: o e-mail não foi enviado nem armazenado.';
    input.value = '';
  });
}

function initFooterNavigation() {
  document.querySelectorAll('[data-footer-home]').forEach((button) => {
    button.addEventListener('click', () => showHomeView(true));
  });
  document.querySelectorAll('[data-footer-category]').forEach((button) => {
    button.addEventListener('click', () => openCategoryView(button.dataset.footerCategory));
  });
  ['footerA11yBtn', 'footerA11yLegalBtn'].forEach((id) => {
    const button = document.getElementById(id);
    if (!button) return;
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const popover = document.getElementById('a11yPopover');
      const openButton = document.getElementById('openA11yMenuBtn');
      if (popover.hidden) openButton.click();
      else document.getElementById('closeA11yMenuBtn').click();
    });
  });
  document.querySelectorAll('.share-site-btn').forEach((button) => {
    button.addEventListener('click', () => {
      copyText(getCurrentShareUrl()).then((copied) => showToast(copied ? 'Link do UFCROWD copiado.' : 'Não foi possível copiar o link.'));
    });
  });
}

/* Cadastro da entidade e logout (após o login) */
function initEntityRegister() {
  // Cadastro da entidade (disponível após o login)
  const registerForm = document.getElementById('entityRegisterForm');
  document.getElementById('registerEntityBtn').addEventListener('click', openEntityRegister);
  document.getElementById('backFromRegisterBtn').addEventListener('click', navigateBack);
  document.getElementById('cancelRegisterBtn').addEventListener('click', navigateBack);
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
  initLocalPrototypeState();
  initImageFallbacks();
  renderFeaturedProject();
  renderRecommendedProjects();
  initAccessibilityMenu();

  enableHorizontalArrowNavigation('#primaryCategoryNav', '.cat-link');
  enableHorizontalArrowNavigation('#campaignTabsList', '.campaign-tab', true);

  initNavigation();
  initCategoryPage();
  initHomePage();
  initProjectTabs();
  initProjectActions();
  initModals();
  initNewsletter();
  initFooterNavigation();
  initEntityRegister();
  initHistoryRouting();
});
