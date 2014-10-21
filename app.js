var http = require('http')
var router = require('./router').Router

router.add('tasks#index')
router.add('projects#index')
router.add('people#index')

console.log('Routes: ', router.routes)

http.createServer(function(req, res) {

  router.get(req, res);

}).listen('4000');
