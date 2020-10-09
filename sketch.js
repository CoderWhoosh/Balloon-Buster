var bow, redb, blueb, greenb, pinkb, background,arrow0,arrow1,balloon;

var arrowGroup,redGroup,blueGroup,greenGroup,pinkGroup;

var score;

function preload() {
  bow1 = loadImage("bow0.png");
  bg = loadImage("background0.png");
  redB = loadImage("red_balloon0.png");
  blueB = loadImage("blue_balloon0.png");
  greenB = loadImage("green_balloon0.png");
  pinkB = loadImage("pink_balloon0.png");
  arrow0 = loadImage("arrow0.png");
}

function setup(){
  createCanvas(400, 400);
  background = createSprite(0,0,400,400);
  background.addImage("BG",bg);
  background.scale = 2;
  
  bow = createSprite(370,200);
  bow.addImage("BOW",bow1);
  score = 0;
  
  redGroup = new Group();
  blueGroup = new Group();
  greenGroup = new Group();
  pinkGroup = new Group();
  arrowGroup = new Group();
/*  
  for (var a=60; a<390;a=a+60) {
    redb = createSprite(40,a,10,10);
    redb.addImage("RedB",redB);
    redb.scale = 0.1;
  }
  for (var b=90; b<390; b=b+60) {
    blueb = createSprite(75,b,10,10);
    blueb.addImage("BlueB",blueB);
    blueb.scale = 0.11;
  }
  for (var c=130; c<350; c=c+60) {
    greenb = createSprite(115,c,10,10);
    greenb.addImage("GreenB",greenB);
    greenb.scale = 0.11;
  }
  for (var d=180; d<250; d=d+60) {
    pinkb = createSprite(155,d,10,10);
    pinkb.addImage("PinkB",pinkB);
    pinkb.scale =1.35;
  }
*/
  
}
function draw(){
  background.velocityX = 4;
  
  if(background.x>400){
    background.x = background.width/2;
  }
  bow.y = World.mouseY;
  
  if (arrowGroup.isTouching(redGroup)){
    redGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
  }
  if (arrowGroup.isTouching(blueGroup)){
    blueGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 3;
  }
  if (arrowGroup.isTouching(greenGroup)){
    greenGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
  }
  if (arrowGroup.isTouching(pinkGroup)){
    pinkGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 2;
  }
  
  balloon = Math.round(random(1,4));
  console.log(balloon);
  
  if (frameCount % 80 === 0){
    if (balloon == 1){
      red_balloon();
    }
    else if (balloon == 2){
      blue_balloon();
    }
    else if (balloon == 3){
      green_balloon();
    }
    else {
      pink_balloon();
    }
 }
createArrow();
drawSprites();
textSize(20);
text("Score: "+score,250,40);
}
function createArrow(){
  if(keyDown("space")){ 
    arrow1 = createSprite(300,200);
    arrow1.addImage("shooting",arrow0);
    arrow1.scale = 0.25;
    arrow1.velocityX = -3;
    arrow1.y = bow.y;
    arrow1.lifetime = 70;
    arrowGroup.add(arrow1);
  }
}
function red_balloon(){
  redb = createSprite(0,Math.round(random(20,370)),10,10);
  redb.addImage("RedB",redB);
  redb.scale = 0.1;
  redb.velocityX = 4;
  redb.lifetime = 100;
  redGroup.add(redb);
}
function blue_balloon(){
  blueb = createSprite(0,Math.round(random(20,370)),10,10);
  blueb.addImage("BlueB",blueB);
  blueb.scale = 0.1;
  blueb.velocityX = 4;
  blueb.lifetime = 100;
  blueGroup.add(blueb);
}
function green_balloon(){
  greenb = createSprite(0,Math.round(random(20,370)),10,10);
  greenb.addImage("GreenB",greenB);
  greenb.scale = 0.1;
  greenb.velocityX = 4;
  greenb.lifetime = 100;
  greenGroup.add(greenb);
}
function pink_balloon(){
  pinkb = createSprite(0,Math.round(random(20,370)),10,10);
  pinkb.addImage("PinkB",pinkB);
  pinkb.scale = 1.35;
  pinkb.velocityX = 4;
  pinkb.lifetime = 100;
  pinkGroup.add(pinkb);
}