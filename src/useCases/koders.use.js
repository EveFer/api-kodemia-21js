import {Koder} from '../models/koders.model.js'

function getAll() {
   return Koder.find({}) // regresa la promesa
}

export {
    getAll
}