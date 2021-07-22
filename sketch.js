var spacecraftimg, spaceimg1,spaceimg2,spaceimg3,spaceimg4, spaceBackground,issimg;
var iss, spacecraft;
var hasDocked = false;

function preload(){

spaceimg1 = loadAnimation("spacecraft1.png")
spaceimg2 = loadAnimation("spacecraft2.png")
spaceimg3 = loadAnimation("spacecraft3.png")
spaceimg4 = loadAnimation("spacecraft4.png")

//spacecraftimg = loadAnimation("spacecraft1.png","spacecraft2.png","spacecraft3.png","spacecraft4.png",)
spaceBackground = loadImage("spacebg.jpg")
issimg = loadImage("iss.png")
}

function setup() {
  createCanvas(1536,720);
  

  spacecraft = createSprite(Math.round(random(280, 400)),570,50,50);
  iss = createSprite(760,360, 50, 50);
  iss.addImage(issimg)
  iss.scale = 1.3
 

  spacecraft.addAnimation("stand",spaceimg1)
  spacecraft.addAnimation("move",spaceimg2)
  spacecraft.addAnimation("left",spaceimg3)
  spacecraft.addAnimation("right",spaceimg4)
  
  spacecraft.scale = 0.26

}

function draw() {
  background(spaceBackground);
  if(!hasDocked){
   spacecraft.x = spacecraft.x + Math.round(random(-1,1))
    if(keyDown(LEFT_ARROW)){
     spacecraft.x = spacecraft.x -2
     spacecraft.changeAnimation("left",spaceimg3)
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.x = spacecraft.x + 2
      spacecraft.changeAnimation("right",spaceimg4)
    }
     if(keyDown(UP_ARROW)){
      spacecraft.y = spacecraft.y -2
      spacecraft.changeAnimation("move",spaceimg2)
     }
     if(keyDown(DOWN_ARROW)){
      spacecraft.y = spacecraft.y +2
      spacecraft.changeAnimation("move",spaceimg2)
     }
     
    }
/*
    if((663<=spacecraft.x<=673) && (484<=spacecraft.y<=494) ){
      hasDocked = true;
      text("Docking Succesful", 681,641);
      console.log("y is : ",spacecraft.y);
    console.log(spacecraft.x)
    }
*/

    if(663<spacecraft.x && spacecraft.x<673 && 484<spacecraft.y && spacecraft.y<494){
      hasDocked = true;
      fill("white")
      textSize(40)
      text("Docking Succesful", 541,641);
      console.log(spacecraft.y);
    console.log(spacecraft.x)
    }
   
  
   //spacecraft.depth = iss.depth
  //iss.depth += 1
  drawSprites();
  fill("white")
  text(mouseX + "," + mouseY,mouseX,mouseY)
}