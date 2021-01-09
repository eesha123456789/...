//Namespacing - not creating variables
const Engine=Matter.Engine; // constant variables
const Bodies=Matter.Bodies;
const World=Matter.World;

var engine,world,object, ground, ball, pig1, pig2,log1,log2, log3,log4,bird;

var box1,box2, box3, box4, box5;
function setup() {
  createCanvas(1200,600);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;

  box1 = new Box(860,550,50,50);
  box2= new Box(1000,550,50,50);
  box3= new Box(860,480,50,50);
  box4 = new Box(1000,480,50,50)
  box5 = new Box(930,420,50,50)
  ground = new Ground(600,595,1200,5);
  pig1 = new Pig(930,550,50,50);
  pig2 = new Pig(930,480,50,50)
  log1 = new Log(930,510,200,PI/2)
  log2 = new Log(930,440,200,PI/2)
  log3 = new Log(880,420,100,PI/7)
  log4 = new Log(965,420,100,-PI/7)
  bird = new Bird (200,200)
  /*var ball_options=
  //{
  //  restitution:0.6, 
  // density: 1
  //}

  ball = Bodies.circle(100,200,20,ball_options) //JSON structure
  //JSON - Java Standard Object Notation
  World.add(world,ball);

  console.log(ball);


  //console.log(object);*/
} 

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  pig1.display();
  log1.display();
  box3.display();
  pig2.display();
  box4.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird.display();
  //box3.display();
  //ellipseMode(RADIUS)
  //ellipse(ball.position.x,ball.position.y,20,20)

  
  //drawSprites();
}