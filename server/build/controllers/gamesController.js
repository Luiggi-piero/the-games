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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.send('Games Controller')
            // res.json({text: 'listado de juegos!!'})
            database_1.default.query('SELECT * FROM games', (err, rows) => {
                if (err)
                    throw console.error();
                res.json(rows); // Devuelve al cliente 
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            // evento asincrono, demora en la ejecucion
            (yield database_1.default).query('INSERT INTO games set ?', [req.body]);
            res.json({ text: 'Creación exitosa!' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            (yield database_1.default).query('DELETE FROM  games WHERE id = ?', [id]);
            res.json({ text: 'Juego eliminado...' + id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            (yield database_1.default).query('UPDATE games set ? WHERE id = ?', [req.body, id]);
            res.json({ text: 'Juego actualizado...' + id });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            (yield database_1.default).query('SELECT * FROM games WHERE id = ?', [id], (err, rows) => {
                if (err)
                    throw err;
                if (rows.length > 0)
                    return res.json(rows);
                res.status(404).json({ text: 'No hay conincidencias' });
            });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
