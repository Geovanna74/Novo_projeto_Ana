import express from 'express'
import mysql from 'mysql2/promise'


const app = express()



const pool = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'senai',
  database: 'diario_l'
});

 



app.get("/livro", async (req, res) => {
  const [results] = await pool.query(query, values);

 
const query = `
INSERT INTO livro (
    id_user,
    titulo_do_livro,
    genero,
    nome_autor,
    total_pagina,
    tempo_leitura,
    sua_nota,
    resenha
)
VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`;

const {
  titulo_do_livro,
  genero,
  nome_autor,
  total_pagina,
  tempo_leitura, 
  sua_nota,
  resenha,
  id_user 
} = req.body;

const values = [
id_user,
titulo_do_livro,
genero,
nome_autor,
total_pagina,
tempo_leitura,
sua_nota,
resenha
];




if (results.affectedRows > 0) {
return res.status(201).json({
    message: "Leitura registrada com sucesso!",
    livro_id: results.insertId
});
}
try {

} catch (error) {
console.error("Erro ao registrar leitura:", error);
}

return res.status(500).json({
message: "Erro interno ao processar a requisição.",
error: error.message
});

  res.send(results);
});




























app.listen(3000, () => {
  console.log(`Servidor rodando na porta: 3000`);
});
