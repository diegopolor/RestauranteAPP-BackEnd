import { Router } from "express";

export const ruteProductos = Router()

ruteProductos.get('/', (req, res)=>{
    res.send('Ruta productos api')
})

                                                                                                                        