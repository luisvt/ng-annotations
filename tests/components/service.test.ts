import {FooBarService, BarFooService, BarBarService} from '../sandbox/components/service';
import app from "../sandbox/index";
import 'angular-mocks';

const {mock} = angular;

var expect = chai.expect;

describe('@service', () => {

	var foobar, barfoo, barbar;
	beforeEach(mock.module(app));
	beforeEach(mock.inject([
		(FooBarService as any).$name,
		(BarFooService as any).$name,
		(BarBarService as any).$name,
		(FooBarService, BarFooService, BarBarService) => {
			foobar = FooBarService;
			barfoo = BarFooService;
			barbar = BarBarService;
		}
	]));

	it('should have a different name', () => {
		expect((BarFooService as any).$name).to.equal('renamed.service.barfoo');
		expect(barfoo).to.not.be.undefined;
	});

	it('should keep the context', () => {
		expect(foobar.get()).to.equal(foobar);
		expect(barfoo.get()).to.equal(barfoo);
	});

	it('should inject an other service', () => {
		expect(barbar.barfoo).to.equal(barfoo);
	});

});
