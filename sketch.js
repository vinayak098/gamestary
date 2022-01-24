
var welcomeScreen ;
var skydive;
var startIcon;
var takeoff;
var gameState = "welcome"
var plane;
var mainScreen;

function preload(){
  welcomeScreen = loadImage("welcomescreen.jpeg")
  skydive = loadImage("skydive1.jpg")
  startIconImage = loadImage("start.jpg")
  takeoff = loadImage("takeoffGIF.gif")
 }

                          
function setup() {
  createCanvas(windowWidth,windowHeight);
  
  startIcon = createSprite(700,500,100,100);


 startIcon.addImage("startIcon",startIconImage);

 startIcon.scale = 0.2;

 mainScreen = createSprite(300,200,400,400);
 mainScreen.visible = false;

 plane = createSprite(800,200,50,50);

 plane.visible = false;
}

function draw() {
    

  
  if(gameState === "welcome"){

  background(welcomeScreen);
  text("CONTROLS = left-left arrow key",200,200)

    imageMode(CENTER);
    image(skydive, 700,100 ,500,300);


    if(mousePressedOver(startIcon)){
      console.log("Changing the screen");

      gameState="play"
    }


    
  } 

  else if (gameState === "play"){
    console.log("In the play state");
    background("blue")
    
    image(takeoff,0,0,width,height);
    startIcon.visible=false 
    console.log("frame Count  : : "+frameCount);
    if(frameCount >= 100){
      
      console.log("Change the background to orange");
      background("orange");

      mainScreen = createSprite(300,200,400,400);
      mainScreen.visible = true;
      mainScreen.addImage("welcomeScreen",welcomeScreen);
     
      plane.visible = true;
      
      if(keyIsDown(UP_ARROW)){
        plane.y=plane.y-15;     
       }

      if(keyIsDown(DOWN_ARROW)){
        plane.y=plane.y+15; 
      }


      
    } 
  }
 

  drawSprites();
}