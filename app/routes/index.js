module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('index', { title: 'Falk.io' });
  });

  app.get('/cv', function(req, res) {
    res.render('cv', { title: 'Håvard - CV' });
  });

};
