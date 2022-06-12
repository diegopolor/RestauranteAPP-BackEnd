import express from 'express'
import { config } from 'dotenv'
import { DBConnect } from './config/dbConection'
import morgan from 'morgan'
import 'colors'

import { routesApi } from './routes'

const app = express()
const PORT = 3000

// midlewares de configuracion
app.use(express.json())
app.use(morgan('dev'))

// Procesos inicializados
DBConnect()
config()
routesApi(app)

app.use((_req, res) => {
  res.status(404).json('404 Ruta no disponible.')
})

app.listen(PORT, () => {
  console.log(`Server stared in port ${PORT}`.green)
})
