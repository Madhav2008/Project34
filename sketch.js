const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var pendulum1, sling1;

function setup() {
    createCanvas(1536, 716);
    engine = Engine.create();
    world = engine.world;

    roofobject = new Roof(815, 200, 600, 20);

    pendulum1 = new Pendulum(700, 300, 80, 80)
    pendulum2 = new Pendulum(780, 300, 80, 80)
    pendulum3 = new Pendulum(860, 300, 80, 80)
    pendulum4 = new Pendulum(940, 300, 80, 80)
    pendulum5 = new Pendulum(1020, 300, 80, 80)

    sling1 = new Sling(pendulum1.body, { x: 650, y: 210 });
    sling2 = new Sling(pendulum2.body, { x: 730, y: 210 });
    sling3 = new Sling(pendulum3.body, { x: 810, y: 210 });
    sling4 = new Sling(pendulum4.body, { x: 890, y: 210 });
    sling5 = new Sling(pendulum5.body, { x: 970, y: 210 });

    Engine.run(engine);

}

function draw() {
    rectMode(CENTER);
    background(0);

    drawSprites();
    roofobject.display();
    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();
    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();
    strokeWeight(5);
    stroke("red");
    fill("orange");
    textSize(35);
    text("DRAG THE PENDULAM >>>", 10, 500);
    textSize(80);
    strokeWeight(10);
    text("NEWTONS CRADLE", 400, 100);
}

function mouseDragged() {
    Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
}