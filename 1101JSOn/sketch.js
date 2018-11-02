//  Global variables
var data = [];

function preLoad(){
  data = loadJSON("earthquakes.geoson");
  console.log(data);
}

// put setup code here
function setup() {
  noCanvas();
  console.log(data.description)
}
