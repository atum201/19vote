'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _graphql = require('graphql');

var _Vote = require('./mutations/19Vote');

var _Vote2 = require('./queries/19Vote');

var _constant = require('../common/constant');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userOnline = []; // [id];


// import createGroup from './mutations/group'

var userIds = []; // [userId]
var socker = []; // socket.userid = id;

var createSchema = function createSchema(io) {
  var _socket = void 0;
  io.on('connection', function (socket) {
    _socket = socket;
    socket.on(_constant.SOCKET_SEND_CONNECT, function (data) {
      // user {userId}
      console.log(data);
    });

    socket.on('disconnect', function () {
      var uId = socket.userId;
      _lodash2.default.remove(socker, function (sk) {
        return sk.userId == socket.userId && sk.id == socket.id;
      });
      if (_lodash2.default.findIndex(socker, { userId: uId }) == -1) {
        socket.broadcast.emit(_constant.SOCKET_BROADCAST_DISCONNECT, uId);
        _lodash2.default.remove(userOnline, function (id) {
          return id == uId;
        });
      }
    });
  });
  return new _graphql.GraphQLSchema({
    query: new _graphql.GraphQLObjectType({
      name: 'Query',
      fields: {
        user: _Vote2.user, userById: _Vote2.userById,
        clan: _Vote2.clan, clanById: _Vote2.clanById,
        tournament: _Vote2.tournament, tournamentById: _Vote2.tournamentById,
        rank: _Vote2.rank, rankById: _Vote2.rankById,
        title: _Vote2.title, titleById: _Vote2.titleById,
        vote: _Vote2.vote, voteById: _Vote2.voteById,
        match: _Vote2.match, matchById: _Vote2.matchById
      }
    }),
    mutation: new _graphql.GraphQLObjectType({
      name: 'Mutation',
      fields: {
        submit: _Vote.submit
      }
    })
  });
};

exports.default = createSchema;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map
