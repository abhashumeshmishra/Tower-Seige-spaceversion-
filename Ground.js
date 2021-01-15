class Ground {
  constructor(x,y,width,height) {
    var options = {
        isStatic : true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    rectMode(CENTER);
    strokeWeight(2);
    stroke(187, 213, 106);
    fill(114, 197, 203);
  
    rect(pos.x, pos.y, this.width, this.height);
  }
}
