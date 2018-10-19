//  Global variables
var balls = [];
// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  loadBalls(5);
}

function draw() {
 background(20,20,20,22);
 for(var i = 0; i < balls.length; i++){
   balls[i].run();
  }
}
function loadBalls(numBalls){

  for(var i = 0; i < numBalls; i++){
    var x = random(width);
    var y = random(height);
    var dx = random(-3,3);
    var dy = random(-3,3);
    var rad = 20;
    balls.push(new Ball(x, y, dx, dy, rad));
}

  }
