import Instruction from './Instruction';
import NotImplementedError from '../error/NotImplementedError';
import Gradient from './Gradient';
import EventListener from './EventListener';


interface AddHitRegionOpotions {
	path: any;
	fillRule: string;
	id:string;
	parentId:string;
	cursor:any;
	control:any;
	label:string;
	role:any;
}

enum FillRule {
	NONZERO,
	EVENODD
}

export {FillRule}

export default class Sprite extends EventListener {
	protected instructions:Array<Instruction> = new Array<Instruction>();
	
	constructor() {
		super();
	}
	
	public _render():Array<Instruction> {
		return this.instructions;
	}
	
	protected push(method:string, paramters?:Array<any>) {
		this.instructions.push({method:method,paramters:paramters || []});
	}
	
	/**
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/addHitRegion
	 */
	public addHitRegion(options:AddHitRegionOpotions) {
		throw new NotImplementedError('addHitRegion');
	}
	public arc(x:number, y:number, radius:number, startAngle:number, endAngle:number, anticlockwise?:boolean) {
		this.push('arc',[x, y, radius, startAngle, endAngle, anticlockwise || false]);	
	}
	public arcTo(x1:number, y1:number, x2:number, y2:number, radius:number) {
		this.push('arcTo',[x1,y1,x2,y2,radius]);
	}
	public begin() {
		this.push('beginPath');
	}
	/**
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo
	 */
	public bezierCurveTo(cp1x:number, cp1y:number, cp2x:number, cp2y:number, x:number, y:number) {
		this.push('bezierCurveTo',[cp1x, cp1y, cp2x, cp2y, x, y]);
	}
	/**
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearHitRegions
	 */
	public clearHitRegions() {
		throw new NotImplementedError('clearHitRegions');
	}
	public clearRect(x:number, y:number, width:number, height:number) {
		this.push('clearRect',[x, y, width, height]);
	}
	public clip(fillRule:FillRule = FillRule.NONZERO) {
		this.push('clip',[fillRule]);
	}
	public close() {
		this.push('closePath');
	}
	/**
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createImageData
	 */
	public createImageData(width:number, height:number):ImageData {
		return null;
	}
	public createLinearGradient(x0:number, y0:number, x1:number, y1:number):Gradient {
		return new Gradient(x0, y0, x1, y1);
	}
	public createPattern(image: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | Sprite | ImageData)  {
		throw new NotImplementedError('createPattern');		
	}
	public moveTo(x:number, y:number) {
		this.push('moveTo',[x,y]);
	}
	public lineTo(x:number, y:number) {
		this.push('lineTo',[x,y]);
	}
	public set fillStyle(value: string | Gradient) {
		this.push('fillStyle',[value]);
	}
	public set lineWidth(value: number) {
		this.push('lineWidth',[value]);
	}
	public stroke() {
		this.push('stroke');	
	}
	
}