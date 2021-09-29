const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
/* 7 - Encontre o nome do livro escrito pela 
pessoa cujo nome registrado começa com três iniciais.
Dica: cada inicial termina com um ponto. */
const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // escreva seu código aqui
  return books
  .find((book)=>(book.author.name.split(' ')
  .filter((word)=>word.endsWith('.')).length === 3)).name;
}
// split(' ') quebrar as strings nos espaços para formar o array de strings
// endsWith('.')retorna true se tiver o ponto dentro no final de cada string
// .length === 3 se o tamanhao do array for de 3 posições então imprima o nome do livro
const test = books.find((book)=>(book.author.name.split(' ').filter((word)=>word.endsWith('.')).length === 3));
console.log(test);
console.log(authorWith3DotsOnName());
assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);
