import {Schema, model} from "mongoose";
import { IFacturacion } from "../../types";

const facturacion = new Schema<IFacturacion>({
    fecha : "Date",
    ordenes : [
        {
            type : Schema.Types.ObjectId,
            ref : 'ordenes'
        }
    ]
})

export const facturacionModel = model('facturacion', facturacion)