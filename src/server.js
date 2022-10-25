/*
server:
    Este archivo guardará la definición del server
        - Que middlewares van a usar - montal los middlewares
        - Montar routers
*/
import express from 'express'
import cors from 'cors'
import kodersRouter from './routers/koders.router.js'
import usersRouter from './routers/users.router.js'
import authRouter from './routers/auth.router.js'
import schoolRouter from './routers/school.router.js'
import generationRouter from './routers/generation.router.js'
import {errorHandle} from './middlewares/errorHandle.js'
const server = express()

// middlewares
server.use(express.json())
server.use(cors())

// Routers
server.use('/koders', kodersRouter)
server.use('/auth', authRouter)
server.use('/users', usersRouter)
server.use('/schools', schoolRouter)
server.use('/generations', generationRouter)


// middleware - handleErrors
server.use(errorHandle)

export {server}