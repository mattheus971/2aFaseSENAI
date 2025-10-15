const express = require('express')
const mysql = require('mysql2')
const app = express()
const port = 3000

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    database: "crud_aula",
    user: "root",
    password: "senai"
})

connection.connect()

app.post('/clientes', async (req, res) => {
const {nome, endereco, email, telefone} = req.body;
try {
    const [result] = await
    connection.query(
        `INSERT INTO clientes (nome, endereco, email, telefone) VALUES
        (?, ?, ?, ?)`
        [nome, endereco, email, telefone]
    )
    const [novo_cliente] = await connection.query(
        `SELECT * FROM cliente WHERE is = ?`, [result.insertId]
    )
    res.status(201).json((novo_cliente[0]))
} catch (erro) {
    console.error(erro.message)
    res.status(500).json({erro: "Falha do servidor ao criar o cliente"})
    
}
})

app.get('/', (req, res) => {
    res.send('Olá Mundo!')
})

app.listen(port, () => {
    console.log(`API Funcinando na porta ${port}`)
})


