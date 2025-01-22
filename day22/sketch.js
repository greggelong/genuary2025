let grad;
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
  colorMode(HSB, 360, 100, 100);
  setgrad();
}

function setgrad() {
  grad = random(360);
}

function draw() {
  background(grad, 100, 100);

  let h = map(mouseX, 0, width, 0, 360);
  let ph = h.toFixed(0);
  let pgrad = grad.toFixed(0);

  fill(h, 100, 100);

  // Draw a vertical line.
  rect(width / 2, height / 2, width / 2, height / 2);
  fill((grad - 180) % 360, 100, 100); // fill of score is set 180 degrees awy
  //fill(0, 100, 100);
  textSize(50);
  text("SCORE: " + score, 100, 100);
  //text(pgrad + " " + ph, 100, 160);
  if (ph === pgrad) {
    score++;
    clrs.push(pgrad);
    setgrad();
  }
  for (let i = 0; i < clrs.length; i++) {
    fill(clrs[i], 100, 100);
    let y = height - sz - sz * i;
    rect(width - sz, y, sz, sz);
  }
}
