

export default class Event {
	public static LOADED:string = 'loaded';
	private type:string;
	constructor(type:string) {
		this.type = type;
	}
	getType():string {
		return this.type;
	}
}