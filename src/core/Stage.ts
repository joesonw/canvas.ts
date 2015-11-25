import Sprite from './Sprite';
import EventListener from './EventListener';
import Instruction from './Instruction';

export default class Stage extends EventListener {
	private canvas:CanvasRenderingContext2D;
	private children:Array<Sprite> = new Array<Sprite>();
	private fps:number = 24;
	
	constructor() {
		super();
		this.children = new Array<Sprite>();
	}
	
	public setFps(fps:number) {
		this.fps = fps;
	}
	
	public renderTo(canvas:HTMLCanvasElement) {
		setInterval(() => this.render(canvas),1000 / this.fps);
	}
	
	private render(canvas:HTMLCanvasElement) {
		let context: CanvasRenderingContext2D = canvas.getContext('2d');
		context.clearRect(0, 0, canvas.width, canvas.height);
		console.log('rendering');
		for (let c of this.children) {
			for (let i of c._render()) {
				this.parseInstruction(i,context);
			}
		}
	}
	
	public addChild(s:Sprite) {
		this.children.push(s);
	}
	
	
	private parseInstruction(i:Instruction,canvas:CanvasRenderingContext2D) {
		if (canvas[i.method]) {
			if (typeof canvas[i.method] == 'function') {
				canvas[i.method].apply(canvas,i.paramters);
			} else {
				canvas[i.method] = i.paramters[0];
			}	
		}
	}
}