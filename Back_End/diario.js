import express from 'express'
import mysql from 'mysql2/promise'




const pool = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'senai',
    database: 'diario_l'
});


diario.post("/registrar", async (req, res) => {
    try {
      const { body } = req;
      const [results] = await pool.query(
        "INSERT INTO usuario (nome, email, senha) VALUES (?,?,?)",
        [body.nome, body.email, body.senha]
      );
  
      const [usuarioCriado] = await pool.query(
        "Select * from usuario WHERE id=?",
        results.insertId
      );
  
      return res.status(201).json(usuarioCriado);
    } catch (error) {
      console.log(error);
    }
  });



  diario.get("/livro", async (req, res) => {
    const { query } = req;
    const pagina = Number(query.pagina) - 1;
    const quantidade = Number(query.quantidade);
    const offset = pagina * quantidade;
  
    const [results] = await pool.query(
      `
      SELECT
        livro.id,
        livro.titulo_do_livro,
        livro.genero,
        livro.nome_autor,
        livro.total_pagina,
        livro.tempo_leitura,
        livro.sua_nota,
      FROM
        diario_l.livro 
      ORDER BY
        livro.id asc
      LIMIT ?
      OFFSET ?
      ;     `,
      [quantidade, offset]
    );
    res.send(results);
  });




  



















  diario.listen(3000, () => {
    console.log(`Servidor rodando na porta: 3000`);
  });
