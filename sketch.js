
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer;
var rubber;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	hammer=new Hammer(350,350,40,40);
	rubber=new Rubber(300,300,80,80);
	ground=new Ground(600,400,1200,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display();
  rubber.display();
  ground.display();
  drawSprites();
 
}



