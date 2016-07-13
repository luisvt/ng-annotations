import {FooFactory, BarService, FooBarController} from '../sandbox/utils/conceal';
import app from "../sandbox/index";
import ExpectStatic = Chai.ExpectStatic;
import 'angular-mocks';

declare var expect: ExpectStatic;

describe('@conceal', () => {

  var service, $scope, ctrlBuilder, controller, factory;
  beforeEach(angular.mock.module(app));
  beforeEach(inject([
    (FooFactory as any).$name,
    (BarService as any).$name,
    '$rootScope',
    '$controller',
    (fooFactory, barService, $rootScope, $controller) => {
      factory = fooFactory;
      service = barService;
      $scope = $rootScope.$new();
      ctrlBuilder = $controller;
      controller = $controller((FooBarController as any).$name, {$scope});
    }
  ]));

  it('shouldn\'t expose the concealed properties', function () {
    expect(service.foo).to.be.undefined;
  })

});
