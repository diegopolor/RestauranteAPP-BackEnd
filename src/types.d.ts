
type RegistroInv = 'entrada' | 'salida'// tipo para el registro de inventarios

// --- Interfaces de modelo de base de datos ---

export declare interface IProductos {
  nombre: string
  descripcion: string
  categoria: {}
  imagen: string
  precio: number
  items: []
}

export interface ICategoriaProductos {
  nombre: string
  imagen: string
}

export interface IInventario {
  descripcion: string
  cantidad: number
}

export interface IRegistroInventario {
  fecha: string
  inventario: string
  tipo: RegistroInv
  cantidad: number
}

export interface IFacturacion {
  fecha: string
  ordenes: []
}

export interface IOrden {
  fecha: string
  estado: string
  productos: []
  valorTotal: number
}

export interface IUsuario {
  usuario: string
  clave: string
  correo: string
  NombreCompleto: string
  rol: string
}

export interface IRolUsuario {
  nombre: string
}
