import {Koder} from '../models/koders.model.js'
import bcrypt from '../libs/bcrypt.js'
import {StatusHttp} from '../libs/statusHttp.js'

async function create(newKoder) {
    // modificar
    const {email, password} = newKoder
    // find({}) -> []
    const koderFound = await Koder.findOne({email}) //-> {} 
    //  si lo encuentra -> {}
    // si no lo encuentra -> undefined

    if(koderFound) throw new StatusHttp('Ya existe un koder con este email', 400)

    // Encriptar el password
    const encryptedPassword = await bcrypt.hash(password)

    return Koder.create({...newKoder, password: encryptedPassword})
}

function getAll() {
    return Koder.find({}) // regresa la promesa
}

function getById(id) {
    return Koder.findById(id)
}

function updateById(idKoder, newData) {
    return Koder.findByIdAndUpdate(idKoder, newData, {new: true})
}

function deleteById(idKoder) {
    return Koder.findOneAndDelete(idKoder)
}


export {
    getAll,
    create,
    updateById,
    deleteById,
    getById
}