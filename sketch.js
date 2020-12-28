var bullet ,wall

var speed,weight,thikness


function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  bullet = createSprite(20, 200, 20, 7);
  bullet.velocityX=speed;
  bullet.shapeColor=color(225)

 thikness=random(35,60);

 wall = createSprite(1300,200,thikness,height/2);
  wall.shapeColor=color("White")


}

function draw() {
  background("Black");  
if(wall.x-bullet.x < (bullet.width + wall.width)/2){
  bullet.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509
  if(deformation > 180 ){
 wall.shapeColor=color("yellow");
  }
  if(deformation < 180 && deformation > 100){
    wall.shapeColor=color("red");
  }
  if(deformation<100){
    wall.shapeColor=color("green");
  }
}


  drawSprites();
}