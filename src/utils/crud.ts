import { listData, saveData, updateData, deleteData } from '../services/crud'
import { responseHTTPApi } from './request'

export const listInfo = async (res: any, model: any): Promise<any> => {
  const data = await listData(model)
  responseHTTPApi(res, 200, data)
}

export const saveInfo = async (req: any, _res: any, model: any): Promise<any> => {
  const data = req.body
  const save = await saveData(data, model)
  return save
}

export const updateInfo = async (req: any, res: any, model: any): Promise<any> => {
  const id = req.params.id
  const data = req.body
  const update = await updateData(id, data, model)
  responseHTTPApi(res, 200, update)
}

export const deleteInfo = async (req: any, res: any, model: any): Promise<any> => {
  const id = req.params.id
  const Delete = await deleteData(id, model)
  responseHTTPApi(res, 200, Delete)
}
