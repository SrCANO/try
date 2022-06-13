const mysql = require('mysql');

//RETORNA UNA CONEXION QUE YO PUEDO USAR EN CUALQUIER LUGAR DE MI APLICACION
module.exports = () => {

    return mysql.createConnection({

        host: 'localhost',
        user: 'root',
        password: '',
        database: 'news_portal'

    });

}

// host: 'localhost'
// host: 'bi5dgxk1ijropgtjfuhl-mysql.services.clever-cloud.com',
//         user: 'root',
//         password: '',
//         database: 'news_portal'