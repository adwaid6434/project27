var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roofObject,rope1,rope2,rope3,rope4,rope5
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1= new Bob(width/2,450,100,{isStatic:true});
	bobObject2= new Bob(width/2+100,450,100,{isStatic:true});
	bobObject3= new Bob(width/2+200,450,100,{isStatic:true});
	bobObject4= new Bob(width/2-100,450,100,{isStatic:true});
	bobObject5= new Bob(width/2-200,450,100,{isStatic:true});
	
	
	roofObject = new Ground(width/2, 50, 600, 30 , {isStatic:true} );

	rope1 = new Rope(bobObject1.body,roofObject.body,-Bob.Diameter*2,0,{stiffness:0.04},{length:10});
	rope2 = new Rope(bobObject2.body,roofObject.body+100,-Bob.Diameter*2,0,{stiffness:0.04},{length:10});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  drawSprites();
 
}



