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
var score = 0;
//var start = "true"
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
  background(random(255,0), random(255,0), random(255,0));
  //score
  text("your score: " + score, 380, 50);
  Score();
  snake.run();
  food.render(locX, locY);
  //new food position
  if(snake.loc.x === locX && snake.loc.y === locY){
    foodPosition();
    snake.segments.push(createVector(0,0));
  }
  //deadGame();
  //gameStart();
}
//Score
function Score(){
  if (score > 3)
  fill(255,0,5);
  text("DON'T LOSE", 380, 40);
}

//changing the foods position
function foodPosition(){
  var randomX = Math.random() * 800;
  locX = randomX - (randomX%20);
  var randomY = Math.random() * 800;
  locY = randomY - (randomY%20);
}
//key directions
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
//function deadGame(){
  //if statement outlining when snake is "dead"
  //if(snake.status == "true"){
  //  snake = 0;
    //gameStart();
  //}
//}
//
//function gameStart(){
//  if(start == "true"){
//    textFont();
//    fill(255,255,255);
    //rect(250, 250, 350, 200);
//    fill(0,0,0);
    //text("Snake Game", 400, 300);
  //}
//}
