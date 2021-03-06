"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var voteProp = exports.voteProp = {
	emprires: ["sang", "asy", "egypt", "hittle", "phonix", "parmy", "summer", "baby", "yamoto", "roman", "persi", "macxe", "mioan", "catha", "choson", "greek"],
	noidung: ["ramdom", "asy", "sangtudo", "rsang", "honmasang", "yaasy", "ya4"],
	thethuc: ["solo", "22", "33", "44", "doanthe"],
	tinhchat: ["giaoluunoibo", "giaoluu", "giaoluuquocte", "giaidaunoibo", "giaidau", "giaidauquocte"],
	vaitro: ["ongbau", "gamethu", "mod", "chimlontamhuyet", "fan", "nhataitro"] };

var PlayerField = exports.PlayerField = ["shortName"];
var PalerFieldName = exports.PalerFieldName = ["Tên gọi khác"];
var CREATE_PLAYER = exports.CREATE_PLAYER = "create player",
    UPDATE_PLAYER = exports.UPDATE_PLAYER = "update player",
    REMOVE_PLAYER = exports.REMOVE_PLAYER = "remove player",
    LEAVE_CLAN = exports.LEAVE_CLAN = "leave clan",
    JOIN_CLAN = exports.JOIN_CLAN = "join clan",
    CREATE_CLAN = exports.CREATE_CLAN = "create clan",
    UPDATE_CLAN = exports.UPDATE_CLAN = "update clan",
    REMOVE_CLAN = exports.REMOVE_CLAN = "remove clan",
    CREATE_TOURNAMENT = exports.CREATE_TOURNAMENT = "create tournament",
    UPDATE_TOURNAMENT = exports.UPDATE_TOURNAMENT = "update tournament",
    REMOVE_TOURNAMENT = exports.REMOVE_TOURNAMENT = "remove tournament",
    REGISTER_TOURNAMENT = exports.REGISTER_TOURNAMENT = "register tournament",
    INVITE_TOURNAMENT = exports.INVITE_TOURNAMENT = "invite tournament",
    ACCEPT_TOURNAMENT = exports.ACCEPT_TOURNAMENT = "accept tournament",
    QUIT_TOURNAMENT = exports.QUIT_TOURNAMENT = "quit tournament",
    CANCEL_TOURNAMENT = exports.CANCEL_TOURNAMENT = "cancel tournament",
    CREATE_MATCH = exports.CREATE_MATCH = "create match",
    UPDATE_MATCH = exports.UPDATE_MATCH = "update match",
    REMOVE_MATCH = exports.REMOVE_MATCH = "remove match",
    INVITE_MATCH = exports.INVITE_MATCH = "invite match",
    ACCEPT_MATCH = exports.ACCEPT_MATCH = "accept match",
    REJECT_MATCH = exports.REJECT_MATCH = "reject match",
    CANCEL_MATCH = exports.CANCEL_MATCH = "cancel match",
    CREATE_VOTE = exports.CREATE_VOTE = "create vote",
    UPDATE_VOTE = exports.UPDATE_VOTE = "update vote",
    REMOVE_VOTE = exports.REMOVE_VOTE = "remove vote";

// Mutation
var SUBMIT_ADD = exports.SUBMIT_ADD = "submit-add",
    SUBMIT_UPDATE = exports.SUBMIT_UPDATE = "submit-update",
    SUBMIT_REMOVE = exports.SUBMIT_REMOVE = "submit-remove";

// SOCKET  
var SOCKET_SEND_MESSAGE = exports.SOCKET_SEND_MESSAGE = "socket send message",
    SOCKET_GET_MESSAGE = exports.SOCKET_GET_MESSAGE = "socket get message",
    SOCKET_SEND_TYPING = exports.SOCKET_SEND_TYPING = "socket send typing",
    SOCKET_GET_TYPING = exports.SOCKET_GET_TYPING = "socket get typing",
    SOCKET_SEND_END_TYPING = exports.SOCKET_SEND_END_TYPING = "socket send end typing",
    SOCKET_GET_END_TYPING = exports.SOCKET_GET_END_TYPING = "socket get end typing",
    SOCKET_SEND_CONNECT = exports.SOCKET_SEND_CONNECT = "socket send connect",
    SOCKET_GET_CONNECT = exports.SOCKET_GET_CONNECT = "socket get connect",
    SOCKET_SEND_DISCONECT = exports.SOCKET_SEND_DISCONECT = "socket send disconnect",
    SOCKET_GET_DISCONNECT = exports.SOCKET_GET_DISCONNECT = "socket get disconnect",
    SOCKET_SEND_READ_MESSAGE = exports.SOCKET_SEND_READ_MESSAGE = "socket send read message",
    SOCKET_SEND_DEL_MESSAGE = exports.SOCKET_SEND_DEL_MESSAGE = "scoket send del message",
    SOCKET_GET_READ_MESSAGE = exports.SOCKET_GET_READ_MESSAGE = "socket get read message",
    SOCKET_GET_SEND_MESSAGE = exports.SOCKET_GET_SEND_MESSAGE = "socket get send message",
    SOCKET_GET_DEL_MESSAGE = exports.SOCKET_GET_DEL_MESSAGE = "socket get del message",
    SOCKET_SEND_UPDATE_GROUP = exports.SOCKET_SEND_UPDATE_GROUP = "socket send update group",
    SOCKET_GET_UPDATE_GROUP = exports.SOCKET_GET_UPDATE_GROUP = "socket get update group",
    SOCKET_GET_REMOVE_GROUP = exports.SOCKET_GET_REMOVE_GROUP = "socket get remove group",
    SOCKET_SEND_UPDATE_USER = exports.SOCKET_SEND_UPDATE_USER = "socket send update user",
    SOCKET_GET_UPDATE_USER = exports.SOCKET_GET_UPDATE_USER = "socket get update user",
    SOCKET_BROADCAST_CONNECT = exports.SOCKET_BROADCAST_CONNECT = "socket broadcast connect",
    SOCKET_BROADCAST_DISCONNECT = exports.SOCKET_BROADCAST_DISCONNECT = "socket broadcast disconnect",
    SOCKET_SEND_NOTIFY = exports.SOCKET_SEND_NOTIFY = "notification mic",
    SOCKET_GET_NOTIFY = exports.SOCKET_GET_NOTIFY = "receive notification";
//# sourceMappingURL=constant.js.map
