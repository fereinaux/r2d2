const { PrismaClient } = require(".prisma/client")

const prisma = new PrismaClient()

const getMovies = async () => {
  const movies = await prisma.movie.findMany()
  return movies
}

const getMovieById = async (id) => {
  const movie = await prisma.movie.findUnique({
    where: {
      id: id
    }
  })
  return movie
}


const getMoviesByTrilogy = async (trilogy) => {
  const movies = await prisma.movie.findMany({
    where: {
      trilogy: trilogy
    }
  })
  return movies
}

const getMoviesOrderByName = async () => {
  const movies = await prisma.movie.findMany({
    orderBy: {
      name: "asc"
    }
  })
  return movies
}

const addMovie = async (movie) => {
  await prisma.movie.create({
    data: movie
  })
}

const updateMovie = async (movie, id) => {
  await prisma.movie.update({
    where: {
      id: id
    },
    data: movie
  })
}

const deleteMovie = async (id) => {
  await prisma.movie.delete({
    where: {
      id: id
    }
  })
}

// ----------------------------------------------------


function ordemSequencial() {
  const ordemSequencial = movies.filter(filme => filme.sequential).sort((a, b) => {
    if (a.sequential < b.sequential) return -1
  })

  return ordemSequencial
}

function ordemLancamento() {
  const ordemLanc = movies.filter(filme => filme.year).sort((a, b) => {
    if (a.year < b.year) return -1
  })

  return ordemLanc
}

module.exports = {
  getMovies,
  getMovieById,
  getMoviesByTrilogy,
  getMoviesOrderByName,
  addMovie,
  updateMovie,
  deleteMovie
}