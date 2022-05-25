import { Router } from "express"
import { reponseHTTPApi } from "../utils/request"
import { listData, saveData, updateData, deleteData } from "../services/crud"

import { productoModel } from "../model/productos"

export const routeProductos = Router()

//listar
routeProductos.get('/', async(req, res)=>{
    const data = await listData(productoModel)
    reponseHTTPApi(res, 200, data) 
})

//guardar
routeProductos.post('/', async(req, res)=>{
    const data = req.body
    const save = await saveData(data, productoModel)
    reponseHTTPApi(res, 200, save)
})

//actualizar
routeProductos.put('/:id', async(req, res)=>{
    const id = req.params.id
    const data = req.body
    const update = await updateData( id, data, productoModel)
    reponseHTTPApi(res, 200, update)
})

//eliminar
routeProductos.delete('/:id', async(req, res)=>{
    const id = req.params.id
    const Delete = await deleteData( id, productoModel)
    reponseHTTPApi(res, 200, Delete)
})




