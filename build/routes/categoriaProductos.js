"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeCategoriaP = void 0;
const express_1 = require("express");
const request_1 = require("../utils/request");
const productos_1 = require("../model/productos");
const crud_1 = require("../services/crud");
exports.routeCategoriaP = (0, express_1.Router)();
// listar
exports.routeCategoriaP.get('/', (_req, res) => {
    const data = (0, crud_1.listData)(productos_1.categoriaProductosModel);
    (0, request_1.responseHTTPApi)(res, 200, data);
});
// guardar
exports.routeCategoriaP.post('/', (req, res) => {
    const data = req.body;
    const save = (0, crud_1.saveData)(data, productos_1.categoriaProductosModel);
    (0, request_1.responseHTTPApi)(res, 200, save);
});
// actualizar
exports.routeCategoriaP.put('/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const update = (0, crud_1.updateData)(id, data, productos_1.categoriaProductosModel);
    (0, request_1.responseHTTPApi)(res, 200, update);
});
// eliminar
exports.routeCategoriaP.delete('/:id', (req, res) => {
    const id = req.params.id;
    const Delete = (0, crud_1.deleteData)(id, productos_1.categoriaProductosModel);
    (0, request_1.responseHTTPApi)(res, 200, Delete);
});
