class Roof {
    constructor() {
        var ground_options = {
            isStatic : true
        }
    this.body = Bodies.rectangle(400,100,800,10,ground_options);

    World.add(world,this.body);
    }
    display() {
        rectMode(CENTER);
        fill("black");
        rect(this.body.position.x,this.body.position.y,800,20);
    }
}