'use strict';

var _Vote = require('../types/19Vote');

var GraphQLType = _interopRequireWildcard(_Vote);

var _Vote2 = require('../../models/19Vote');

var Model = _interopRequireWildcard(_Vote2);

var _graphql = require('graphql');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var makeQuery = function makeQuery(graphQLType, model, multi) {
  if (multi) {
    return {
      type: new _graphql.GraphQLList(graphQLType),
      args: {
        q: {
          type: _graphql.GraphQLString
        }
      },
      resolve: function resolve(_, _ref) {
        var q = _ref.q;

        var options = JSON.parse(q);
        return model.findAsync(options).then(function (docs) {
          return docs;
        }).error(function (e) {});
      }
    };
  } else {
    return {
      type: graphQLType,
      args: {
        q: {
          type: _graphql.GraphQLString
        }
      },
      resolve: function resolve(_, _ref2) {
        var q = _ref2.q;

        var options = JSON.parse(q);
        return model.findOneAsync(options).then(function (doc) {
          return doc;
        }).error(function (e) {});
      }
    };
  }
};
exports.user = makeQuery(GraphQLType.UserType, Model.User, true);
exports.clan = makeQuery(GraphQLType.ClanType, Model.Clan, true);
exports.tournament = makeQuery(GraphQLType.TournamentType, Model.Tournament, true);
exports.title = makeQuery(GraphQLType.TitleType, Model.Title, true);
exports.match = makeQuery(GraphQLType.MatchType, Model.Match, true);
exports.rank = makeQuery(GraphQLType.RankType, Model.Rank, true);
exports.vote = makeQuery(GraphQLType.VoteType, Model.Vote, true);

exports.userById = makeQuery(GraphQLType.UserType, Model.User, false);
exports.clanById = makeQuery(GraphQLType.ClanType, Model.Clan, false);
exports.tournamentById = makeQuery(GraphQLType.TournamentType, Model.Tournament, false);
exports.titleById = makeQuery(GraphQLType.TitleType, Model.Title, false);
exports.matchById = makeQuery(GraphQLType.MatchType, Model.Match, false);
exports.rankById = makeQuery(GraphQLType.RankType, Model.Rank, false);
exports.voteById = makeQuery(GraphQLType.VoteType, Model.Vote, false);
//# sourceMappingURL=19Vote.js.map
