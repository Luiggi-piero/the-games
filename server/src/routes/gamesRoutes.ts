import { Router } from 'express';
// Controlador
import gamesController from '../controllers/gamesController';

class GamesRoutes{

    public router: Router = Router();
    
    constructor(){
        // Agregando ruta
        this.config();
    }

    // Define rutas
    config(){
        // Ruta inicial
        this.router.get('/', gamesController.list);
        this.router.get('/:id', gamesController.getOne);
        this.router.post('/', gamesController.create);
        this.router.delete('/:id', gamesController.delete);
        this.router.put('/:id', gamesController.update);
        
    }

}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;