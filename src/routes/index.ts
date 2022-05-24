import { Router } from "express";
import { routeProductos } from "./productos";
import { routeCategoriaP } from "./categoriaProductos";

export const routesApi = (app: any)=>{
    const routes = Router()
    routes.use('/productos', routeProductos)
    routes.use('/categorias', routeCategoriaP)
    app.use('/api/v1/', routes)   
}