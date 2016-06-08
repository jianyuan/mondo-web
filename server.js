const express = require('express');
const history = require('connect-history-api-fallback');
const webpack = require('webpack');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;

const app = express();
app.use(history());

if (!isProduction) {
    const compiler = webpack(webpackConfig);
    app.use(webpackMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath
    }));
    app.use(webpackHotMiddleware(compiler));
}

app.listen(port, '0.0.0.0', function (err) {
    if (err) {
        console.error(err);
    } else {
        console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
    }
});
