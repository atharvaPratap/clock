var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup() {
  createCanvas(displayWidth, displayHeight - 150);
  
  angleMode(DEGREES); 
}

function draw() {
  background(0);  

  // text
  textFont("Castellar Regular");
  textSize(55);
  noStroke();
  fill("white");
  
  

  translate(200,200)
  rotate(-90)

  
  sc = second();
  mn = minute();
  hr = hour();

  
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);
  

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,85,0);
  pop();

 
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,45,0);
  pop();

  strokeWeight(7);
  stroke(255);
  point(0,0)


  strokeWeight(7);
  stroke(255,0,0);
  noFill();
  arc(0,0,300,300,0,scAngle);

  strokeWeight(7);
  stroke(0,255,0);
  noFill();
  arc(0,0,280,280,0,mnAngle);

  
  strokeWeight(7);
  stroke(0,0,255);
  noFill();
  arc(0,0,260,260,0,hrAngle);

  drawSprites();
}