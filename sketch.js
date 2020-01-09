var Mrec,Frect;

function setup() {
  createCanvas(1200,800);
  Mrect=createSprite(800, 200, 80, 30);
  Mrect.shapeColor="green"
  Mrect.debug=true;
  Frect=createSprite(600,400,50,80);
  Frect.shapeColor="green"
  Frect.debug=true;
}

function draw() {
  background(0);  
  
  Mrect.x=World.mouseX;
  Mrect.y=World.mouseY;

  if (Mrect.x-Frect.x<Mrect.width/2+Frect.width/2&&Frect.x-Mrect.x<Mrect.width/2+Frect.width/2&&Mrect.y-Frect.y<Mrect.height/2+Frect.height/2&&Frect.y-Mrect.y<Mrect.height/2+Frect.height/2){
    Mrect.shapeColor="red";
    Frect.shapeColor="red";
  }else{
    Mrect.shapeColor="green";
    Frect.shapeColor="green";
  }

  




  drawSprites();
}