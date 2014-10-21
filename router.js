var fs  = require('fs'),
    url = require('url')

var Router = {

  routes: [],

  add: function(route) {

    Router.routes.push(route)
  },

  get: function(req, res) {
    Router.lookup(req, function(code, route) {
      if (code === 404) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('bad');
      }
      if (code === 200) {
        Router._requestController(route, res)
      }
    })
  },

  lookup: function(req, callback) {
    var reqUrl = req.url.split('/'),
        path = reqUrl[1],
        routeList = Router.routes

    for (var ii = 0; ii < routeList.length; ii++) {
      var route = Router._parseRoutes(routeList[ii]),
          matchedRoute;

      if (route.ctrlName === path) {
        matchedRoute = route
      }
    }
    if (!!matchedRoute) {
      return callback(200, matchedRoute)
    }
    return callback(404, matchedRoute)
  },

  _requestController: function(route, res) {
    var controll = require('./app/ctrl/' + route.ctrlName + 'Controller').ctrl
    controll[route.ctrlAction](res);
  },

  _parseRoutes: function (route) {

    var ctrl        = route.split('#'),
        ctrlName    = ctrl[0],
        ctrlAction  = ctrl[1]

    return {
      ctrlName: ctrlName,
      ctrlAction: ctrlAction
    }
  }
}

exports.Router = Router
