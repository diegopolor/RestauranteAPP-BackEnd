"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeInventarios = void 0;
const express_1 = require("express");
const crud_1 = require("../utils/crud");
const inventarios_1 = require("../model/inventarios");
exports.routeInventarios = (0, express_1.Router)();
//listar
exports.routeInventarios.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, crud_1.listInfo)(res, inventarios_1.inventarioModel);
}));
//guardar
exports.routeInventarios.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, crud_1.saveInfo)(res, req, inventarios_1.inventarioModel);
}));
//actualizar
exports.routeInventarios.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, crud_1.updateInfo)(req, res, inventarios_1.inventarioModel);
}));
exports.routeInventarios.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, crud_1.deleteInfo)(req, res, inventarios_1.inventarioModel);
}));
