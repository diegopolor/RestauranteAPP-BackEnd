"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.facturacionModel = void 0;
const mongoose_1 = require("mongoose");
const facturacion = new mongoose_1.Schema({
    fecha: 'Date',
    ordenes: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'ordenes'
        }
    ]
});
exports.facturacionModel = (0, mongoose_1.model)('facturacion', facturacion);
