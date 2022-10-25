import {School} from '../models/school.model.js'
import bcrypt from '../libs/bcrypt.js'
import {StatusHttp} from '../libs/statusHttp.js'

async function create(newSchool) {
    /*
    validar que no exita un 
    encriptar password
    
    */
    const {email, password} = newSchool
    const schoolFound = await School.findOne({email})

    if(schoolFound) throw new StatusHttp('Ya existe una escuela con este correo', 400)
    const encryptedPassword = await bcrypt.hash(password)

    return School.create({...newSchool, password: encryptedPassword})
}

function getAll() {
    return School.find().populate('generations')
}

export {
    create,
    getAll
}