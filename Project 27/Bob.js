class Bob {
    constructor(x, y,r) {
      var paper_options = {
          isStatic : false,
          restitution : 0.3,
          friction : 0.5,
          density : 1.2
      }

      this.x = x;
      this.y = y;
      this.r = r;
      this.image = loadImage("sprites/paper.png");
      this.body = Bodies.circle(this.x,this.y,this.r,paper_options);
      
      World.add(world, this.body);
    }
      display() { 
        var paperpos=this.body.position; 
        push() 
        translate(paperpos.x, paperpos.y); 
        ellipseMode(CENTER); 
        ellipse(0,0,this.r, this.r) 
        pop() 
      }
    }