import {Schema, model} from "mongoose";

const categoriaProductos = new Schema <ICategoriaProductos>({
    nombre : "String",
    imagen : "String"
})

const producto = new Schema<IProductos>({
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
export const categoriaProductosModel = model('CategoriaProducto', categoriaProductos)
