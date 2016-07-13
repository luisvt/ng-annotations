(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var NgDecoratorUtils = (function () {
        function NgDecoratorUtils() {
        }
        NgDecoratorUtils.extractParameters = function (fn) {
            var fnText = fn.toString().replace(this.regexStripComment, ''), args = fnText.match(this.regexArgs);
            return args && args[1].length > 0 ? args[1].split(',') : [];
        };
        NgDecoratorUtils.getUUID = function (pattern) {
            if (pattern === void 0) { pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'; }
            return pattern.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };
        NgDecoratorUtils.arrayUnique = function (arr) {
            if (arr === void 0) { arr = []; }
            var ret = [arr[0]];
            for (var i = 1; i < arr.length; i++)
                if (arr[i - 1] !== arr[i])
                    ret.push(arr[i]);
            return ret;
        };
        NgDecoratorUtils.getIdentifier = function (key) {
            if (this.identifiers[key] === undefined)
                this.identifiers[key] = window.Symbol ? Symbol(key) : this.getUUID();
            return this.identifiers[key];
        };
        NgDecoratorUtils.addDeclareMethod = function (target) {
            Object.defineProperty(target, 'autodeclare', {
                configurable: true,
                enumerable: false,
                value: function (ngModule) {
                    var component = this.$component;
                    if (this.$component instanceof Object && '_$inject' in this.$component)
                        component = this.$component._$inject.concat([this.$component]);
                    var params = !!this.$name ? [this.$name, component] : [component];
                    if (typeof ngModule === 'string')
                        ngModule = angular.module(ngModule);
                    return ngModule[this.$type].apply(ngModule, params);
                }
            });
        };
        NgDecoratorUtils.applyTransformations = function (component, instance, injections) {
            if (instance === void 0) { instance = {}; }
            if (injections === void 0) { injections = []; }
            var $transformKey = this.getIdentifier('$transform'), transformations = component.prototype[$transformKey] || [];
            transformations.forEach(function (transformation) { return transformation(instance, component, injections); });
        };
        NgDecoratorUtils.getFinalComponent = function (target, instance) {
            var $privateKey = this.getIdentifier('$private'), privateProperties = target.prototype[$privateKey] || [];
            if (privateProperties.length === 0)
                return instance;
            privateProperties.push('constructor');
            var prototypeProperties = Object.getOwnPropertyNames(target.prototype), instanceProperties = Object.getOwnPropertyNames(instance);
            var properties = this.arrayUnique(prototypeProperties.concat(instanceProperties)), publicProperties = properties.filter(function (property) { return !~privateProperties.indexOf(property); }), exposed = {};
            publicProperties.forEach(function (property) {
                if (instance[property] instanceof Function) {
                    exposed[property] = function () {
                        var parameters = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            parameters[_i - 0] = arguments[_i];
                        }
                        return instance[property].apply(instance, parameters);
                    };
                    Object.defineProperties(exposed[property], {
                        call: {
                            value: function (scope) {
                                if (scope === void 0) { scope = instance; }
                                var parameters = [];
                                for (var _i = 1; _i < arguments.length; _i++) {
                                    parameters[_i - 1] = arguments[_i];
                                }
                                return instance[property].apply(scope, parameters);
                            },
                            writable: false,
                            enumerable: false
                        },
                        apply: {
                            value: function (scope, parameters) {
                                if (scope === void 0) { scope = instance; }
                                if (parameters === void 0) { parameters = []; }
                                return instance[property].apply(scope, parameters);
                            },
                            writable: false,
                            enumerable: false
                        }
                    });
                }
                else
                    Object.defineProperty(exposed, property, {
                        get: function () { return instance[property]; },
                        set: function (val) { return instance[property] = val; },
                        enumerable: false
                    });
            });
            return exposed;
        };
        NgDecoratorUtils.defineComponent = function (target, name, type, component) {
            if (!~this.angularComponents.indexOf(type))
                throw Error('the given type must be a valid angular component');
            Object.defineProperties(target, {
                '$name': {
                    value: name !== undefined ? name : target.name,
                    enumerable: true,
                    configurable: true
                },
                '$type': {
                    value: type,
                    enumerable: true,
                    writable: false
                },
                '$component': {
                    value: component,
                    enumerable: true,
                    configurable: true
                }
            });
            if (target.$component instanceof Object)
                Object.defineProperty(target.$component, '$inject', {
                    get: function () { return target.$inject || []; },
                    set: function (val) { return target.$inject = val; }
                });
        };
        NgDecoratorUtils.regexArgs = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
        NgDecoratorUtils.regexStripComment = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
        NgDecoratorUtils.angularComponents = ['config', 'run', 'value', 'constant', 'animation', 'controller', 'directive', 'factory', 'provider', 'service', 'filter'];
        NgDecoratorUtils.identifiers = {};
        return NgDecoratorUtils;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = NgDecoratorUtils;
});
//# sourceMappingURL=utils.js.map