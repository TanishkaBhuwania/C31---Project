class Plinko {
    constructor(x,y,r) {
    var options = {
        isStatic: true
    }
    
    this.r = r;
    this.body = Bodies.circle(x, y, this.r, options);
    World.add(world,this.body);

    }
    display(){
      var pos =this.body.position;

      ellipseMode(RADIUS);
      ellipse(0, 0, this.r, this.r);
      ellipse(this.body.position.x,this.body.position.y,10,10);
      fill("white");
    }
  };