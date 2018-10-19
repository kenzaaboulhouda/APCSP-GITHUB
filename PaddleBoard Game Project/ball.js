/*
**  Ball Constructor Function
**  Kenza Aboulhouda
**  October 4, 2018
*/

//function creates the ball
function Ball(loc, vel, rad, col, sp){
  // Instance variables
  this.loc = loc;
  this.vel = vel;
  this.rad = rad;
  this.col = col;
  this.sp = sp;
  //this function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
    this.checkPaddle();
  }
  //This function changes the location of the ball
  //by adding speed to x and y
  this.update = function(){
    this.loc.x = this.loc.x + this.vel.x;
    this.loc.y = this.loc.y + this.vel.y;
  }
  //checkEdges() reverses speed when the ball touches edge of paddle
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  //render() draws the ball at the new loc
  this.render = function(){
    fill(this.col);
    ellipse(this.loc.x, this.loc.y, rad, rad);
  }

  //checking when the ball hits the paddle
  this.checkPaddle = function(){
    //takes location of center of ball
    var distY = abs(this.loc.y - 560)
    //checking if ball is hitting top of paddle
    if((distY < 10) && (this.loc.x > mouseX - 125) && (this.loc.x < mouseX + 125) && (this.vel.y > 0)){
      this.sp = 1
    }
    if((distY < 10) && (this.loc.x > mouseX - 125 ) && (this.loc.x < mouseX + 125) && (this.vel.y < 0)){
      this.sp = 2
    }
  }
}
