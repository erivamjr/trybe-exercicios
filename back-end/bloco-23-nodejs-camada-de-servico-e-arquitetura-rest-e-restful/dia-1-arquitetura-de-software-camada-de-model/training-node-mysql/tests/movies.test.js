const { expect } = require('chai')

const moviesModels = require('../models/movies')

describe('Listar todos os filmes', () => {
  test('O resultado é um array', async () => {
    const movies = await moviesModels.getAll();
    expect(movies).to.be.an('array')
  })

  test('Mostrar as propriedades do objeto no array', async () => {
    const movies = await moviesModels.getAll();
    movies.forEach((char) => {
      expect(char).to.have.keys('id', 'title', 'director', 'year', 'length_minutes')

    })
  })
})