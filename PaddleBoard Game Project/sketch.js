/*
**  Sketch Function
**  Kenza Aboulhouda
**  October 4, 2018
*/

//Global variables
var Balls = [];
var paddle;
var score = 0;
//setup canvas
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  //# of boids loaded
  numBalls = 10;
  loadBalls(numBalls);
  //
  //creating the lerping paddle
  //
  var loc = createVector(400, 550)
  var vel = createVector(0, 0);
  var width = 250;
  var length = 20;
  var col = color(random(0, 255), random(0, 255), random(0, 255))
  paddle = new Paddle(loc, vel, width, length, col);
}
//load balls
function loadBalls(numBalls){
  for(var i = 0; i < numBalls; i++){
    //what ball needs to know about itself
    var loc = createVector(random(100, 600), 20);
    var vel = createVector(random(-5, 5), random(-5, 5));
    var rad = 25
    var col = color(random(0, 255), random(0, 255), random(0, 255));
    var sp = 3
    var b = new Ball(loc, vel, rad, col, sp);
    //add balls to the array
    Balls.push(b);
  }
}


//draw balls and paddle
function draw(){
  background(20, 20, 20, 6000);
  //score
  textSize(32);
  fill(255, 255, 255);
  text(score, 400, 400)
  //remove outlines
  noStroke();
  paddle.run();
  for(var i = 0; i < Balls.length; i++){
    Balls[i].run();
    var aBalls = Balls[i];
    //splice the balls when they touch paddle
    if(aBalls.sp == 1){
      Balls.splice(i,1);
      //adds to score for every ball
      score = score + 1;
    }
    //reset game/ add new balls when ball hits bottom of paddle
    if(aBalls.sp == 2){
      //amount of balls in next reset
      var numBalls = Balls.length + 5;
      //resets game and gets rid of previous balls
      Balls = []
      loadBalls(numBalls)
      for(var i = 0; i < Balls.length; i++){
        Balls[i].run;
      }
    }
  }
}
