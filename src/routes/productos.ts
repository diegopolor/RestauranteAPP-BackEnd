import { Router } from "express"
import {reponseHTTPApi} from "../utils/request"
import { 
    saveProducto, 
    listAllProductos
} from "../services/productos"

export const routeProductos = Router()

routeProductos.get('/', async(req, res)=>{
    const data = await listAllProductos()
    reponseHTTPApi(res, 200, data) 
})

routeProductos.post('/', (req, res)=>{
    const data = req.body
    const save = saveProducto(data)
    reponseHTTPApi(res, 200, save)
})  

routeProductos.get('/:idProducto/:idCategoria', (req, res)=>{
    console.log("id categoria: " + req.params.idCategoria)
    console.log("id producto: " + req.params.idProducto)
    res.end()
})

