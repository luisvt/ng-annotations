(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    /**
     * @decorator: @inject
     * @type: function
     *
     * replaces the angular dependency injection system
     *
     * @param toInject  string|Array
     * @param more (optional)  string[]
     */
    function inject(toInject) {
        var more = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            more[_i - 1] = arguments[_i];
        }
        if (!(toInject instanceof Array)) {
            toInject = [toInject];
            if (more.length > 0)
                toInject = toInject.concat(more);
        }
        toInject.forEach(function (component, index) {
            if (component instanceof Object && '$name' in component)
                toInject[index] = component.$name;
        });
        return injectTo(toInject, '$inject');
    }
    exports.inject = inject;
    function injectTo(toInject, targetField) {
        return function (target) {
            var options = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                options[_i - 1] = arguments[_i];
            }
            if (options.length > 0)
                target = options[1].value;
            Object.defineProperty(target, targetField, {
                value: toInject,
                enumerable: true,
                configurable: true
            });
        };
    }
    exports.injectTo = injectTo;
});
//# sourceMappingURL=inject.js.map