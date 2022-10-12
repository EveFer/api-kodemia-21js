import {Koder} from '../models/koders.model.js'
import bcrypt from '../libs/bcrypt.js'
import jwt from '../libs/jwt.js'

async function login(email, password){
    const koderFound = await Koder.findOne({email})

    if(!koderFound) throw new Error('Credenciales invalidas')

    const isValidPassword = await bcrypt.compare(password, koderFound.password)

    if(!isValidPassword) throw new Error('Credeenciales invalidas')

    return jwt.sign({id: koderFound._id})
}

export{login}