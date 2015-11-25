import BaseError from './BaseError';

export default class NotImplementedError extends BaseError {
	constructor(name:string) {
		super('Method \'${name}\' has not been implemented yet.');
	}
}