
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree1;
var stone1;
var boy,boyImg;
var mango1,mango2,mango3,mango4,mango5,mango6;
var ground1;
var launcher1;

function preload()
{
	boyImg= loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground1= new Ground(400,height,800,20);
	tree1 = new Tree(320,height-400,500,400);
	mango1 = new Mango(300,155,50);
	mango2 = new Mango(225,160,50);
	mango3 = new Mango(214,189,50);
	mango4 = new Mango(363,200,50);
	mango5 = new Mango(243,222,50);
	mango6 = new Mango(323,221,50);

	stone1= new Stone(100,300,40);
	launcher1= new 	Launcher(stone1.body,{x:100,y:300});
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground1.display();
  tree1.display(); 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone1.display();
  launcher1.display();
  image(boyImg,50,525,200,220);

}



