(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './decorators/components/controller', "./decorators/components/component", "./decorators/components/service", "./decorators/components/animation", "./decorators/components/config", "./decorators/components/directive", "./decorators/components/factory", "./decorators/components/filter", "./decorators/components/provider", "./decorators/components/run", "./decorators/components/decorator", "./wrappers/constant", "./wrappers/value", "./decorators/utils/inject", "./decorators/utils/autobind", "./decorators/utils/attach", "./decorators/utils/conceal"], factory);
    }
})(function (require, exports) {
    "use strict";
    var controller_1 = require('./decorators/components/controller');
    var component_1 = require("./decorators/components/component");
    var service_1 = require("./decorators/components/service");
    var animation_1 = require("./decorators/components/animation");
    var config_1 = require("./decorators/components/config");
    var directive_1 = require("./decorators/components/directive");
    var factory_1 = require("./decorators/components/factory");
    var filter_1 = require("./decorators/components/filter");
    var provider_1 = require("./decorators/components/provider");
    var run_1 = require("./decorators/components/run");
    var decorator_1 = require("./decorators/components/decorator");
    var constant_1 = require("./wrappers/constant");
    var value_1 = require("./wrappers/value");
    // utils
    var inject_1 = require("./decorators/utils/inject");
    exports.inject = inject_1.inject;
    var autobind_1 = require("./decorators/utils/autobind");
    exports.autobind = autobind_1.autobind;
    var attach_1 = require("./decorators/utils/attach");
    exports.attach = attach_1.attach;
    var conceal_1 = require("./decorators/utils/conceal");
    exports.conceal = conceal_1.conceal;
    exports.controller = controller_1.default;
    exports.component = component_1.default;
    exports.service = service_1.default;
    exports.animation = animation_1.default;
    exports.config = config_1.default;
    exports.directive = directive_1.default;
    exports.factory = factory_1.default;
    exports.filter = filter_1.default;
    exports.provider = provider_1.default;
    exports.run = run_1.default;
    exports.decorator = decorator_1.default;
    // wrappers
    exports.constant = constant_1.default;
    exports.value = value_1.default;
});
//# sourceMappingURL=app.js.map