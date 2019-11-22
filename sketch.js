var boat, bg , water;
function preload(){
water = loadAnimation("water1.jpg","water2.jpg","water3.jpg","water4.jpg","water5.jpg");
bg = loadImage("building.jpg");
boat = loadImage("1.jpg");

}
function setup(){
canvas=createCanvas(displayWidth-50,displayHeight-50);
boat = createSprite(75,300);
boat.addImage("boat",boat);
water=createSprite(displayWidth/2,displayHeight/4);
water.addAnimation("water",water);
bg = createSprite(displayWidth/2,displayHeight/2);
bg.addImage("bg",bg);
bg.velocityX = -5;
}
function draw(){
background(255);
if(keyCode === 32){
 
    boat.velocityY= -10;
}
boat.velocityY+=1;
if(bg.x<0){
    bg.x=displayWidth/2;
}
boat.collide(water);
drawSprites();
}