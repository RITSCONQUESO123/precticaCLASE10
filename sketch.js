var ball;

function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200,20,20);
  console.log("Hola como estas")
}

function draw() 
{
  background(30);
  if(keyDown("left")){
    ball.x=ball.x-5;
  }


  drawSprites();

}




