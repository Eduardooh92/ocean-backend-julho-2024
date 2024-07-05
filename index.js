const express = require('express')
const { MongoClient } = require('mongodb')
const app = express()

const dbUrl = 'mongodb+srv://admin:hX1f3KxkJ0iRye82@cluster0.nqof4rz.mongodb.net/'
const dbName = 'ocean-jornada-backend'

const client = new MongoClient(dbUrl)

async function main() {
console.log('Conectando ao banco de dados...');
await client.connect()
console.log('Banco de dados conectado com sucesso');

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/oi', function (req, res) {
  res.send('Oi mundo!')
})


//Lista de personagens
const lista = ['Rick Sanchez', 'Morty Smith', 'Summer  Smith']

//Read All - [GET] /item
app.get('/item', function (req, res) {
  res.send(lista)
})

//Sinalizando para o Express que vamos usar JSOn no Body
app.use(express.json())

// Create - [POST] /item
app.post('/item', function(req, res) {
  console.log(req.body);
  const item = req.body
  res.send('Create')
})



app.listen(3000)
}

main()