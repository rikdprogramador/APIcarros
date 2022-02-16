// fica aqui o que não é regra de negócio mas é necessário para executar o app

const mysql = require("mysql2")

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "18981898",
    database: "lista-carros"
})

module.exports = conexao