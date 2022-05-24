import express from 'express'
import { config } from 'dotenv'
import { DBConnect } from './config/dbConection'
import morgan  from 'morgan'
import 'colors'

import { routesApi } from './routes'

const app = express()

//midlewares de configuracion
app.use(express.json())
app.use(morgan('dev'))

//Procesos inicializados
DBConnect()
config()
routesApi(app)

app.use((req, res) =>{
    res.send('404 Ruta no disponible.')
})

app.listen(3000, ()=>{
    console.log('server stared in port 3000' .green);      
})

