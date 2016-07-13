import {service, autobind, inject} from '../../../src/app';
import app from '../index';

@inject('$http')
@service()
export class FooBarService {

	@autobind
	getContext() {
		return this;
	}

	get() {
		let obj = { getContext: this.getContext };
		return obj.getContext();
	}
}

@service('renamed.service.barfoo')
export class BarFooService extends FooBarService {}

@service()
@inject(BarFooService)
export class BarBarService {

	constructor(private barfoo) {}

	getInjection() {
		return this.barfoo;
	}
}

[
	FooBarService,
	BarFooService,
	BarBarService
].forEach(component => (component as any).autodeclare(app));
