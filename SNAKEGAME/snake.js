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
  //snake segments
  this.segments[0].x = this.loc.x;
  this.segments[0].y = this.loc.y;
  //snake head
  this.loc.add(this.vel);
  this.loc.x = constrain(this.loc.x, 0, width-w);
  this.loc.y = constrain(this.loc.y, 0, height-w)
}


this.render = function(){
  //snake segments
  for(var i = 0; i < this.segments.length; i++){
    rect(this.segments[i].x, this.segments[i].y, w, w)
    //this.segments.push(createVector(this.segments[i].x, this.segments[i].y));

  }
  fill(0,255,0);
  rect(this.loc.x, this.loc.y, w, w)
}
//end of snake constructor
    }

//this.dir = function(x, y){
//  if (x !=0 && this.xspeed != x*(-1))
//  || y != 0 && this.yspeed != y*(-1)){
  //  this.xspeed = x;
    //this.yspeed = y;
//  }
//}
//this.eat = function(food){
//  if (this.x === food.x() && this.y === food.y()){
  //  food.eaten();
  //  this.points++;
  //  this.tail.push(createVector(this.x, this.y));
//  }
//}
//this.move = function(){
//  if (this.tail.length > 0){
  //  var tipOfTail = this.tail.pop();
  //  tipOfTail.x = this.x;
    ///tipOfTail.y = this.y;
//  }
//  this.x %= width;
//  this.y %= height;
//  if (this.x < 0)
//}


//  this.update = function(){
  //  this.loc.add(this.vel);
//this.loc.x = constrain(this.loc.x, 0, width-variables[0]);
  //    this.loc.x = constrain(this.loc.y, 0, height-variables[0]);


//  }
  //this.render = function(){
    //fill(0,255,0);
    //rect(this.loc.x, this.loc.y, variables[0],variables[0])
  //}
  //end of snake constructor
