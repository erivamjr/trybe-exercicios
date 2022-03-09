const express = require('express');
const { BooksModel } = require('./models');

const app = express();

app.use(express.json());
console.log(BooksModel);
app.get('/', (req, res) => {
  BooksModel.findAll().then(books => {
    console.log('teste', books);
    res.status(200).json(books);
  }).catch(err => {
    console.log(err.message)
    res.status(500).json({ message: 'Algo deu errado!' })
  })

})
const PORT = 3000;


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});