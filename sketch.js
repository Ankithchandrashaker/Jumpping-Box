var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
b1=createSprite(10,600,200,30);
b1.shapeColor="red"
b2=createSprite(295,600,200,30);
b2.shapeColor="blue"
b3=createSprite(515,600,200,30);
b3.shapeColor="white"
b4=createSprite(740,600,200,30);
b4.shapeColor="yellow"

    //create box sprite and give velocity
   box=createSprite(random(20,750),100,40,50)
   box.shapeColor="green"
   box.velocityX=10
   box.velocityY=2
}

function draw() {
    background(rgb(169,169,169));
    
    //create edgeSprite
     edges=createEdgeSprites();
     box.bounceOff(edges);
     if (box.isTouching(b1)) {
         box.shapeColor="red"
         box.bounceOff(b1)
     }
     if (box.isTouching(b2)) {
        box.shapeColor="blue"
        box.bounceOff(b2)
    }
    if (box.isTouching(b3)) {
        box.shapeColor="red"
        box.velocityX=0
        box.velocityY=0

    }
    if (box.isTouching(b4)) {
        box.shapeColor="yellow"
        box.bounceOff(b4)
    }


    //add condition to check if box touching surface and make it box
    drawSprites();
}
