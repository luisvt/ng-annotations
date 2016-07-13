import utils from '../../libs/utils';

/**
 * @decorator: @conceal
 * @type: statement
 */
export function conceal(prototype, name?, descriptor?) {

	if(name === undefined)
		throw Error(`@isolate decorator can only be applied to methods or attributes`);

	if(descriptor !== undefined)
		descriptor.writable = true;

	let $private = utils.getIdentifier('$private');

	if(prototype[$private] === undefined
	|| !(prototype[$private] instanceof Array))
		prototype[$private] = [];

	prototype[$private].push(name);

}
