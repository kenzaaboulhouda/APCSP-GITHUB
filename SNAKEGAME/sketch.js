/*
**  Sketch Function
**  Kenza Aboulhouda
**  October 4, 2018
*/

//Global variables
var w = 20;
var snake;
var food;
var segments = [];
//setup canvas
function setup(){
  var cnv = createCanvas(800, 800);
  var cols = width/w;
  var rows = height/w;
  cnv.position((windowWidth-width)/2, 30);
  frameRate(30)
  background(20, 20, 20);
  snake = new Snake(createVector(width/2, height/2), createVector(1,0));
}
//load snake
function draw(){
  background(20,20,20,6000);
  snake.run();
}

function keyPressed(){
  text(keyCode)
  //up arrow
  if(keyCode === UP_ARROW)
  snake.vel = createVector(0, -20);
  //down arrow
  if(keyCode === DOWN_ARROW)
  snake.vel = createVector(0, 20);
  //left arrow
  if(keyCode === LEFT_ARROW)
  snake.vel = createVector(-20, 0);
  //right arrow
  if(keyCode === RIGHT_ARROW)
  snake.vel = createVector(20, 0);


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
