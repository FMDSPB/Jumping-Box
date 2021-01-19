var edges;
var canvas;
var music;
var redBox, blueBox, yellowBox, greenBox;
var box;


function preload(){
    music = loadSound("Ting.m4a");
}


function setup(){

    canvas = createCanvas(775,600);

    blueBox = createSprite(87.5, 590, 175, 15);
    blueBox.shapeColor = "blue";

    yellowBox = createSprite(287.5, 590, 175, 15);
    yellowBox.shapeColor = "yellow";

    redBox = createSprite(487.5, 590, 175, 15);
    redBox.shapeColor = "red";

    greenBox = createSprite(687.5, 590, 175, 15);
    greenBox.shapeColor = "green";

    box = createSprite(Math.round(random(20, 750)), Math.round(random(50, 300)), 36, 36);
    //box = createSprite(87, 500, 36, 36);
    box.velocityY = 4;
    box.velocityX = -2;
    //box.velocityY = 4;

    console.log(yellowBox.x - blueBox.x);

}


function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();

    box.bounceOff(edges);

    
    //bounceOfff(box, blueBox);
    bounceOfff(box, redBox);
    bounceOfff(box, greenBox);
    bounceOfff(box, yellowBox);
    

    /*
    box.bounceOff(redBox);
    box.bounceOff(blueBox);
    box.bounceOff(yellowBox);
    box.bounceOff(greenBox);
    */

    if(isTouchingg(box, blueBox)) {

      box.shapeColor = "blue";
      box.velocityX = 0;
      box.velocityY = 0; 
    }

    if(isTouchingg(box, redBox)) {

      box.shapeColor = "red";
      music.play();
    }

    if(isTouchingg(box, greenBox)) {

      box.shapeColor = "green";
      music.play();
    }

    if(isTouchingg(box, yellowBox)) {

      box.shapeColor = "yellow";
      music.play();
    }

  

    drawSprites();
}

function isTouchingg(ob1, ob2) {

    if(ob2.x - ob1.x < ob2.width/2 + ob1.width/2 && ob1.x - ob2.x < ob2.width/2 + ob1.width/2 && ob2.y - ob1.y < ob2.height/2 + ob1.height/2 && ob1.y - ob2.y < ob2.height/2 + ob1.height/2) {
  
      return true;
  
    } else {
  
      return false;
  
    }
  
  }

function bounceOfff(i, j) {

    if(isTouchingg(i, j)) {
  
      i.velocityX = i.velocityX * (-1);
  
      i.velocityY = i.velocityY * (-1);
  
    }
  
  }