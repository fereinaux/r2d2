const express = require('express')
const bodyParser = require('body-parser');
const movieRoutesTopic = require('./movies/routes')
const cors = require('cors')
const port = process.env.PORT || 4000;

const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(movieRoutesTopic)

app.listen(port, function () {
  console.log(`O aplicativo está rodando na porta ${port}`)
})


