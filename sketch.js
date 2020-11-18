
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var monkeycollide;
var score=0;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 


}



function setup() {
  createCanvas(600,200);
  
 monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

 ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);

  obstacleGroup=createGroup();
  bananaGroup=createGroup();

monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  
  monkey.debug = false;

if (monkey.isTouching(obstacleGroup)){
     ground.X=0;
  }

}

function draw() {
  createCanvas(500,500);
 
  
  
  

  
  
  
  
  
  
  if (keyDown("space")&&monkey.y>=100){
     monkey.velocityY=-12;
  }
  
  
  monkey.velocityY=monkey.velocityY+0.9 ;
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  banana();
  obstacle();
  monkey.collide(ground);
  monkey.collide(obstacleGroup)
  
  if (monkey.isTouching(obstacleGroup)){
     ground.X=0;
  }
  
  
  
  
  
  
  drawSprites();
 stroke("white");
  text(20); 
  fill("white");
  text("score: "+score,300,50);

  stroke("black");
  text(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivalTime,100,50);


}

 function banana (){
   if (frameCount %80===0){
     var banana = createSprite(200, 250,20,20);
     banana.y = Math.round(random(120,200));
     banana.addImage("moving",bananaImage);
       banana.scale=0.1;
   banana.velocityX=-6
    banana.lifetime=200;
     
    banana.depth=monkey.depth;
     monkey.depth=monkey.depth+1;
     bananaGroup.add(banana);
   }
     }

 function obstacle (){
   if (frameCount %60===0){      
     var obstacle=createSprite(250,307,20,20);
     obstacle.x=Math.round(random(120,300))
     obstacle.addImage("moving",obstacleImage);
         obstacle.scale=0.2;
   obstacle.velocityX=-6;
    obstacleGroup.add(obstacle);
   }
   
   
   
   
   
   
   
   
   
   
 }


