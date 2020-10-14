
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,r1,r2,r3,img;
function preload()
{
	img=loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(1600, 500);
	engine = Engine.create();

	rs1=createSprite(1120,460,120,10);
	rs1.shapeColor=color(255,0,255);

	rs2=createSprite(1035,375,10,150);
	rs2.shapeColor=color(255,0,255);

	rs3=createSprite(1215,375,10,150);
	rs3.shapeColor=color(255,0,255);
	rec=createSprite(1125,345,10,10);
	rec.addImage(img);
	rec.scale=0.8;
	
	
  world = engine.world;

	paper= new Paper(85,450);
	paper.scale=0.1;
  ground=new Ground(800, 480, 1600, 10 );
  
	r1=Bodies.rectangle(1120,460,120,10,{isStatic:true});
	World.add(world,r1);

	r2=Bodies.rectangle(1035,435,10,60,{isStatic:true});
	World.add(world,r2);

	r3=Bodies.rectangle(1215,375,10,150,{isStatic:true});
	World.add(world,r3);

  Engine.run(engine);
  
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  paper.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}
}
