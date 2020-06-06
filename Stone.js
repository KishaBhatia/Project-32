class Stone {
  constructor(x, y,width,height) {
    var options = {
        'restitution':0.9,
        //'friction':1.4,
        //'density':1.5
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.image = loadImage("stone.png");
    this.width=width;
    this.height=height;
    
    World.add(world, this.body);
  }

  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,50,50);
    pop();
  }

};