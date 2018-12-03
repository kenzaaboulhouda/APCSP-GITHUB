/*
** snake Constructor Function
**  Kenza Aboulhouda
**  October 4, 2018
*/

//function creates the snake
function Snake(loc, vel){
  // Instance variables
this.loc = loc;
this.vel = vel;
this.segments = [];
this.segments.push(createVector(0,0));

  this.run = function(){
    this.update();
    this.render();
}
this.update = function(){
  //snake head
  this.segments[0].x = this.loc.x;
  this.segments[0].y = this.loc.y;

  this.loc.add(this.vel);
  this.loc.x = constrain(this.loc.x, 0, width-w);
  this.loc.y = constrain(this.loc.y, 0, height-w)

  //snake segments
for(var i = this.segments.length-1; i>0; i--){
    this.segments[i].x = this.segments[i-1].x;
    this.segments[i].y = this.segments[i-1].y;
  }
}


this.render = function(){
  //snake color
  fill(203, 237, 233);
  //snake segments
  for(var i = 0; i < this.segments.length; i++){
    rect(this.segments[i].x, this.segments[i].y, w, w)
    fill(203, 237, 233);
    //this.segments.push(createVector(this.segments[i].x, this.segments[i].y));

  }
  rect(this.loc.x, this.loc.y, w, w)
}
//end of snake constructor
    }
