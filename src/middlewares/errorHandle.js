// Una aplicación de manejo de errores con un middleware:
export function handleErrors(error, request, response, next) {
    // console.log(err);
    // res.status(500).send('An internal server error occurred');
    console.log('======')
    console.log(error.name)
    console.log(error.status)
    console.log(error.message)
    if(error.name === 'ValidationError') {
        response.status(400).json({success: false, message: error.message})
        return
    }
    response.status(error.status).json({
        success: false, 
        message: error.message
    })
}