let ty;
let cnv;
function setup() {
  cnv = createCanvas(900, 900);
  let cx = (windowWidth - cnv.width) / 2;
  let cy = (windowHeight - cnv.height) / 2;
  cnv.position(cx, cy);
  background(190);
  angleMode(DEGREES);
  noStroke();
  ty = -360;
  drawShape(width / 2, height - height / 4, 200);
}

function draw() {
  background(190);
  push();
  //drawShape(width/2,height-height/4,200)
  drawShape(width / 2, height / 2, 200);
  pop();
  push();

  translate(width / 2, ty);
  rotate(180);
  drawShape(0, 0, 200);
  pop();
  ty++;
  if (ty > height + 200) ty = -360;
}

function drawShape(x, y, d) {
  //rect(x, y, d, d);
  //fill(random(255),random(255),random(255));
  //fill(random(90),100)
  clr = map(d, 200, 9, 255, 0);
  fill(clr, clr, 0, 80);
  triangle(x - d, y - d / 2, x, y + d, x + d, y - d / 2);
  if (d > 9) {
    let newD = d * 0.5;
    drawShape(x + d, y + d / 2, newD); // smaller right
    drawShape(x - d, y + d / 2, newD); //smaller left
    drawShape(x, y - d, newD); //large center
  }
}
