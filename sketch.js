
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var cball , ground, dustbin;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	
cpball = new Ball(50, 30, 50)
ground = new Ground(20)
dustbin = new Bin(800, 360)
	Engine.run(engine);
  
}


function draw() {
  
  background("pink");
 
  ground.display();
  dustbin.display();
  cpball.display();
 
}

function keyPressed(){
	if (keyCode===RIGHT_ARROW){

		Body.applyForce(cpball.body ,cpball.body.position , {x:500, y: -500} );
	}
	if (keyCode===LEFT_ARROW){

		Body.applyForce(cpball.body ,cpball.body.position , {x:-85, y: -85} );
	}
}




