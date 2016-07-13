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
     * @name: @value
     *
     * declares a new angular value
     *
     * @param name  value name
     * @param value value name
     *
     * @returns {Object}
     */
    function NgValue(name, value) {
        var component = {};
        utils_1.default.addDeclareMethod(component);
        utils_1.default.defineComponent(component, name, 'value', value);
        return component;
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = NgValue;
});
//# sourceMappingURL=value.js.map