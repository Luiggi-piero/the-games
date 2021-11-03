import { Router } from 'express';

// Controladores
import {indexController} from '../controllers/indexContoller';

class IndexRoutes{

    public router: Router = Router();
    
    constructor(){
        // Agregando ruta
        this.config();
    }

    // Define rutas
    config(){
        // Ruta inicial de games
        this.router.get('/', indexController.index)
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;