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
     * @decorator: @filter
     * @type: function
     *
     * declares a new angular filter
     *
     * @param filterProps (optional)  filter properties containing name and the stateful attribute
     *
     * @returns {Function}
     */
    function NgFilter(filterProps) {
        if (filterProps === void 0) { filterProps = { name: '', stateful: false }; }
        return function (target) {
            var name = '', stateful = false;
            if (filterProps instanceof Object) {
                name = filterProps.name || target.name;
                stateful = !!filterProps.stateful;
            }
            else
                name = filterProps || target.name;
            var component = function () {
                var injections = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    injections[_i - 0] = arguments[_i];
                }
                var instance = new (target.bind.apply(target, [void 0].concat(injections)))();
                if (!(instance.$filter instanceof Function))
                    throw Error('an annotated "filter" must implement the "$filter" method');
                utils_1.default.applyTransformations(target, instance, injections);
                //@todo remove it in the next version
                if (instance.$stateful === true) {
                    console.warn('the $stateful property is deprecated and will be removed in the next versions, use the @filter parameter instead');
                    console.warn('https://github.com/PillowPillow/ng-annotations#d_filter');
                    filter.$stateful = true;
                }
                if (stateful)
                    filter.$stateful = stateful;
                return filter;
                function filter() {
                    var parameters = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        parameters[_i - 0] = arguments[_i];
                    }
                    return instance.$filter.apply(instance, parameters);
                }
            };
            if (!(target.$inject instanceof Array) || target.$inject.length === 0) {
                var parameters = utils_1.default.extractParameters(target);
                if (parameters.length > 0)
                    inject_1.inject(parameters)(component);
            }
            utils_1.default.addDeclareMethod(target);
            utils_1.default.defineComponent(target, name, 'filter', component);
        };
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = NgFilter;
});
//# sourceMappingURL=filter.js.map