var ball;

function setup() {
  createCanvas(1000,1000);
  ball=createSprite(500,500,50,50)
}

function draw() 
{
  background("blue");
  if(keyIsDown(LEFT_ARROW)){
    ball.x=ball.x-4
}
if(keyIsDown(RIGHT_ARROW)){
  ball.x=ball.x+4
}
if(keyIsDown(DOWN_ARROW)){
  ball.y=ball.y+4
}
if(keyIsDown(UP_ARROW)){
  ball.y=ball.y-4
}
  drawSprites()
}




