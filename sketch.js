var bullet, speed, weight;
var wall, thickness;

var speed, weight, damage;

function setup(){

    createCanvas(1600, 400);

    speed = Math.round(random(223, 321));
    weight = Math.round(random(30, 52));
    thickness = Math.round(random(22, 83));
    damage = (0.5 * weight * Math.pow(speed, 2))/Math.pow(thickness, 3);

    wall = createSprite(1200, 200, thickness, height/2);
    wall.shapeColor = color(80, 80, 80);
    
    bullet = createSprite(50, 200, 50, 15);
    bullet.shapeColor = "white";
    bullet.velocityX = speed;

}

function draw(){

    background(0);

    if(isTouchingHorizontally(bullet, wall)){
      bullet.velocityX = 0;

      if(damage < 10){
        wall.shapeColor = color(0, 255, 0);
        textSize(20);
        fill("green");
        text("Damage is lesser than 10. This wall quality is approved.", 400, 200);
      } else if(damage > 10){
        wall.shapeColor = color(255, 0, 0);
        textSize(20);
        fill("red");
        text("Damage is greater than 10. This wall quality is disapproved.", 375, 200);
      }
    } else{
      bullet.velocityX = speed;

      wall.shapeColor = color(80, 80, 80);;
    }

    drawSprites();

}