let c1;
let c2;
let cnv;
let score = 0;
let clrs = [];
let sz = 50;
function setup() {
  cnv = createCanvas(800, 800);
  let cx = (windowWidth - cnv.width) / 2;
  let cy = (windowHeight - cnv.height) / 2;
  cnv.position(cx, cy);
  rectMode(CENTER);
  noStroke();

  // Use the HSB color mode.
  //colorMode(HSB, 360, 100, 100);
  setgrad();
}

function setgrad() {
  c1 = 255;
  c2 = random(255);
}

function draw() {
  //background(c2, 100, 100);
  // draw background gradient
  let cc1 = color(c1);
  let cc2 = color(c2);
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(cc1, cc2, inter);
    stroke(c);
    line(0, y, width, y);
  }

  let h = map(mouseX, 0, width, 0, 255);
  let ch = color(h);

  stroke(ch);

  // Draw gradient box
  for (let y = height / 4; y < height - height / 4; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(cc1, ch, inter);
    stroke(c);
    line(width / 4, y, width - width / 4, y);
  }
  //rect(width / 2, height / 2, width / 2, height / 2);
  fill((c2 + 127) % 256, 100, 100); // fill of score is set 180 degrees awy
  //fill(0, 100, 100);
  textSize(50);
  text("SCORE: " + score, 100, 100);
  //text(pgrad + " " + ph, 100, 160);
  if (floor(c2) === floor(h)) {
    score++;
    clrs.push(c2);
    setgrad();
  }
  for (let i = 0; i < clrs.length; i++) {
    stroke(0);
    fill(clrs[i]);
    let y = (i * sz) / 2;
    rect(width - sz, y, sz, sz / 2);
  }
}
