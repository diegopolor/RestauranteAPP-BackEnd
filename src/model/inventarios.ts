import {Schema, model} from "mongoose";

const inventario = new Schema<IInventario>({
    descripcion : "String",
    cantidad : "Number"
})

const registroInventario = new Schema<IRegistroInventario>({
    fecha : "Date",
    inventario : {
        type : Schema.Types.ObjectId,
        ref : 'inventario'
    },
    tipo : "String",
    cantidad : "Number"
})

export const inventarioModel = model('inventario', inventario)
export const registroInventarioModel = model('registroInventario',registroInventario)