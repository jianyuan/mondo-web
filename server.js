var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  hot: true,
  historyApiFallback: true
});
var port = 8080;

server.listen(port, 'localhost', function(err) {
  if (err) {
    console.error(err);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});
