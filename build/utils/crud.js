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
exports.deleteInfo = exports.updateInfo = exports.saveInfo = exports.listInfo = void 0;
const crud_1 = require("../services/crud");
const request_1 = require("./request");
const listInfo = (res, model) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, crud_1.listData)(model);
    (0, request_1.responseHTTPApi)(res, 200, data);
});
exports.listInfo = listInfo;
const saveInfo = (req, _res, model) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const save = yield (0, crud_1.saveData)(data, model);
    return save;
});
exports.saveInfo = saveInfo;
const updateInfo = (req, res, model) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = req.body;
    const update = yield (0, crud_1.updateData)(id, data, model);
    (0, request_1.responseHTTPApi)(res, 200, update);
});
exports.updateInfo = updateInfo;
const deleteInfo = (req, res, model) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const Delete = yield (0, crud_1.deleteData)(id, model);
    (0, request_1.responseHTTPApi)(res, 200, Delete);
});
exports.deleteInfo = deleteInfo;
