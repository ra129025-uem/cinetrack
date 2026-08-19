## Cada Filme precisa ter os seguintes campos
- id : identificador único de cada filme
- titulo : Título  original do filme
- sinopse : Resumo ou descrição do filme
- ano_lancamento : ano em que o filme foi lançado
- genero : categoria principal ou conjunto de categorias
- duracao : duração total do filme em minutos
- url_imagem : link da capa do filme

## Áreas da interface do usuário
- Cabeçalho
    - Logo do sistema
    - Campo de busca
    - Botão de adicionar filme
- Painel de filtro (sidebar)
    - Filtro por categoria/genero
    - Ordenacao  (por ano, alfabetico ou add recentemente)
- Listagem de filmes
    - Filmes, notas, capa, comentarios e status
    - Review de outras pessoas do filme selecionado

## Rotas da API
- Listar filmes - GET - /api/filmes
- Buscar filme - GET - /api/filmes/:id 
- Cadastrar filme - POST - /api/filmes
- Atualizar filme - PUT - /api/filmes/:id
- Favoritar filme - POST - /api/filmes/:id/favorito
- Remover filme - DELETE - /api/filmes/:id



