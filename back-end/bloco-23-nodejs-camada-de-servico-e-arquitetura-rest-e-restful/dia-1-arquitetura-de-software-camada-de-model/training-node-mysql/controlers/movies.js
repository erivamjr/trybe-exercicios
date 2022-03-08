const moviesModels = require('../models/movies')
const { StatusCodes } = require('http-status-codes');

// função pega o banco de dados
const listMovies = async (req, res, next) => {
  try {
    const movies = await moviesModels.getAll()
    return res.status(StatusCodes.OK).json(movies)

  } catch (e) {
    next(e);
  }
}

const getMoviesId = async (req, res, next) => {
  try {
    const { id } = req.params
    const movies = await moviesModels.getById(parseInt(id))
    if (!movies.length) return res.status(StatusCodes.NOT_FOUND).end();
    return res.status(StatusCodes.OK).json(movies[0])

  } catch (err) {
    next(err);
  }
}

const createMovies = async (req, res, next) => {
  try {
    const { title, director, year, length_minutes } = req.body
    const createdMovies = await moviesModels.createMovies({ title, director, year, length_minutes })
    return res.status(StatusCodes.CREATED).json(createdMovies)
  } catch (err) {
    next(err);
  }
}

const excludeMovies = async (req, res, next) => {
  try {
    const { id } = req.params
    const movies = await moviesModels.getById(parseInt(id))
    if (!movies.length) return res.status(StatusCodes.NOT_FOUND).end();

    await moviesModels.excludeMovies(id);
    return res.status(StatusCodes.NO_CONTENT).end();
  } catch (err) {
    next(err);
  }
}

const updateMovies = async (req, res, next) => {
  try {
    const { id } = req.params
    const movies = await moviesModels.getById(parseInt(id))
    if (!movies.length) return res.status(StatusCodes.NOT_FOUND).end();

    const { title, director, year, length_minutes } = req.body
    const updateMovies = await moviesModels.updateMovies({
      id: parseInt(id),
      title,
      director,
      year,
      length_minutes,
    });
    return res.status(StatusCodes.OK).json(updateMovies);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  listMovies,
  getMoviesId,
  createMovies,
  excludeMovies,
  updateMovies,

}