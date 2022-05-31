import { Router } from "express"
import { listInfo, saveInfo, updateInfo, deleteInfo } from "../utils/crud"

import { productoModel } from "../model/productos"

export const routeProductos = Router()

//listar
routeProductos.get('/', async(_req, res)=>{
    listInfo(res, productoModel)
})

//guardar
routeProductos.post('/', async(req, res)=>{
    saveInfo(req, res, productoModel)
})

//actualizar 
routeProductos.put('/:id', async(req, res)=>{
    updateInfo(req, res, productoModel)
})

//eliminar
routeProductos.delete('/:id', async(req, res)=>{
    deleteInfo(req, res, productoModel)
})




