"use strict";
module.exports = function (left, right) {
    var composed;
    left = left || {};
    right = right || {};
    composed = Object.assign({}, left);
    Object.keys(right).forEach(function (name) {
        composed[name] = (composed[name] ? composed[name] + ' ' : '') + right[name];
    });
    return composed;
};
