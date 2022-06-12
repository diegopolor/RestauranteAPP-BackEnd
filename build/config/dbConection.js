"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBCloseConnection = exports.DBConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
require("colors");
(0, dotenv_1.config)();
const ConnectionURI = `mongodb+srv://${process.env.USERMNONGODB}:${process.env.PASSWORDMONGODB}@${process.env.HOSTMONGODB}/${process.env.NAMEDB}?retryWrites=true&w=majority`;
const DBConnect = () => {
    mongoose_1.default.connect(ConnectionURI)
        .then(() => {
        console.log('Conectado a la base de datos ✔'
            .yellow);
    }).catch((err) => {
        console.log('No se ha podido conectar a la base de datos ❌'
            .red);
        console.log(err);
    });
};
exports.DBConnect = DBConnect;
const DBCloseConnection = () => {
    mongoose_1.default.connection.close().then(() => {
        console.log('Desconexión exitosa.');
    }).catch((err) => {
        console.log('No se ha podido desconectar de la base de datos.');
        console.log(err);
    });
};
exports.DBCloseConnection = DBCloseConnection;
