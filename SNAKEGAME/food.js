/*
**  FOOD Constructor Function
**  Kenza Aboulhouda
**  October 4, 2018
*/

function Food(xLocation, yLocation){
  this.xLocation = xLocation;
  this.yLocation = yLocation;
  this.run = function(){
    this.render(this.locX, this.locY);
  }
  this.render = function(xLocation, yLocation){
    fill(239, 165, 160);
    rect(xLocation, yLocation, w, w); //new location
  }
}








  // what food needs to know about itself
  //instance variables
  //this.vec = createVector().mult(scl);

  //this.x = function(){
    //return this.vec.x;
  //}
  //this.y = function(){
    //return this.vec.y;
  //}
  //this.draw = function(){
  //  fill(255, 255, 255);
  //  rect(this.x(), this.y(), scl, scl);
  //}
  //this.eaten = function(){
  //  this.vec = randomVector().mult(scl);
  //}
//}
