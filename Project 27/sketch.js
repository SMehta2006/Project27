
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	bobObject3 = new Bob(400,300,50);
	roof = new Roof();
	
	rope1 = new Rope(bobObject3.body,roof.body,-bobDiameter*2,0);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(200);

  bobObject3.display();
  roof.display();
  rope1.display();
  drawSprites();
 
}



