class Ground {
    constructor(x, y, width, height) {
        var option = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, option);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display() {
        var t = this.body.position;
        rectMode(CENTER);
        push();
        fill("lightblue");
        rect(t.x, t.y, this.width, this.height);
        pop();
    }
}