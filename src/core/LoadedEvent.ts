import Event from './Event';

export default class LoadedEvent extends Event {
	public data:any;
	constructor(data:any) {
		super('loaded');
		this.data = data;
	}
}