import mongoose from "mongoose"
import { config } from 'dotenv'
import 'colors'

config()
const NameDB = "AppRestaurante"
const ConnectionURI = 
`mongodb+srv://${process.env.USERMNONGODB}:${process.env.PASSWORDMONGODB}@cluster0.hqukg.mongodb.net/${NameDB}?retryWrites=true&w=majority`

export const DBConnect =  () =>{
  mongoose.connect(ConnectionURI)
  .then(()=>{
    console.log(
        'Conectado a la base de datos ✔' 
        .yellow
    )
  }).catch((err)=>{
    console.log(
        'No se ha podido conectar a la base de datos ❌'
        .red
    )
    console.log(err);
  })    
}

export const DBCloseConnect = ()=>{
    mongoose.connection.close().then(()=>{
        console.log('Desconexión exitosa.');
    }).catch((err)=>{
        console.log('No se ha podido desconectar de la base de datos.')
        console.log(err);   
    })
}
