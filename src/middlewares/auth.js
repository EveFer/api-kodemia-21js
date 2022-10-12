import jwt from '../libs/jwt.js'

function auth(request, response, next) {
    try {
        const {authorization: token} = request.headers

        const isValidToken = jwt.verify(token)
        console.log(isValidToken)

        if(!isValidToken) throw new Error('No autorizado D:')

        next()
    } catch (error) {
        response.status(401)
        response.json({
            success: false,
            message: 'No autorizado u.u',
            error: error.message
        })
    }
}

export {auth}