SELECT
livro.id_livro,
livro.titulo_do_livro,
livro.genero,
livro.nome_autor,
livro.total_pagina,
livro.tempo_leitura,
livro.sua_nota,
livro.id_user,
(SELECT COUNT(*) FROM diario_l.likes WHERE diario_l.likes.id_livro = livro.id_livro) AS likes,
(SELECT COUNT(*) FROM diario_l.comentario WHERE diario_l.comentario.id_livro = livro.id_livro) as qnt_comments
FROM
diario_l.livro
left JOIN diario_l.likes
ON diario_l.likes.id_livro = diario_l.livro.id_livro
LEFT JOIN diario_l.comentario
ON diario_l.comentario.id_livro = diario_l.livro.id_user
LEFT JOIN diario_l.usuario
ON diario_l.usuario.id_user = diario_l.livro.id_user
GROUP BY
livro.id_livro,
livro.titulo_do_livro,
livro.genero,
livro.nome_autor,
livro.total_pagina,
livro.tempo_leitura,
livro.sua_nota,
livro.id_user
ORDER BY diario_l.livro.id_livro asc
