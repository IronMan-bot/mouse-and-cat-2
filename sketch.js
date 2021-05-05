
function preload() {
    //load the images here
    runningCat=loadAnimation("cat2.png","cat3.png")
    sittingCat=loadImage("cat1.png")
    standingCat=loadImage("cat4.png")
    mouse=loadImage("mouse1.png")
    standingMouse=loadAnimation("mouse2.png","mouse3.png")
    goingMouse=loadImage("mouse4.png")
    garden=loadImage("garden.png")
}

function setup(){
    createCanvas(1200,600);
    //create tom and jerry sprites here
    c= createSprite(500,300,1200,600)
     c.addImage(garden)

     cat= createSprite(650,500,50,60)
     cat.addImage(sittingCat)
     cat.scale=0.1 
     cat.addAnimation("runningCat",runningCat)

    

     mouse= createSprite(50,500,20,40)
     mouse.addAnimation("standingMouse",standingMouse)
     mouse.scale=0.1 
     

}


function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(keyDown("RIGHT_ARROW")){
    cat.velocityX=2
    cat.changeAnimation("runningCat",runningCat)
}

    if(keyDown("LEFT_ARROW")){
        cat.velocityX=-2
        cat.changeAnimation("runningCat",runningCat)
    }

    if(cat.x<250){
        mouse.velocityX=-2

        mouse.addImage(goingMouse);
    }


    


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
