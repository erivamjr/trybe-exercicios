const connection = require('./connections')

const getAll = async () => {

  const [results] = await connection.execute('SELECT * FROM Pixar.Movies;');
  return results
}

const getById = async (id) => {
  const [results] = await connection.execute('SELECT * FROM Pixar.Movies WHERE id = ?', [id]);
  return results
}

const createMovies = async (movies) => {
  const [returnMovies] = await connection.execute('INSERT INTO Pixar.Movies (title, director, year, length_minutes) VALUES (?, ?, ?, ?)',
    [movies.title, movies.director, movies.year, movies.length_minutes])
  return {
    id: returnMovies.insertId,
    ...movies,
  }
}

const excludeMovies = async (id) => {
  await connection.execute('DELETE FROM Pixar.Movies WHERE id = ?', [id])
}

const updateMovies = async (movies) => {
  await connection.execute(
    `UPDATE
      Pixar.Movies 
    SET 
      title = ?,
      director = ?,
      year = ?,
      length_minutes = ?
    WHERE id = ?`,
    [movies.title, movies.director, movies.year, movies.length_minutes, movies.id])
  return movies
}

module.exports = {
  getAll,
  getById,
  createMovies,
  excludeMovies,
  updateMovies,
}