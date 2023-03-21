const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors(), express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "hamburguer",
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Conectado ao banco de dados MySQL");
});

app.get("/dados", (req, res) => {
  connection.query("SELECT * FROM produtos", (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
});

app.put('/dados/:id', (req, res) => {
  const id = req.params.id;
  const nome = req.body.nome;
  const valor = req.body.valor;

  connection.query(`UPDATE produtos SET nome = ?, valor = ? WHERE id = ?`,
    [nome, valor, id], (err) => {
      if (err) {
        console.log(err);
        res.status(500).send({ message: 'Erro ao atualizar os dados' });
      } else {
        res.send({ message: 'Dados atualizados com sucesso!' });
      }
    });
});


app.listen(3000, () => {
  console.log("Servidor está escutando na porta: http://localhost:3000/dados");
});
