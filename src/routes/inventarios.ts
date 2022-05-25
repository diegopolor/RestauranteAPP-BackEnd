import { Router } from "express";
import {reponseHTTPApi} from "../utils/request"

export const routeInventarios = Router()

routeInventarios.get('/', (req, res)=>{
    res.json()
})