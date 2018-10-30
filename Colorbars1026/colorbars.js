/*
**  ColorBar Constructor Function
**  Kenza Aboulhouda
**  Oct 29, 2018
*/
//global variables
var bars = [];
function Colorbar(location, length, width, color, clrAvg){
  // Instance variables
  this.loc = location;
  this.l = length;
  this.w = width;
  this.clr = color;
  this.clrAvg = clrAvg;

  // This function calls other functions
  this.run = function(){
    this.render();
  }

  // render() draws the ball at the new location
  this.render = function(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);

  }

}//  End of colorBars Constructor
