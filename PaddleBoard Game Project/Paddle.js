/*
**  Paddle Constructor Function
**  Kenza Aboulhouda
**  October 4, 2018
*/

function Paddle(loc, vel, width, length, col){
  // what paddle needs to know about itself
  //instance variables
  this.loc = loc;
  this.vel = vel;
  this.w = width;
  this.l = length;
  this.col = col;
  // calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
//lerp the paddle
  this.update = function(){
    //make paddle lerp to middle of rectangle instead of corner
    paddleLength = width/2
    this.loc.x = lerp(this.loc.x, mouseX-paddleLength, .15)
  }
  //checkEdges() reverses speed when the rectangle touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }
//test github
  //render() draws the paddle at new loc
  this.render = function(){
    fill(this.col);
    rect(this.loc.x, this.loc.y, this.w, this.l);
  }
}
