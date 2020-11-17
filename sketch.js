const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 600, 50);

  ground = new Ground(400, 680, 800, 20);
  
  leftSide = new Dustbin(550, 620, 20, 100);
  bottom = new Dustbin(610, 560, 200, 20);
  rightSide = new Dustbin(670, 620, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("yellow");
  
  Engine.update(engine);

  

  ground.display();

  leftSide.display();
  
  rightSide.display();
  bottom.display();
  paper.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:75, y: -70})
  }
}