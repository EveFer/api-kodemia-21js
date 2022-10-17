import {User} from '../models/users.model.js'
import bcrypt from '../libs/bcrypt.js'

import {StatusHttp} from '../libs/statusHttp.js'

async function create(newUser){
    const {email, password} = newUser
    // find({}) -> []
    const userFound = await User.findOne({email}) //-> {} 
    //  si lo encuentra -> {}
    // si no lo encuentra -> undefined

    if(userFound) throw new StatusHttp('Ya existe un usuario con este email', 400)

    // Encriptar el password
    const encryptedPassword = await bcrypt.hash(password)

    return User.create({...newUser, password: encryptedPassword})
}

export {
    create
}