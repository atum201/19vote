'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _env = require('./config/env');

var _env2 = _interopRequireDefault(_env);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _express = require('./config/express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _schema = require('./server/schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// promisify mongoose
_bluebird2.default.promisifyAll(_mongoose2.default);
// connect to mongo db
_mongoose2.default.connect(_env2.default.db, { server: { socketOptions: { keepAlive: 1 } } });
_mongoose2.default.connection.on('error', function () {
  throw new Error('unable to connect to database: ' + _env2.default.db);
});

var server = _http2.default.Server(_express2.default);
var io = new _socket2.default(server);

var schema = (0, _schema2.default)(io);
_express2.default.use('/graphql', (0, _expressGraphql2.default)(function (req) {
  return {
    schema: schema,
    graphiql: true,
    rootValue: { request: req }
  };
}));

server.listen(_env2.default.port, function () {});

exports.default = server;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map
