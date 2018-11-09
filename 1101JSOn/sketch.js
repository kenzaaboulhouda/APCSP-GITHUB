//  Global variables
var data;

function preload(){
  data = loadJSON("weatherdata.json");
  console.log(data);
}
function draw(){
  if(data != undefined){
    bubbleSort(data);
  }
}
function bubbleSort(){
  console.log(data.length);
  for (var i = (data.length - 1); i >= 0; i--){
    for (var j = 0; j < i; j++){

      if(data[j].forecast.high < data[j+1].forecast.high){
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
  //bubbleSort(data);
}
