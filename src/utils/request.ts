
// --- Usado para respoder la petición http
export const reponseHTTPApi = (res : any , status : number, json: any)=>{
    res.status(status).json(json).end()
}