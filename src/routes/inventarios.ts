import { Router } from "express";
import {reponseHTTPApi} from "../utils/request"
import { listData } from "../services/crud";

import { inventarioModel } from "../model/inventarios";

export const routeInventarios = Router()

//listar
routeInventarios.get('/', async(req, res)=>{
    const data = await listData(inventarioModel)
    reponseHTTPApi(res, 200, data) 
})
