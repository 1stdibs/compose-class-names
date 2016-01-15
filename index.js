"use strict";
var assign = require('lodash.assign');
module.exports = function (left, right) {
    var composed;
    left = left || {};
    right = right || {};
    composed = assign({}, left);
    Object.keys(right).forEach(function (name) {
        composed[name] = (composed[name] ? composed[name] + ' ' : '') + right[name];
    });
    return composed;
};
