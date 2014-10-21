fs = require('fs')

var SkirtView = {

  render: function(ctrl, action, res) {

    var viewPath = 'app/views/' + ctrl + '/' + action + '.html'

    fs.readFile(viewPath, function(err, data) {

      if (err) throw err;

      res.writeHead(200, {'Content-Type': 'text/html', 'Content-Length': data.length})
      res.write(data)
      res.end()

    });
  }
}

exports.SkirtView = SkirtView
