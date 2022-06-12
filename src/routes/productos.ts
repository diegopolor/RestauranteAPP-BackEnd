import { Router } from 'express'
import { responseHTTPApi } from '../utils/request'
import { listData, saveData, updateData, deleteData } from '../services/crud'

import { productoModel } from '../model/productos'

export const routeProductos = Router()

// listar
routeProductos.get('/', (_req, res) => {
  const data = listData(productoModel)
  responseHTTPApi(res, 200, data)
})

// guardar
routeProductos.post('/', (req, res): any => {
  const data = req.body
  const save = saveData(data, productoModel)
  responseHTTPApi(res, 200, save)
})

// actualizar
routeProductos.put('/:id', (req, res): any => {
  const id = req.params.id
  const data = req.body
  const update = updateData(id, data, productoModel)
  responseHTTPApi(res, 200, update)
})

// eliminar
routeProductos.delete('/:id', (req, res) => {
  const id = req.params.id
  const Delete = deleteData(id, productoModel)
  responseHTTPApi(res, 200, Delete)
})
