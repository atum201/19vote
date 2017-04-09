'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submit = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _mongodb = require('mongodb');

var _Vote = require('../types/19Vote');

var GraphQLType = _interopRequireWildcard(_Vote);

var _Vote2 = require('../../models/19Vote');

var Model = _interopRequireWildcard(_Vote2);

var _graphql = require('graphql');

var _constant = require('../../common/constant');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import User from '../../models/user'
// import Clan from '../../models/clan'
var query = {
  type: new _graphql.GraphQLInputObjectType({
    name: "payload",
    fields: {
      payload: { type: _graphql.GraphQLString },
      action: { type: _graphql.GraphQLString }
    }
  }) };
// import {
//   clanInput
// } '../types/InputType'

var Response = new _graphql.GraphQLObjectType({
  name: 'Response',
  fields: {
    payload: { type: _graphql.GraphQLString },
    action: { type: _graphql.GraphQLString }
  }
});

var actClient = function actClient(action) {
  return action.replace(':', ' ').replace("submit-", "");
};

var submit = exports.submit = {
  type: Response,
  args: {
    query: query
  },
  resolve: function resolve(root, _ref) {
    var query = _ref.query;

    var model = query.action.split(':')[1];
    var action = query.action.split(':')[0];
    var col = Model[model];
    var obj = JSON.parse(query.payload);
    if (action === _constant.SUBMIT_ADD) {
      var doc = new col(obj);
      return doc.saveAsync().then(function (d) {
        return {
          action: actClient(query.action),
          payload: JSON.stringify(d)
        };
      });
    }
    if (action === _constant.SUBMIT_UPDATE) {
      return col.findOneAsync({ _id: (0, _mongodb.ObjectID)(obj.id) }).then(function (doc) {
        return {
          action: actClient(query.action),
          payload: JSON.stringify(doc)
        };
      });
    }
    if (action === _constant.SUBMIT_REMOVE) {
      return col.findOneAsync({ _id: (0, _mongodb.ObjectID)(obj.id) }).then(function (doc) {
        if (doc) {
          doc.removeAsync();
          return {
            action: actClient(query.action),
            payload: JSON.stringify({ id: obj.id })
          };
        } else {
          return {
            action: actClient(query.action),
            payload: JSON.stringify({})
          };
        }
      });
    }
  }
};
//# sourceMappingURL=19Vote.js.map
