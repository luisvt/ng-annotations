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
     * @decorator: @component
     * @type: function
     *
     * declares a new component (directive + controller)
     *
     * @param options (mandatory) components options
     * @paramEx
     * {
     *      selector (string) mandatory - directive name
     *      alias (string) optional controllerAs option - defaults to selector value
     *      type (string) optional - restrict directive option
     *      ioProps (object) optional binded properties - two way binding
     *      template (string) optional - template string
     *      templateUrl (string) optional - template url
     *      transclude (boolean) optional
     *      lifecycle (object - array of hooks) optional - lifecycle callbacks(compile/prelink/postlink)
     * }
     *
     * @example
     *
     *  @component({
     *  	selector: 'myComponent',
     *  	alias: '', //optional
     *  	type: 'EA', //optional, defaults to E
     *  	ioProps: {
     *  		'prop1': 'property1',
     *  		'prop2': 'property2'
     *  	}, //optional
     *  	template: '', //optional
     *  	//templateUrl: '', //optional
     *  	//transclude: true
     *  	lifecycle: {
     *  		compile: () => {},
     *  		prelink: () => {},
     *  		postlink: () => {}
     *  	} //optional
     *  })
     *  export class FooBarComponent {
     *
     *  	$ioProps = {
     *  		prop1: null,
     *  		prop2: null
     *  	}; //auto injected by the ioProps component option
     *
     *  }
     *
     * @returns {Function}
     */
    function NgComponent(options) {
        if (options === void 0) { options = {}; }
        var _a = extractComponentOptions(options), selector = _a.selector, directiveOpts = _a.directive;
        return function (target) {
            var controller = generateController(target, selector);
            directiveOpts.controller = controller.$name;
            var directive = generateDirective(selector, directiveOpts);
            Object.defineProperties(target, {
                '$composite': {
                    value: { controller: controller, directive: directive },
                    enumerable: true,
                    configurable: true
                },
                '$type': {
                    value: 'component',
                    enumerable: true,
                    writable: false
                },
                'autodeclare': {
                    configurable: true,
                    enumerable: false,
                    value: function (ngModule) {
                        var _a = this.$composite, controller = _a.controller, directive = _a.directive;
                        controller.autodeclare(ngModule);
                        directive.autodeclare(ngModule);
                    }
                }
            });
        };
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = NgComponent;
    function generateController(target, selector) {
        var controller = {
            get $inject() {
                return target.$inject;
            }
        }, controllerName = selector + "-component-" + utils_1.default.getUUID();
        var component = function () {
            var injections = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                injections[_i - 0] = arguments[_i];
            }
            var instance = new (target.bind.apply(target, [void 0].concat(injections)))();
            if (!instance.$ioProps)
                instance.$ioProps = {};
            utils_1.default.applyTransformations(target, instance, injections);
            return utils_1.default.getFinalComponent(target, instance);
        };
        if (!(target.$inject instanceof Array) || target.$inject.length === 0) {
            var parameters = utils_1.default.extractParameters(target);
            if (parameters.length > 0)
                inject_1.inject(parameters)(component);
        }
        utils_1.default.addDeclareMethod(controller);
        utils_1.default.defineComponent(controller, controllerName, 'controller', component);
        return controller;
    }
    function generateDirective(selector, options) {
        var directive = {};
        utils_1.default.addDeclareMethod(directive);
        utils_1.default.defineComponent(directive, selector, 'directive', function () { return options; });
        return directive;
    }
    function extractComponentOptions(options) {
        if (options === void 0) { options = {}; }
        var opts = {
            selector: null,
            directive: {
                restrict: 'E',
                scope: {},
                controllerAs: null,
                controller: null,
                transclude: false
            }
        }, hooks = {
            compile: function () { },
            prelink: function () { },
            postlink: function () { }
        };
        if (typeof options.selector !== 'string' || !options.selector.length)
            throw Error("@component: the selector option is mandatory and should be a string, " + typeof options.selector + " given");
        else
            opts.selector = opts.directive.controllerAs = options.selector;
        if (typeof options.ioProps === 'object' && !!options.ioProps) {
            var props = Object.keys(options.ioProps);
            for (var i = 0, length_1 = props.length; i < length_1; i++) {
                var propKey = props[i];
                opts.directive.scope[propKey] = "=" + options.ioProps[propKey];
            }
        }
        if (typeof options.alias === 'string' && options.alias.length > 0)
            opts.directive.controllerAs = options.alias;
        if (typeof options.type === 'string' && options.type.length > 0)
            opts.directive.restrict = options.type;
        if ('template' in options)
            opts.directive.template = options.template;
        if ('templateUrl' in options)
            opts.directive.templateUrl = options.templateUrl;
        if ('transclude' in options)
            opts.directive.transclude = !!options.transclude;
        if (typeof options.lifecycle === 'object' && options.lifecycle) {
            if ('compile' in options.lifecycle && typeof options.lifecycle.compile === 'function')
                hooks.compile = options.lifecycle.compile;
            if ('prelink' in options.lifecycle && typeof options.lifecycle.prelink === 'function')
                hooks.prelink = options.lifecycle.prelink;
            if ('postlink' in options.lifecycle && typeof options.lifecycle.postlink === 'function')
                hooks.postlink = options.lifecycle.postlink;
        }
        opts.directive.compile = function () {
            var compileArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                compileArgs[_i - 0] = arguments[_i];
            }
            (_a = hooks.compile).apply.apply(_a, [this].concat(compileArgs));
            return {
                pre: function (scope, element, attributes, controller, transcludeFn) {
                    var ioPropsContainer = {};
                    if (!controller.$ioProps || typeof controller.$ioProps !== 'object')
                        controller.$ioProps = ioPropsContainer;
                    else
                        ioPropsContainer = controller.$ioProps;
                    var props = Object.keys(options.ioProps || []);
                    props.forEach(function (propname) {
                        Object.defineProperty(ioPropsContainer, propname, {
                            get: function () { return scope[propname]; },
                            set: function (val) { scope[propname] = val; }
                        });
                    });
                    Object.defineProperty(ioPropsContainer, 'length', {
                        get: function () { return props.length; },
                        enumerable: true
                    });
                    hooks.prelink.apply(this, [scope, element, attributes, controller, transcludeFn]);
                },
                post: function () {
                    var postArgs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        postArgs[_i - 0] = arguments[_i];
                    }
                    hooks.postlink.apply(this, postArgs);
                }
            };
            var _a;
        };
        return opts;
    }
});
//# sourceMappingURL=component.js.map