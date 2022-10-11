import mongoose from 'mongoose'

// Schema de Koders

const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    gender: {
        type: String,
        required: true,
        enum: ['h', 'm'] // que valores son validos para este campo
    },
    isGraduate: {
        type: Boolean,
        default: false // tenga un valor por defecto
    }
})

// crear el modelo
//                          (nombre la collección a la que hacemos referencia, schema)
const Koder = mongoose.model('koders', koderSchema)

export {Koder}