
// --- Usado para respoder la petición http
export const responseHTTPApi = (res: any, status: number, json: any): void => {
  res.status(status).json(json).end()
}
