var mysql = require("mysql");

var con = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: "hamburguer", // Configure de acordo com o banco criado caso tenha dado outro nome
});

//Creating table with autoincrement
con.query(
  "CREATE TABLE IF NOT EXISTS produtos (id int NOT NULL AUTO_INCREMENT, PRIMARY KEY(id), nome VARCHAR(255), valor int)",
  function (err, result) {
    if (err) throw err;
    console.log("Table created");
  }
);

//Insert into produtos
var sql = "INSERT INTO produtos (nome, valor) VALUES ?";
var values = [
  ["Pão", 10],
  ["Alface", 10],
];

con.query(sql, [values], function (err, result) {
  if (err) throw err;
  console.log("Number of records inserted: " + result.affectedRows);
});
