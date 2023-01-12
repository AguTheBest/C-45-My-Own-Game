var bg,bg_img;
var player,player_img;
var invisibleGround;



function preload(){
bg_img = loadImage("assets/BG 1.jpg");
player_img = loadImage("assets/shooter_2.png");
}

function setup(){
  createCanvas(1200,800);
  bg = createSprite(555,300);
  bg.addImage("background",bg_img)
  bg.scale = 2.4

  player = createSprite(100,333);
  player.addImage("plyr",player_img);
  player.scale = 0.4
  
  invisibleGround = createSprite(400,555,800,10)
  invisibleGround.visible = false
}


function draw(){
  background("lightgray");
  bg.velocityX = -3

  if(keyDown('UP_ARROW')){
    player.velocityY = -20;
  }
  player.velocityY += 0.8
  player.collide(invisibleGround)
  player.debug = true

  if(bg.x<400){
    bg.x = 555
  }


  drawSprites();

}

