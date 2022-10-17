import express from 'express'
import * as usersUseCases from '../useCases/users.use.js'
import {StatusHttp} from '../libs/statusHttp.js'

const router = express.Router()

router.post('/', async (request, response, next) => {
    try {
        const userCreated = await usersUseCases.create(request.body)
        response.json({
            success: true,
            message: 'Usuario creado!!'
        })
    } catch (error) {
        next(new StatusHttp(error.message, error.status, error.name))
    }
})

export default router