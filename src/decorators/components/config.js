(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'src/libs/utils', 'src/decorators/utils/inject'], factory);
    }
})(function (require, exports) {
    "use strict";
    var utils_1 = require('src/libs/utils');
    var inject_1 = require('src/decorators/utils/inject');
    /**
     * @decorator: @config
     * @type: function
     *
     * declares a new angular config
     *
     * @param name (optional)  replaces the class name
     *
     * @returns {Function}
     */
    function NgConfig() {
        return function (target) {
            var component = function () {
                var injections = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    injections[_i - 0] = arguments[_i];
                }
                var instance = new (target.bind.apply(target, [void 0].concat(injections)))();
                utils_1.default.applyTransformations(target, instance, injections);
                return instance;
            };
            if (!(target.$inject instanceof Array) || target.$inject.length === 0) {
                var parameters = utils_1.default.extractParameters(target);
                if (parameters.length > 0)
                    inject_1.inject(parameters)(component);
            }
            utils_1.default.addDeclareMethod(target);
            utils_1.default.defineComponent(target, null, 'config', component);
        };
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = NgConfig;
});
//# sourceMappingURL=config.js.map