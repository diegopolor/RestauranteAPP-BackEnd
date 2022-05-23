
type RegistroInv = "entrada" | "salida" //tipo para el registro de inventarios

//--- Interfaces de modelo de base de datos --- //

interface IProductos {
    nombre : string,
    descripcion : string,
    categoria : { }
    imagen : string,
    precio : number,
    items : []
}

interface ICategoriaProductos {
    nombre : string,
    imagen : string
}

interface IInventario {
    descripcion : string,
    cantidad : number
}

interface IRegistroInventario{
    fecha : string,
    inventario : string,
    tipo : RegistroInv,
    cantidad : number
}

interface IFacturacion {
    fecha : string,
    ordenes : []
}

interface IOrden {
    fecha : string,
    estado : string,
    productos : [],
    valorTotal : number 
}

interface IUsuario {
    usuario : string,
    clave : string,
    correo : string,
    NombreCompleto :string,
    rol : string
}

interface IRolUsuario {
    nombre : string
}
