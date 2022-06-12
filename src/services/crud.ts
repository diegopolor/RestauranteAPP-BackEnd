
export const saveData = async (data: any, Modelo: any): Promise<any> => {
  try {
    const dataModel = new Modelo(data)
    const save = await dataModel.save()
    return save
  } catch (err) {
    console.log(err)
    return false
  }
}

export const listData = async (model: any): Promise<any> => {
  try {
    const data = await model.find()
    return data
  } catch (err) {
    console.log(err)
    return false
  }
}

export const updateData = async (id: String, data: any, model: any): Promise<any> => {
  try {
    const update = await model.findByIdAndUpdate({ _id: id }, data)
    return update
  } catch (err) {
    console.log('No se ha podido actualizar los datos. Err.')
    console.log(err)
    return false
  }
}

export const deleteData = async (id: String, model: any): Promise<any> => {
  try {
    const deleteD = await model.findByIdAndDelete({ _id: id })
    return deleteD
  } catch (err) {
    console.log('No se ha podido eliminar los datos. Err.')
    console.log(err)
    return false
  }
}
