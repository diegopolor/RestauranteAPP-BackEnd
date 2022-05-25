
export const saveData =  async(data: any, modelo :any): Promise<any>=>{
    try{
        const dataModel = new modelo(data) 
        const save = await dataModel.save()
        return save
    }catch(err){
        console.log(err);
        return false
    }
}

export const listData = async(model : any)=>{
    try{
        const data = await model.find()
        return data
    }catch(err){
        console.log(err);
        return false
    }
}

export const updateData = async (id : String, data: any, model : any)=>{
    try {
        const update = await model.findByIdAndUpdate({_id : id}, data)
        return update
    } catch (err) {
        console.log('No se ha podido actualizar los datos. Err.');
        console.log(err);
        return false
    }
}
 

export const deleteData = async (id : String, model : any)=>{
    try {
        const deleteD = await model.findByIdAndDelete({_id : id})
        return deleteD
    } catch (err) {
        console.log('No se ha podido eliminar los datos. Err.');
        console.log(err);
        return false
    }
}