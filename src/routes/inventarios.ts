import { Router } from 'express'

import { responseHTTPApi } from '../utils/request'
import { inventarioModel } from '../model/inventarios'
import {
  listData,
  saveData,
  updateData,
  deleteData
} from '../services/crud'

export const routeInventarios = Router()

// listar
routeInventarios.get('/', (_req, res) => {
  const data = listData(inventarioModel)
  responseHTTPApi(res, 200, data)
})

// guardar
routeInventarios.post('/', (req, res) => {
  const data = req.body
  const save = saveData(data, inventarioModel)
  responseHTTPApi(res, 200, save)
})

// actualizar
routeInventarios.put('/:id', (req, res) => {
  const { id } = req.params
  const data = req.body
  const update = updateData(id, data, inventarioModel)
  responseHTTPApi(res, 200, update)
})

routeInventarios.put('/:id', (req, res) => {
  const { id } = req.params
  const del = deleteData(id, inventarioModel)
  responseHTTPApi(res, 200, del)
})
