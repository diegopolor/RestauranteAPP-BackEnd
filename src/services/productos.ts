import { productoModel } from '../model/productos'

export const listAllProductos = async ()=>{
    try{
        const data = await productoModel.find()
        return data
    }catch(err){
        console.log(err);  
        return false
    }   
}

export const saveProducto = async(data: any)=>{
    try {
        const producto = new productoModel(data)
        const save = await producto.save()
        return save
    } catch (err) {
        console.log(err);
        return false
    }
}





