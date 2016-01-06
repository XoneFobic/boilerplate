'use strict';

require('dotenv').load();

var express   = require('express'),
    path      = require('path'),
    httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer(),
    app   = express();

var isProduction = process.env.NODE_ENV === 'production',
    host         = process.env.APP_HOST || 'localhost',
    port         = isProduction ? 8080 : 3000,
    publicPath   = path.resolve(__dirname, '..', 'public');

if (! isProduction) {
  app.all([ '/assets/*', '*.hot-update.json' ], function (request, response) {
    proxy.web(request, response, {
      target : 'http://' + host + ':3001'
    });
  });
}

app.use(express.static(publicPath));

app.get('/*', function (request, response) {
  response.sendFile(path.join(publicPath, 'index.html'));
});

proxy.on('error', function (error) {
  console.error('Could not connect to proxy, please try again later ...');
});

app.listen(port, function () {
  console.log('Server is running on http://' + host + ':' + port);
});
