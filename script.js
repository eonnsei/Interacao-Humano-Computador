
/* =========================================================
   BANNERS VETORIAIS E EMBLEMAS DAS ENTIDADES DA UFABC
   ========================================================= */
function svgToDataUri(svgString) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svgString.trim())}`;
}
 
const ENTITY_EMBLEMS = {
  greenTeam: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <circle cx="60" cy="60" r="52" fill="#0d1b14" stroke="#22c55e" stroke-width="4"/>
      <path d="M35 84 C35 44, 85 44, 85 84 Z" fill="#14532d" stroke="#4ade80" stroke-width="3"/>
      <path d="M44 50 C52 28, 68 28, 76 50 L68 62 L52 62 Z" fill="#09150e" stroke="#4ade80" stroke-width="2.5"/>
      <polygon points="60,52 76,60 60,65 44,60" fill="#22c55e"/>
      <circle cx="53" cy="49" r="3" fill="#86efac"/>
      <circle cx="67" cy="49" r="3" fill="#86efac"/>
    </svg>
  `,
  gpda: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <circle cx="60" cy="60" r="52" fill="#111827"/>
      <g transform="translate(60,60) rotate(-28)">
        <ellipse cx="0" cy="0" rx="44" ry="15" fill="none" stroke="#ffffff" stroke-width="5"/>
        <circle cx="0" cy="0" r="22" fill="#111827" stroke="#ffffff" stroke-width="4.5"/>
        <polygon points="0,-34 7,-21 -7,-21" fill="#ffffff"/>
      </g>
    </svg>
  `,
  prisma: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <circle cx="60" cy="60" r="52" fill="#f5f3ff" stroke="#7c3aed" stroke-width="4"/>
      <polygon points="60,24 94,84 26,84" fill="none" stroke="#6d28d9" stroke-width="5" stroke-linejoin="round"/>
      <line x1="20" y1="62" x2="50" y2="54" stroke="#7c3aed" stroke-width="4"/>
      <line x1="72" y1="52" x2="100" y2="44" stroke="#ec4899" stroke-width="3.5"/>
      <line x1="75" y1="58" x2="102" y2="58" stroke="#10b981" stroke-width="3.5"/>
      <line x1="78" y1="64" x2="100" y2="72" stroke="#3b82f6" stroke-width="3.5"/>
    </svg>
  `,
  ejUfabc: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <circle cx="60" cy="60" r="52" fill="#0f172a" stroke="#38bdf8" stroke-width="4"/>
      <path d="M36 78 L60 32 L84 78" fill="none" stroke="#38bdf8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="44" y1="64" x2="76" y2="64" stroke="#facc15" stroke-width="5" stroke-linecap="round"/>
    </svg>
  `,
  researchDefault: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <circle cx="60" cy="60" r="52" fill="#eef6f3" stroke="#2e7d63" stroke-width="4"/>
      <circle cx="60" cy="40" r="14" fill="none" stroke="#2e7d63" stroke-width="4.5"/>
      <circle cx="46" cy="64" r="14" fill="none" stroke="#2e7d63" stroke-width="4.5"/>
      <circle cx="74" cy="64" r="14" fill="none" stroke="#2e7d63" stroke-width="4.5"/>
    </svg>
  `
};
 
const ENTITY_BANNERS = {
  greenTeam: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340">
      <rect width="1200" height="340" fill="#080c0a"/>
      <circle cx="600" cy="138" r="88" fill="none" stroke="#18b257" stroke-width="3.5" opacity="0.35"/>
      <path d="M535 204 C535 112, 665 112, 665 204 Z" fill="#0f2418" stroke="#22c55e" stroke-width="4.5"/>
      <path d="M558 132 C576 80, 624 80, 642 132 L626 156 L574 156 Z" fill="#0b1911" stroke="#22c55e" stroke-width="3.5"/>
      <polygon points="600,136 638,152 600,163 562,152" fill="#22c55e"/>
      <circle cx="585" cy="129" r="5.5" fill="#4ade80"/>
      <circle cx="615" cy="129" r="5.5" fill="#4ade80"/>
      <rect x="492" y="218" width="216" height="44" rx="6" fill="#166534" stroke="#4ade80" stroke-width="2.8"/>
      <text x="600" y="247" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="800" fill="#ecfdf5" text-anchor="middle" letter-spacing="1.5">GREEN TEAM</text>
    </svg>
  `),
  tamandutech: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 368">
      <defs>
        <linearGradient id="ttBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#17241c"/>
          <stop offset="100%" stop-color="#223529"/>
        </linearGradient>
      </defs>
      <rect width="640" height="368" fill="url(#ttBg)"/>
      <circle cx="320" cy="184" r="106" fill="#131c17" stroke="#6b7280" stroke-width="14" stroke-dasharray="28 12"/>
      <circle cx="320" cy="184" r="88" fill="#1b2a21" stroke="#4ade80" stroke-width="4"/>
      <path d="M268 158 L320 128 L372 158 L354 226 L320 245 L286 226 Z" fill="#2d3e35" stroke="#86efac" stroke-width="3.5"/>
      <polygon points="320,152 342,188 320,235 298,188" fill="#4ade80"/>
      <text x="320" y="70" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="2">TRACTIAN</text>
      <text x="320" y="328" font-family="Inter, Arial, sans-serif" font-size="31" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="2">TAMANDUTECH</text>
    </svg>
  `),
  scuderia: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 368">
      <rect width="640" height="368" fill="#22252a"/>
      <path d="M135 205 C195 148, 295 135, 365 135 C345 110, 355 82, 412 82 C448 82, 468 106, 465 134 C442 132, 422 138, 415 154 L465 154 C455 178, 425 186, 378 186 L245 186 C205 186, 168 194, 135 205 Z" fill="#ffffff"/>
      <path d="M115 224 C185 204, 275 198, 425 198 L405 212 C280 212, 195 216, 115 224 Z" fill="#ffffff"/>
      <text x="320" y="286" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="3">SCUDERIA UFABC</text>
    </svg>
  `),
  gpda: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340">
      <rect width="1200" height="340" fill="#0b0d10"/>
      <g transform="translate(600,150) rotate(-28)">
        <ellipse cx="0" cy="0" rx="115" ry="36" fill="none" stroke="#ffffff" stroke-width="11"/>
        <circle cx="0" cy="0" r="54" fill="#0b0d10" stroke="#ffffff" stroke-width="10"/>
        <path d="M-38 -14 Q0 16 38 -14" fill="none" stroke="#ffffff" stroke-width="9" stroke-linecap="round"/>
        <polygon points="0,-82 14,-53 -14,-53" fill="#ffffff"/>
      </g>
      <text x="600" y="294" font-family="Inter, Arial, sans-serif" font-size="26" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="4">GPDA • UFABC</text>
    </svg>
  `),
  harpia: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 368">
      <rect width="640" height="368" fill="#ffffff"/>
      <path d="M235 62 C275 58, 325 78, 345 112 C310 105, 282 112, 265 128 C295 122, 325 130, 340 148 C302 145, 278 155, 268 172 Z" fill="#facc15"/>
      <circle cx="332" cy="142" r="46" fill="none" stroke="#15803d" stroke-width="10"/>
      <path d="M312 135 C325 115, 355 118, 365 135 L344 144 L356 164 C332 166, 315 154, 312 135 Z" fill="#15803d"/>
      <text x="320" y="252" font-family="Inter, Arial, sans-serif" font-size="56" font-weight="800" fill="#15803d" text-anchor="middle" letter-spacing="3">HARPIA</text>
      <text x="320" y="282" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="600" fill="#4b5563" text-anchor="middle" letter-spacing="6">AERODESIGN</text>
      <text x="320" y="303" font-family="Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#15803d" text-anchor="middle" letter-spacing="3">UFABC</text>
    </svg>
  `),
  rocketDesign: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 368">
      <rect width="640" height="368" fill="#ffffff"/>
      <circle cx="320" cy="184" r="138" fill="#1e2952"/>
      <circle cx="320" cy="184" r="102" fill="#ffffff" stroke="#60a5fa" stroke-width="5"/>
      <path d="M320 98 C340 132, 344 175, 336 218 L304 218 C296 175, 300 132, 320 98 Z" fill="#1e2952"/>
      <polygon points="304,195 282,226 306,218" fill="#2563eb"/>
      <polygon points="336,195 358,226 334,218" fill="#2563eb"/>
      <circle cx="320" cy="154" r="10" fill="#93c5fd"/>
      <path d="M292 246 Q320 264 348 246" fill="none" stroke="#1e2952" stroke-width="6" stroke-linecap="round"/>
      <text x="320" y="72" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="1.5">UFABC ROCKET DESIGN</text>
    </svg>
  `)
};
 
