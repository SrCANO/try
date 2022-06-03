var express = require('express');
var router = express.Router();
const dbConnection = require('../dbConnection');
const connection = dbConnection();

console.log('Conectado correctamente!!!');

/* GET home page. */
router.get('/', function(req, res, next) {

  //UN SELECT PARA HACER LOS RESULTADOS DE CONSULTA  
  connection.query('SELECT * FROM news', (err, result) => {

    console.log(result);
    res.render('news', {
        news: result
    });
  });  
});

router.post('/', function(req, res, next) {

  const {title, news} = req.body;
  //console.log(title, news);
  //HACEMOS LA QUERY PARA INSERTAR EN LA BASE DE DATOS LOS DATOS DEL FORMULARIO
  connection.query('INSERT INTO news SET?', {
    title: title,
    news: news
  }, (err, result) => {

    res.redirect('/news');

  });

  });

  router.get('/delete/:id', function(req, res) {

    const id= req.params.id;
    console.log("-------------------------------------------->",id);
    connection.query('DELETE FROM news_portal.news WHERE id_news = ?',[id],
     (err, result) => {
       if (err){
         console.log("No se ha realizado correctamente!")
       }else{
         res.redirect('/news');
        }
      
  
    });
  
    });
// DELETE FROM news_portal.news WHERE id_news = 1;
module.exports = router;