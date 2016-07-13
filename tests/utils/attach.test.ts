import {Ctrl, SafeCtrl, Serv} from '../sandbox/utils/attach';
import app from "../sandbox/index";
import 'angular-mocks';

const {mock} = angular;
declare var expect: Chai.ExpectStatic;

describe('@attach', () => {

  var service, $scope, ctrlBuilder, controller;
  beforeEach(mock.module(app));
  beforeEach(mock.inject([
    (Serv as any).$name,
    '$rootScope',
    '$controller',
    (serv, $rootScope, $controller) => {
      service = serv;
      $scope = $rootScope.$new();
      ctrlBuilder = $controller;
      controller = $controller((SafeCtrl as any).$name, {$scope});
    }
  ]));

  it('should throw an error because the @inject is not applied', function () {
    expect(function () {
      controller = ctrlBuilder((Ctrl as any).$name, {$scope});
    }).to.throw(Error);
  });

  it('should bind the service datas to the controller ', function () {
    expect(controller.attachedData).to.not.be.undefined;
    expect(controller.attachedData).to.equal(service.datas);
  });

  it('should keep the context', function () {
    controller.attachedData.pop();
    expect(controller.getLength()).to.equal(service.getLength());
    service.datas.pop();
    expect(controller.getLength()).to.equal(service.getLength());
  });

  it(`shouldn't be affected by a reference erasing`, function () {
    let oldDatas = service.datas;
    service.clearReference();
    expect(oldDatas).to.not.equal(service.datas);
    expect(controller.attachedData).to.equal(service.datas);
  })

});
