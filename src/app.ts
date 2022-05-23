import express from 'express'
import { config } from 'dotenv'
import 'colors'

import { routesApi } from './routes'

const app = express()

//Procesos inicializados
config()
routesApi(app)

app.use('/', (req, res) =>{
    
})

app.listen(3000, ()=>{
    console.log('server stared in port 3000' .green);      
})

