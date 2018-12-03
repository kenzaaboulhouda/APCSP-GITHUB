/*
**  Sketch Function
**  Kenza Aboulhouda
**  October 4, 2018
*/
//Global variables
var w = 20;
var snake;
var food;
var cols, rows;
var locX;
var locY;
//setup canvas
function setup(){
  var cnv = createCanvas(800, 800);
 cols = width/w;
 rows = height/w;
  cnv.position((windowWidth-width)/2, 30);
  frameRate(10);
  background(242, 203, 222);
  snake = new Snake(createVector(width/2, height/2), createVector(0,0));
  food = new Food();
}
foodPosition();
//load snake
function draw(){
  background(237, 233, 189);
  snake.run();
  food.render(locX, locY);
  if(snake.loc.x == locX && snake.loc.y == locY){
    foodPosition();
  }
}
//changing the foods position
function foodPosition(){
  var randomX = Math.random() * 800;
  locX = randomX - (randomX%20);
  var randomY = Math.random() * 800;
  locY = randomY - (randomY%20);
}

function keyPressed(){
  text(keyCode)
  //up arrow
  if(keyCode === UP_ARROW){
    snake.vel = createVector(0, -20);
  }
  //down arrow
  if(keyCode === DOWN_ARROW){
    snake.vel = createVector(0, 20);
  }
  //left arrow
  if(keyCode === LEFT_ARROW){
    snake.vel = createVector(-20, 0);
  }
  //right arrow
  if(keyCode === RIGHT_ARROW){
    snake.vel = createVector(20, 0);
  }
}
//function cols(){
//  return floor(height/scl);
//}
//function rows(){
  //return floor(height/scl);
//}

//function randomVector(){
  //return createVector(floor(random(cols()))), floor(random(rows()));
//}
