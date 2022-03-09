const express = require('express');
const { BooksModel } = require('./models');

const app = express();

app.use(express.json());
console.log(BooksModel);
app.get('/books', async (req, res) => {
  try {
    const books = await BooksModel.findAll({ order: [['title', 'ASC'], ['createdAt', 'ASC']] }); // Bônus: Crie uma ordenação no endpoint GET /books para ordenar por ordem alfabética e por data de criação;

    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }

})

app.get('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const books = await BooksModel.findByPk(id);

    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
})

app.post('/books', async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;

    const book = await BooksModel.create({
      title,
      author,
      pageQuantity,
    });

    return res.status(201).json(book);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
})

app.put('/books/:id', async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;
    const { id } = req.params;

    const result = await BooksModel.update(
      {
        title,
        author,
        pageQuantity,
      },
      { where: { id } },
    );

    return res.status(200).json(result);
  } catch (err) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
})

const PORT = 3000;


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});