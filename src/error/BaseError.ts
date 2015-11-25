class BaseError {
	constructor(message:string) {
		Error.apply(this,arguments);
	}	
}

BaseError.prototype = new Error();

export default BaseError;