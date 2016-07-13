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
     * @decorator: @run
     * @type: function
     *
     * declares a new angular run
     *
     * @param name (optional)  replaces the class name
     *
     * @returns {Function}
     */
    function NgRun() {
        return function (target) {
            var component = function (injections) {
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
            utils_1.default.defineComponent(target, null, 'run', component);
        };
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = NgRun;
});
//# sourceMappingURL=run.js.map