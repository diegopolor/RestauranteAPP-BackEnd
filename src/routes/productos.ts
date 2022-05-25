import { Router } from "express"
import { reponseHTTPApi } from "../utils/request"
import { listData, saveData } from "../services/crud"

import { productoModel } from "../model/productos"

export const routeProductos = Router()

routeProductos.get('/', async(req, res)=>{
    const data = await listData(productoModel)
    reponseHTTPApi(res, 200, data) 
})

routeProductos.post('/', async(req, res)=>{
    const data = req.body
    const save = await saveData(data, productoModel)
    reponseHTTPApi(res, 200, save)
})  



