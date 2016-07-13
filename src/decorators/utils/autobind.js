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
     * @decorator: @autobind
     * @type: statement
     *
     * bind a method to its current context
     *
     */
    function autobind(props, name, descriptor) {
        var fn = descriptor.value;
        if (typeof fn !== 'function')
            throw Error("@autobind decorator can only be applied to methods not: " + typeof fn);
        return {
            configurable: true,
            get: function get() {
                var boundFn = fn.bind(this);
                Object.defineProperty(this, name, {
                    value: boundFn,
                    configurable: true,
                    writable: true
                });
                return boundFn;
            }
        };
    }
    exports.autobind = autobind;
});
//# sourceMappingURL=autobind.js.map