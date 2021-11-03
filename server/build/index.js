"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
// morgan para ver los tipos de peticiones, rutas usadas y respuestas
const morgan_1 = __importDefault(require("morgan"));
// cors para la comunicacion entre el servidor creado y el de angular
const cors_1 = __importDefault(require("cors"));
// Se instalaron los tipos de datos para los modulos morgan y cors
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    // ****************************
    // Configuracion del app
    // Define el puerto por defecto
    // ****************************
    config() {
        this.app.set('port', process.env.PORT || '3000');
        // Uso de los modulos
        this.app.use((0, morgan_1.default)('dev'));
        // Comunicacion de angular hacia nuestro servidor
        this.app.use((0, cors_1.default)());
        // Permite aceptar json
        this.app.use(express_1.default.json());
        // Para usar form Html
        this.app.use(express_1.default.urlencoded({ extended: false }));
        // this.app.use((req, res, next) => {
        // Dominio que tengan acceso (ej. 'http://example.com')
        //    res.setHeader('Access-Control-Allow-Origin', '*');
        // Metodos de solicitud que deseas permitir
        //    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        // Encabecedados que permites (ej. 'X-Requested-With,content-type')
        //    res.setHeader('Access-Control-Allow-Headers', '*');
        // next();
        // })
    }
    // ****************************
    // Crear las rutas
    // ****************************
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default);
    }
    // ****************************
    // Inicia el servidor
    // ****************************
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Puerto usado', this.app.get('port'));
        });
    }
}
// Instanciar la clase
const server = new Server();
server.start();
