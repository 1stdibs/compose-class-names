"use strict";
var composeLocalClassNames = require('../index');
var assert = require('assert');
describe("composeLocalClassNames", function () {
    it("should merge via space concatenation local to global css classname maps", function () {
        var composed = composeLocalClassNames({
            foo: "asdf"
        }, {
            foo: "qwer"
        });
        assert.equal(composed.foo, "asdf qwer");
    });
});
