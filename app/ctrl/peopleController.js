var View = require('polar').View

var peopleController = {
  index: function(req, res) {
    View.render('people', 'index', res);
  }
}

exports.ctrl = peopleController
