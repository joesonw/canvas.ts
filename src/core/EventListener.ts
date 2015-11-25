import Event from './Event';
import {removeElementOf , findIndexOf} from '../Utilities';

export default class EventListener {
	private listeners: {[key:string] : Array<(e:Event) => void>} = {};
	constructor() {
	
	}
	addEventListener(e:string,fn:(e:Event) => void) {
		this.listeners[e] = this.listeners[e] || new Array<(e:Event) => void>();
		this.listeners[e].push(fn);
	}
	dispatchEvent(e:Event) {
		let targets = this.listeners[e.getType()] || [];
		for (let fn of targets) {
			fn(e);
		}
	}
	removeEventListener(e:string,fn:(e:Event) => void) {
		removeElementOf(this.listeners[e] || [],fn);
	}
	hasEventListener(e:string, fn:(e:Event) => void) {
		return findIndexOf(this.listeners[e] || [], fn) == -1;
	}
}