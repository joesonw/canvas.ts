import Shape from './Shape';
import Instruction from './core/Instruction';

export default class Rectable extends Shape {
	constructor(width:number = 0, height:number = 0, x:number = 0, y: number = 0) {
		super(width, height, x, y);
		this.lineWidth = 1;
	}
	
	public _render():Array<Instruction> {
		this.instructions = new Array<Instruction>();
		this.moveTo(this.x, this.y);
		this.lineTo(this.x + this.width, this.y);
		this.lineTo(this.x + this.width, this.y + this.height);
		this.lineTo(this.x, this.y + this.height);
		this.close();
		this.stroke();
		return this.instructions;
	}
}