// const mysql = require('mysql2/promise');
const express = require('express');

//routers
const routers = require('./controlers/routers')

//errors
const error = require('./middlewares/error')

// controlers
//const listMovies = require('./controlers/movies');
const PORT = 3000;

const app = express();

app.use(express.json())

app.use('/movies', routers.moviesRouter)
/* app.get('/movies', listMovies.listMovies);
app.get('/movies/:id', listMovies.getMoviesId)
app.post('/movies', listMovies.createMovies)
app.delete('/movies/:id', listMovies.excludeMovies)
app.put('/movies/:id', listMovies.updateMovies) */

app.use(error)

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
