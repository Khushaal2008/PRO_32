class Ball{
    constructor(x,y,r){
var options={
    isStatic:false,
    'restitution':0.4,
    'density':0.4,
    'friction':1.0,
}
this.body = Bodies.circle(x,y,r,options)
this.r = r
World.add(world,this.body)
    }
    display(){
      //  this.body.position.x = mouseX
        //this.body.position.y = mouseY
var pos = this.body.position
push();
translate(pos.x,pos.y)
ellipseMode(RADIUS)
fill("red")
ellipse(0,0,this.r,this.r)
pop();
    }
}