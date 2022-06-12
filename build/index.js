'use strict'
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express'))
const dotenv_1 = require('dotenv')
const dbConection_1 = require('./config/dbConection')
const morgan_1 = __importDefault(require('morgan'))
require('colors')
const routes_1 = require('./routes')
const app = (0, express_1.default)()
const PORT = 3000
// midlewares de configuracion
app.use(express_1.default.json())
app.use((0, morgan_1.default)('dev'));
// Procesos inicializados
(0, dbConection_1.DBConnect)();
(0, dotenv_1.config)();
(0, routes_1.routesApi)(app)
app.use((_req, res) => {
  res.status(404).json('404 Ruta no disponible.')
})
app.listen(PORT, () => {
  console.log(`Server stared in port ${PORT}`.green)
})
