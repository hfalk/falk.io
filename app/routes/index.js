module.exports = function(app) {

  app.get('/', function(req, res) {
    //res.render('index', { title: 'Falk.io' });
    res.redirect('/cv');
  });

  app.get('/cv', function(req, res) {
    res.render('cv', { title: 'Håvard Falk - CV' });
  });

  app.get('/:file(*)', function(req, res, next){
    var file = req.params.file
        , path = __dirname + 'public/files/' + file;

    res.download(path);
  });

};
