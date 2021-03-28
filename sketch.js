var canvas;
var music;
var rect1
var rect2
var rect3
var rect4
var square

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(500,400);

    //create 4 different surfaces
 rect1 =createSprite(100,390,100,20)
 rect1.shapeColor="red"
 rect2= createSprite(200,390,100,20)
 rect2.shapeColor="green"
 rect3= createSprite(300,390,100,20)
 rect3.shapeColor="blue"
 rect4= createSprite(400,390,100,20)
 rect4.shapeColor="pink"
    //create box sprite and give velocity
square=createSprite(random(20,750),200,20,20)
square.shapeColor="white";
square.velocityY=3
}

function draw() {
    background(rgb(169,169,169));
   square.bounceOff(rect1)
   square.bounceOff(rect2)
   square.bounceOff(rect3)
   square.bounceOff(rect4)
   

    //create edgeSprite
   createEdgeSprites();


drawSprites();

    //add condition to check if box touching surface and make it box
}
