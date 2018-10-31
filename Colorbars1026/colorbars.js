/*
**  ColorBar Constructor Function
**  Kenza Aboulhouda
**  Oct 29, 2018
*/
//global variables
var Bars = [];

function Colorbar(location, width, height, color){
  // Instance variables
  this.loc = location;
  this.w = width;
  this.h = height;
  this.clr = color;
  //this.clrAvg = clrAvg;

  // This function calls other functions
  this.run = function(){
    this.render();
  }

  // render() draws the bars
  this.render = function(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);

  }

}//  End of colorBars Constructor
