var view = require('polar').View

console.log(view)

var tasksController = {
  index: function(req, res) {
    view.render('tasks', 'tasks', res)
  }
}

exports.ctrl = tasksController
