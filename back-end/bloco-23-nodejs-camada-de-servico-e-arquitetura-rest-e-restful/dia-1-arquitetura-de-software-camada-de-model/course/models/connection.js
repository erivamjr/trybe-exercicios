// importando o modulo de mysql e como vai trabalhar com assincronicidade colocamos outro modulo /promise
const mysql = require('mysql2/promise')

// criando um objeto que retorna uma função para trabalhar com multiconexões
const connection = mysql.createPool({
  user: 'root',
  password: 'Trybe123',
  host: 'localhost',
  database: 'model_example'
})

module.exports = connection;