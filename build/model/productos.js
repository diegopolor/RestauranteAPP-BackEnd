"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriaProductosModel = exports.productoModel = void 0;
const mongoose_1 = require("mongoose");
const categoriaProductos = new mongoose_1.Schema({
    nombre: 'String',
    imagen: 'String'
});
const producto = new mongoose_1.Schema({
    nombre: 'String',
    descripcion: 'String',
    categoria: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'CategoriaProducto'
    },
    imagen: 'String',
    precio: 'Number',
    items: [{ item: 'String' }]
});
exports.productoModel = (0, mongoose_1.model)('producto', producto);
exports.categoriaProductosModel = (0, mongoose_1.model)('categoriaProducto', categoriaProductos);
