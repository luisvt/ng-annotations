import NgController from './decorators/components/controller';
import NgComponent from "./decorators/components/component";
import NgService from "./decorators/components/service";
import NgAnimation from "./decorators/components/animation";
import NgConfig from "./decorators/components/config";
import NgDirective from "./decorators/components/directive";
import NgFactory from "./decorators/components/factory";
import NgFilter from "./decorators/components/filter";
import NgProvider from "./decorators/components/provider";
import NgRun from "./decorators/components/run";
import NgDecorator from "./decorators/components/decorator";
import NgConstant from "./wrappers/constant";
import NgValue from "./wrappers/value";

// utils
export {inject} from "./decorators/utils/inject";
export {autobind} from "./decorators/utils/autobind";
export {attach} from "./decorators/utils/attach";
export {conceal} from "./decorators/utils/conceal";

export var controller = NgController;
export var component = NgComponent;
export var service = NgService;
export var animation = NgAnimation;
export var config = NgConfig;
export var directive = NgDirective;
export var factory = NgFactory;
export var filter = NgFilter;
export var provider = NgProvider;
export var run = NgRun;
export var decorator = NgDecorator;

// wrappers
export var constant = NgConstant;
export var value = NgValue;
