import {Schema, model} from "mongoose";
import { IRolUsuario, IUsuario } from "../../types";

const rolesUsuarios = new Schema<IRolUsuario>({
    nombre  : "String"
})

const usuarios = new Schema<IUsuario>({
    usuario : "String",
    clave : "String",
    correo : "String",
    NombreCompleto :"String",
    rol : {
        type : Schema.Types.ObjectId,
        ref : 'rolesUsuario'
    }
})

export const usuarioModel = model('usuario', usuarios)
export const rolUsuarioModel = model('rolUsuarioModel', rolesUsuarios)