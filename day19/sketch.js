let rows = 12;
let cols = 12;
let cnv;
let h, w;
let sz;

function setup() {
  cnv = createCanvas(900, 900);
  pixelDensity(1);
  let cx = (windowWidth - cnv.width) / 2;
  let cy = (windowHeight - cnv.height) / 2;
  cnv.position(cx, cy);
  angleMode(DEGREES);
  sz = floor(height / 12);
  h = floor(height / 12);
  w = floor(width / 12);
}

function draw() {
  drawChess2();
  //SnoLoop();
}

function drawChess2() {
  //stroke(255, 0, 0);
  noStroke();
  for (let j = 0; j < height; j += h) {
    let i = 0;
    let colIndex = 0;

    while (i < width - h) {
      w = floor(map(sin(i * 0.5 + (frameCount % 360)), -1, 1, 5, 75));

      print(i, w);
      if ((colIndex + j) % 2 === 0) {
        fill(255);
      } else {
        fill(0);
      }
      rect(i, j, w, h);
      i += w;
      colIndex++;
    }
  }
}

function drawChess1() {
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      if ((i + j) % 2 === 0) {
        fill(255);
      } else {
        fill(0);
      }
      rect(i * sz, j * sz, sz, sz);
    }
  }
}

function drawChess() {
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      if ((i + j) % 2 === 0) {
        fill(255);
      } else {
        fill(0);
      }
      rect(i * sz, j * sz, sz, sz);
    }
  }
}
