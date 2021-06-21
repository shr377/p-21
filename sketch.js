var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);

  movingRect = createSprite(random(20,750),100,40,40);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX=2;
  movingRect.velocityY=1;
  gameObject1=createSprite(0,580,360,30);
  gameObject1.shapeColor="blue";

  gameObject2=createSprite(295,580,200,30);
  gameObject2.shapeColor="red";

  gameObject3=createSprite(510,580,200,30);
  gameObject3.shapeColor="yellow";

  gameObject4=createSprite(730,580,200,30);
  gameObject4.shapeColor="pink";

}

function draw() {
  background(0,0,0);  
  if(isTouching(gameObject1, movingRect) && bounceOff(movingRect, gameObject1)){ movingRect.shapeColor = "blue"; }
  drawSprites();
}
