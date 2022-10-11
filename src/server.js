/*
server:
    Este archivo guardará la definición del server
        - Que middlewares van a usar - montal los middlewares
        - Montar routers
*/
import express from 'express'
import kodersRouter from './routers/koders.router.js'
const server = express()

// middlewares
server.use(express.json())

// Routers
server.use('/koders', kodersRouter)


// middleware - handleErrors

export {server}