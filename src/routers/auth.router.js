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

// new Error() ❌
// new StatusHttp() ✅

export default router