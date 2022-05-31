import { listData, saveData, updateData, deleteData  } from "../services/crud";
import { reponseHTTPApi } from "./request";

export const listInfo = async (res : any,model: any )=>{
    const data = await listData(model)
    reponseHTTPApi(res, 200, data)
}

export const saveInfo = async(req : any, res: any,  model : any, )=>{
    const data  = req.body
    const save = await saveData( data, model) 
    reponseHTTPApi(res, 200, save)
}

export const updateInfo = async(req : any, res : any, model : any) =>{
    const id = req.params.id
    const data = req.body
    const update = await updateData( id, data, model)
    reponseHTTPApi(res, 200, update)
}

export const deleteInfo = async(req: any, res: any , model: any)=>{
    const id = req.params.id
    const Delete = await deleteData( id, model)
    reponseHTTPApi(res, 200, Delete)
}