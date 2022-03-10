const express = require('express');
const res = require('express/lib/response');

const app = express();
// 1-Crie uma array drinks com os seguintes objetos dentro dela e uma rota GET /drinks que retorna a lista de bebidas.
const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Agua Mineral 500 ml', price: 5.0 },
];

// 2-Modifique tanto a rota de bebidas como de receitas para retornar a lista ordenada pelo nome em ordem alfabética.
app.get('/drinks', (req, res) => {
  const sortDrinks = drinks.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
  console.log(sortDrinks);
  return res.json(sortDrinks);
})

app.listen(3001, (req, res) => {
  console.log('Aplicação ouvindo na porta 3001');
});

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const recipe = drinks.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!' });

  res.status(200).json(recipe);
});

