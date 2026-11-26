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
    meta: '21 dias restantes • 795% financiado',
    raised: 5250,
    goal: 10000,
    backers: 128,
    daysLeft: 21,
    deadline: '15 de dezembro de 2026',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDY-DtjEKQjvNa9u7-RlVEP4L9MRnd8Jh4YG21HG-pvA&s=10',
    secondaryImage: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=1000&q=80',
    shortDesc:
      'Uma pesquisa desenvolvida por estudantes universitários investiga a presença de ' +
        'microplásticos em peixes de rios brasileiros. O estudo busca compreender como esses ' +
        'pequenos fragmentos de plástico chegam aos organismos aquáticos e quais podem ser suas ' +
        'consequências para o meio ambiente.',
    fullDesc:
      'Uma pesquisa desenvolvida por estudantes universitários investiga a presença de ' +
        'microplásticos em peixes de rios brasileiros. O estudo busca compreender como esses ' +
        'pequenos fragmentos de plástico chegam aos organismos aquáticos e quais podem ser suas ' +
        'consequências para o meio ambiente. Por meio da coleta e da análise de amostras, os ' +
        'pesquisadores pretendem identificar a frequência dessas partículas e investigar ' +
        'possíveis relações com a poluição das águas. Os resultados poderão contribuir para a ' +
        'conscientização da população sobre o descarte inadequado de resíduos e reforçar a ' +
        'importância de medidas para preservar os ecossistemas aquáticos.',
    storyHeading: 'Uma breve história sobre o projeto',
    storyBody:
      'A ideia surgiu da preocupação de um grupo de estudantes com os impactos da poluição ' +
        'plástica nos ecossistemas aquáticos. Durante os estudos, os pesquisadores perceberam ' +
        'que, apesar de sua dimensão quase invisível, os microplásticos representam um problema ' +
        'crescente para a biodiversidade e podem estar presentes em peixes consumidos pela ' +
        'população. A partir dessa inquietação, nasceu o projeto, que busca transformar uma ' +
        'questão ambiental em investigação científica. Agora, os estudantes procuram apoio para ' +
        'viabilizar as análises laboratoriais, ampliar a coleta de amostras e compartilhar os ' +
        'resultados com a sociedade.',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUU4CAjut1cL4OdBXPZ2AbxLb_s_McdRs-U9r6Au6HiVyR3L88Kn2NeHBQ&s=10',
    heroBannerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUU4CAjut1cL4OdBXPZ2AbxLb_s_McdRs-U9r6Au6HiVyR3L88Kn2NeHBQ&s=10',
    emblemSvg: ENTITY_EMBLEMS.greenTeam,
    bioParagraphs: [
      'O Green Team Hacker Club é a entidade acadêmica oficial dedicada à segurança da ' +
        'informação, privacidade digital e cultura hacker ética na Universidade Federal do ABC.',
      'Composta por estudantes de diversos cursos de graduação — como Ciência da Computação, ' +
        'Engenharia da Informação, Bacharelado em Ciência e Tecnologia (BC&T) e demais áreas ' +
        'interdisciplinares —, a entidade promove grupos de estudo, workshops abertos, análises ' +
        'de vulnerabilidades e representa a UFABC em competições nacionais e internacionais de ' +
        'Capture The Flag (CTF).'
    ],
    highlights: [
      {
        title: 'Inscrições abertas para o processo seletivo 2027',
        meta: 'Postado há 2 dias atrás',
        image: FORM_PREVIEW_THUMB,
        detailBody:
          'Estão abertas as inscrições para novos membros do Green Team Hacker Club! Não é ' +
            'necessário ter experiência prévia em cibersegurança: buscamos estudantes curiosos de ' +
            'todos os ingressos da UFABC interessados em redes, Linux, criptografia, web security ' +
            'e engenharia reversa.'
      },
      {
        title: 'Oficina aberta: Introdução a Linux, Redes e Web Hacking no campus Santo André',
        meta: 'Postado há 5 dias atrás',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80',
        detailBody:
          'Workshop prático gratuito aberto a toda a comunidade acadêmica. Abordaremos ' +
            'conceitos essenciais de terminal Linux, protocolos HTTP/HTTPS e análise de ' +
            'vulnerabilidades web em ambiente controlado.'
      },
      {
        title: 'Equipe da UFABC conquista pódio em competição universitária de CTF',
        meta: 'Postado há 6 dias atrás',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80',
        detailBody:
          'Os integrantes do Green Team representaram a UFABC na maratona nacional de Capture ' +
            'The Flag, solucionando desafios de criptografia, forense digital e exploração ' +
            'binária.'
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
    meta: '12 dias restantes • 215% financiado',
    raised: 12900,
    goal: 6000,
    backers: 158,
    daysLeft: 12,
    deadline: '04 de dezembro de 2026',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVtqp4-hrIhwTfxb4QNWZWxBOozR7vncKE3_8C1TZgQPG0h7VkDZ1-ukA&s=10',
    secondaryImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxnH6q8L4kzgYtQLqcyV1hXe0zQfu_xxCRVnhTIMSCQA&s=10',
    shortDesc:
      'Equipe oficial de robótica competitiva da UFABC, premiada em torneios nacionais e ' +
        'internacionais de engenharia.',
    fullDesc:
      'A Tamandutech projeta, usina e programa robôs autônomos e radiocontrolados para ' +
        'competições como IronCup, Winter Challenge e RoboCore Experience. Os recursos custeiam ' +
        'motores brushless, baterias LiPo e usinagem de chassis.',
    storyHeading: 'Uma breve história sobre a entidade',
    storyBody:
      'Com dezenas de troféus conquistados, a Tamandutech integra alunos desde o primeiro ' +
        'quadrimestre do BC&T em projetos reais de mecânica, eletrônica e controle embarcado.',
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
    meta: '5 dias restantes • 3627% financiado',
    raised: 18500,
    goal: 25000,
    backers: 214,
    daysLeft: 5,
    deadline: '28 de novembro de 2026',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJpDsE2MsP22YqPI2xb0LFycmn6U7sc6giu6iR2FPC8Q&s=10',
    secondaryImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbmNTTgFQQMekJO1sxGi68L4ZHKoCpLRoLxcLJK99FNQ&s=10',
    shortDesc:
      'Equipe de competição estudantil da UFABC dedicada ao projeto, manufatura e testes de ' +
        'protótipos automotivos de alta eficiência.',
    fullDesc:
      'A Scuderia UFABC reúne graduandos de diversas engenharias e cursos interdisciplinares ' +
        'para projetar, manufaturar e testar veículos protótipos de alta performance. O apoio ' +
        'financeiro viabiliza a compra de insumos de telemetria, componentes de suspensão e ' +
        'logística para as etapas nacionais.',
    storyHeading: 'Uma breve história sobre o projeto',
    storyBody:
      'Criada por estudantes apaixonados por mobilidade e engenharia aplicada, a Scuderia UFABC ' +
        'funciona como um laboratório prático de desenvolvimento de produto.',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-axcSmxcofIo9Tp1vj2qfpesYDXiVyHohcZK6r78wmQ&s=10',
    heroBannerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-axcSmxcofIo9Tp1vj2qfpesYDXiVyHohcZK6r78wmQ&s=10',
    emblemSvg: ENTITY_EMBLEMS.gpda,
    bioParagraphs: [
      'O Grupo de Pesquisa e Desenvolvimento Aeroespacial (GPDA) é uma iniciativa estudantil da ' +
        'Universidade Federal do ABC voltada à pesquisa aplicada, divulgação científica e ' +
        'desenvolvimento de sistemas aeroespaciais.',
      'Reunindo graduandos de Engenharia Aeroespacial, Física, Ciência da Computação e ' +
        'Bacharelados Interdisciplinares, o grupo conduz estudos em astrodinâmica, satélites ' +
        'educacionais (CubeSats), aviônica e observações astronômicas abertas à comunidade.'
    ],
    highlights: [
      {
        title: 'Processo Seletivo GPDA 2027 — Frentes de Satélites e Divulgação Científica',
        meta: 'Postado há 3 dias atrás',
        image: FORM_PREVIEW_THUMB,
        detailBody:
          'Venha integrar as frentes de pesquisa e extensão do GPDA! As inscrições estão ' +
            'abertas para discentes de todos os cursos da UFABC interessados em engenharia ' +
            'espacial e astronomia.'
      },
      {
        title: 'Noite de Observação Astronômica aberta no campus Santo André',
        meta: 'Postado há 5 dias atrás',
        image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=900&q=80',
        detailBody:
          'Atividade gratuita com telescópios e bate-papo sobre exploração espacial, aberta a ' +
            'estudantes, servidores e moradores da região do Grande ABC.'
      },
      {
        title: 'Simpósio Aeroespacial UFABC reúne pesquisadores e egressos do setor',
        meta: 'Postado há 8 dias atrás',
        image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80',
        detailBody:
          'Palestras técnicas e mesas-redondas sobre lançadores orbitais, sensoriamento remoto ' +
            'e carreiras na indústria aeroespacial brasileira.'
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
    meta: '16 dias restantes • 180% financiado',
    raised: 10800,
    goal: 14000,
    backers: 119,
    daysLeft: 16,
    deadline: '09 de dezembro de 2026',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYVmMtqFNX7TBTDpANjbBNdfT2YulpLF9eEmX1fw3QjQ&s=10',
    secondaryImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYVmMtqFNX7TBTDpANjbBNdfT2YulpLF9eEmX1fw3QjQ&s=10',
    shortDesc:
      'Concepção aerodinâmica, análise estrutural e construção de aeronave leve de alta carga útil.',
    fullDesc:
      'A Harpia Aerodesign representa a UFABC na competição nacional SAE Brasil AeroDesign, ' +
        'aplicando métodos de elementos finitos, ensaios em túnel de vento e manufatura em ' +
        'compósitos.',
    storyHeading: 'Uma breve história sobre a Harpia',
    storyBody:
      'Cada temporada desafia os estudantes a otimizar peso estrutural e sustentação ' +
        'aerodinâmica sob rigorosos requisitos técnicos.',
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
    meta: '20 dias restantes • 155% financiado',
    raised: 9300,
    goal: 6000,
    backers: 103,
    daysLeft: 20,
    deadline: '14 de dezembro de 2026',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTURXhklWiH4Z-LdKsK0gSaemciIjmuY4ESDTbVOfwX1A&s=10',
    secondaryImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTURXhklWiH4Z-LdKsK0gSaemciIjmuY4ESDTbVOfwX1A&s=10',
    shortDesc:
      'Equipe dedicada ao desenvolvimento de minifoguetes de sondagem, sistemas de paraquedas e ' +
        'telemetria de voo.',
    fullDesc:
      'A UFABC Rocket Design projeta motores experimentais, fuselagens em fibra de vidro e ' +
        'computadores de bordo para apogeus de até 3 km em festivais nacionais.',
    storyHeading: 'Uma breve história sobre a UFABC Rocket Design',
    storyBody:
      'Com foco em segurança operacional e inovação tecnológica, a equipe capacita novos ' +
        'membros todos os quadrimestres.',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS60BwP9hbWn3kqwqa6XCMJKhyeKuYFGQFHXWAfRUTHnQ&s',
    heroBannerImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80',
    emblemSvg: ENTITY_EMBLEMS.prisma,
    bioParagraphs: [
      'O Coletivo Prisma UFABC é uma organização estudantil voltada à promoção da diversidade, ' +
        'do acolhimento de ingressantes e da permanência estudantil nos campi de Santo André e ' +
        'São Bernardo do Campo.',
      'Por meio de rodas de conversa, mostras culturais, oficinas artísticas e redes de apoio ' +
        'mútuo, o coletivo constrói espaços seguros e integradores para toda a comunidade ' +
        'universitária.'
    ],
    highlights: [
      {
        title: 'Chamada aberta para novos organizadores e voluntários do Coletivo Prisma',
        meta: 'Postado há 2 dias atrás',
        image: FORM_PREVIEW_THUMB,
        detailBody:
          'Participe da organização das atividades culturais e de acolhimento do próximo ' +
            'quadrimestre na UFABC.'
      },
      {
        title: 'Mostra Cultural e Sarau Aberto no Piso Vermelho — Campus Santo André',
        meta: 'Postado há 4 dias atrás',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
        detailBody:
          'Apresentações musicais, poesia, exposição de artes visuais e feira de economia ' +
            'criativa produzidas por discentes da UFABC.'
      },
      {
        title: 'Guia de Acolhimento e Permanência Estudantil para ingressantes do BC&T e BC&H',
        meta: 'Postado há 7 dias atrás',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
        detailBody:
          'Material colaborativo com dicas sobre auxílios estudantis, transporte fretado, ' +
            'bibliotecas e entidades da universidade.'
      }
    ]
  },
  {
    id: 'UFABC.jr',
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
    author: 'UFABC Júnior',
    title: 'UFABC Júnior',
    subtitle: 'Vivência empresarial, consultoria tecnológica e impacto regional no ABC.',
    meta: 'Vitrine Institucional • Processos Seletivos',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCgg8FVDgnp7gC5ohUULoJcUaNIAW_LSxQ4TAP20pmA&s=10',
    heroBannerImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80',
    emblemSvg: ENTITY_EMBLEMS.ejUfabc,
    bioParagraphs: [
      'O Núcleo de Empresas Juniores da UFABC integra as associações civis sem fins lucrativos ' +
        'geridas exclusivamente por estudantes de graduação da universidade, com orientação ' +
        'docente.',
      'Atuando nas áreas de desenvolvimento de software, engenharia, biotecnologia, políticas ' +
        'públicas e gestão, as EJs conectam a formação interdisciplinar da UFABC às demandas ' +
        'reais de organizações da região do Grande ABC.'
    ],
    highlights: [
      {
        title: 'Processo Seletivo Unificado das Empresas Juniores UFABC 2027',
        meta: 'Postado há 1 dia atrás',
        image: FORM_PREVIEW_THUMB,
        detailBody:
          'Inscreva-se nas trilhas de Tecnologia, Engenharia, Negócios e Design e vivencie ' +
            'projetos reais desde os primeiros quadrimestres.'
      },
      {
        title: 'Feira de Empreendedorismo e Inovação Universitária no Grande ABC',
        meta: 'Postado há 5 dias atrás',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
        detailBody:
          'Encontro entre estudantes, startups incubadas e empresas da região para troca de ' +
            'experiências e networking.'
      },
      {
        title: 'Capacitação gratuita em Gestão Ágil e Desenvolvimento de Produto',
        meta: 'Postado há 9 dias atrás',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
        detailBody:
          'Workshop aberto ministrado por membros veteranos sobre Scrum, descoberta de produto ' +
            'e prototipação.'
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
    meta: '19 dias restantes • 3900% financiado',
    raised: 11700,
    goal: 15000,
    backers: 164,
    daysLeft: 19,
    deadline: '12 de dezembro de 2026',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNeGPKOasLds5jDAqMwDBE6cDSXKq_GyhmiSVoSNxlyw&s=10',
    secondaryImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNeGPKOasLds5jDAqMwDBE6cDSXKq_GyhmiSVoSNxlyw&s=10',
    shortDesc:
      'Estudo laboratorial focado na identificação de biomarcadores circulantes para triagem ' +
        'rápida e não invasiva.',
    fullDesc:
      'Esta linha de pesquisa investiga assinaturas bioquímicas presentes em amostras ' +
        'sanguíneas visando acelerar o diagnóstico precoce de doenças crônicas e metabólicas.',
    storyHeading: 'Uma breve história sobre o projeto',
    storyBody:
      'O grupo nasceu da colaboração entre discentes de Biotecnologia, Química e Ciência da ' +
        'Computação interessados em medicina translacional.',
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
      'Projeto de Iniciação Científica desenvolvido no Centro de Matemática, Computação e ' +
        'Cognição (CMCC) da UFABC, focado na aplicação de algoritmos evolutivos para otimizar ' +
        'automaticamente hiperparâmetros e topologias de redes neurais profundas.',
      'A iniciativa dispensa captação financeira externa e utiliza a vitrine do UFCROWD para ' +
        'divulgar resultados parciais, repositórios de código aberto e selecionar novos ' +
        'colaboradores de graduação interessados em Aprendizado de Máquina.'
    ],
    highlights: [
      {
        title: 'Chamada para colaboradores de Iniciação Científica em Aprendizado de Máquina',
        meta: 'Postado há 3 dias atrás',
        image: FORM_PREVIEW_THUMB,
        detailBody:
          'Vagas para estudantes de Ciência da Computação e BC&T interessados em computação ' +
            'evolutiva, Python e PyTorch.'
      },
      {
        title: 'Apresentação de pôster no Simpósio de Iniciação Científica da UFABC',
        meta: 'Postado há 6 dias atrás',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80',
        detailBody:
          'Resultados comparativos demonstrando redução de até 32% no número de parâmetros ' +
            'mantendo a acurácia de classificação.'
      },
      {
        title: 'Repositório aberto com benchmarks e código-fonte reproduzível publicado',
        meta: 'Postado há 10 dias atrás',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
        detailBody:
          'Todos os experimentos e notebooks de validação estão disponíveis para consulta e ' +
            'reprodução pela comunidade acadêmica.'
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
    meta: '18 dias restantes • 210% financiado',
    raised: 8400,
    goal: 9000,
    backers: 88,
    daysLeft: 18,
    deadline: '11 de dezembro de 2026',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80',
    shortDesc:
      'Pesquisa aplicada em química e engenharia de materiais para remoção catalítica de ' +
        'poluentes orgânicos.',
    fullDesc:
      'Utilização de extratos vegetais para síntese sustentável de nanopartículas ' +
        'fotocatalíticas capazes de degradar corantes e fármacos em efluentes.',
    storyHeading: 'Uma breve história sobre o projeto',
    storyBody:
      'A pesquisa busca alternativas de baixo impacto ambiental para remediação hídrica na ' +
        'região metropolitana de São Paulo.',
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
      'Linha de pesquisa interdisciplinar que une Neurociência, Engenharia Biomédica e Ciência ' +
        'da Computação na UFABC para decodificar sinais de eletroencefalografia (EEG) não ' +
        'invasiva.',
      'O objetivo é criar protótipos acessíveis de tecnologias assistivas e divulgar avanços ' +
        'científicos à sociedade sem necessidade de financiamento coletivo.'
    ],
    highlights: [
      {
        title: 'Seminário Aberto de Neuroengenharia e Processamento de Sinais Biomédicos',
        meta: 'Postado há 4 dias atrás',
        image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=900&q=80',
        detailBody:
          'Apresentação aberta ao público no campus São Bernardo do Campo com demonstração de ' +
            'aquisição de sinais EEG.'
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
          'Trabalho desenvolvido por graduandos da UFABC apresenta pipeline em tempo real para ' +
            'classificação de imagética motora.'
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
    meta: '14 dias restantes • 120% financiado',
    raised: 7200,
    goal: 6000,
    backers: 142,
    daysLeft: 14,
    deadline: '08 de dezembro de 2026',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=900&q=80',
    shortDesc:
      'Arrecadação de apoio logístico, uniformes e equipamentos de treino para representar a ' +
        'UFABC nos torneios.',
    fullDesc:
      'Campanha colaborativa para custear materiais esportivos, taxas de arbitragem em treinos ' +
        'preparatórios e transporte das delegações estudantis da UFABC.',
    storyHeading: 'Uma breve história sobre o projeto',
    storyBody:
      'O esporte universitário integra estudantes dos campi Santo André e São Bernardo do ' +
        'Campo, promovendo saúde física e espírito de equipe.',
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
      'A equipe de Modalidades Aquáticas da UFABC promove treinos regulares, integração entre ' +
        'calouros e veteranos e preparação para festivais universitários de natação.',
      'Os treinos são abertos tanto a iniciantes quanto a nadadores experientes da comunidade ' +
        'acadêmica, sem necessidade de campanha financeira.'
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
    meta: '11 dias restantes • 145% financiadoo',
    raised: 5800,
    goal: 4000,
    backers: 98,
    daysLeft: 11,
    deadline: '03 de dezembro de 2026',
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Troca de peles, baquetas e ensaios abertos para iniciantes sem experiência musical prévia.',
    fullDesc: 'A campanha visa renovar o arsenal de surdos, caixas e repiques utilizados nas ' +
      'apresentações e competições.',
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
    meta: '3 dias restantes • 89% financiado',
    raised: 4450,
    goal: 5000,
    backers: 84,
    daysLeft: 3,
    deadline: '22 de novembro de 2026',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk4DqMLe2bwzK137Pu6tpRMdjCFgYYnI8evXRTV-JJiw&s=10',
    secondaryImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk4DqMLe2bwzK137Pu6tpRMdjCFgYYnI8evXRTV-JJiw&s=10',
    shortDesc:
      'Iniciativa de extensão universitária que recondiciona componentes eletrônicos ' +
        'descartados para montar estações de trabalho educacionais.',
    fullDesc:
      'Através da triagem, manutenção e instalação de sistemas operacionais livres, o projeto ' +
        'transforma equipamentos descartados em laboratórios de informática funcionais.',
    storyHeading: 'Uma breve história sobre o projeto',
    storyBody:
      'Com o apoio da campanha, serão adquiridos SSDs e periféricos essenciais para finalizar ' +
        '20 estações de estudo.',
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
    meta: '9 dias restantes • 94% financiado',
    raised: 4700,
    goal: 5000,
    backers: 136,
    daysLeft: 9,
    deadline: '01 de dezembro de 2026',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGYuPiQKRHx5aRCAHzv1Jx822i5QOKmqhxAFN0S125Rg&s=10',
    secondaryImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=80',
    shortDesc:
      'Aulas gratuitas, simulados e mentoria acadêmica ministrados por discentes da UFABC para ' +
        'estudantes da rede pública.',
    fullDesc:
      'O apoio financeiro garante a impressão de apostilas, aplicação de simulados completos do ' +
        'ENEM/FUVEST e auxílio transporte.',
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
