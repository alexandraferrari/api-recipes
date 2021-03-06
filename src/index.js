require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser')

const db = require('./queries')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/recipes', db.getRecipes)
app.get('/recipes/:id', db.getRecipeById)
app.post('/recipes', db.createRecipe)
app.put('/recipes/:id', db.updateRecipe)
app.delete('/recipes/:id', db.deleteRecipe)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})