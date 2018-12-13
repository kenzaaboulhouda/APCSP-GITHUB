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
  //food location
  this.render = function(xLocation, yLocation){
    fill(239, 165, 160);
    rect(xLocation, yLocation, w, w);
  }
}
