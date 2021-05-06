const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var bg
var engine, world;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4,log5;
var bird;
var chain;

function preload(){
    bg=loadImage("images/bg.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    ground = new Ground(600,height,1200,20)

    pig1= new Pig(810,350)
    pig2= new Pig(810,220)
    log1=new Log(810,260,300,PI/2)
    log2=new Log(810,180,300,PI/2)
    log3=new Log(760,120,150,PI/7)
    log4=new Log(870,120,150,-PI/7)
    log5=new Log(230,180,80,PI/2)
    bird=new Bird(100,100)
    chain=new Chain(bird.body,log5.body)

}
function draw(){
    background(bg);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    bird.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    log3.display();
    log4.display();
    log5.display();
    box5.display();
    chain.display();



}

/*
Attached bodies

One body is restricted in its movement due to another body - CONSTRAINT
Library - Matter.Constraint
*/