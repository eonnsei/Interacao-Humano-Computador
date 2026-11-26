# UFCROWD — Protótipo de vitrine acadêmica e financiamento coletivo

Protótipo front-end para conectar iniciativas da UFABC a pessoas interessadas em descobri-las, participar delas ou apoiá-las.

## Executar localmente

Recomendado: abrir a pasta com uma extensão de servidor local (por exemplo, Live Server) ou servir os arquivos com um servidor estático.

```bash
python -m http.server 8000
```

Depois, acessar `http://localhost:8000`.

O servidor estático é recomendado porque o protótipo usa rotas por hash e armazenamento local do navegador.

## Estrutura

- `index.html` — estrutura das telas e componentes.
- `css/01-base.css` a `css/10-responsive.css` — estilos, componentes e responsividade.
- `js/01-catalog.js` — catálogo de projetos e entidades de demonstração.
- `js/02-app.js` — navegação, filtros, paginação, telas, cadastro, apoio simulado e ações.
- `js/03-accessibility.js` — painel e ajustes de acessibilidade.
- `img/` — logotipos.

## Navegação

O protótipo usa rotas por hash e `history.pushState` para permitir:

- `#inicio`
- `#categoria/entidades`
- `#categoria/pesquisas`
- `#categoria/atleticas`
- `#categoria/extensao`
- `#projeto/<id>`
- `#entidade/<id>`

Os botões voltar/avançar do navegador restauram a navegação interna.

## O que funciona nesta versão

- Navegação entre home, categorias, projetos e páginas institucionais.
- Histórico do navegador e links diretos por hash.
- Filtros por tipo, objetivo e período; contagens de tipo por categoria.
- Percentual financiado calculado a partir de valor arrecadado/meta e dias restantes calculados pela data limite.
- Paginação de categorias calculada a partir dos resultados.
- Layout responsivo para celular, tablet e desktop.
- Cadastro demonstrativo de entidade.
- Entidades cadastradas e projetos salvos armazenados no `localStorage` do navegador, quando disponível.
- Preferência de lembrete armazenada localmente; não há notificação automática.
- Modal de apoio simulado: altera valores apenas na sessão atual; não processa pagamento.
- Compartilhamento por links externos ou cópia do link.
- Feedback explícito para ações demonstrativas.
- Placeholder ilustrativo para imagens externas e fallback para imagens que não carregarem.
- Painel de personalização visual, ajustes de texto e leitura por voz experimental.

## Limitações deliberadas do protótipo

- Não há backend, banco de dados, autenticação real ou pagamento.
- Login é uma simulação e valida apenas o domínio de e-mail UFABC.
- O cadastro é front-end e a persistência local não é compartilhada entre usuários/dispositivos.
- Lembretes não geram notificações.
- Newsletter não envia nem armazena e-mails.
- Comentários, atualizações, recompensas, comunidade, Libras, legendas e audiodescrição são conteúdos ou controles demonstrativos.
- Leitura por voz é experimental e não substitui leitor de tela nativo.
- O protótipo ainda precisa ser validado com usuários e passar por auditoria de acessibilidade.
- Algumas imagens e links institucionais dependem de serviços externos.

## Próximos passos recomendados

1. Testes de usabilidade com estudantes, entidades e pessoas externas à UFABC.
2. Auditoria de acessibilidade (teclado, leitor de tela, contraste, zoom e dispositivos móveis).
3. Backend, autenticação, banco de dados e moderação.
4. Fluxo real de criação de campanhas e apoio, com segurança e transparência.
5. Integrações oficiais para notícias, editais e oportunidades.
