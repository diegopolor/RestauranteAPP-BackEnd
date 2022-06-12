import { Router } from 'express'
import { responseHTTPApi } from '../utils/request'
import { categoriaProductosModel } from '../model/productos'

import {
  listData,
  saveData,
  updateData,
  deleteData
} from '../services/crud'

export const routeCategoriaP = Router()

// listar
routeCategoriaP.get('/', (_req, res) => {
  const data = listData(categoriaProductosModel)
  responseHTTPApi(res, 200, data)
})

// guardar
routeCategoriaP.post('/', (req, res) => {
  const data = req.body
  const save = saveData(data, categoriaProductosModel)
  responseHTTPApi(res, 200, save)
})

// actualizar
routeCategoriaP.put('/:id', (req, res) => {
  const id = req.params.id
  const data = req.body
  const update = updateData(id, data, categoriaProductosModel)
  responseHTTPApi(res, 200, update)
})

// eliminar
routeCategoriaP.delete('/:id', (req, res) => {
  const id = req.params.id
  const Delete = deleteData(id, categoriaProductosModel)
  responseHTTPApi(res, 200, Delete)
})
