'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleType = exports.TournamentType = exports.TeamType = exports.MatchType = exports.VoteType = exports.RankType = exports.ClanType = exports.UserType = undefined;

var _graphql = require('graphql');

var UserType = exports.UserType = new _graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
    account: { type: _graphql.GraphQLString },
    password: { type: _graphql.GraphQLString },
    clan: { type: _graphql.GraphQLString },
    name: { type: _graphql.GraphQLString },
    nickName: { type: _graphql.GraphQLString },
    point: { type: _graphql.GraphQLInt },
    winGame: { type: _graphql.GraphQLInt },
    totalGame: { type: _graphql.GraphQLInt },
    title: { type: new _graphql.GraphQLList(_graphql.GraphQLString) },
    avatar: { type: _graphql.GraphQLString },
    netClub: { type: new _graphql.GraphQLList(_graphql.GraphQLString) },
    slogan: { type: _graphql.GraphQLString },
    birthDay: { type: _graphql.GraphQLString },
    provice: { type: _graphql.GraphQLString },
    adress: { type: _graphql.GraphQLString },
    introduce: { type: _graphql.GraphQLString },
    banner: { type: _graphql.GraphQLString },
    phone: { type: new _graphql.GraphQLList(_graphql.GraphQLString) }
  }
});

var ClanRoleType = new _graphql.GraphQLObjectType({
  name: 'ClanRole',
  fields: {
    member: { type: _graphql.GraphQLString },
    rule: { type: _graphql.GraphQLInt },
    title: { type: _graphql.GraphQLString }
  }
});

var ClanType = exports.ClanType = new _graphql.GraphQLObjectType({
  name: 'Clan',
  fields: {
    id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
    name: { type: _graphql.GraphQLString },
    owner: { type: _graphql.GraphQLString },
    symbol: { type: _graphql.GraphQLString },
    description: { type: _graphql.GraphQLString },
    role: { type: ClanRoleType },
    level: { type: _graphql.GraphQLInt },
    member: { type: new _graphql.GraphQLList(_graphql.GraphQLString) },
    inviteMember: { type: new _graphql.GraphQLList(_graphql.GraphQLString) },
    applyMember: { type: new _graphql.GraphQLList(_graphql.GraphQLString) }
  }
});

var RankType = exports.RankType = new _graphql.GraphQLObjectType({
  name: 'Rank',
  fields: {
    id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) }
  }
});

var VoteType = exports.VoteType = new _graphql.GraphQLObjectType({
  name: 'Vote',
  fields: {
    id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
    tournament: { type: _graphql.GraphQLString },
    user: { type: new _graphql.GraphQLList(_graphql.GraphQLString) },
    index: { type: _graphql.GraphQLInt },
    name: { type: _graphql.GraphQLString },
    time: { type: _graphql.GraphQLInt }
  }
});

var MatchType = exports.MatchType = new _graphql.GraphQLObjectType({
  name: 'Match',
  fields: {
    id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) }
  }
});

var TeamType = exports.TeamType = new _graphql.GraphQLObjectType({
  name: 'Team',
  fields: {
    id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
    member: { type: new _graphql.GraphQLList(_graphql.GraphQLString) }
  }
});

var TournamentType = exports.TournamentType = new _graphql.GraphQLObjectType({
  name: 'Tournament',
  fields: {
    id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
    name: { type: _graphql.GraphQLString },
    logo: { type: _graphql.GraphQLString },
    banner: { type: _graphql.GraphQLString },
    description: { type: _graphql.GraphQLString },
    time: { type: _graphql.GraphQLInt },
    team: { type: TeamType },
    config: { type: new _graphql.GraphQLList(_graphql.GraphQLInt) },
    mod: { type: new _graphql.GraphQLList(_graphql.GraphQLString) },
    title: { type: new _graphql.GraphQLList(_graphql.GraphQLString) },
    user: { type: new _graphql.GraphQLList(_graphql.GraphQLString) }
  }
});

var TitleType = exports.TitleType = new _graphql.GraphQLObjectType({
  name: 'Title',
  fields: {
    id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) },
    name: { type: _graphql.GraphQLString },
    description: { type: _graphql.GraphQLString },
    time: { type: _graphql.GraphQLInt },
    pride: { type: _graphql.GraphQLInt },
    tournament: { type: _graphql.GraphQLString },
    team: { type: _graphql.GraphQLString },
    user: { type: new _graphql.GraphQLList(_graphql.GraphQLString) }
  }
});
//# sourceMappingURL=19Vote.js.map