const FORM_PREVIEW_THUMB = svgToDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300">
    <rect width="480" height="300" fill="#f1f5f9"/>
    <rect x="28" y="22" width="424" height="256" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
    <rect x="28" y="22" width="424" height="10" rx="4" fill="#2e7d63"/>
    <text x="52" y="66" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#0f172a">Inscrição PSEL 2027</text>
    <text x="52" y="92" font-family="Inter, Arial, sans-serif" font-size="12" fill="#64748b">Formulário oficial de processo seletivo UFABC</text>
    <line x1="52" y1="110" x2="428" y2="110" stroke="#e2e8f0" stroke-width="1.5"/>
    <text x="52" y="142" font-family="Inter, Arial, sans-serif" font-size="13" font-weight="600" fill="#1e293b">1. Qual o seu nome completo e RA?</text>
    <rect x="52" y="156" width="376" height="36" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="66" y="179" font-family="Inter, Arial, sans-serif" font-size="12" fill="#94a3b8">Insira sua resposta...</text>
    <rect x="52" y="214" width="118" height="34" rx="6" fill="#2e7d63"/>
    <text x="111" y="236" font-family="Inter, Arial, sans-serif" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle">Enviar</text>
  </svg>
`);
 
/* =========================================================
   CATÁLOGO UNIFICADO DE ENTIDADES E PROJETOS
   requiresFunding: true  -> Página de Financiamento Coletivo
   requiresFunding: false -> Página Institucional (Sem apoio financeiro)
   ========================================================= */
const PROJECTS_CATALOG = [
  {
    id: 'microplasticos',
    requiresFunding: true,
    featured: true,
    homePage: 0,
    category: 'pesquisas',
    categoryPage: 1,
    contentType: 'eventos',
    objective: 'academico',
    period: '30d',
    lightBorder: false,
    badgeLabel: 'Projeto Acadêmico',
    goalType: 'Visibilidade e Apoio',
    badgeText: 'LAB',
    badgeColor: '#2e7d63',
    author: 'Laboratório de Ecologia Aquática • UFABC',
    title: 'Microplásticos em Peixes: Uma Investigação Científica sobre a Poluição Aquática',
    subtitle: 'Evidências ecológicas de contaminação nos ecossistemas aquáticos.',
    meta: '21 days left • 795% funded',
    raised: 5250,
    goal: 10000,
    backers: 128,
    daysLeft: 21,
    deadline: '15 de dezembro de 2026',
    image: 'https://images.unsplash.com/photo-1534943441045-1009d7cb0bb9?auto=format&fit=crop&w=1000&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=1000&q=80',
    shortDesc:
      'Uma pesquisa desenvolvida por estudantes universitários investiga a presença de microplásticos em peixes de rios brasileiros. O estudo busca compreender como esses pequenos fragmentos de plástico chegam aos organismos aquáticos e quais podem ser suas consequências para o meio ambiente.',
    fullDesc:
      'Uma pesquisa desenvolvida por estudantes universitários investiga a presença de microplásticos em peixes de rios brasileiros. O estudo busca compreender como esses pequenos fragmentos de plástico chegam aos organismos aquáticos e quais podem ser suas consequências para o meio ambiente. Por meio da coleta e da análise de amostras, os pesquisadores pretendem identificar a frequência dessas partículas e investigar possíveis relações com a poluição das águas. Os resultados poderão contribuir para a conscientização da população sobre o descarte inadequado de resíduos e reforçar a importância de medidas para preservar os ecossistemas aquáticos.',
    storyHeading: 'Uma breve história sobre o projeto',
    storyBody:
      'A ideia surgiu da preocupação de um grupo de estudantes com os impactos da poluição plástica nos ecossistemas aquáticos. Durante os estudos, os pesquisadores perceberam que, apesar de sua dimensão quase invisível, os microplásticos representam um problema crescente para a biodiversidade e podem estar presentes em peixes consumidos pela população. A partir dessa inquietação, nasceu o projeto, que busca transformar uma questão ambiental em investigação científica. Agora, os estudantes procuram apoio para viabilizar as análises laboratoriais, ampliar a coleta de amostras e compartilhar os resultados com a sociedade.',
    faqsCount: 2,
    updatesCount: 3,
    commentsCount: 48
  },
  {
    id: 'green-team',
    requiresFunding: false,
    featured: false,
    homePage: 1,
    category: 'entidades',
    categoryPage: 1,
    contentType: 'processos',
    objective: 'academico',
    period: '7d',
    lightBorder: false,
    badgeLabel: 'Entidade Acadêmica',
    goalType: 'Visibilidade e Processos Seletivos',
    badgeText: 'GT',
    badgeColor: '#15803d',
    author: 'Green Team Hacker Club • UFABC',
    title: 'Green Team Hacker Club',
    subtitle: 'Segurança da informação, Capture The Flag (CTF) e cultura hacker ética na UFABC.',
    meta: 'Vitrine Institucional • Processos Seletivos',
    image: ENTITY_BANNERS.greenTeam,
    heroBannerImage: ENTITY_BANNERS.greenTeam,
    emblemSvg: ENTITY_EMBLEMS.greenTeam,
    bioParagraphs: [
      'O Green Team Hacker Club é a entidade acadêmica oficial dedicada à segurança da informação, privacidade digital e cultura hacker ética na Universidade Federal do ABC.',
      'Composta por estudantes de diversos cursos de graduação — como Ciência da Computação, Engenharia da Informação, Bacharelado em Ciência e Tecnologia (BC&T) e demais áreas interdisciplinares —, a entidade promove grupos de estudo, workshops abertos, análises de vulnerabilidades e representa a UFABC em competições nacionais e internacionais de Capture The Flag (CTF).'
    ],
    highlights: [
      {
        title: 'Inscrições abertas para o processo seletivo 2027',
        meta: 'Postado há 2 dias atrás',
        image: FORM_PREVIEW_THUMB,
        detailBody:
          'Estão abertas as inscrições para novos membros do Green Team Hacker Club! Não é necessário ter experiência prévia em cibersegurança: buscamos estudantes curiosos de todos os ingressos da UFABC interessados em redes, Linux, criptografia, web security e engenharia reversa.'
      },
      {
        title: 'Oficina aberta: Introdução a Linux, Redes e Web Hacking no campus Santo André',
        meta: 'Postado há 5 dias atrás',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80',
        detailBody:
          'Workshop prático gratuito aberto a toda a comunidade acadêmica. Abordaremos conceitos essenciais de terminal Linux, protocolos HTTP/HTTPS e análise de vulnerabilidades web em ambiente controlado.'
      },
      {
        title: 'Equipe da UFABC conquista pódio em competição universitária de CTF',
        meta: 'Postado há 6 dias atrás',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80',
        detailBody:
          'Os integrantes do Green Team representaram a UFABC na maratona nacional de Capture The Flag, solucionando desafios de criptografia, forense digital e exploração binária.'
      }
    ]
  },
  {
    id: 'tamandutech',
    requiresFunding: true,
    featured: false,
    homePage: 2,
    category: 'entidades',
    categoryPage: 1,
    contentType: 'premiacoes',
    objective: 'academico',
    period: '30d',
    lightBorder: false,
    badgeLabel: 'Entidade de Robótica',
    goalType: 'Apoio Financeiro e Patrocínio',
    badgeText: 'TT',
    badgeColor: '#166534',
    author: 'Tamandutech • Equipe de Robótica UFABC',
    title: 'Tamandutech',
    subtitle: 'Desenvolvimento de robôs de combate, sumô autônomo e seguidores de linha.',
    meta: '12 days left • 215% funded',
    raised: 12900,
    goal: 6000,
    backers: 158,
    daysLeft: 12,
    deadline: '04 de dezembro de 2026',
    image: ENTITY_BANNERS.tamandutech,
    secondaryImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80',
    shortDesc:
      'Equipe oficial de robótica competitiva da UFABC, premiada em torneios nacionais e internacionais de engenharia.',
    fullDesc:
      'A Tamandutech projeta, usina e programa robôs autônomos e radiocontrolados para competições como IronCup, Winter Challenge e RoboCore Experience. Os recursos custeiam motores brushless, baterias LiPo e usinagem de chassis.',
    storyHeading: 'Uma breve história sobre a entidade',
    storyBody:
      'Com dezenas de troféus conquistados, a Tamandutech integra alunos desde o primeiro quadrimestre do BC&T em projetos reais de mecânica, eletrônica e controle embarcado.',
    faqsCount: 4,
    updatesCount: 6,
    commentsCount: 41
  },
  {
    id: 'scuderia',
    requiresFunding: true,
    featured: false,
    homePage: 1,
    category: 'entidades',
    categoryPage: 1,
    contentType: 'premiacoes',
    objective: 'academico',
    period: '7d',
    lightBorder: false,
    badgeLabel: 'Entidade Automotiva',
    goalType: 'Apoio Financeiro e Patrocínio',
    badgeText: 'SCU',
    badgeColor: '#c97a16',
    author: 'Scuderia UFABC',
    title: 'Scuderia UFABC',
    subtitle: 'Da universidade às pistas: projeto e manufatura de protótipos Fórmula SAE.',
    meta: '5 days left • 3627% funded',
    raised: 18500,
    goal: 25000,
    backers: 214,
    daysLeft: 5,
    deadline: '28 de novembro de 2026',
    image: ENTITY_BANNERS.scuderia,
    secondaryImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=900&q=80',
    shortDesc:
      'Equipe de competição estudantil da UFABC dedicada ao projeto, manufatura e testes de protótipos automotivos de alta eficiência.',
    fullDesc:
      'A Scuderia UFABC reúne graduandos de diversas engenharias e cursos interdisciplinares para projetar, manufaturar e testar veículos protótipos de alta performance. O apoio financeiro viabiliza a compra de insumos de telemetria, componentes de suspensão e logística para as etapas nacionais.',
    storyHeading: 'Uma breve história sobre o projeto',
    storyBody:
      'Criada por estudantes apaixonados por mobilidade e engenharia aplicada, a Scuderia UFABC funciona como um laboratório prático de desenvolvimento de produto.',
    faqsCount: 4,
    updatesCount: 7,
    commentsCount: 62
  },
  {
    id: 'gpda',
    requiresFunding: false,
    featured: false,
    homePage: 3,
    category: 'entidades',
    categoryPage: 1,
    contentType: 'eventos',
    objective: 'academico',
    period: 'quad',
    lightBorder: false,
    badgeLabel: 'Entidade Aeroespacial',
    goalType: 'Visibilidade Institucional',
    badgeText: 'GPDA',
    badgeColor: '#1f2937',
    author: 'GPDA • UFABC',
    title: 'GPDA - Grupo de Pesquisa e Desenvolvimento Aeroespacial',
    subtitle: 'Foguetemodelismo, satélites educacionais (CubeSats) e divulgação científica.',
    meta: 'Vitrine Institucional • Eventos e Pesquisa',
    image: ENTITY_BANNERS.gpda,
    heroBannerImage: ENTITY_BANNERS.gpda,
    emblemSvg: ENTITY_EMBLEMS.gpda,
    bioParagraphs: [
      'O Grupo de Pesquisa e Desenvolvimento Aeroespacial (GPDA) é uma iniciativa estudantil da Universidade Federal do ABC voltada à pesquisa aplicada, divulgação científica e desenvolvimento de sistemas aeroespaciais.',
      'Reunindo graduandos de Engenharia Aeroespacial, Física, Ciência da Computação e Bacharelados Interdisciplinares, o grupo conduz estudos em astrodinâmica, satélites educacionais (CubeSats), aviônica e observações astronômicas abertas à comunidade.'
    ],
    highlights: [
      {
        title: 'Processo Seletivo GPDA 2027 — Frentes de Satélites e Divulgação Científica',
        meta: 'Postado há 3 dias atrás',
        image: FORM_PREVIEW_THUMB,
        detailBody:
          'Venha integrar as frentes de pesquisa e extensão do GPDA! As inscrições estão abertas para discentes de todos os cursos da UFABC interessados em engenharia espacial e astronomia.'
      },
      {
        title: 'Noite de Observação Astronômica aberta no campus Santo André',
        meta: 'Postado há 5 dias atrás',
        image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=900&q=80',
        detailBody:
          'Atividade gratuita com telescópios e bate-papo sobre exploração espacial, aberta a estudantes, servidores e moradores da região do Grande ABC.'
      },
      {
        title: 'Simpósio Aeroespacial UFABC reúne pesquisadores e egressos do setor',
        meta: 'Postado há 8 dias atrás',
        image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80',
        detailBody:
          'Palestras técnicas e mesas-redondas sobre lançadores orbitais, sensoriamento remoto e carreiras na indústria aeroespacial brasileira.'
      }
    ]
  },
  {
    id: 'harpia',
    requiresFunding: true,
    featured: false,
    homePage: 3,
    category: 'entidades',
    categoryPage: 1,
    contentType: 'processos',
    objective: 'academico',
    period: '30d',
    lightBorder: true,
    badgeLabel: 'Entidade AeroDesign',
    goalType: 'Apoio Técnico e Financeiro',
    badgeText: 'HAR',
    badgeColor: '#15803d',
    author: 'Harpia Aerodesign UFABC',
    title: 'Harpia Aerodesign',
    subtitle: 'Projeto e construção de aeronaves rádio-controladas para a competição SAE Brasil.',
    meta: '16 days left • 180% funded',
    raised: 10800,
    goal: 14000,
    backers: 119,
    daysLeft: 16,
    deadline: '09 de dezembro de 2026',
    image: ENTITY_BANNERS.harpia,
    secondaryImage: 'https://images.unsplash.com/photo-1559067515-bf7d799b6d4d?auto=format&fit=crop&w=900&q=80',
    shortDesc:
      'Concepção aerodinâmica, análise estrutural e construção de aeronave leve de alta carga útil.',
    fullDesc:
      'A Harpia Aerodesign representa a UFABC na competição nacional SAE Brasil AeroDesign, aplicando métodos de elementos finitos, ensaios em túnel de vento e manufatura em compósitos.',
    storyHeading: 'Uma breve história sobre a Harpia',
    storyBody:
      'Cada temporada desafia os estudantes a otimizar peso estrutural e sustentação aerodinâmica sob rigorosos requisitos técnicos.',
    faqsCount: 2,
    updatesCount: 3,
    commentsCount: 21
  },
  {
    id: 'rocket-design',
    requiresFunding: true,
    featured: false,
    homePage: 0,
    category: 'entidades',
    categoryPage: 1,
    contentType: 'eventos',
    objective: 'academico',
    period: 'quad',
    lightBorder: true,
    badgeLabel: 'Entidade de Foguetemodelismo',
    goalType: 'Apoio Financeiro e Visibilidade',
    badgeText: 'URD',
    badgeColor: '#1e2952',
    author: 'UFABC Rocket Design',
    title: 'UFABC Rocket Design',
    subtitle: 'Propulsão experimental, aviônica de recuperação e competições de foguetes.',
    meta: '20 days left • 155% funded',
    raised: 9300,
    goal: 6000,
    backers: 103,
    daysLeft: 20,
    deadline: '14 de dezembro de 2026',
    image: ENTITY_BANNERS.rocketDesign,
    secondaryImage: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=900&q=80',
    shortDesc:
      'Equipe dedicada ao desenvolvimento de minifoguetes de sondagem, sistemas de paraquedas e telemetria de voo.',
    fullDesc:
      'A UFABC Rocket Design projeta motores experimentais, fuselagens em fibra de vidro e computadores de bordo para apogeus de até 3 km em festivais nacionais.',
    storyHeading: 'Uma breve história sobre a UFABC Rocket Design',
    storyBody:
      'Com foco em segurança operacional e inovação tecnológica, a equipe capacita novos membros todos os quadrimestres.',
    faqsCount: 3,
    updatesCount: 4,
    commentsCount: 28
  },
  {
    id: 'prisma-ufabc',
    requiresFunding: false,
    featured: false,
    homePage: 0,
    category: 'entidades',
    categoryPage: 2,
    contentType: 'eventos',
    objective: 'social',
    period: '30d',
    lightBorder: false,
    badgeLabel: 'Coletivo Estudantil',
    goalType: 'Visibilidade e Acolhimento',
    badgeText: 'PRI',
    badgeColor: '#7c3aed',
    author: 'Coletivo Prisma • UFABC',
    title: 'Coletivo Prisma UFABC',
    subtitle: 'Acolhimento, diversidade, eventos culturais e permanência estudantil.',
    meta: 'Vitrine Institucional • Cultura e Acolhimento',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
    heroBannerImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80',
    emblemSvg: ENTITY_EMBLEMS.prisma,
    bioParagraphs: [
      'O Coletivo Prisma UFABC é uma organização estudantil voltada à promoção da diversidade, do acolhimento de ingressantes e da permanência estudantil nos campi de Santo André e São Bernardo do Campo.',
      'Por meio de rodas de conversa, mostras culturais, oficinas artísticas e redes de apoio mútuo, o coletivo constrói espaços seguros e integradores para toda a comunidade universitária.'
    ],
    highlights: [
      {
        title: 'Chamada aberta para novos organizadores e voluntários do Coletivo Prisma',
        meta: 'Postado há 2 dias atrás',
        image: FORM_PREVIEW_THUMB,
        detailBody:
          'Participe da organização das atividades culturais e de acolhimento do próximo quadrimestre na UFABC.'
      },
      {
        title: 'Mostra Cultural e Sarau Aberto no Piso Vermelho — Campus Santo André',
        meta: 'Postado há 4 dias atrás',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
        detailBody:
          'Apresentações musicais, poesia, exposição de artes visuais e feira de economia criativa produzidas por discentes da UFABC.'
      },
      {
        title: 'Guia de Acolhimento e Permanência Estudantil para ingressantes do BC&T e BC&H',
        meta: 'Postado há 7 dias atrás',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
        detailBody:
          'Material colaborativo com dicas sobre auxílios estudantis, transporte fretado, bibliotecas e entidades da universidade.'
      }
    ]
  },
  {
    id: 'axis-consultoria',
    requiresFunding: false,
    featured: false,
    homePage: 0,
    category: 'entidades',
    categoryPage: 2,
    contentType: 'processos',
    objective: 'academico',
    period: '7d',
    lightBorder: false,
    badgeLabel: 'Movimento Empresa Júnior',
    goalType: 'Processos Seletivos e Projetos',
    badgeText: 'EJ',
    badgeColor: '#0284c7',
    author: 'Núcleo de Empresas Juniores • UFABC',
    title: 'Núcleo de Empresas Juniores UFABC',
    subtitle: 'Vivência empresarial, consultoria tecnológica e impacto regional no ABC.',
    meta: 'Vitrine Institucional • Processos Seletivos',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
    heroBannerImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80',
    emblemSvg: ENTITY_EMBLEMS.ejUfabc,
    bioParagraphs: [
      'O Núcleo de Empresas Juniores da UFABC integra as associações civis sem fins lucrativos geridas exclusivamente por estudantes de graduação da universidade, com orientação docente.',
      'Atuando nas áreas de desenvolvimento de software, engenharia, biotecnologia, políticas públicas e gestão, as EJs conectam a formação interdisciplinar da UFABC às demandas reais de organizações da região do Grande ABC.'
    ],
    highlights: [
      {
        title: 'Processo Seletivo Unificado das Empresas Juniores UFABC 2027',
        meta: 'Postado há 1 dia atrás',
        image: FORM_PREVIEW_THUMB,
        detailBody:
          'Inscreva-se nas trilhas de Tecnologia, Engenharia, Negócios e Design e vivencie projetos reais desde os primeiros quadrimestres.'
      },
      {
        title: 'Feira de Empreendedorismo e Inovação Universitária no Grande ABC',
        meta: 'Postado há 5 dias atrás',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
        detailBody:
          'Encontro entre estudantes, startups incubadas e empresas da região para troca de experiências e networking.'
      },
      {
        title: 'Capacitação gratuita em Gestão Ágil e Desenvolvimento de Produto',
        meta: 'Postado há 9 dias atrás',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
        detailBody:
          'Workshop aberto ministrado por membros veteranos sobre Scrum, descoberta de produto e prototipação.'
      }
    ]
  },
  {
    id: 'biomarcadores',
    requiresFunding: true,
    featured: false,
    homePage: 1,
    category: 'pesquisas',
    categoryPage: 1,
    contentType: 'premiacoes',
    objective: 'academico',
    period: '30d',
    lightBorder: false,
    badgeLabel: 'Projeto Acadêmico',
    goalType: 'Apoio Laboratorial e Visibilidade',
    badgeText: 'BIO',
    badgeColor: '#8b2635',
    author: 'Núcleo de Biotecnologia • UFABC',
    title: 'Investigação de biomarcadores sanguíneos para a detecção precoce de doenças',
    subtitle: 'Triagem molecular rápida e acessível desenvolvida nos laboratórios da UFABC.',
    meta: '19 days left • 3900% funded',
    raised: 11700,
    goal: 15000,
    backers: 164,
    daysLeft: 19,
    deadline: '12 de dezembro de 2026',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80',
    shortDesc:
      'Estudo laboratorial focado na identificação de biomarcadores circulantes para triagem rápida e não invasiva.',
    fullDesc:
      'Esta linha de pesquisa investiga assinaturas bioquímicas presentes em amostras sanguíneas visando acelerar o diagnóstico precoce de doenças crônicas e metabólicas.',
    storyHeading: 'Uma breve história sobre o projeto',
    storyBody:
      'O grupo nasceu da colaboração entre discentes de Biotecnologia, Química e Ciência da Computação interessados em medicina translacional.',
    faqsCount: 3,
    updatesCount: 5,
    commentsCount: 31
  },
  {
    id: 'algoritmos-geneticos',
    requiresFunding: false,
    featured: false,
    homePage: 2,
    category: 'pesquisas',
    categoryPage: 1,
    contentType: 'processos',
    objective: 'academico',
    period: 'quad',
    lightBorder: false,
    badgeLabel: 'Pesquisa Acadêmica • CMCC',
    goalType: 'Visibilidade Científica',
    badgeText: 'IA',
    badgeColor: '#4c3b8a',
    author: 'João da Silva • CMCC UFABC',
    title: 'Usando algoritmos genéticos em redes neurais',
    subtitle: 'Otimização evolutiva de arquiteturas profundas aplicada à análise de imagens.',
    meta: 'Vitrine Científica • Iniciação Científica',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80',
    heroBannerImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
    emblemSvg: ENTITY_EMBLEMS.researchDefault,
    bioParagraphs: [
      'Projeto de Iniciação Científica desenvolvido no Centro de Matemática, Computação e Cognição (CMCC) da UFABC, focado na aplicação de algoritmos evolutivos para otimizar automaticamente hiperparâmetros e topologias de redes neurais profundas.',
      'A iniciativa dispensa captação financeira externa e utiliza a vitrine do UFCROWD para divulgar resultados parciais, repositórios de código aberto e selecionar novos colaboradores de graduação interessados em Aprendizado de Máquina.'
    ],
    highlights: [
      {
        title: 'Chamada para colaboradores de Iniciação Científica em Aprendizado de Máquina',
        meta: 'Postado há 3 dias atrás',
        image: FORM_PREVIEW_THUMB,
        detailBody:
          'Vagas para estudantes de Ciência da Computação e BC&T interessados em computação evolutiva, Python e PyTorch.'
      },
      {
        title: 'Apresentação de pôster no Simpósio de Iniciação Científica da UFABC',
        meta: 'Postado há 6 dias atrás',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80',
        detailBody:
          'Resultados comparativos demonstrando redução de até 32% no número de parâmetros mantendo a acurácia de classificação.'
      },
      {
        title: 'Repositório aberto com benchmarks e código-fonte reproduzível publicado',
        meta: 'Postado há 10 dias atrás',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
        detailBody:
          'Todos os experimentos e notebooks de validação estão disponíveis para consulta e reprodução pela comunidade acadêmica.'
      }
    ]
  },
  {
    id: 'nanomateriais',
    requiresFunding: true,
    featured: false,
    homePage: 2,
    category: 'pesquisas',
    categoryPage: 1,
    contentType: 'premiacoes',
    objective: 'academico',
    period: '30d',
    lightBorder: false,
    badgeLabel: 'Projeto Acadêmico',
    goalType: 'Apoio Científico',
    badgeText: 'MAT',
    badgeColor: '#0f766e',
    author: 'Grupo de Materiais Avançados • UFABC',
    title: 'Síntese verde de nanomateriais para purificação de efluentes industriais',
    subtitle: 'Sustentabilidade e engenharia de materiais aplicadas ao tratamento de água.',
    meta: '18 days left • 210% funded',
    raised: 8400,
    goal: 9000,
    backers: 88,
    daysLeft: 18,
    deadline: '11 de dezembro de 2026',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80',
    shortDesc:
      'Pesquisa aplicada em química e engenharia de materiais para remoção catalítica de poluentes orgânicos.',
    fullDesc:
      'Utilização de extratos vegetais para síntese sustentável de nanopartículas fotocatalíticas capazes de degradar corantes e fármacos em efluentes.',
    storyHeading: 'Uma breve história sobre o projeto',
    storyBody:
      'A pesquisa busca alternativas de baixo impacto ambiental para remediação hídrica na região metropolitana de São Paulo.',
    faqsCount: 2,
    updatesCount: 3,
    commentsCount: 15
  },
  {
    id: 'neurociencia',
    requiresFunding: false,
    featured: false,
    homePage: 3,
    category: 'pesquisas',
    categoryPage: 1,
    contentType: 'eventos',
    objective: 'social',
    period: 'quad',
    lightBorder: false,
    badgeLabel: 'Pesquisa Acadêmica • Neurociência',
    goalType: 'Divulgação Científica',
    badgeText: 'NEU',
    badgeColor: '#6d28d9',
    author: 'Lab de Neuroengenharia • UFABC',
    title: 'Interfaces cérebro-computador não invasivas para reabilitação motora',
    subtitle: 'Processamento de sinais EEG para tecnologias assistivas de baixo custo.',
    meta: 'Vitrine Científica • Neurociência e Computação',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=900&q=80',
    heroBannerImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1400&q=80',
    emblemSvg: ENTITY_EMBLEMS.researchDefault,
    bioParagraphs: [
      'Linha de pesquisa interdisciplinar que une Neurociência, Engenharia Biomédica e Ciência da Computação na UFABC para decodificar sinais de eletroencefalografia (EEG) não invasiva.',
      'O objetivo é criar protótipos acessíveis de tecnologias assistivas e divulgar avanços científicos à sociedade sem necessidade de financiamento coletivo.'
    ],
    highlights: [
      {
        title: 'Seminário Aberto de Neuroengenharia e Processamento de Sinais Biomédicos',
        meta: 'Postado há 4 dias atrás',
        image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=900&q=80',
        detailBody:
          'Apresentação aberta ao público no campus São Bernardo do Campo com demonstração de aquisição de sinais EEG.'
      },
      {
        title: 'Edital interno para discentes de graduação interessados em pesquisa aplicada',
        meta: 'Postado há 7 dias atrás',
        image: FORM_PREVIEW_THUMB,
        detailBody:
          'Oportunidade de participação em projetos de processamento de sinais e aprendizado estatístico.'
      },
      {
        title: 'Artigo aceito em congresso brasileiro de Engenharia Biomédica',
        meta: 'Postado há 11 dias atrás',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80',
        detailBody:
          'Trabalho desenvolvido por graduandos da UFABC apresenta pipeline em tempo real para classificação de imagética motora.'
      }
    ]
  },
  {
    id: 'atletica-geral',
    requiresFunding: true,
    featured: false,
    homePage: 2,
    category: 'atleticas',
    categoryPage: 1,
    contentType: 'competicoes',
    objective: 'esportivo',
    period: '30d',
    lightBorder: false,
    badgeLabel: 'Atlética Universitária',
    goalType: 'Apoio para Competições',
    badgeText: 'ATL',
    badgeColor: '#1d6f42',
    author: 'Associação Atlética Acadêmica • UFABC',
    title: 'Preparação das equipes universitárias da UFABC para o Intercomp e Engenharíadas',
    subtitle: 'Incentivo ao esporte universitário, treinamentos e representação institucional.',
    meta: '14 days left • 120% funded',
    raised: 7200,
    goal: 6000,
    backers: 142,
    daysLeft: 14,
    deadline: '08 de dezembro de 2026',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=900&q=80',
    shortDesc:
      'Arrecadação de apoio logístico, uniformes e equipamentos de treino para representar a UFABC nos torneios.',
    fullDesc:
      'Campanha colaborativa para custear materiais esportivos, taxas de arbitragem em treinos preparatórios e transporte das delegações estudantis da UFABC.',
    storyHeading: 'Uma breve história sobre o projeto',
    storyBody:
      'O esporte universitário integra estudantes dos campi Santo André e São Bernardo do Campo, promovendo saúde física e espírito de equipe.',
    faqsCount: 2,
    updatesCount: 2,
    commentsCount: 19
  },
  {
    id: 'atletica-natacao',
    requiresFunding: false,
    featured: false,
    homePage: 3,
    category: 'atleticas',
    categoryPage: 1,
    contentType: 'processos',
    objective: 'esportivo',
    period: '7d',
    lightBorder: false,
    badgeLabel: 'Atlética Universitária',
    goalType: 'Seletivas e Treinos Abertos',
    badgeText: 'NATA',
    badgeColor: '#0284c7',
    author: 'Modalidades Aquáticas • UFABC',
    title: 'Modalidades Aquáticas UFABC — Treinos e Integração Esportiva',
    subtitle: 'Treinos abertos, seletivas e incentivo à prática esportiva universitária.',
    meta: 'Vitrine Esportiva • Treinos e Seletivas',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=900&q=80',
    heroBannerImage: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1400&q=80',
    emblemSvg: ENTITY_EMBLEMS.researchDefault,
    bioParagraphs: [
      'A equipe de Modalidades Aquáticas da UFABC promove treinos regulares, integração entre calouros e veteranos e preparação para festivais universitários de natação.',
      'Os treinos são abertos tanto a iniciantes quanto a nadadores experientes da comunidade acadêmica, sem necessidade de campanha financeira.'
    ],
    highlights: [
      {
        title: 'Inscrições abertas para os treinos do quadrimestre — Turmas Iniciante e Avançado',
        meta: 'Postado há 2 dias atrás',
        image: FORM_PREVIEW_THUMB,
        detailBody:
          'Preencha o formulário de interesse para receber horários e locais dos treinos semanais da equipe.'
      },
      {
        title: 'Festival Interno de Natação UFABC reúne mais de 60 estudantes',
        meta: 'Postado há 6 dias atrás',
        image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=900&q=80',
        detailBody:
          'Evento de integração esportiva com provas individuais e revezamentos mistos entre cursos.'
      },
      {
        title: 'Delegação da UFABC participa da Copa Universitária Paulista',
        meta: 'Postado há 9 dias atrás',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80',
        detailBody:
          'Atletas da universidade conquistaram medalhas nas provas de 50m livre e revezamento 4x50m.'
      }
    ]
  },
  {
    id: 'bateria-ufabc',
    requiresFunding: true,
    featured: false,
    homePage: 0,
    category: 'atleticas',
    categoryPage: 1,
    contentType: 'eventos',
    objective: 'cultural',
    period: '30d',
    lightBorder: false,
    badgeLabel: 'Bateria Universitária',
    goalType: 'Apoio para Instrumentos',
    badgeText: 'BAT',
    badgeColor: '#b45309',
    author: 'Bateria Universitária UFABC',
    title: 'Manutenção de instrumentos e oficinas abertas de percussão da Bateria UFABC',
    subtitle: 'Cultura, ritmo e integração nos jogos universitários e eventos do campus.',
    meta: '11 days left • 145% funded',
    raised: 5800,
    goal: 4000,
    backers: 98,
    daysLeft: 11,
    deadline: '03 de dezembro de 2026',
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Troca de peles, baquetas e ensaios abertos para iniciantes sem experiência musical prévia.',
    fullDesc: 'A campanha visa renovar o arsenal de surdos, caixas e repiques utilizados nas apresentações e competições.',
    storyHeading: 'Ritmo que move a torcida',
    storyBody: 'A bateria reúne estudantes de todos os cursos em ensaios semanais gratuitos.',
    faqsCount: 2,
    updatesCount: 3,
    commentsCount: 25
  },
  {
    id: 'lixo-eletronico',
    requiresFunding: true,
    featured: false,
    homePage: 1,
    category: 'extensao',
    categoryPage: 1,
    contentType: 'eventos',
    objective: 'social',
    period: '7d',
    lightBorder: false,
    badgeLabel: 'Projeto de Extensão',
    goalType: 'Apoio Financeiro e Doação de Peças',
    badgeText: 'ECO',
    badgeColor: '#2c6e49',
    author: 'Coletivo Hardware Livre • UFABC',
    title: 'Lixo eletrônico para a criação de computadores',
    subtitle: 'Economia circular e inclusão digital para escolas públicas do Grande ABC.',
    meta: '3 days left • 89% funded',
    raised: 4450,
    goal: 5000,
    backers: 84,
    daysLeft: 3,
    deadline: '22 de novembro de 2026',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=900&q=80',
    shortDesc:
      'Iniciativa de extensão universitária que recondiciona componentes eletrônicos descartados para montar estações de trabalho educacionais.',
    fullDesc:
      'Através da triagem, manutenção e instalação de sistemas operacionais livres, o projeto transforma equipamentos descartados em laboratórios de informática funcionais.',
    storyHeading: 'Uma breve história sobre o projeto',
    storyBody:
      'Com o apoio da campanha, serão adquiridos SSDs e periféricos essenciais para finalizar 20 estações de estudo.',
    faqsCount: 5,
    updatesCount: 6,
    commentsCount: 39
  },
  {
    id: 'cursinho-popular',
    requiresFunding: true,
    featured: false,
    homePage: 2,
    category: 'extensao',
    categoryPage: 1,
    contentType: 'processos',
    objective: 'social',
    period: '30d',
    lightBorder: false,
    badgeLabel: 'Projeto de Extensão',
    goalType: 'Visibilidade e Apoio Material',
    badgeText: 'EXT',
    badgeColor: '#b45309',
    author: 'Cursinho Popular UFABC',
    title: 'Cursinho Popular UFABC: democratizando o acesso ao ensino superior no Grande ABC',
    subtitle: 'Apostilas, simulados e aulas gratuitas conduzidas por discentes voluntários.',
    meta: '9 days left • 94% funded',
    raised: 4700,
    goal: 5000,
    backers: 136,
    daysLeft: 9,
    deadline: '01 de dezembro de 2026',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=80',
    shortDesc:
      'Aulas gratuitas, simulados e mentoria acadêmica ministrados por discentes da UFABC para estudantes da rede pública.',
    fullDesc:
      'O apoio financeiro garante a impressão de apostilas, aplicação de simulados completos do ENEM/FUVEST e auxílio transporte.',
    storyHeading: 'Uma breve história sobre o projeto',
    storyBody:
      'Há anos o Cursinho Popular conecta a universidade pública às escolas estaduais do ABC.',
    faqsCount: 4,
    updatesCount: 5,
    commentsCount: 54
  }
];
 
const CATEGORY_TITLES = {
  entidades: 'Entidades',
  pesquisas: 'Pesquisas',
  atleticas: 'Atléticas',
  extensao: 'Projetos de Extensão'
};
 
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
      <span>${project.meta}</span>
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
          <span>${item.meta}</span>
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
 
function buildEntityFromForm() {
  const val = (id) => document.getElementById(id).value.trim();
  const name = val('entName');
  const words = name.split(/\s+/).filter((w) => w.length > 2);
  const initials = escapeHtml(
    words.length ? words.slice(0, 3).map((w) => w.charAt(0).toUpperCase()).join('') : name.slice(0, 2).toUpperCase()
  );
  const label = escapeHtml(name.length > 40 ? `${name.slice(0, 39)}…` : name);
 
  const emblem = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" fill="#eef6f3" stroke="#2e7d63" stroke-width="4"/><text x="60" y="72" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="800" fill="#2e7d63" text-anchor="middle">${initials}</text></svg>`;
  const banner = svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340"><rect width="1200" height="340" fill="#215e4a"/><circle cx="600" cy="124" r="68" fill="#eef6f3" stroke="#399e7b" stroke-width="5"/><text x="600" y="140" font-family="Inter, Arial, sans-serif" font-size="46" font-weight="800" fill="#2e7d63" text-anchor="middle">${initials}</text><text x="600" y="262" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="1.5">${label}</text></svg>`);
 
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
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedProject();
  renderRecommendedProjects();
  initAccessibilityMenu();
 
  enableHorizontalArrowNavigation('#primaryCategoryNav', '.cat-link');
  enableHorizontalArrowNavigation('#campaignTabsList', '.campaign-tab');
 
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
 
  // Newsletter
  document.getElementById('newsletterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('newsletterEmail');
    const feedback = document.getElementById('newsletterFeedback');
    feedback.textContent = `E-mail ${input.value} cadastrado com sucesso!`;
    input.value = '';
  });
 
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
});
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
    fontSizeStep: 0, // 0: 100%, 1: 112%, 2: 122%
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
 
  popover.querySelectorAll('.a11y-tile').forEach((tile) => {
    tile.addEventListener('click', () => {
      const action = tile.getAttribute('data-a11y');
      const currentlyPressed = tile.getAttribute('aria-pressed') === 'true';
      const nextPressed = !currentlyPressed;
 
      switch (action) {
        case 'screen-color':
          document.body.classList.toggle('a11y-screen-color', nextPressed);
          tile.setAttribute('aria-pressed', String(nextPressed));
          break;
        case 'invert-colors':
          document.documentElement.classList.toggle('a11y-invert', nextPressed);
          tile.setAttribute('aria-pressed', String(nextPressed));
          break;
        case 'reduce-white':
          document.body.classList.toggle('a11y-reduce-white', nextPressed);
          tile.setAttribute('aria-pressed', String(nextPressed));
          break;
        case 'color-filter':
          document.body.classList.toggle('a11y-color-filter', nextPressed);
          tile.setAttribute('aria-pressed', String(nextPressed));
          break;
        case 'contrast-level': {
          state.contrastStep = (state.contrastStep + 1) % 3;
          document.body.classList.toggle('a11y-medium-contrast', state.contrastStep === 1);
          document.body.classList.toggle('high-contrast', state.contrastStep === 2);
          const lbl = document.getElementById('tileContrastLabel');
          lbl.textContent =
            state.contrastStep === 0 ? 'Contraste' : state.contrastStep === 1 ? 'Contraste médio' : 'Alto contraste';
          tile.setAttribute('aria-pressed', String(state.contrastStep > 0));
          break;
        }
        case 'auto-brightness':
          document.body.classList.toggle('a11y-auto-brightness', nextPressed);
          tile.setAttribute('aria-pressed', String(nextPressed));
          break;
        case 'pause-animations':
          document.body.classList.toggle('a11y-pause-motion', nextPressed);
          tile.setAttribute('aria-pressed', String(nextPressed));
          break;
        case 'screen-orientation':
          document.body.classList.toggle('a11y-wide-focus', nextPressed);
          tile.setAttribute('aria-pressed', String(nextPressed));
          break;
        case 'font-family':
          document.body.classList.toggle('a11y-alt-font', nextPressed);
          tile.setAttribute('aria-pressed', String(nextPressed));
          break;
        case 'bold-text':
          document.body.classList.toggle('a11y-bold-text', nextPressed);
          tile.setAttribute('aria-pressed', String(nextPressed));
          break;
        case 'font-size': {
          state.fontSizeStep = (state.fontSizeStep + 1) % 3;
          document.documentElement.style.fontSize =
            state.fontSizeStep === 0 ? '' : state.fontSizeStep === 1 ? '17.5px' : '19px';
          const lbl = document.getElementById('tileFontSizeLabel');
          lbl.textContent =
            state.fontSizeStep === 0 ? 'Tamanho' : state.fontSizeStep === 1 ? 'Fonte 110%' : 'Fonte 120%';
          tile.setAttribute('aria-pressed', String(state.fontSizeStep > 0));
          break;
        }
        case 'font-color':
          document.body.classList.toggle('a11y-font-color', nextPressed);
          tile.setAttribute('aria-pressed', String(nextPressed));
          break;
        case 'text-spacing':
          document.body.classList.toggle('a11y-text-spacing', nextPressed);
          tile.setAttribute('aria-pressed', String(nextPressed));
          break;
        case 'text-contrast':
          document.body.classList.toggle('a11y-text-contrast', nextPressed);
          tile.setAttribute('aria-pressed', String(nextPressed));
          break;
        case 'screen-reader':
          state.screenReader = nextPressed;
          tile.setAttribute('aria-pressed', String(nextPressed));
          if (nextPressed) speakText('Leitor de tela ativado.');
          else if ('speechSynthesis' in window) window.speechSynthesis.cancel();
          break;
        case 'speech-rate': {
          state.speechRateStep = (state.speechRateStep + 1) % rates.length;
          document.getElementById('tileRateLabel').textContent = `Velocidade ${rates[state.speechRateStep]}x`;
          tile.setAttribute('aria-pressed', String(state.speechRateStep > 0));
          break;
        }
        case 'speech-pitch': {
          state.speechPitchStep = (state.speechPitchStep + 1) % pitches.length;
          document.getElementById('tilePitchLabel').textContent = pitchNames[state.speechPitchStep];
          tile.setAttribute('aria-pressed', String(state.speechPitchStep > 0));
          break;
        }
        case 'read-page': {
          tile.setAttribute('aria-pressed', String(nextPressed));
          if (nextPressed) {
            const visibleMain = document.querySelector('main:not([hidden]), section:not([hidden])');
            const textToRead = visibleMain ? visibleMain.innerText.slice(0, 900) : document.title;
            speakText(textToRead);
            showToast('Lendo conteúdo da página em voz alta...');
          } else if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
          }
          break;
        }
        case 'captions':
          tile.setAttribute('aria-pressed', String(nextPressed));
          showToast(nextPressed ? 'Legendas automáticas (CC) habilitadas.' : 'Legendas desativadas.');
          break;
        case 'libras':
          tile.setAttribute('aria-pressed', String(nextPressed));
          showToast(nextPressed ? 'Intérprete virtual VLibras ativado.' : 'VLibras ocultado.');
          break;
        case 'audio-desc':
          tile.setAttribute('aria-pressed', String(nextPressed));
          showToast(nextPressed ? 'Audiodescrição de imagens habilitada.' : 'Audiodescrição desativada.');
          break;
      }
 
      updateActiveBadge();
    });
  });
 
  resetBtn.addEventListener('click', () => {
    document.documentElement.classList.remove('a11y-invert', 'large-font');
    document.documentElement.style.fontSize = '';
    document.body.classList.remove(
      'a11y-screen-color',
      'a11y-reduce-white',
      'a11y-color-filter',
      'a11y-medium-contrast',
      'high-contrast',
      'a11y-auto-brightness',
      'a11y-pause-motion',
      'a11y-wide-focus',
      'a11y-alt-font',
      'a11y-bold-text',
      'a11y-font-color',
      'a11y-text-spacing',
      'a11y-text-contrast'
    );
    state.contrastStep = 0;
    state.fontSizeStep = 0;
    state.speechRateStep = 0;
    state.speechPitchStep = 0;
    state.screenReader = false;
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
 
    document.getElementById('tileContrastLabel').textContent = 'Contraste';
    document.getElementById('tileFontSizeLabel').textContent = 'Tamanho';
    document.getElementById('tileRateLabel').textContent = 'Velocidade 1x';
    document.getElementById('tilePitchLabel').textContent = 'Timbre';
 
    popover.querySelectorAll('.a11y-tile').forEach((tile) => tile.setAttribute('aria-pressed', 'false'));
    updateActiveBadge();
    showToast('Configurações de acessibilidade restauradas.');
  });
}