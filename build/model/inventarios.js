"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registroInventarioModel = exports.inventarioModel = void 0;
const mongoose_1 = require("mongoose");
const inventario = new mongoose_1.Schema({
    descripcion: "String",
    cantidad: "Number"
});
const registroInventario = new mongoose_1.Schema({
    fecha: "Date",
    inventario: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'inventario'
    },
    tipo: "String",
    cantidad: "Number"
});
exports.inventarioModel = (0, mongoose_1.model)('inventario', inventario);
exports.registroInventarioModel = (0, mongoose_1.model)('registroInventario', registroInventario);
