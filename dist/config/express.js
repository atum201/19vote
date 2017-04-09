'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _env = require('./env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// parse body params and attache them to req.body
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// import * as corsOption from './cors'
app.use(_express2.default.static('build'));
app.use((0, _cors2.default)());
// secure apps by setting various HTTP headers
app.use((0, _helmet2.default)());

app.get('/', function (req, res) {
  res.sendfile('build/index.html');
});

// error handler, send stacktrace only during development
// app.use((err, req, res, next) =>		// eslint-disable-line no-unused-vars
//   res.status(err.status).json({
//     message: err.isPublic ? err.message : httpStatus[err.status],
//     stack: config.env === 'development' ? err.stack : {}
//   })
// );

exports.default = app;
module.exports = exports['default'];
//# sourceMappingURL=express.js.map
