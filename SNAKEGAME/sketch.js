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
//setup canvas
function setup(){
  var cnv = createCanvas(800, 800);
  cols = width/w;
  rows = height/w;
  cnv.position((windowWidth-width)/2, 30);
  //align start and end screen text in center of template
  textAlign(CENTER, CENTER);
  //rate at which snake moves per/sec
  frameRate(10);
  background(242, 203, 222);
  //build snake
  snake = new Snake(createVector(width/2, height/2), createVector(0,0));
  //build food
  food = new Food();
}
foodPosition();
function draw(){
  //background color
  background(173, 200, 234);
  //score
  text("your score: " + score, 380, 50);
  Score();
  snake.run();
  food.render(locX, locY);
  //new food position
  if(snake.loc.x === locX && snake.loc.y === locY){
    foodPosition();
    // adding snake segments
    snake.segments.push(createVector(0,0));
    //food eaten --> score increases by 10
    score = score+10;
  }
  //when snake dies
  deadGame();
  //start of game
  gameStart();
}
//define function loadSnake
function loadSnake(){
  var loc = createVector(200,200);
  var vel = createVector(0,0);
  snake = new Snake(loc,vel);
}
//end screen when snake dies
function deadGame(){
  if(snake.status == "true"){
    snake = 0
    score = 0;
    //game over text
    textSize(25);
    text("You're not too good at this, press any key to restart", 400, 400);
    loadSnake();
    gameStart();
  }
}
//start screen for beginning of game
function gameStart(){
  if(start == "true"){
    textFont()
    fill(0, 0, 0);
    textAlign(CENTER);
    textSize(100);
    text("Let's eat", 400, 300)
    textSize(25);
    //instruction to begin game
    text("Press up arrow to start", 400, 550)
    fill(207,130,255);
  }
}
//represent score on screen
function Score(){
  if (score > 3)
  fill(244, 66, 66);
  //motivational statement
  text("DON'T LOSE", 380, 30);
  textSize(20);
}

//changing the foods position every time food is eaten
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
    //to start game with up arrow
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
