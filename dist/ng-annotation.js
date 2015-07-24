!function(e){function t(r){if(n[r])return n[r].exports;var module=n[r]={exports:{},id:r,loaded:!1};return e[r].call(module.exports,module,module.exports,t),module.loaded=!0,module.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(module,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t={};t.controller=e(5),t.service=e(11),t.animation=e(3),t.config=e(4),t.directive=e(6),t.factory=e(7),t.filter=e(8),t.provider=e(9),t.run=e(10),t.constant=e(13),t.value=e(14),t.inject=e(2),t.autobind=e(12),exports["default"]=window.ngAnnotations=t,module.exports=exports["default"]},function(module,exports){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),n=function(){function n(){e(this,n)}return t(n,null,[{key:"extractParameters",value:function(e){var t=e.toString().replace(this.regexStripComment,""),n=t.match(this.regexArgs);return n&&n[1].length>0?n[1].split(","):[]}},{key:"addDeclareMethod",value:function(e){Object.defineProperty(e,"autodeclare",{configurable:!0,enumerable:!1,value:function(e){var t,n=this.$name?[this.$name,this.$component]:[this.$component];return"string"==typeof e&&(e=angular.module(e)),(t=e)[this.$type].apply(t,n)}})}},{key:"defineComponent",value:function(e,t,n,r){if(!~this.angularComponents.indexOf(n))throw Error("the given type must be a valid angular component");Object.defineProperties(e,{$name:{value:void 0!==t?t:e.name,enumerable:!0,configurable:!0},$type:{value:n,enumerable:!0,writable:!1},$component:{value:r,enumerable:!0,configurable:!0}})}},{key:"regexArgs",value:/^function\s*[^\(]*\(\s*([^\)]*)\)/m,enumerable:!0},{key:"regexStripComment",value:/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,enumerable:!0},{key:"angularComponents",value:["config","run","value","constant","animation","controller","directive","factory","provider","service","filter"],enumerable:!0}]),n}();exports["default"]=n,module.exports=exports["default"]},function(module,exports){"use strict";function e(e){if(!(e instanceof Array)){e=[e];for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];n.length>0&&(e=e.concat(n))}return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;n>a;a++)r[a-1]=arguments[a];r.length>0&&(t=r[1].value),Object.defineProperty(t,"$inject",{value:e,enumerable:!0,configurable:!0})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=e,module.exports=exports["default"]},function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return function(t){e=e||t.name;var n=function(){for(var e=arguments.length,n=Array(e),a=0;e>a;a++)n[a]=arguments[a];return new(r.apply(t,[null].concat(n)))};if(t.$inject instanceof Array&&0!==t.$inject.length)l["default"](t.$inject)(n);else{var a=u["default"].extractParameters(t);a.length>0&&l["default"](a)(n)}u["default"].addDeclareMethod(t),u["default"].defineComponent(t,e,"animation",n)}}Object.defineProperty(exports,"__esModule",{value:!0});var r=Function.prototype.bind;exports["default"]=n;var a=e(1),u=t(a),o=e(2),l=t(o);module.exports=exports["default"]},function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(){return function(e){var t=function(){for(var t=arguments.length,n=Array(t),a=0;t>a;a++)n[a]=arguments[a];new(r.apply(e,[null].concat(n)))};if(e.$inject instanceof Array&&0!==e.$inject.length)l["default"](e.$inject)(t);else{var n=u["default"].extractParameters(e);n.length>0&&l["default"](n)(t)}u["default"].addDeclareMethod(e),u["default"].defineComponent(e,null,"config",t)}}Object.defineProperty(exports,"__esModule",{value:!0});var r=Function.prototype.bind;exports["default"]=n;var a=e(1),u=t(a),o=e(2),l=t(o);module.exports=exports["default"]},function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return function(t){e=e||t.name,a["default"].addDeclareMethod(t),a["default"].defineComponent(t,e,"controller",t)}}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=n;var r=e(1),a=t(r);module.exports=exports["default"]},function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return function(t){e=e||t.name;var n=function(){for(var e=arguments.length,n=Array(e),a=0;e>a;a++)n[a]=arguments[a];return new(r.apply(t,[null].concat(n)))};if(t.$inject instanceof Array&&0!==t.$inject.length)l["default"](t.$inject)(n);else{var a=u["default"].extractParameters(t);a.length>0&&l["default"](a)(n)}u["default"].addDeclareMethod(t),u["default"].defineComponent(t,e,"directive",n)}}Object.defineProperty(exports,"__esModule",{value:!0});var r=Function.prototype.bind;exports["default"]=n;var a=e(1),u=t(a),o=e(2),l=t(o);module.exports=exports["default"]},function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return function(t){e=e||t.name;var n=function(){for(var e=arguments.length,n=Array(e),a=0;e>a;a++)n[a]=arguments[a];var u=new(r.apply(t,[null].concat(n)));return u.expose instanceof Function?u.expose():u};if(t.$inject instanceof Array&&0!==t.$inject.length)l["default"](t.$inject)(n);else{var a=u["default"].extractParameters(t);a.length>0&&l["default"](a)(n)}u["default"].addDeclareMethod(t),u["default"].defineComponent(t,e,"factory",n)}}Object.defineProperty(exports,"__esModule",{value:!0});var r=Function.prototype.bind;exports["default"]=n;var a=e(1),u=t(a),o=e(2),l=t(o);module.exports=exports["default"]},function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return function(t){e=e||t.name;var n=function(){for(var e=arguments.length,n=Array(e),a=0;e>a;a++)n[a]=arguments[a];var u=new(r.apply(t,[null].concat(n)));if(!(u.$filter instanceof Function))throw Error('an annotated "filter" must implement the "$filter" method');return function(){return u.$filter.apply(u,arguments)}};if(t.$inject instanceof Array&&0!==t.$inject.length)l["default"](t.$inject)(n);else{var a=u["default"].extractParameters(t);a.length>0&&l["default"](a)(n)}u["default"].addDeclareMethod(t),u["default"].defineComponent(t,e,"filter",n)}}Object.defineProperty(exports,"__esModule",{value:!0});var r=Function.prototype.bind;exports["default"]=n;var a=e(1),u=t(a),o=e(2),l=t(o);module.exports=exports["default"]},function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return function(t){e=e||t.name,a["default"].addDeclareMethod(t),a["default"].defineComponent(t,e,"provider",t)}}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=n;var r=e(1),a=t(r);module.exports=exports["default"]},function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(){return function(e){var t=function(){for(var t=arguments.length,n=Array(t),a=0;t>a;a++)n[a]=arguments[a];new(r.apply(e,[null].concat(n)))};if(e.$inject instanceof Array&&0!==e.$inject.length)l["default"](e.$inject)(t);else{var n=u["default"].extractParameters(e);n.length>0&&l["default"](n)(t)}u["default"].addDeclareMethod(e),u["default"].defineComponent(e,null,"run",t)}}Object.defineProperty(exports,"__esModule",{value:!0});var r=Function.prototype.bind;exports["default"]=n;var a=e(1),u=t(a),o=e(2),l=t(o);module.exports=exports["default"]},function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return function(t){e=e||t.name,a["default"].addDeclareMethod(t),a["default"].defineComponent(t,e,"service",t)}}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=n;var r=e(1),a=t(r);module.exports=exports["default"]},function(module,exports){"use strict";function e(e,t,n){var r=n.value;if("function"!=typeof r)throw Error("@autobind decorator can only be applied to methods not: "+typeof r);return{configurable:!0,get:function(){var e=r.bind(this);return Object.defineProperty(this,t,{value:e,configurable:!0,writable:!0}),e}}}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=e,module.exports=exports["default"]},function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){var n={};return a["default"].addDeclareMethod(n),a["default"].defineComponent(n,e,"constant",t),n}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=n;var r=e(1),a=t(r);module.exports=exports["default"]},function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){var n={};return a["default"].addDeclareMethod(n),a["default"].defineComponent(n,e,"value",t),n}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=n;var r=e(1),a=t(r);module.exports=exports["default"]}]);
//# sourceMappingURL=ng-annotation.js.map