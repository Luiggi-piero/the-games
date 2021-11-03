"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
// Define las acciones de la ruta index
class IndexController {
    index(req, res) {
        res.send('Hola desde index Controller');
    }
}
exports.indexController = new IndexController();
