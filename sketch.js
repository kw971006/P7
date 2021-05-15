var c;
var lineLength = 50;
var n = 6;
let frm;

function setup() {
createCanvas(windowWidth, windowHeight);
background(255);
cursor(CROSS);
strokeWeight(1);
c = color(0);

  
}
function draw() {
  
  frm = frameCount/10;
if (mouseIsPressed && mouseButton == LEFT) {
  
  polygon(mouseX,mouseY,lineLength,n)
  if(keyIsPressed===true){
    frm = -frm
  }
  else{
    frm = frameCount/10;
  }

}
}
function keyPressed() {
if (keyCode == UP_ARROW) lineLength += 5;
if (keyCode == DOWN_ARROW) lineLength -= 5;
if (keyCode == LEFT_ARROW){
  n -= 1;
}
if (keyCode == RIGHT_ARROW){
  n += 1;
}
  
if (keyCode == DELETE || keyCode ==
BACKSPACE) background(255);
if (key == 'c')c = color(random(255),
random(255), random(255), random(80, 100));
}
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  
   
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
    
    line(mouseX, mouseY, sx, sy)
    
  }
  
 
  noFill();
  stroke(c);
  endShape(CLOSE);
}