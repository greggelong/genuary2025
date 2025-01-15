let rows;
let cols;
let sz = 10;
let cnv;

// Colors for horizontal stripes (soft pastels and warm tones)
let hc;
// Colors for vertical stripes (rich, muted, and earthy tones)
let vc;

function setup() {
  cnv = createCanvas(410, 810);
  let cx = (windowWidth - cnv.width) / 2;
  let cy = (windowHeight - cnv.height) / 2;
  cnv.position(cx, cy);
  background(0);

  hc = [
    color(244, 164, 96), // Sandy Brown
    color(250, 218, 221), // Soft Pink
    color(135, 206, 250), // Light Sky Blue
    color(221, 160, 221), // Plum
    color(255, 239, 213), // Papaya Whip
  ];
  vc = [
    color(47, 79, 79), // Dark Slate Gray
    color(205, 92, 92), // Indian Red
    color(72, 61, 139), // Dark Slate Blue
    color(60, 179, 113), // Medium Sea Green
    color(210, 180, 140), // tan
  ];
  rows = height / sz;
  cols = width / sz;
  print(rows, cols);
  frameRate(1);
}

function draw() {
  for (let i = 0; i < 1000; i++) {
    rndThreads();
    //loopThreads();
  }
  //noLoop()
}

function rndThreads() {
  stroke(0);

  //strokeWeight(5)
  //noStroke()
  fill(random(hc));
  rect(0, floor(random(1, rows / 2 - 1)) * sz * 2, width, sz);

  fill(random(hc));
  rect(floor(random(1, cols / 2 - 1)) * sz * 2, 0, sz, height);
}

function loopThreads() {
  for (let i = 0; i < cols; i += 1) {
    fill(random(hc));
    rect(0, i * sz * 2, width, sz);

    fill(random(hc));
    rect(i * sz * 2, 0, sz, height);
  }

  noLoop();
}
