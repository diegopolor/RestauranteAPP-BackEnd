import { Router } from "express"
import { saveProducto, listAllProductos } from "../services/productos"
import {reponseHTTPApi} from "../utils/request"


export const routeProductos = Router()

routeProductos.get('/', async(req, res)=>{
    const data = await listAllProductos()
    if(data) reponseHTTPApi(res, 200, data)
    else reponseHTTPApi(res, 500, data)
})

routeProductos.post('/', (req, res)=>{
    const data = req.body
    saveProducto(data)
    reponseHTTPApi(res, 200, data)
})     

