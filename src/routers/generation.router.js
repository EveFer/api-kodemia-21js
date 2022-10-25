import express from 'express'
import * as generationUseCases from '../useCases/generation.use.js'
import {StatusHttp} from '../libs/statusHttp.js'

const router = express.Router()

router.post('/', async (request, response, next) => {
    try {
        const {schoolCurrent} = request
        //  await generationUseCases.create(request.body, schoolCurrent)
        await generationUseCases.create({...request.body, school: schoolCurrent})

        response.json({
            success: true,
            message: 'Generation creada!! :D'
        })
    } catch (error) {
        next(new StatusHttp(error.message, error.status, error.name))
    }
})

router.get('/', async (request, response, next) => {
    try {
        const generations = await generationUseCases.getAll()

        response.json({
            success: true,
            data: {
                generations
            }
        })
    } catch (error) {
        next(new StatusHttp(error.message, error.status, error.name))
    }
})

export default router