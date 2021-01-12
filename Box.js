class Box {
    constructor(x,y,width,height){
    var box_options={
    restitution: 0.8
    }
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,box_options);
    World.add(world,this.body);
  }
     
    display(){
    var p = this.body.position
    var angle = this.body.angle
    push();
    translate(p.x,p.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    }
}