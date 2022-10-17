import {Koder} from '../models/koders.model.js'
import {User} from '../models/users.model.js'
import bcrypt from '../libs/bcrypt.js'
import jwt from '../libs/jwt.js'
import {StatusHttp} from '../libs/statusHttp.js'

async function login(email, password){
    const koderFound = await Koder.findOne({email})

    if(!koderFound) throw new StatusHttp('Credenciales invalidas', 400)

    const isValidPassword = await bcrypt.compare(password, koderFound.password)

    if(!isValidPassword) throw new StatusHttp('Credenciales invalidas', 400)

    return jwt.sign({id: koderFound._id})
}

async function loginUser(email, password) {
    const userFound = await User.findOne({email})

    if(!userFound) throw new StatusHttp('Credenciales invalidas', 400)

    const isValidPassword = await bcrypt.compare(password, userFound.password)

    if(!isValidPassword) throw new StatusHttp('Credenciales invalidas', 400)
            // pasando el payload
    return jwt.sign({id: userFound._id, role: userFound.role})
}

export {
    login,
    loginUser
}