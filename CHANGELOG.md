# UFCROWD — mudanças desta revisão

## Navegação e estrutura
- Histórico do navegador com rotas por hash e restauração de estado.
- Links diretos para categorias, projetos e perfis.
- Botões de retorno usam o histórico quando possível.

## Interface e mobile
- CSS responsivo para desktop, tablet e celular.
- Menu de categorias horizontal no celular.
- Filtros recolhíveis no mobile.
- Cards, campanhas, perfis, formulários, modais e rodapé refluem para telas estreitas.
- Ajustes para ampliação de texto de 150% e 200%.
- Placeholder ilustrativo para imagens externas indisponíveis.

## Funcionalidades
- Filtros iniciam sem seleção; contagens são calculadas por categoria.
- Paginação dinâmica e sem páginas vazias.
- Percentual de financiamento calculado por arrecadado/meta.
- Dias restantes calculados pela data de encerramento.
- Campanhas encerradas não permitem novo apoio simulado.
- Projetos salvos e preferências de lembrete armazenados localmente.
- Cadastro demonstrativo pode persistir no navegador.
- Compartilhamento copia o link ou abre a plataforma correspondente.
- Login demonstrativo restringido a e-mails UFABC.
- Links inexistentes substituídos por ações funcionais ou indicação “Em breve”.

## Transparência
- Apoio, autenticação, newsletter, comentários, recompensas e conteúdos de campanha são explicitamente demonstrativos.
- Leitura por voz experimental não é apresentada como substituta de leitor de tela.
- Integrações de Libras, legendas e audiodescrição são indicadas como pendentes.


## Merge da versão de 25/11/2026

- Preservadas as melhorias de navegação, responsividade, filtros, paginação e acessibilidade da versão revisada.
- Incorporadas as quatro alterações de imagens presentes no último commit enviado pelo usuário (commit `Foto tamandutech`).
- Mantidas as demais alterações funcionais da versão revisada, sem substituir arquivos de lógica ou estilos pela versão anterior.

## Revisão de acessibilidade (novembro/2026)

- Removida a leitura automática ao receber foco; ela competia com VoiceOver, TalkBack e NVDA.
- Implementados controles explícitos de leitura por voz: ouvir seleção, ouvir conteúdo da tela atual, pausar/continuar, parar e velocidade de 0,75× a 2×.
- Renomeada a ferramenta para **Leitura assistida**, deixando explícito que não substitui leitor de tela nativo.
- Integrado o widget oficial VLibras com o botão flutuante azul (dependente de conexão com internet).
- Reorganizada a descrição do painel para priorizar navegação, leitura e ajustes.
- Adicionados foco visível consistente, skip link funcional para a view atual, anúncios de mudança de tela para leitores de tela e persistência local de preferências.
- Reformulado o painel no mobile como painel alto, com rolagem interna, controles maiores e adaptação a safe areas.
- Removidos botões demonstrativos de legendas e audiodescrição sem conteúdo audiovisual real.
- Melhorias no foco do botão VLibras e respeito a `prefers-reduced-motion`.
