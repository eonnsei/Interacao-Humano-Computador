# UFCROWD — Auditoria e correções

## Problemas encontrados na versão original

### Críticos
- Navegação visual era SPA, mas não atualizava o histórico do navegador.
- URL não identificava a tela atual, dificultando links diretos e recarregamento.
- Em viewport de 320 px, o cabeçalho causava overflow horizontal.
- Filtros iniciavam selecionados e ocultavam tipos de conteúdo; Atléticas, por exemplo, ocultava competições.
- Paginação de categoria sempre mostrava três páginas, inclusive páginas vazias.
- Login simulado aceitava e-mails de qualquer domínio.

### Importantes
- Contagens dos filtros eram valores estáticos e não correspondiam ao catálogo.
- Compartilhamento apenas exibia uma mensagem; não copiava nem abria os destinos.
- Lembrete apenas exibia uma mensagem.
- Links de redes sociais e rodapé eram placeholders.
- O cadastro não persistia entidades.
- Conteúdo de abas e contagens eram apresentados como se fossem reais, embora fossem exemplos.
- A leitura por voz era apresentada como leitor de tela; Libras, legendas e audiodescrição não eram integrações reais.
- Datas e dias restantes das campanhas eram inconsistentes.
- Imagens externas não tinham fallback.

## Correções aplicadas

- Router por hash, `pushState`/`replaceState`, `popstate`, rotas diretas e restauração de filtros/página.
- Botões voltar usam histórico interno quando há entrada anterior; fallback para rota segura.
- Breakpoints dedicados, menu horizontal móvel, filtros recolhíveis, cards, abas, modais e formulários responsivos.
- Filtros começam desmarcados (mostrar todos); contagens calculadas por categoria; opções sem resultados ficam desativadas.
- Paginação dinâmica baseada no número real de resultados e estado desabilitado dos controles de navegação.
- Login de demonstração restringido aos domínios `ufabc.edu.br` e `aluno.ufabc.edu.br`.
- Cadastro local de entidades, projetos salvos e preferências de lembrete usam armazenamento local quando disponível.
- Apoio, lembrete, newsletter e conteúdos de exemplo passaram a indicar explicitamente seu caráter demonstrativo.
- Compartilhamento passou a copiar o link ou abrir o destino correspondente.
- Links inexistentes foram removidos/substituídos por navegação funcional ou rótulos “Em breve”.
- Projetos similares priorizam a mesma categoria.
- Dias restantes e percentuais calculados a partir da data limite e dos valores arrecadado/meta; campanhas encerradas não permitem simular novo apoio.
- Abas receberam IDs, controles ARIA, estado de foco e navegação por setas com ativação.
- Painel de acessibilidade passou a usar nomes mais honestos para leitura por voz e recursos não integrados.
- Fallback ilustrativo para imagens quebradas e fundo de placeholder para imagens externas que demoram/não carregam.
- README atualizado.

## Testes executados

- Navegação Home → Categoria → Projeto/Perfil → Voltar.
- Browser back/forward e restauração de categoria/filtros.
- Acesso direto por hash a categoria, projeto e entidade.
- Filtros, limpeza de filtros, contagem de resultados e paginação dinâmica.
- Cadastro demonstrativo, login inválido/válido e fluxo de entidade.
- Abas de campanha.
- Salvar projeto, lembrete e modal de apoio.
- Compartilhamento, links de rodapé e acesso ao painel de acessibilidade.
- Fechamento de modal e restauração de foco.
- Newsletter com mensagem transparente de simulação.
- Teste de overflow horizontal em 320, 360, 390, 430, 600, 768, 1024 e 1365 px, em Home, Categoria, Projeto, Perfil, modal de apoio e painel de acessibilidade: **0 px de overflow medido**.
- Zoom de texto 150% e 200% em 320, 390, 768 e 1280 px: **0 px de overflow medido** (incluindo ajustes adicionais do rodapé em 200%).
- Percentuais calculados conferidos: microplásticos 53%, Scuderia 74%, TamanduTech 215%, lixo eletrônico 89% (encerrado).
- JavaScript: nenhum erro de execução nas rotas e fluxos testados.
- HTML: IDs duplicados, links vazios e botões sem nome acessível não encontrados.

## Limitações que continuam

- Backend, autenticação, pagamentos e banco de dados ainda não existem.
- Persistência é local ao navegador/dispositivo; apoio simulado dura apenas a sessão.
- Lembretes não enviam notificações.
- Newsletter não envia e-mails.
- Comentários, atualizações, recompensas, comunidade e integrações audiovisuais continuam demonstrativos.
- A acessibilidade ainda precisa de validação com tecnologias assistivas e usuários reais.
- Imagens e algumas páginas externas dependem de conexão e serviços de terceiros.

## Próxima rodada

1. Testes de usabilidade moderados e não moderados.
2. Auditoria WCAG 2.2 AA, incluindo leitor de tela, zoom 200%, teclado e contraste.
3. Revisão dos dados e links oficiais.
4. Planejamento de backend e segurança antes de transformar as simulações em transações reais.

### Testes adicionais de acessibilidade e persistência

- Navegação por teclado nas abas de campanha: setas movem foco e ativam a aba.
- Skip link: primeiro elemento focável; Enter leva ao título da visão ativa.
- Painel de acessibilidade: alternância e restauração dos estados testados sem erros de JavaScript.
- Ampliação de texto em 150% e 200%: overflow horizontal corrigido e medido em 320, 390, 768 e 1280 px.
- Persistência local: rotinas de salvar projeto, preferência de lembrete e carregar entidades registradas foram verificadas com armazenamento local simulado no ambiente de teste.
