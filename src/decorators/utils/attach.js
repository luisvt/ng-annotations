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
     * @decorator: @attach
     * @type: function
     *
     * replaces the angular dependency attachion system
     *
     * @param source  string component name or this
     * @param path (optional)  string path toward the property
     */
    function attach(source, path) {
        if (source === void 0) { source = 'this'; }
        if (path === void 0) { path = ''; }
        if (typeof source !== 'string'
            && !(source instanceof Object && '$name' in source))
            throw Error("the source param of @attach must be a string or an annotated component, " + typeof source + " given");
        if (typeof path !== 'string')
            throw Error("the path param of @attach must be a string, " + typeof path + " given");
        return function (prototype, name, descriptor) {
            if (descriptor instanceof Object
                && (descriptor.set !== undefined || descriptor.get !== undefined))
                throw Error("@attach decorator cannot be applied to an accessor");
            if (name === undefined)
                throw Error("@attach decorator can only be applied to methods or attributes");
            descriptor.configurable = true;
            if (source instanceof Object)
                source = source.$name;
            var $transformKey = utils_1.default.getIdentifier('$transform');
            if (prototype[$transformKey] === undefined
                || !(prototype[$transformKey] instanceof Array))
                prototype[$transformKey] = [];
            var steps = path.split('.'), propertyName = steps.pop();
            if (source === 'this') {
                delete descriptor.initializer;
                delete descriptor.value;
                setDescriptor(source, steps, propertyName, descriptor);
            }
            else
                prototype[$transformKey].push(getApplyTransformation(source, steps, propertyName, name));
        };
    }
    exports.attach = attach;
    /**
     * @param sourceName    String. name of the source component
     * @param steps Array. path toward the property
     * @param propertyName  String. property name
     * @param targetName    String. name of the target property
     * @returns {Function}
     */
    function getApplyTransformation(sourceName, steps, propertyName, targetName) {
        return function attachTransformation(context, component, injections) {
            var $inject = component.$inject || [], index = $inject.indexOf(sourceName);
            if (!~index)
                throw Error("unable to attach the property " + propertyName + ", the component " + sourceName + " isn't loaded");
            var _a = Object.getOwnPropertyDescriptor(context, targetName), configurable = _a.configurable, enumerable = _a.enumerable;
            var descriptor = { configurable: configurable, enumerable: enumerable };
            setDescriptor(sourceName, steps, propertyName, descriptor, injections[index]);
            delete context[targetName];
            Object.defineProperty(context, targetName, descriptor);
        };
    }
    /**
     * @param source    Object. source object
     * @param steps Array. path toward the property
     * @param property  String. property name
     * @param descriptor    Object. property descriptor
     * @param context   (optional) Object. exec context
     */
    function setDescriptor(source, steps, property, descriptor, context) {
        if (context === void 0) { context = undefined; }
        descriptor.get = function () {
            if (context === undefined)
                context = this;
            if (!property)
                return context;
            var src = getSrc(context, steps);
            return src[property] instanceof Function ? src[property].bind(src) : src[property];
        };
        descriptor.set = function (val) {
            if (context === undefined)
                context = this;
            if (!property)
                return context;
            var src = getSrc(context, steps);
            src[property] = val;
        };
    }
    /**
     * @param source    Object. source object
     * @param path Array. path toward the property
     */
    function getSrc(source, path) {
        if (path === void 0) { path = []; }
        if (path.length > 0)
            for (var i = 0; i < path.length; i++) {
                if (!(source instanceof Object))
                    throw Error('unable to acces to the given property, invalid path');
                source = source[path[i]];
                if (!source)
                    throw Error('unable to acces to the given property');
            }
        return source;
    }
});
//# sourceMappingURL=attach.js.map