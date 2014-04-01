// Dependencies
var connect = require('connect'),
    static = require('node-static'),
    logger = require('morgan');

var file = new static.Server('./public');

// create the server
server = connect()

// include middleware
server.use(logger({format: 'dev'}))
server.use(serve_public)

// boot up app on localhost:8080
server.listen(8080)

// server files statically from the "public" folder
function serve_public(req, res) {
  req.on('end', function () {
      file.serve(req, res)
  }).resume();
}
