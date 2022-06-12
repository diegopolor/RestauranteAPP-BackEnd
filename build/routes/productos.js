"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeProductos = void 0;
const express_1 = require("express");
const request_1 = require("../utils/request");
const crud_1 = require("../services/crud");
const productos_1 = require("../model/productos");
exports.routeProductos = (0, express_1.Router)();
// listar
exports.routeProductos.get('/', (_req, res) => {
    const data = (0, crud_1.listData)(productos_1.productoModel);
    (0, request_1.responseHTTPApi)(res, 200, data);
});
// guardar
exports.routeProductos.post('/', (req, res) => {
    const data = req.body;
    const save = (0, crud_1.saveData)(data, productos_1.productoModel);
    (0, request_1.responseHTTPApi)(res, 200, save);
});
// actualizar
exports.routeProductos.put('/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const update = (0, crud_1.updateData)(id, data, productos_1.productoModel);
    (0, request_1.responseHTTPApi)(res, 200, update);
});
// eliminar
exports.routeProductos.delete('/:id', (req, res) => {
    const id = req.params.id;
    const Delete = (0, crud_1.deleteData)(id, productos_1.productoModel);
    (0, request_1.responseHTTPApi)(res, 200, Delete);
});
