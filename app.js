var http = require('http')
var router = require('polar').Router

router.add('tasks#index')
router.add('projects#index')
router.add('people#index')

http.createServer(function(req, res) {
  router.get(req, res)
}).listen('3000')
