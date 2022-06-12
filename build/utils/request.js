"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseHTTPApi = void 0;
// --- Usado para respoder la petición http
const responseHTTPApi = (res, status, json) => {
    res.status(status).json(json).end();
};
exports.responseHTTPApi = responseHTTPApi;
