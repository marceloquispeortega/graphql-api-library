'use strict'

// const {buildSchema} = require('graphql') 
// Similar a buildSchema pero más avanzado
const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const gplMiddleware = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const app = express()
const port = process.env.port || 3000

//definiendo el esquema y leyendolo desde un archivo
const typeDefs = readFileSync(
    join(__dirname, 'lib', 'schema.graphql'), 'utf-8'
)

//leyendo desde un schema
const schema = makeExecutableSchema({ typeDefs, resolvers })

// Ejecutar las consultas
// graphql(schema, '{ hola }', resolvers).then((data) => {
//     console.log(data)
// })

// Definimos el Middleware en un endpoint
app.use('/api', gplMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: true //entorno de desarrollo de GraphQL
}))

app.listen(port, () => {
    console.log(`Servidor está escuchando en http://localhost:${port}/api`)
})