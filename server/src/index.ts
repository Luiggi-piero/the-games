import express, {Application} from 'express';
import gamesRoutes from './routes/gamesRoutes';
import indexRoutes from './routes/indexRoutes';

// morgan para ver los tipos de peticiones, rutas usadas y respuestas
import morgan from 'morgan';
// cors para la comunicacion entre el servidor creado y el de angular
import cors from 'cors';
// Se instalaron los tipos de datos para los modulos morgan y cors

class Server{

public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    // ****************************
    // Configuracion del app
    // Define el puerto por defecto
    // ****************************
    config():void{
        this.app.set('port', process.env.PORT || '3000');
        // Uso de los modulos
        this.app.use(morgan('dev'));
        // Comunicacion de angular hacia nuestro servidor
        this.app.use(cors());
        // Permite aceptar json
        this.app.use(express.json());
        // Para usar form Html
        this.app.use(express.urlencoded({extended: false}));
    }
    
    // ****************************
    // Crear las rutas
    // ****************************
    routes():void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/games',gamesRoutes)
    }
    
    // ****************************
    // Inicia el servidor
    // ****************************
    start(): void{
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Puerto usado', this.app.get('port'));
        });
    }
}

// Instanciar la clase
const server = new Server();

server.start()