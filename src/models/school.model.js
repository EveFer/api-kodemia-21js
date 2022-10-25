import mongoose from 'mongoose'

const schoolSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: /.*@.*\..*/
    },
    password: {
        type: String,
        required: true
    },
    generations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'generations'
    }]
})

export const School = mongoose.model('schools', schoolSchema)