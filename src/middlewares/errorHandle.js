function errorHandle(error, request, response, next) {
    response.status(error.status).json({
        success: false,
        message: error.message
    })
}

export {errorHandle}