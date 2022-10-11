import express from 'express'
import * as kodersUsesCases from '../useCases/koders.use.js'

const router = express.Router()
// La comunicación de a afuera hacia adentro
// Endpoint -> casos de uso -> modelos

router.get('/', async (request, response, next) => {
    try {
        const allKoders = await kodersUsesCases.getAll()
        response.json({
            success: true,
            data: {
                koders: allKoders
            }
        })
    } catch (error) {
        // reemplazar por el middleware del handleErrors
        response.status(400)
        response.json({
            success: false,
            message: error.message
        })
    }
})
export default router


/*
Práctica
GET /koders/:id -> Annie | Fanny | Vic
PATCH /koders/:id -> Hector | Rodri | Emma
DELETE /koders/:id -> Fer | Rafa
POST /koders -> Cin | Deni | Jonatan

15mins
*/