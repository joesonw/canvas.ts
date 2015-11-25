import Shape from './Shape';
import Instruction from './core/Instruction';
import LoadedEvent from './core/LoadedEvent';

export default class ImageShape extends Shape {
	private image:any;
	constructor(image:any, width: number, height:number, x?:number, y?:number) {
		super(width, height, x, y);
		if (!(image instanceof Image)) {
			throw new Error('Image expected');
		}
		this.image = image;
	}
	
	public static fromUrl(url:string, width:number, height:number, x?:number, y?:number):ImageShape {
		let source = new Image();
		source.src = url;
		let image:ImageShape = new ImageShape(source, width, height, x, y);
		image.instructions.push({method:'drawImage',paramters:[url,]});
		source.onload = function() {
			image.dispatchEvent(new LoadedEvent(source));
		};
		return image;
	}
	
	public _render():Array<Instruction> {
		this.instructions = new Array<Instruction>();
		this.push('drawImage',[this.image, this.x, this.y, this.width, this.height]);
		return this.instructions;
	}
}