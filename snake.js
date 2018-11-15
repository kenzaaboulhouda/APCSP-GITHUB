/*
** SNAKE Constructor Function
**  Kenza Aboulhouda
**  October 4, 2018
*/

//function creates the snake
function Snake(loc, vel){
  // Instance variables
  this.loc = loc;
  this.vel = vel;

  this.run = function(){
    this.update();
    this.render();

  }
  this.update = function(){
    this.loc.add(this.vel);
    this.loc.x = constrain(this.loc.x, 0, width-w)

  }
  this.render = function(){
    fill(0,255,0);
    rect(this.loc.x, this.loc.y, w, w)
  }
  //end of snake constructor
  }
