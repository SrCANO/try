const mysql = require('mysql');

//RETORNA UNA CONEXION QUE YO PUEDO USAR EN CUALQUIER LUGAR DE MI APLICACION
module.exports = () => {

    return mysql.createConnection({

        host: 'bi5dgxk1ijropgtjfuhl-mysql.services.clever-cloud.com',
        user: 'u9vkxhtxpzo3tcwg',
        password: 'wITji4A9rjVjXjl45deI',
        database: 'bi5dgxk1ijropgtjfuhl'

    });

};

// host: 'localhost'
// host: 'bi5dgxk1ijropgtjfuhl-mysql.services.clever-cloud.com',
//         user: 'root',
//         password: '',
//         database: 'news_portal'