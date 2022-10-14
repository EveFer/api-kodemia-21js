class StatusHttp extends Error{
    constructor(message, status, name) {
        super(message, name)
        this.status = status || 500
        this.name = name || 'ErrorValidation'
    }
}

export { StatusHttp }