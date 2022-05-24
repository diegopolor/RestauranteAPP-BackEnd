import { Router } from "express";
import { saveCategoria, listCategorias } from "../services/categoriaProductos";

export const routeCategoriaP = Router()

routeCategoriaP.get('/', async (req, res)=>{
    const data = await listCategorias()
    res.status(200).json(data)
})

routeCategoriaP.post('/', async(req, res)=>{
    const data  = req.body
    const save = await saveCategoria(data) 
    res.status(200).json(save)
    res.end()
})

