let greg;
let lv;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  angleMode(DEGREES);
  greg = new Gurtle(width / 2, height / 2, color(255, 255, 0));
  background(0);
  strokeWeight(5);
  sqr(greg, width / 2, height / 2, 400);
  noFill();
  stroke(255, 0, 0);
  ellipse(width / 2, height / 2, 400, 400);
  greg.clr = color(0, 255, 0);
  rsqr(greg, width / 2, height / 2, 400, 4);
  // frameRate(1);
}

function draw() {
  background(0, 10);
  lv = floor(map(sin(frameCount), 1, -1, 3, 20));
  let lv2 = floor(map(sin(frameCount), 1, -1, 20, 3));
  print(lv, frameCount);
  push();
  translate(width / 2, height / 2);
  //rotate(frameCount);
  greg.clr = color(0, 255, 255);
  rsqr(greg, 0, 0, 500, lv);
  greg.clr = color(255, 255, 0);
  rsqr(greg, 0, 0, 500, lv2);
  pop();
}

function sqr(obj, x, y, ln) {
  greg.x = x - ln / 2; // set it to center
  greg.y = y - ln / 2;
  for (let i = 0; i < 4; i++) {
    obj.forward(ln);
    obj.right(90);
  }
}

function rsqr(obj, x, y, ln, d) {
  greg.x = x - ln / d; // set it to center
  greg.y = y - ln / d;
  let corner = ln / d;
  for (let i = 0; i < 4; i++) {
    //print("bye");
    for (let j = 0; j < d; j++) {
      //print("hi");
      obj.forward(corner / d);
      obj.right(-90);
      obj.forward(corner / d);
      obj.right(90);
    }
    obj.forward(ln / (1 * d));
    obj.right(90);
  }
}

function poly(obj, x, y, sides, ln) {
  greg.x = x - ln / sides;
  greg.y = y - ln / sides;
  let inang = 360 / sides;
  for (let i = 0; i < sides; i++) {
    obj.forward(ln);
    obj.right(inang);
  }
}
