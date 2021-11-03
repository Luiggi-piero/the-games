import {Request, Response} from 'express';
// Define las acciones de la ruta index


class IndexController{
    public index(req: Request, res: Response){
        res.send('Hola desde index Controller')
    }
}

export const indexController = new IndexController();