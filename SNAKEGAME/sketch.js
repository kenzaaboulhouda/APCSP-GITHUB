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
var start = "true";
//var start = "true"
//setup canvas
function setup(){
  var cnv = createCanvas(800, 800);
 cols = width/w;
 rows = height/w;
  cnv.position((windowWidth-width)/2, 30);
textAlign(CENTER, CENTER);
  frameRate(10);
  background(242, 203, 222);
  snake = new Snake(createVector(width/2, height/2), createVector(0,0));
  food = new Food();
}
foodPosition();
//load snake
function draw(){
  background(173, 200, 234);
  //state of game

  //score
  text("your score: " + score, 380, 50);
  Score();
  snake.run();
  food.render(locX, locY);
  //new food position
  if(snake.loc.x === locX && snake.loc.y === locY){
    foodPosition();
    snake.segments.push(createVector(0,0));
    score = score+10;
  }
  deadGame();
  gameStart();
}
function loadSnake(){
  var loc = createVector(200,200);
  var vel = createVector(0,0);
  snake = new Snake(loc,vel);

}
function deadGame(){
  if(snake.status == "true"){
    snake = 0
    score = 0;
    //game over text
    textSize(25);
    text("You're not too good at this", 400, 400);
    loadSnake();
    gameStart();
  }
}
function gameStart(){
  if(start == "true"){
    textFont()
    fill(0, 0, 0);
    textAlign(CENTER);
    textSize(100);
    text("Let's eat", 400, 300)
    textSize(25);
    text("Press up arrow to start", 400, 550)
    fill(207,130,255);
}
}
//deadGame();
function Score(){
  if (score > 3)
  fill(244, 66, 66);
  text("DON'T LOSE", 380, 30);
  textSize(20);
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
    start = "false"
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
