import Sprite from './core/Sprite';
import Stage from './core/Stage';
import Rectangle from './Rectangle';
import ImageShape from './ImageShape';
import LoadedEvent from './core/LoadedEvent';

let stage:Stage = new Stage();

let sprite:Sprite = new Sprite();


let rect:Rectangle = new Rectangle(200,100,100,100);
let pic:ImageShape = ImageShape.fromUrl(
	'https://s3.amazonaws.com/1.us-east-1.517.today/map/restaurant.png',
	84,84);
stage.addChild(rect);


let canvas:HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

pic.addEventListener('loaded', function(e:LoadedEvent) {
	stage.addChild(pic);
	
});
stage.setFps(2);
stage.renderTo(canvas);