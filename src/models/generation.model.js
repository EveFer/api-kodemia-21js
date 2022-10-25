import mongoose from 'mongoose'

const generationSchema = new mongoose.Schema({
    year: {
        type: String,
        minlength: 4,
        maxlength: 10,
        required: true
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'schools'
    },
})

export const Generation = mongoose.model('generations', generationSchema)