import express from 'express'
import * as authUseCases from '../useCases/auth.use.js'
import {StatusHttp} from '../libs/statusHttp.js'

const router = express.Router()

router.post('/login', async (request, response, next) => {
    try {
        const {email, password} = request.body
        const token = await authUseCases.login(email, password)
        response.json({
            success: true,
            token
        })
    } catch (error) {
        // response.status(400)
        // response.json({
        //     success: false,
        //     message: error.message
        // })
        next(new StatusHttp(error.message, error.status, error.name))
    }
})

router.post('/users', async (request, response, next) => {
    try {
        const {email, password} = request.body
        const token = await authUseCases.loginUser(email, password)
        response.json({
            success: true,
            token
        })
    } catch (error) {
        next(new StatusHttp(error.message, error.status, error.name))
    }
})

// new Error() ❌
// new StatusHttp() ✅

export default router


/*
Los admins podrán:
    -crear koders
    - actualizar koders
    - eliminar koders
    - detalle de cada koder
    - obtener todos los koders

Los users:
    - detalle de cada koder
    - obtener todos los koders

- Modificar el middleware de auth para validar el error

    - crear un middleware que valide el role
    

- Validarlo desde el caso de uso 

*/