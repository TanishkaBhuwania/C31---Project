const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var particle = [];
var plinko = [];
var divisions = [];

function setup() {
  createCanvas(480,625);

  engine = Engine.create();
  world = engine.world;

  createSprite(400, 200, 50, 50);

  ground = new Ground(240,625,480,15);

  var divisionHieght = 200;

  for(var i = 0; i<=innerWidth; i = i + 80) {
    divisions.push(new Divisions(i,height-divisionHieght));
  }

  for (var i = 40; i <=innerWidth; i = i + 50) {
    plinko.push(new Plinko(i,75));
  }

  for(var i = 15; i <=width-10; i = i + 50){
    plinko.push(new Plinko(i,175));
  }
    
  for (var i = 40; i <=innerWidth; i = i + 50) {
    plinko.push(new Plinko(i,75));
  }

  for(var i = 15; i <=width-10; i = i + 50){
    plinko.push(new Plinko(i,175));
  }

  
  
}

function draw() {
  background(0,0,0);  
  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  

  ground.display();

  for (var i = 0; i < plinko.length; i++) {
     
    plinko[i].display();
    }

    for (var i = 0; i < divisions.length; i++) {
     
      divisions[i].display();
      }


  
  

  drawSprites();
}