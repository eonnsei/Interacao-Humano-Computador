/* =========================================================
   BANNERS VETORIAIS DAS ENTIDADES ACADÊMICAS DA UFABC
   ========================================================= */
function svgToDataUri(svgString) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svgString.trim())}`;
}

const ENTITY_BANNERS = {
  greenTeam: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 368">
      <rect width="640" height="368" fill="#060807"/>
      <circle cx="320" cy="148" r="95" fill="none" stroke="#18b257" stroke-width="4" opacity="0.35"/>
      <path d="M250 220 C250 120, 390 120, 390 220 Z" fill="#0f2418" stroke="#22c55e" stroke-width="5"/>
      <path d="M275 142 C295 85, 345 85, 365 142 L348 168 L292 168 Z" fill="#0b1911" stroke="#22c55e" stroke-width="4"/>
      <polygon points="320,145 362,163 320,175 278,163" fill="#22c55e"/>
      <circle cx="304" cy="138" r="6" fill="#4ade80"/>
      <circle cx="336" cy="138" r="6" fill="#4ade80"/>
      <rect x="215" y="232" width="210" height="44" rx="6" fill="#166534" stroke="#4ade80" stroke-width="3"/>
      <text x="320" y="261" font-family="Inter, Arial, sans-serif" font-size="23" font-weight="800" fill="#ecfdf5" text-anchor="middle" letter-spacing="1.5">GREEN TEAM</text>
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 368">
      <rect width="640" height="368" fill="#08090a"/>
      <g transform="translate(320,184) rotate(-28)">
        <ellipse cx="0" cy="0" rx="135" ry="42" fill="none" stroke="#ffffff" stroke-width="14"/>
        <circle cx="0" cy="0" r="64" fill="#08090a" stroke="#ffffff" stroke-width="12"/>
        <path d="M-45 -18 Q0 18 45 -18" fill="none" stroke="#ffffff" stroke-width="11" stroke-linecap="round"/>
        <polygon points="0,-95 16,-62 -16,-62" fill="#ffffff"/>
      </g>
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

/* =========================================================
   CATÁLOGO UNIFICADO DE ENTIDADES E PROJETOS
   ========================================================= */
const PROJECTS_CATALOG = [
  {
    id: 'microplasticos',
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
    featured: false,
    homePage: 0,
    category: 'entidades',
    categoryPage: 1,
    contentType: 'processos',
    objective: 'academico',
    period: '7d',
    lightBorder: false,
    badgeLabel: 'Entidade Acadêmica',
    goalType: 'Visibilidade e Apoio',
    badgeText: 'GT',
    badgeColor: '#15803d',
    author: 'Green Team Hacker Club • UFABC',
    title: 'Green Team Hacker Club',
    subtitle: 'Segurança da informação, Capture The Flag (CTF) e cultura hacker ética na UFABC.',
    meta: '18 days left • 140% funded',
    raised: 4200,
    goal: 3000,
    backers: 74,
    daysLeft: 18,
    deadline: '10 de dezembro de 2026',
    image: ENTITY_BANNERS.greenTeam,
    secondaryImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80',
    shortDesc:
      'Clube estudantil dedicado à cibersegurança, análise de vulnerabilidades, workshops abertos e competições nacionais de CTF.',
    fullDesc:
      'O Green Team Hacker Club reúne estudantes interessados em segurança ofensiva e defensiva, criptografia, engenharia reversa e privacidade digital. O apoio viabiliza infraestrutura de servidores de treino e participação em campeonatos universitários.',
    storyHeading: 'Uma breve história sobre a entidade',
    storyBody:
      'Fundado por discentes de Ciência da Computação e Engenharia da Informação, o Green Team promove oficinas semanais gratuitas e processos seletivos abertos para toda a comunidade da UFABC.',
    faqsCount: 3,
    updatesCount: 4,
    commentsCount: 29
  },
  {
    id: 'tamandutech',
    featured: false,
    homePage: 0,
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
    featured: false,
    homePage: 0,
    category: 'entidades',
    categoryPage: 1,
    contentType: 'eventos',
    objective: 'academico',
    period: 'quad',
    lightBorder: false,
    badgeLabel: 'Entidade Aeroespacial',
    goalType: 'Visibilidade e Apoio',
    badgeText: 'GPDA',
    badgeColor: '#1f2937',
    author: 'GPDA • UFABC',
    title: 'GPDA - Grupo de Pesquisa e Desenvolvimento Aeroespacial',
    subtitle: 'Foguetemodelismo, satélites educacionais (CubeSats) e divulgação científica.',
    meta: '15 days left • 175% funded',
    raised: 8750,
    goal: 5000,
    backers: 112,
    daysLeft: 15,
    deadline: '08 de dezembro de 2026',
    image: ENTITY_BANNERS.gpda,
    secondaryImage: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=900&q=80',
    shortDesc:
      'Iniciativa dedicada ao desenvolvimento de sistemas aeroespaciais, aviônica, propulsão e eventos astronômicos abertos.',
    fullDesc:
      'O GPDA desenvolve projetos experimentais em engenharia aeroespacial, incluindo cargas úteis embarcadas, telemetria de longo alcance e atividades de extensão em escolas públicas.',
    storyHeading: 'Uma breve história sobre o GPDA',
    storyBody:
      'Nascido da união entre estudantes de Engenharia Aeroespacial, Física e Computação, o grupo aproxima a pesquisa espacial do dia a dia universitário.',
    faqsCount: 2,
    updatesCount: 5,
    commentsCount: 33
  },
  {
    id: 'harpia',
    featured: false,
    homePage: 0,
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
    featured: false,
    homePage: 0,
    category: 'entidades',
    categoryPage: 2,
    contentType: 'eventos',
    objective: 'social',
    period: '30d',
    lightBorder: false,
    badgeLabel: 'Entidade Estudantil',
    goalType: 'Visibilidade e Apoio',
    badgeText: 'PRI',
    badgeColor: '#7c3aed',
    author: 'Coletivo Prisma • UFABC',
    title: 'Coletivo Prisma UFABC',
    subtitle: 'Acolhimento, diversidade, eventos culturais e permanência estudantil.',
    meta: '14 days left • 130% funded',
    raised: 3900,
    goal: 3000,
    backers: 89,
    daysLeft: 14,
    deadline: '07 de dezembro de 2026',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Organização de rodas de conversa, semanas temáticas e redes de apoio discente nos dois campi.',
    fullDesc: 'Promove ações de integração, acolhimento de ingressantes e debates culturais abertos à comunidade interna e externa.',
    storyHeading: 'Sobre o Coletivo Prisma',
    storyBody: 'Atuando de forma colaborativa, o coletivo fortalece o sentimento de pertencimento na universidade.',
    faqsCount: 2,
    updatesCount: 2,
    commentsCount: 17
  },
  {
    id: 'axis-consultoria',
    featured: false,
    homePage: 0,
    category: 'entidades',
    categoryPage: 2,
    contentType: 'processos',
    objective: 'academico',
    period: '7d',
    lightBorder: false,
    badgeLabel: 'Empresa Júnior',
    goalType: 'Visibilidade Institucional',
    badgeText: 'EJ',
    badgeColor: '#0284c7',
    author: 'Empresa Júnior UFABC',
    title: 'Núcleo de Empresas Juniores UFABC',
    subtitle: 'Vivência empresarial, consultoria tecnológica e impacto regional no ABC.',
    meta: '19 days left • 110% funded',
    raised: 5500,
    goal: 5000,
    backers: 64,
    daysLeft: 19,
    deadline: '12 de dezembro de 2026',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
    shortDesc: 'Projetos de software, engenharia e gestão desenvolvidos por graduandos com orientação docente.',
    fullDesc: 'Conecta estudantes a desafios reais de micro e pequenas empresas da região do Grande ABC.',
    storyHeading: 'Formação prática na UFABC',
    storyBody: 'Os recursos arrecadados financiam capacitações e participação no Encontro Nacional de Empresas Juniores.',
    faqsCount: 2,
    updatesCount: 3,
    commentsCount: 14
  },
  {
    id: 'biomarcadores',
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
    featured: false,
    homePage: 1,
    category: 'pesquisas',
    categoryPage: 1,
    contentType: 'processos',
    objective: 'academico',
    period: 'quad',
    lightBorder: false,
    badgeLabel: 'Projeto Acadêmico',
    goalType: 'Visibilidade e Apoio Computacional',
    badgeText: 'IA',
    badgeColor: '#4c3b8a',
    author: 'João da Silva • CMCC UFABC',
    title: 'Usando algoritmos genéticos em redes neurais',
    subtitle: 'Otimização evolutiva de arquiteturas profundas aplicada à análise de imagens.',
    meta: '23 days left • 2526% funded',
    raised: 6315,
    goal: 8000,
    backers: 95,
    daysLeft: 23,
    deadline: '18 de dezembro de 2026',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    shortDesc:
      'Otimização evolutiva de hiperparâmetros e topologias de redes neurais profundas aplicada a problemas complexos de classificação.',
    fullDesc:
      'O projeto aplica algoritmos inspirados na seleção natural para encontrar arquiteturas de redes neurais mais leves, precisas e interpretáveis.',
    storyHeading: 'Uma breve história sobre o projeto',
    storyBody:
      'Durante as disciplinas de Inteligência Artificial e Algoritmos no CMCC, percebeu-se o alto custo energético do treinamento manual de modelos profundos.',
    faqsCount: 2,
    updatesCount: 4,
    commentsCount: 27
  },
  {
    id: 'nanomateriais',
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
    featured: false,
    homePage: 3,
    category: 'pesquisas',
    categoryPage: 1,
    contentType: 'eventos',
    objective: 'social',
    period: 'quad',
    lightBorder: false,
    badgeLabel: 'Projeto Acadêmico',
    goalType: 'Visibilidade e Apoio',
    badgeText: 'NEU',
    badgeColor: '#6d28d9',
    author: 'Lab de Neuroengenharia • UFABC',
    title: 'Interfaces cérebro-computador não invasivas para reabilitação motora',
    subtitle: 'Processamento de sinais EEG para tecnologias assistivas de baixo custo.',
    meta: '25 days left • 310% funded',
    raised: 9300,
    goal: 11000,
    backers: 104,
    daysLeft: 25,
    deadline: '20 de dezembro de 2026',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80',
    shortDesc:
      'Processamento de sinais de eletroencefalografia (EEG) para controle de dispositivos assistivos de baixo custo.',
    fullDesc:
      'Desenvolvimento de algoritmos de decodificação motora para auxiliar pacientes em reabilitação neurológica.',
    storyHeading: 'Uma breve história sobre o projeto',
    storyBody:
      'Unindo Neurociência e Computação na UFABC, o estudo busca democratizar interfaces assistivas.',
    faqsCount: 3,
    updatesCount: 4,
    commentsCount: 29
  },
  {
    id: 'atletica-geral',
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
    featured: false,
    homePage: 3,
    category: 'atleticas',
    categoryPage: 1,
    contentType: 'processos',
    objective: 'esportivo',
    period: '7d',
    lightBorder: false,
    badgeLabel: 'Atlética Universitária',
    goalType: 'Apoio e Visibilidade',
    badgeText: 'NATA',
    badgeColor: '#0284c7',
    author: 'Modalidades Aquáticas • UFABC',
    title: 'Treinamento e inclusão esportiva nas modalidades aquáticas da UFABC',
    subtitle: 'Equipamentos de treino e custeio de inscrições em torneios universitários.',
    meta: '7 days left • 82% funded',
    raised: 3280,
    goal: 4000,
    backers: 67,
    daysLeft: 7,
    deadline: '29 de novembro de 2026',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80',
    shortDesc:
      'Apoio para aquisição de materiais de treino e custeio de inscrições em campeonatos universitários.',
    fullDesc:
      'Campanha aberta para apoiar nadadores iniciantes e atletas de competição da universidade.',
    storyHeading: 'Uma breve história sobre o projeto',
    storyBody:
      'Com treinos regulares e acolhimento de novos alunos, a equipe fortalece a integração esportiva.',
    faqsCount: 1,
    updatesCount: 2,
    commentsCount: 12
  },
  {
    id: 'bateria-ufabc',
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
   CONTROLE DE TELAS (HOME / CATEGORIA / DETALHES)
   ========================================================= */
function switchView(targetView, focusHeading = true) {
  currentView = targetView;
  document.getElementById('homeView').hidden = targetView !== 'home';
  document.getElementById('categoryView').hidden = targetView !== 'category';
  document.getElementById('projectDetailView').hidden = targetView !== 'detail';

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
      ${clockIconSvg}
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
    1: ['scuderia', 'biomarcadores', 'algoritmos-geneticos', 'lixo-eletronico'],
    2: ['atletica-geral', 'tamandutech', 'nanomateriais', 'cursinho-popular'],
    3: ['harpia', 'neurociencia', 'atletica-natacao', 'gpda']
  };

  const targetIds = homeRecommendedIds[currentHomePage] || homeRecommendedIds[1];
  const items = targetIds
    .map((id) => PROJECTS_CATALOG.find((p) => p.id === id))
    .filter(Boolean);

  grid.innerHTML = items
    .map(
      (item) => `
      <article class="rec-card" data-project-id="${item.id}" aria-label="Abrir projeto: ${item.title}">
        <div class="rec-thumb-wrap">
          <img src="${item.image}" alt="${item.title}" class="rec-thumb" />
        </div>
        <div class="card-title-row">
          <span class="entity-avatar" style="background-color: ${item.badgeColor};" aria-hidden="true">${item.badgeText}</span>
          <h3 class="rec-title">${item.title}</h3>
        </div>
        <div class="rec-meta">
          ${clockIconSvg}
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
   PÁGINA DE DETALHES DA ENTIDADE / PROJETO (KICKSTARTER)
   ========================================================= */
