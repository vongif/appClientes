const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'csv_db 9',
    user: 'root',
    password: 'Shaba5796'
})

conexion.connect(function(error){
    if(error){
        throw error;  
    }else{
        console.log('Conexion a mysql exitosa')
    }
})

conexion.query('SELECT * from clientes', function(error,results,filas){
    if(error)
    throw error;
    results.forEach(filas => {
     console.log(filas)   
        
    });
} )

module.exports = conexion;

