import { Router } from "express";
import { listInfo, saveInfo, updateInfo, deleteInfo } from "../utils/crud";

import { inventarioModel } from "../model/inventarios";

export const routeInventarios = Router()

//listar
routeInventarios.get('/', async(_req, res)=>{
    listInfo(res, inventarioModel)
})

//guardar
routeInventarios.post('/', async(req, res)=>{
    saveInfo(res, req, inventarioModel)
})

//actualizar
routeInventarios.put('/:id', async(req, res)=>{
    updateInfo(req, res, inventarioModel)
})

routeInventarios.put('/:id', async(req, res)=>{
    deleteInfo(req, res, inventarioModel)
})

