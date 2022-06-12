import { Router } from 'express'
import { routeProductos } from './productos'
import { routeCategoriaP } from './categoriaProductos'
import { routeInventarios } from './inventarios'

export const routesApi = (app: any): void => {
  const routes = Router()
  routes.use('/productos', routeProductos)
  routes.use('/categorias', routeCategoriaP)
  routes.use('/inventarios', routeInventarios)
  app.use('/api/v1/', routes)
}
