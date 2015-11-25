import Sprite from './core/Sprite';

export default class Shape extends Sprite {
	public width:number;
	public height:number;
	public x:number;
	public y:number;
	constructor(width:number = 0, height:number = 0, x:number = 0, y: number = 0) {
		super();
		this.width = width;
		this.height = height;
		this.x = x;
		this.y = y;
	}
}