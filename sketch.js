const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, ground, world, ball;

function setup() {
    createCanvas(windowWidth, windowHeight);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width / 2, height, width, 10);
    box = new Box(200, 400, 80, 80);
    box2 = new Box(160, 300, 60, 80);
}

function draw() {
    background(0, 0, 0);
    Engine.update(engine);

    ground.display();
    box.display();
    box2.display();

}