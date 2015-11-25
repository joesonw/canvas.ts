/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient
 */
export default class Gradient {
	private x0:number;
	private y0:number;
	private x1:number;
	private y1:number;
	private colorStop:Array<{index:number, color:string}> = new Array<{index:number, color:string}>();
 	constructor(x0:number, y0:number, x1:number, y1:number) {
		this.x0 = x0;
		this.y0 = y0;
		this.x1 = x1;
		this.y1 = y1;
	}
	public addColorStop(index:number, color:string) {
		this.colorStop.push({index:index, color:color});
	}
}