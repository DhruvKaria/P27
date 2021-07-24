
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobobject1 = new Bob(width/2-50,400,20)
	bobobject2 = new Bob(width/2,400,20)
	bobobject3 = new Bob(width/2+50,400,20)
	bobobject4 = new Bob(width/2+100,400,20)
	bobobject5 = new Bob(width/2+150,400,20)
    
	roofobject = new Roof(width/2,height/4,width/2,20)
	rope1=new Rope(bobobject1.body,roofobject.body,-50,0)
	rope2=new Rope(bobobject2.body,roofobject.body,0,0)
	rope3=new Rope(bobobject3.body,roofobject.body,50,0)
	rope4=new Rope(bobobject4.body,roofobject.body,100,0)
	rope5=new Rope(bobobject5.body,roofobject.body,150,0)

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  bobobject1.display()
  bobobject2.display()
  bobobject3.display()
  bobobject4.display()
  bobobject5.display()
  roofobject.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}



