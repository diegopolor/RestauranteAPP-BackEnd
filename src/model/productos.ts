import {Schema, model} from "mongoose";

const categoriaProductos = new Schema ({
    nombre : "String",
    imagen : "String"
})

const producto = new Schema({
    nombre : "String",
    descripcion : "String",
    categoria : {
        type: Schema.Types.ObjectId,
        ref: 'CategoriaProducto'
    },
    imagen : "String",
    precio : "Number",
    items : [{item : "String"}]
})

export const productoModel = model('producto', producto)
export const categoriaProductosModel = model('categoriaProducto', categoriaProductos)
