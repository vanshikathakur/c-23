class Ground {
    constructor(x,y,width,height){
    var ground_options={
    isStatic: true
    }
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,ground_options);
    World.add(world,this.body);
  }
     
    display(){
    var p = this.body.position
    rectMode(CENTER);
    rect(p.x,p.y,this.width,this.height);

    }
}