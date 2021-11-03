"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// Controladores
const indexContoller_1 = require("../controllers/indexContoller");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        // Agregando ruta
        this.config();
    }
    // Define rutas
    config() {
        // Ruta inicial de games
        this.router.get('/', indexContoller_1.indexController.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
