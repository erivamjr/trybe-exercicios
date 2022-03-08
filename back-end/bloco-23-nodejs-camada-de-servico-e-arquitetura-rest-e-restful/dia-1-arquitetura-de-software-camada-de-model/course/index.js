const express = require('express')
const app = express()
const PORT = 3000
const Authors = require('./models/Author')


app.get('/authors', async (req, res) => {
  const authors = await Authors.getAll()
  return res.status(200).json(authors)
})

/* app.get('/books', async (req, res) => {
  const books = await Authors.getAll()
}) */
app.listen(PORT, () => console.log('app listen in port 3000 online'))