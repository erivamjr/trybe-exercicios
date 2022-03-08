const express = require('express');

const moviesController = require('./movies');

const moviesRouter = express.Router({ mergeParams: true })

moviesRouter.get('/', moviesController.listMovies);
moviesRouter.get('/:id', moviesController.getMoviesId)
moviesRouter.post('/', moviesController.createMovies)
moviesRouter.delete('/:id', moviesController.excludeMovies)
moviesRouter.put('/:id', moviesController.updateMovies)

module.exports = {
  moviesRouter,
}