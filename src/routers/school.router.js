import express from 'express'
import * as schoolUseCases from '../useCases/school.use.js'
import {StatusHttp} from '../libs/statusHttp.js'

const router = express.Router()

router.post('/', async (request, response, next) => {
    try {
        const schoolCreated = await schoolUseCases.create(request.body)

        response.json({
            success: true,
            message: 'Escuela creada!! :D'
        })
    } catch (error) {
        next(new StatusHttp(error.message, error.status, error.name))
    }
})

router.get('/', async (request, response, next) => {
    try {
        const schools = await schoolUseCases.getAll()

        response.json({
            success: true,
            data: {
                schools
            }
        })
    } catch (error) {
        next(new StatusHttp(error.message, error.status, error.name))
    }
})

export default router