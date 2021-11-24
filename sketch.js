var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadImage("pepparunning.png");
}

function setup(){
  
  createCanvas(800,200);
  
// Moving background
path=createSprite(200,100);
path.addImage(pathImg);
path.velocityX = -4;
path.scale=1.2;

//creating boy running
boy = createSprite(200,150,30,30);
boy.scale=0.2
boy.addImage(boyImg);
  






rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false
}

function draw() {
  background(0);
 
  
  boy.x = World.mouseX;
  
  

  if(path.x <0 ){
    path.x = width/2;
  }

  
  
  drawSprites();
}
