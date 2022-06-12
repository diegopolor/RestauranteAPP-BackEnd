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
exports.deleteData = exports.updateData = exports.listData = exports.saveData = void 0;
const saveData = (data, Modelo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataModel = new Modelo(data);
        const save = yield dataModel.save();
        return save;
    }
    catch (err) {
        console.log(err);
        return false;
    }
});
exports.saveData = saveData;
const listData = (model) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield model.find();
        return data;
    }
    catch (err) {
        console.log(err);
        return false;
    }
});
exports.listData = listData;
const updateData = (id, data, model) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const update = yield model.findByIdAndUpdate({ _id: id }, data);
        return update;
    }
    catch (err) {
        console.log('No se ha podido actualizar los datos. Err.');
        console.log(err);
        return false;
    }
});
exports.updateData = updateData;
const deleteData = (id, model) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteD = yield model.findByIdAndDelete({ _id: id });
        return deleteD;
    }
    catch (err) {
        console.log('No se ha podido eliminar los datos. Err.');
        console.log(err);
        return false;
    }
});
exports.deleteData = deleteData;
