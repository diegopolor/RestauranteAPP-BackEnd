import { categoriaProductosModel } from "../model/productos";

export const saveCategoria =  (data: any)=>{
    try{
        const categoria = new categoriaProductosModel(data) 
        const save = categoria.save()
        return save
    }catch(err){
        console.log(err);
        return false
    }
}

export const listCategorias = async()=>{
    try{
        const categoria = await categoriaProductosModel.find()
        return categoria
    }catch(err){
        console.log(err);
        return false
    }
}

