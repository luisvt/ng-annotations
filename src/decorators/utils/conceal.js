(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '../../libs/utils'], factory);
    }
})(function (require, exports) {
    "use strict";
    var utils_1 = require('../../libs/utils');
    /**
     * @decorator: @conceal
     * @type: statement
     */
    function conceal(prototype, name, descriptor) {
        if (name === undefined)
            throw Error("@isolate decorator can only be applied to methods or attributes");
        if (descriptor !== undefined)
            descriptor.writable = true;
        var $private = utils_1.default.getIdentifier('$private');
        if (prototype[$private] === undefined
            || !(prototype[$private] instanceof Array))
            prototype[$private] = [];
        prototype[$private].push(name);
    }
    exports.conceal = conceal;
});
//# sourceMappingURL=conceal.js.map