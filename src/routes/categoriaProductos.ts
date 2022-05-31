import { Router } from "express";
import { listInfo, saveInfo, updateInfo, deleteInfo } from "../utils/crud";

import { categoriaProductosModel } from "../model/productos";

export const routeCategoriaP = Router()

//listar
routeCategoriaP.get('/', async (_req, res)=>{
    listInfo(res , categoriaProductosModel)
})

//guardar
routeCategoriaP.post('/', async(req, res)=>{
    saveInfo(req, res, categoriaProductosModel)
})

//actualizar
routeCategoriaP.put('/:id', async(req, res)=>{
    updateInfo(req, res, categoriaProductosModel )
})

//eliminar
routeCategoriaP.delete('/:id', async(req, res)=>{
    deleteInfo(req, res, categoriaProductosModel)
})





