// Determina el host y las credenciales
import keys from './keys';
// Importacion del modulo
import mysql from 'mysql2';

// Realiza la conexion
const pool = mysql.createPool(keys.database);

pool.getConnection(function(err, conn){
    console.log('Base de datos conectada!!!');
});

export default pool;
