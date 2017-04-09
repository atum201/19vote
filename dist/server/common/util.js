'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var randomString = exports.randomString = function randomString(L) {
    var s = '';
    while (s.length < L) {
        s += randomchar();
    }return s;
};

var randomchar = exports.randomchar = function randomchar() {
    var n = Math.floor(Math.random() * 62);
    if (n < 10) return n; //1-10
    if (n < 36) return String.fromCharCode(n + 55); //A-Z
    return String.fromCharCode(n + 61); //a-z
};
//# sourceMappingURL=util.js.map