function openProjectDetail(projectId) {
  if (currentView !== 'detail') {
    previousView = currentView;
  }

  const project = PROJECTS_CATALOG.find((p) => p.id === projectId) || PROJECTS_CATALOG[0];
  activeProject = project;
  activeCampaignTab = 'campanha';

  const backBtn = document.getElementById('backFromDetailBtn');
  if (previousView === 'category') {
    backBtn.innerHTML = `&larr; Voltar para ${CATEGORY_TITLES[activeCategorySlug] || 'Entidades'}`;
  } else {
    backBtn.innerHTML = '&larr; Voltar à página inicial';
  }

  document.getElementById('detailTitle').textContent = project.title;
  document.getElementById('detailSubtitle').textContent = project.subtitle;
  const mainImg = document.getElementById('detailMainImg');
  mainImg.src = project.image;
  mainImg.alt = project.title;
  document.getElementById('detailLeadDesc').textContent = project.fullDesc;

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
   INICIALIZAÇÃO E EVENTOS
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedProject();
  renderRecommendedProjects();

  // Ativa navegação horizontal por setas nas barras de navegação e abas
  enableHorizontalArrowNavigation('#primaryCategoryNav', '.cat-link');
  enableHorizontalArrowNavigation('#campaignTabsList', '.campaign-tab');

  // Skip Link para pular diretamente ao título principal da visão ativa
  document.getElementById('skipToContentLink').addEventListener('click', (e) => {
    e.preventDefault();
    if (currentView === 'home') {
      document.getElementById('newsHeading').focus();
    } else if (currentView === 'category') {
      document.getElementById('categoryPageTitle').focus();
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

  // Botão voltar na tela de detalhes (retorna para Categoria ou Home)
  document.getElementById('backFromDetailBtn').addEventListener('click', () => {
    if (previousView === 'category') {
      switchView('category', true);
    } else {
      showHomeView(true);
    }
  });

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

  // Abas internas da página do projeto
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

  // Modal de apoio financeiro
  const supportModal = document.getElementById('supportModal');
  const loginModal = document.getElementById('loginModal');

  document.getElementById('openSupportModalBtn').addEventListener('click', () => {
    document.getElementById('supportModalProjectName').textContent = activeProject.title;
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

  // Salvar projeto / Lembrar-me / Compartilhar
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

  document.querySelectorAll('.mini-share-btn').forEach((btn) => {
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
    closeAccessibleModal(loginModal);
    showToast('Login institucional simulado com sucesso!');
  });

  // Gerenciamento global de teclado para Modais (ESC e Focus Trap)
  document.addEventListener('keydown', (e) => {
    const activeModal = !supportModal.hidden ? supportModal : !loginModal.hidden ? loginModal : null;
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

  // Acessibilidade
  document.getElementById('contrastBtn').addEventListener('click', (e) => {
    const active = document.body.classList.toggle('high-contrast');
    e.currentTarget.setAttribute('aria-pressed', String(active));
  });

  document.getElementById('fontSizeBtn').addEventListener('click', (e) => {
    const active = document.documentElement.classList.toggle('large-font');
    e.currentTarget.setAttribute('aria-pressed', String(active));
  });

  document.getElementById('vlibrasBtn').addEventListener('click', () => {
    showToast('Widget VLibras ativado (simulação do protótipo).');
  });

  document.getElementById('talkbackBtn').addEventListener('click', () => {
    showToast('Leitura de tela TalkBack habilitada.');
  });
});