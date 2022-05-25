import { Router } from "express";
import { deleteData, listData, saveData, updateData } from "../services/crud";
import {reponseHTTPApi} from "../utils/request"

import { categoriaProductosModel } from "../model/productos";

export const routeCategoriaP = Router()

//listar
routeCategoriaP.get('/', async (req, res)=>{
    const data = await listData(categoriaProductosModel)
    reponseHTTPApi(res, 200, data)
})

//guardar
routeCategoriaP.post('/', async(req, res)=>{
    const data  = req.body
    const save = await saveData(data, categoriaProductosModel) 
    reponseHTTPApi(res, 200, save)
})

//actualizar
routeCategoriaP.put('/:id', async(req, res)=>{
    const id = req.params.id
    const data = req.body
    const update = await updateData( id, data, categoriaProductosModel)
    reponseHTTPApi(res, 200, update)
})

//eliminar
routeCategoriaP.delete('/:id', async(req, res)=>{
    const id = req.params.id
    const Delete = await deleteData( id, categoriaProductosModel)
    reponseHTTPApi(res, 200, Delete)
})





