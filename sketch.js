const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var score = 0;
function preload(){
 Bg = loadImage("Bg.jpg")
 U = loadImage("Umbrella2.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight-200);
  engine = Engine.create();
  world = engine.world;
  Bground = new Ground( width/2,height-50,120,10)
  //Lground = new Ground(width/2-50,height-80,10,60)
  //Rground = new Ground(width/2 + 50,height-80,10,60)
  
}
function draw() {
 Engine.update(engine)
  background(Bg);  
  if(frameCount % 10 === 0){
    particles.push(new Particle(random(50,750),10))
  }
  textSize(30)
  text("score "+ score, 30,30 )

  
  for(var p in particles){
   particles[p].display()
  // console.log(particles[p])
   if(particles[p].body.speed < 1 && particles[p].body.position.y > height - 100 ){
    Matter.Body.setStatic(particles[p].body,true)
     World.remove(world,particles[p].body)
     delete particles[p]
     score = score + 1     
   }  
  
  }


  if(keyIsDown(LEFT_ARROW)){
    /*Bground.body.position.x = Bground.body.position.x - 5
    Lground.body.position.x = Lground.body.position.x - 5
    Rground.body.position.x = Rground.body.position.x - 5*/
    Matter.Body.setPosition(Bground.body,{x:Bground.body.position.x - 5,y:Bground.body.position.y})
    //Matter.Body.setPosition(Lground.body,{x:Lground.body.position.x - 5,y:Lground.body.position.y})
    //Matter.Body.setPosition(Rground.body,{x:Rground.body.position.x - 5,y:Rground.body.position.y})

  }
  if(keyIsDown(RIGHT_ARROW)){
    /*Bground.body.position.x = Bground.body.position.x + 5
    Lground.body.position.x = Lground.body.position.x + 5
    Rground.body.position.x = Rground.body.position.x + 5 */
   Matter.Body.setPosition(Bground.body,{x:Bground.body.position.x + 5,y:Bground.body.position.y})
   //Matter.Body.setPosition(Lground.body,{x:Lground.body.position.x + 5,y:Lground.body.position.y})
   //Matter.Body.setPosition(Rground.body,{x:Rground.body.position.x + 5,y:Rground.body.position.y})
  }
 
  Bground.display()
  //Lground.display()
  //Rground.display()
}




