import {FooBarFactory, BarFooFactory, BarBarFactory} from '../sandbox/components/factory';
import testModule from "../sandbox/index";
import 'angular-mocks';

import ExpectStatic = Chai.ExpectStatic;

const {mock} = angular;

declare var expect: ExpectStatic;

describe('@factory', () => {

	var foobar, barfoo, barbar;
	beforeEach(mock.module(testModule));
	beforeEach(mock.inject([
		(FooBarFactory as any).$name,
		(BarFooFactory as any).$name,
		(BarBarFactory as any).$name,
		(FooBarFactory, BarFooFactory, BarBarFactory) => {
			foobar = FooBarFactory;
			barfoo = BarFooFactory;
			barbar = BarBarFactory;
		}
	]));

	it('should have a different name', () => {
		expect((BarBarFactory as any).$name).to.equal('factory.factories.barbar');
		expect(barbar).to.not.be.undefined;
	});

	it('should keep the context', () => {
		expect(foobar.get()).to.equal(foobar);
	});

	it('should inject an other factory', () => {
		expect(barbar.barfoo).to.equal(barfoo);
	});

	it('should only return the exposed properties', () => {
		expect(barfoo.foo).to.not.be.undefined;
		expect(barfoo.bar).to.be.undefined;
	});

	it('should provide apply and call methods', function() {
		expect(barbar.getContext.apply).to.not.be.undefined;
		expect(barbar.getContext.call).to.not.be.undefined;
		expect(barbar.getContext.apply).to.be.an.instanceOf(Function);
		expect(barbar.getContext.call).to.be.an.instanceOf(Function);
	});

	it('should change the execution context', function() {
		var scope = {foo:3};
		expect(barbar.getContext.call(scope)).to.equal(scope);
		expect(barbar.getContext.apply(scope)).to.equal(scope);
	})

});
