
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var box1;
var box2;
var box3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball = createSprite(ellipse(60, 60, 30, 30, 
		{isStatic: false, restitution: 0.3, friction: 0.5, density: 1.2}));
	World.add(world, ball);	

	box1 = createSprite(600, 600, 150, 20);
	World.add(world, box1);
	box2 = createSprite(525, 565, 20, 90);
	World.add(world, box2);
	box3 = createSprite(675, 565, 20, 90);
	World.add(world, box3);

	ground = createSprite(400, 650, 800, 100, {isStatic: true});
	ground.shapecolor = ("green");
	World.add(world, ground);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);

  drawSprites();

}

function keyPressed(){
	if(keycode === UP_ARROW){
		Matter.body.applyForce(ballObject.body,paperObject.body.position,{x:85, y:85})
	}
}



