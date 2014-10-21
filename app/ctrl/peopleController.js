fs = require('fs')
view = require('../../Skirt/skirtView').SkirtView

var peopleController = {
  index: function(res) {
    console.log('from people ctrl')
    view.render('people', 'index', res)
  }
}

exports.ctrl = peopleController
