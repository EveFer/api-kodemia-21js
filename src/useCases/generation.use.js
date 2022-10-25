import {Generation} from '../models/generation.model.js'
import {School} from '../models/school.model.js'
import {StatusHttp} from '../libs/statusHttp.js'

async function create(newGeneration){
    const schoolFound = await School.findById(newGeneration.school)

    if(!schoolFound) throw new StatusHttp('No se encontro la escuela', 404)

    const generationCreated = await Generation.create(newGeneration)

    await School.updateOne(
        {_id: schoolFound._id},
        {
            $push: { generations: generationCreated._id}
        }
    )

    return generationCreated
}

function getAll(){
    return Generation.find({}).populate('school')
}

export {
    create,
    getAll,
}