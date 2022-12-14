import express from 'express'
import * as kodersUsesCases from '../useCases/koders.use.js'
import {auth} from '../middlewares/auth.js'
import {access} from '../middlewares/accessRole.js'
import {StatusHttp} from '../libs/statusHttp.js'

const router = express.Router()
// La comunicación de a afuera hacia adentro
// Endpoint -> casos de uso -> modelos

router.use(auth)

// admin
router.post('/', access('admin'), async(request, response, next) => {
    try {
        const {body: newKoder} = request
        await kodersUsesCases.create(newKoder)

        response.json({
            success: true,
            message: 'Koder creado!'
        })
    } catch (error) {
        // TODO: reemplazar por el middleware del handleErrors
        next(new StatusHttp(error.message, error.status, error.name))
    }
})

// admin y user
router.get('/',access('admin', 'user'), async (request, response, next) => {
    try {
        const allKoders = await kodersUsesCases.getAll()
        response.json({
            success: true,
            data: {
                koders: allKoders
            }
        })
    } catch (error) {
        // TODO: reemplazar por el middleware del handleErrors
        next(new StatusHttp(error.message, error.status, error.name))
    }
})

// admin y user
router.get('/:id',  access('admin', 'user'), async (request, response, next) => {
    try {
        const {id} = request.params
        const koder = kodersUsesCases.getById(id)

        response.json({
            success: true,
            data: {
                koder
            }
        })
    } catch (error) {
        // TODO: reemplazar por el middleware del handleErrors
        next(error)
    }
})

// admin
router.patch('/:id', access('admin'),  async (request, response, next) => {
    try {
        const {id} = request.params
        const {body} = request
        const koderUpdated = kodersUsesCases.updateById(id,body)

        response.json({
            success: true,
            data: {
                koder: koderUpdated
            }
        })
    } catch (error) {
        // TODO: reemplazar por el middleware del handleErrors
        // response.status(400)
        // response.json({
        //     success: false,
        //     message: error.message
        // })
        next(new StatusHttp(error.message, error.status, error.name))
    }
})

// admin
router.delete('/:id', access('admin'), async(request, response, next) => {
    try {
        const {id} = request.params
        await kodersUsesCases.deleteById(id)

        response.json({
            success: true,
            message: 'Koder eliminado'
        })
    } catch (error) {
        // PENDING: reemplazar por el middleware del handleErrors
        next(new StatusHttp(error.message, error.status, error.name))
    }
})


export default router
// import algunRouter from 'path'

// export {router}
// import {router} from 'path'

/*
Práctica
GET /koders/:id -> Annie | Fanny | Vic
PATCH /koders/:id -> Hector | Rodri | Emma
DELETE /koders/:id -> Fer | Rafa
POST /koders -> Cin | Deni | Jonatan

15mins
*/