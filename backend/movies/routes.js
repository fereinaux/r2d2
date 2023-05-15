const controller = require('./controller')
const express = require("express");
const router = express.Router();
const { validationResult } = require('express-validator')
const schemas = require('./schemas')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));

router.get('/movies', async (req, res) => {
  const movies = await controller.getMovies()

  if (movies.length > 0)
    res.send(movies)
  else
    res.status(404).send('Não foi encontrado nenhum filme')
})

router.get('/movies/:id', async (req, res) => {
  const movie = await controller.getMovieById(req.params.id)

  if (movie)
    res.send(movie)
  else
    res.status(movie).send('Não foi encontrado nenhum filme')
})

router.get('/movies/trilogy/:trilogy', async (req, res) => {
  const movies = await controller.getMoviesByTrilogy(req.params.trilogy)

  if (movies.length == 0)
    res.status(404).send('trilogia não encontrada')
  else
    res.send(movies)
})

router.get('/movies/alphabetical', async (req, res) => {
  const movies = await controller.getMoviesOrderByName()

  if (movies.length > 0)
    res.send(movies)
  else
    res.status(404).send('Não foi encontrado nenhum filme')
})

router.post('/movies',
  schemas.movieSchema(),
  async (req, res) => {
    const result = validationResult(req);
    if (result.errors.length > 0) {
      res.status(400).send({ errors: result.errors.map(erro => erro.msg) })
    } else {
      await controller.addMovie(req.body)
      const movies = await controller.getMovies()
      res.status(201).send(movies)
    }
  })

router.put('/movies/:id',
  schemas.movieSchema(),
  async (req, res) => {
    const result = validationResult(req);
    if (result.errors.length > 0) {
      res.status(400).send({ errors: result.errors.map(erro => erro.msg) })
    } else {
      await controller.updateMovie(req.body, req.params.id)
      const movies = await controller.getMovies()
      res.status(200).send(movies)
    }
  })

router.delete('/movies/:id', async (req, res) => {
  await controller.deleteMovie(req.params.id);

  const movies = await controller.getMovies()

  res.status(200).send(movies)
})


// ----------------------------------------------------

router.get('/movies/sequential', (req, res) => {
  res.send(controller.ordemSequencial())
})

router.get('/movies/movie-release', (req, res) => {
  res.send(controller.ordemLancamento())
})

module.exports = router