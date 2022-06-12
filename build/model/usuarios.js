"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolUsuarioModel = exports.usuarioModel = void 0;
const mongoose_1 = require("mongoose");
const rolesUsuarios = new mongoose_1.Schema({
    nombre: 'String'
});
const usuarios = new mongoose_1.Schema({
    usuario: 'String',
    clave: 'String',
    correo: 'String',
    NombreCompleto: 'String',
    rol: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'rolesUsuario'
    }
});
exports.usuarioModel = (0, mongoose_1.model)('usuario', usuarios);
exports.rolUsuarioModel = (0, mongoose_1.model)('rolUsuarioModel', rolesUsuarios);
