"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordenesModel = void 0;
const mongoose_1 = require("mongoose");
const ordenes = new mongoose_1.Schema({
    fecha: 'Date',
    estado: 'String',
    productos: [
        {
            producto: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'productos'
            },
            cantidad: 'Number'
        }
    ],
    valorTotal: 'Number'
});
exports.ordenesModel = (0, mongoose_1.model)('ordenes', ordenes);
