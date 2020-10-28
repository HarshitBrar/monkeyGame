var monkey , monkey_running;
var bananaImage,obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;


function preload(){
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
function setup() {
  createCanvas(600,600);

  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("jumping",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,385,1500,10);
  ground.velocityX = -4;
  ground.x = ground.x/2;
  
  FoodGroup = createGroup();
  obstaclesGroup = createGroup();
  
  score = 0;
}
function draw() {
  background("white");
  
  var survivalTime = 0;
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 100){
    monkey.velocityY = -15;
  }
  
  monkey.velocityY = monkey.velocityY + 0.9;
  
  spawnObstacles();
  spawnFruit();
  
  stroke ("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime,100,50);
  
  monkey.collide(ground);
  
  drawSprites();
}
function spawnObstacles(){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(400,365,30,30);
    obstacle.velocityX = -4;
    obstacle.addImage("stone",obstacleImage);
    obstacle.lifetime = 150;
    obstacle.scale = 0.1;
    
    obstaclesGroup.add(obstacle);
  }
}
function spawnFruit(){
  if(frameCount % 80 === 0){
    var banana = createSprite(400,200,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage("yellow",bananaImage);
    banana.velocityX = -4;
    banana.scale = 0.1;
    banana.lifetime = 200;
    
    FoodGroup.add(banana);
  }
}




