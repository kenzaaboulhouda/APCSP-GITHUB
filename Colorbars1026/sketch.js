//  Global variables
var bars = [];

// put setup code here
function setup() {
  var cnv = createCanvas(1200, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  bars = new Bars(createVector(width/2,height/2),
createVector(.5,-.8),25, color(255,0,0));
}
