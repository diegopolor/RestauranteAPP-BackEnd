import { Router } from "express";
import { ruteProductos } from "./productos";

export const routesApi = (app: any)=>{
    const routes = Router()
    routes.use('/productos', ruteProductos)
    app.use('/api/v1/', routes)   
}