/*
index.js
Punto de inicio de la aplición - entrypoint

 - conectar a la BD
 - levantar el server
*/
import dbConnect from './src/libs/db.js'
import {server} from './src/server.js'



dbConnect() // regresa una promesa
    .then(() => {
        console.log('Database connected :D')

        server.listen(8080, () => {
            console.log('Server listening on port 8080')
        })

    })
    .catch((error) => console.error('Error: ', error))


/*
Aplicando Clean Arquitecture

GET /koders?gender=value&age=16
POST /koders
PATCH /koders/:id
GET /koders/:id
DELETE /koders/:id

GET /mentors?gender=value&age=16&module=javascript
POST /mentors
PATCH /mentors/:id
GET /mentors/:id
DELETE /mentors/:id
*/