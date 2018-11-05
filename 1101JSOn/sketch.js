//  Global variables
var data = [];

function preLoad(){
  data = loadJSON("earthquakes.json.geoson");
  console.log(data);
}
function bubbleSort(){
  for (var i = (data.length - 1); i >= 0; i--){
    for (var j = 0; j < i; j++){
      if(date[j].high < data[j+1].high){
        var temp = data[j]
        data[j] = data[i+1]
        data[j+1] = temp
      }
    }
  }
}
// put setup code here
function setup() {
  noCanvas();
  console.log(data.forecast)
}

fucntion draw(){
  
}
