
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score =0,survivalTime=0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {

monkey=createSprite(50,300,50,50)
monkey.addAnimation("running",monkey_running)  
monkey.scale=0.2

ground = createSprite(400,500,900,10)
ground.velocityX=-4;
console.log(ground.x)

foodGroup=createGroup();  
obstacleGroup=createGroup();  
  
}

function draw() {
createCanvas(600,600)
background("pink") 
  

if(keyDown("space")){
  monkey.velocityY=-18
    }
  
monkey.velocityY=monkey.velocityY+0.8
 
if(ground.x>0) {
 ground.x=ground.width/2 
  
}
  
stroke("white")
textSize(20)
fill("white") 
text("SCORE :" +score,500,50);
  
stroke("black")
textSize(20)  
fill("black") 
survivalTime=Math.ceil(frameCount/frameRate())
text("SURVIVAL TIME : " +survivalTime,200,50) 
  
  
food();  
obstacles();

 monkey.collide(ground) 
  
drawSprites();
}




function food(){

if(frameCount % 80 === 0){

banana=createSprite(400,Math.round(random(120,200)),50,50)
banana.addImage(bananaImage)
banana.scale=0.2
banana.velocityX=-6
banana.lifetime=200  

foodGroup.add(banana);
}
  
}

function obstacles(){
  
if(frameCount % 300===0){
  
obstacle=createSprite(400,440,50,50)  
obstacle.addImage(obstacleImage) 
obstacle.scale=0.3  
obstacle.velocityX=-7
obstacle.lifetime=200 
  
obstacleGroup.add(obstacle)  
  
}  
  
}


