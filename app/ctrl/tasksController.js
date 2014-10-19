fs = require('fs')
view = require('../../Skirt/skirtView').SkirtView

var tasksController = {
  index: function(res) {
    console.log('from index ctrl')
    view.render('tasks', 'index', res)
  }
}

exports.ctrl = tasksController
