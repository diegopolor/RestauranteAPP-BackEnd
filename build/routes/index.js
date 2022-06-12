"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesApi = void 0;
const express_1 = require("express");
const productos_1 = require("./productos");
const categoriaProductos_1 = require("./categoriaProductos");
const inventarios_1 = require("./inventarios");
const routesApi = (app) => {
    const routes = (0, express_1.Router)();
    routes.use('/productos', productos_1.routeProductos);
    routes.use('/categorias', categoriaProductos_1.routeCategoriaP);
    routes.use('/inventarios', inventarios_1.routeInventarios);
    app.use('/api/v1/', routes);
};
exports.routesApi = routesApi;
