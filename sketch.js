const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper, dustbin1, dustbin2, dustbin3, ground;

function setup(){
	var canvas = createCanvas(1504,888);
	
    engine = Engine.create();
    world = engine.world;    

	paper = new Paper(100, 600, 100);

	dustbin1 = new Dustbin(850, 600, 300, 20);
	dustbin2 = new Dustbin(710, 560, 20, 100);
	dustbin3 = new Dustbin(990, 560, 20, 100);

	ground = new Ground(600, 630, 2000, 20);
}

function draw(){
    background(255, 255, 255);

	Engine.update(engine);

	keyPressed();

	paper.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	ground.display();

}

function keyPressed() {

	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body, paper.body.position, {x: 10, y: -50});

	}
}