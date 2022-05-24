import { productoModel } from '../model/productos'

 const listAllProductos = async ()=>{
    try{
        const data = await productoModel.find()
        return data
    }catch(err){
        console.log(err);  
        return false
    }   
}

 const saveProducto = async(data: any)=>{
    try {
        const producto = new productoModel(data)
        const save = await producto.save()
        return save
    } catch (err) {
        console.log(err);
        return false
    }
}

export {
    listAllProductos,
    saveProducto
}




