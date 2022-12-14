
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var wall1 ;
var wall2 ;
var wall3 ;
 
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	var ball_options = {

		isStatic: false,
		restitution: 0.5,
		fristion: 0,
		density: 1.2

	}
	ball = Bodies.circle(200,300,20,ball_options);
	World.add(world,ball);

   wall1 = new Ground(width/2,570,1200,20);
   wall2 = new Ground(100,40,80,60);
   wall3 = new Ground(400,60,80,60);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  ellipse(ball.position.x,ball.position.y,20);
  wall1.show();
  wall2.show();
  wall3.show();
  Engine.update(engine);
  

}



