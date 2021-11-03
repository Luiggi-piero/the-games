// Define las acciones de la ruta 
import {Request, Response} from 'express';
import pool from '../database';



class GamesController{

    
    public async list(req: Request, res: Response): Promise<any>{
        // res.send('Games Controller')
        // res.json({text: 'listado de juegos!!'})
            

        pool.query('SELECT * FROM games', (err, rows) => {
            if(err) throw console.error();
            res.json(rows); // Devuelve al cliente 
        })
    }

    public async create(req: Request, res: Response): Promise<void>{
        // console.log(req.body);
        // evento asincrono, demora en la ejecucion
        (await pool).query('INSERT INTO games set ?', [req.body]);
        res.json({text: 'Creación exitosa!'})
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        (await pool).query('DELETE FROM  games WHERE id = ?', [id]);
        res.json({text: 'Juego eliminado...' + id});
    }

    public async update(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        (await pool).query('UPDATE games set ? WHERE id = ?', [req.body, id]);
        res.json({text:'Juego actualizado...' + id});
    }

    public async getOne(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        (await pool).query('SELECT * FROM games WHERE id = ?', [id], (err, rows: any[]) => {
            
            if(err) throw err;    
            if(rows.length > 0)  return res.json(rows);
            res.status(404).json({text: 'No hay conincidencias'});  
        });
    }
}

const gamesController = new GamesController();

export default gamesController;