(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '../libs/utils'], factory);
    }
})(function (require, exports) {
    "use strict";
    var utils_1 = require('../libs/utils');
    /**
     * @name: @constant
     *
     * declares a new angular constant
     *
     * @param name  constant name
     * @param value value name
     *
     * @returns {Object}
     */
    function NgConstant(name, value) {
        var component = {};
        utils_1.default.addDeclareMethod(component);
        utils_1.default.defineComponent(component, name, 'constant', value);
        return component;
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = NgConstant;
});
//# sourceMappingURL=constant.js.map