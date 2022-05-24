import { Router } from "express";
import { saveCategoria, listCategorias } from "../services/categoriaProductos";
import {reponseHTTPApi} from "../utils/request"

export const routeCategoriaP = Router()

routeCategoriaP.get('/', async (req, res)=>{
    const data = await listCategorias()
    reponseHTTPApi(res, 200, data)
})

routeCategoriaP.post('/', async(req, res)=>{
    const data  = req.body
    const save = await saveCategoria(data) 
    reponseHTTPApi(res, 200, save)
})




