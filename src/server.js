/*
server:
    Este archivo guardará la definición del server
        - Que middlewares van a usar - montal los middlewares
        - Montar routers
*/
import express from 'express'

const server = express()

// middlewares
server.use(express.json())

// Routers


// middleware - handleErrors

export {server}