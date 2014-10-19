fs = require('fs')
view = require('../../Skirt/skirtView').SkirtView

var projectsController = {
  index: function(res) {
    console.log('from projects ctrl')
    view.render('projects', 'index', res)
  }
}

exports.ctrl = projectsController
