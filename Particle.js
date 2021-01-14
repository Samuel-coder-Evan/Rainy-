class Particle{
    constructor(x,y){
      this.body = Bodies.circle(x,y,10)  
     World.add(world,this.body)
     this.radius = 10
    }
 display(){
    var pos = this.body.position;
    ellipseMode(RADIUS);
    //fill(r,g,b) 0 to 255
    fill(random(0,255),random(0,255),random(0,255));
    ellipse(pos.x, pos.y, this.radius-5, this.radius);
 }
}
