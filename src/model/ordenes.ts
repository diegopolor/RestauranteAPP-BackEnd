import { Schema, model } from 'mongoose'
import { IOrden } from '../types'

const ordenes = new Schema<IOrden>({
  fecha: 'Date',
  estado: 'String',
  productos: [
    {
      producto: {
        type: Schema.Types.ObjectId,
        ref: 'productos'
      },
      cantidad: 'Number'
    }
  ],
  valorTotal: 'Number'
})

export const ordenesModel = model('ordenes', ordenes)
