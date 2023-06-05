const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()

// connect to DB
mongoose.connect('mongodb+srv://jacobuskim:JSLY6bccVaDUZjpj@dashboard.ujdqfva.mongodb.net/?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
  console.log('connected to the database')
})

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

app.listen(4000, () => {
  console.log('now listening for requests on port 4000')
})
