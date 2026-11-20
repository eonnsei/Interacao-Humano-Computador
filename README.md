# 🌱 UFCROWD — Vitrine Acadêmica e Financiamento Coletivo (UFABC)

![Status](https://img.shields.io/badge/status-vers%C3%A3o%20inicial%20(v1.0.4)-2e7d63)
![HTML5](https://img.shields.io/badge/HTML5-Sem%C3%A2ntico-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Responsivo-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla%20ES6+-F7DF1E?logo=javascript&logoColor=black)
![Acessibilidade](https://img.shields.io/badge/Acessibilidade-WAI--ARIA-005A9C)

> Conectando projetos, entidades e pessoas da **Universidade Federal do ABC (UFABC)** para transformar ideias acadêmicas, científicas, culturais e esportivas em realidade.

---

## 📋 Sobre o Projeto

O **UFCROWD** é um protótipo web front-end desenvolvido para dar visibilidade e facilitar o apoio colaborativo e financeiro a iniciativas da comunidade universitária da UFABC — abrangendo **Entidades Estudantis**, **Pesquisas Científicas**, **Atléticas** e **Projetos de Extensão**.

Esta versão inicial (`v0.1.0`) entrega a interface completa da vitrine acadêmica, navegação entre categorias com filtros dinâmicos, página detalhada de campanha (inspirada em plataformas de *crowdfunding*) e recursos avançados de acessibilidade.

---

## ✨ Funcionalidades da Versão Inicial (`v0.1.0`)

### 1. Página Inicial (Vitrine)
- **Banner de Notícias Institucionais:** Destaque para editais e oportunidades acadêmicas (ex.: Editais FAPESP).
- **Projeto em Destaque:** Exibição principal com resumo, meta, indicador de progresso e selo de objetivo.
- **Recomendados para Você:** Grade paginada de iniciativas de diferentes áreas da universidade.

### 2. Exploração por Categorias e Filtros
- **Abas Temáticas:** Navegação dedicada para *Entidades*, *Pesquisas*, *Atléticas* e *Projetos de Extensão*.
- **Filtros Combináveis:** Filtragem por **Tipo de Conteúdo** (*Processos seletivos, Premiações, Rifas, Eventos, Competições, Outros*), **Objetivo** (*Acadêmico, Social, Cultural, Esportivo, Outro*) e **Período**.
- **Banners Vetoriais Customizados:** Identidade visual em SVG para entidades da UFABC (*Green Team, Tamandutech, Scuderia UFABC, GPDA, Harpia Aerodesign, UFABC Rocket Design*, entre outras).

### 3. Página de Detalhes da Campanha
- **Painel de Financiamento:** Valor arrecadado, meta financeira, barra de progresso, número de apoiadores, dias restantes e prazo final.
- **Abas de Conteúdo:** Navegação interna entre *Campanha*, *Recompensas*, *Criador*, *Perguntas Frequentes*, *Atualizações*, *Comentários* e *Comunidade*.
- **Simulação Interativa de Apoio:** Modal com cotas pré-definidas (`R$ 25`, `R$ 75`, `R$ 200`) ou valor personalizado que atualiza dinamicamente o progresso e os apoiadores da campanha no protótipo.
- **Engajamento:** Opções para salvar projeto, ativar lembretes, compartilhar links e explorar projetos similares.

---

## ♿ Acessibilidade e Inclusão

O projeto foi construído com foco em boas práticas de **WAI-ARIA** e usabilidade assistiva:

- **Navegação Completa por Teclado:**
  - Atalho *"Pular para o conteúdo principal"* (`Skip Link`) no topo da página.
  - Cards e banners interativos operáveis via `Tab`, `Enter` e `Barra de Espaço`.
  - Navegação horizontal com `Seta Esquerda`, `Seta Direita`, `Home` e `End` nos menus de categorias e abas da campanha.
  - Gerenciamento de foco com *Focus Trap* e fechamento via `Esc` nos modais.
  - Indicadores visuais de foco de alto contraste (`:focus-visible`).
- **Barra de Acessibilidade no Rodapé:**
  - Alternância de **Alto Contraste** (tema escuro com realce em amarelo/verde neon).
  - Ajuste de **Fonte Grande** para melhor legibilidade.
  - Controles preparados para integração com **VLibras** e leitores de tela (**TalkBack**).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica (`header`, `main`, `section`, `aside`, `article`, `nav`, `footer`) e atributos ARIA.
- **CSS3:** Variáveis CSS (`:root`), CSS Grid, Flexbox, design responsivo (*mobile-first* / *breakpoints* adaptativos) e estilização de estados de foco.
- **JavaScript (Vanilla ES6+):** Gerenciamento de estado de navegação (SPA simulada), filtragem dinâmica, paginação, renderização de templates e controle de foco acessível.
- **Tipografia:** [Inter](https://fonts.google.com/specimen/Inter) e [Libre Baskerville](https://fonts.google.com/specimen/Libre+Baskerville) via Google Fonts.

---

## 📁 Estrutura de Arquivos

```text
ufcrowd/
├── index.html      # Estrutura semântica das telas, modais e componentes ARIA
├── style.css       # Design system, responsividade, tema alto contraste e :focus-visible
├── script.js       # Catálogo de projetos, filtros, paginação e navegação por teclado
└── README.md       # Documentação do projeto
```

---

## 🚀 Como Executar Localmente

Como o projeto utiliza apenas tecnologias web nativas (sem dependências externas de *build*), basta abrir o arquivo principal no navegador:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/eonnsei/Interacao-Humano-Computador
   ```
2. **Acesse a pasta do projeto:**
   ```bash
   cd ufcrowd
   ```
3. **Execute no navegador:**
   - Abra o arquivo `index.html` diretamente no seu navegador preferido, **ou**
   - Utilize uma extensão como o **Live Server** (VS Code) para rodar em `http://localhost:5500`.

---

## 🗺️ Próximos Passos (Roadmap)

- [ ] Integração com back-end e banco de dados para persistência de projetos e apoios.
- [ ] Autenticação institucional real via SSO / e-mail `@ufabc.edu.br` e `@aluno.ufabc.edu.br`.
- [ ] Formulário para submissão de novas campanhas por discentes, docentes e entidades.
- [ ] Integração oficial do widget **VLibras** do Governo Federal.
- [ ] Sistema real de comentários e atualizações dos criadores.

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e institucionais no contexto da **Universidade Federal do ABC (UFABC)**. Sinta-se à vontade para explorar, sugerir melhorias e contribuir.
