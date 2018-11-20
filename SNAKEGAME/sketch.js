/*
**  Sketch Function
**  Kenza Aboulhouda
**  October 4, 2018
*/

//Global variables
var w = 20;
var cols, rows;
var snake;
//setup canvas
function setup(){
  var cnv = createCanvas(800, 800);
  cols = width/w;
  rows = height/w;
  cnv.position((windowWidth-width)/2, 30);
  frameRate(25)
  background(20, 20, 20);
  snake = new Snake(createVector(width/2, height/2), createVector(1,0));
}
//load snake
function draw(){
  snake.run();

}

function keyPressed(){
  text(keyCode)
  if(keyCode === UP_ARROW)
  snake.vel = createVector(0, -1);
  if(keyCode === DOWN_ARROW)
  snake.vel = createVector(0, 1);
  if(keyCode === LEFT_ARROW)
  snake.vel = createVector(-1, 0);
  if(keyCode === RIGHT_ARROW)
  snake.vel = createVector(1, 0);


}
