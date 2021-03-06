/*
** snake Constructor Function
**  Kenza Aboulhouda
**  October 4, 2018
*/

//function creates the snake
function Snake(loc, vel){
  // Instance variables
  //location
  this.loc = loc;
  //velocity
  this.vel = vel;
  this.segments = [];
  //pushing in new segments
  this.segments.push(createVector(0,0));
  this.status = "false"
  //defining functions
  this.run = function(){
    this.update();
    this.render();
    this.tangled();
  }
  this.update = function(){
    //segment foreloop
    for(var i = this.segments.length - 1; i > 0; i--){
      this.segments[i].x = this.segments[i-1].x;
      this.segments[i].y = this.segments[i-1].y;
    }
    //snake head
    this.segments[0].x = this.loc.x;
    this.segments[0].y = this.loc.y;
    //snake segments
    this.loc.add(this.vel);
    this.loc.x = constrain(this.loc.x, 0, width-w);
    this.loc.y = constrain(this.loc.y, 0, height-w)

  }
  //render function
  this.render = function(){
    //snake color
    fill(random(255,0), random(255,0), random(255,0));
    //snake segments
    for(var i = 0; i < this.segments.length; i++){
      rect(this.segments[i].x, this.segments[i].y, w, w)
      fill(random(255,0), random(255,0), random(255,0));
    }
    //snake shape
    rect(this.loc.x, this.loc.y, w, w)
  }
  //snake knows when it tangles/ runs into body--> game restarts
  this.tangled = function(){
    for(var i = 0; i < this.segments.length; i++){
      var distX = this.loc.x - this.segments[i].x;
      var distY = this.loc.y - this.segments[i].y;
      if((distX == 0) && (distY == 0)){
        this.status = "true";
        //testing for snake status
        console.log(this.status);
        //function for when snake dies
        deadGame();
      }
    }
  }
}
