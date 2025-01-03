let canvasSize = 900;
let maxDepth = 9; // Maximum recursion depth
let minSize = 5;
let cnv;
let offset = 1.2;

function setup() {
  cnv = createCanvas(canvasSize, canvasSize);
  pixelDensity(1);
  let cx = (windowWidth - cnv.width) / 2;
  let cy = (windowHeight - cnv.height) / 2;
  cnv.position(cx, cy);
  background(0); // Matte black background
  //noLoop();
  //angleMode(DEGREES)
  frameRate(5);
  //drawSquares(width / 2, height / 2, canvasSize, maxDepth);
}

function draw() {
  background(0);
  maxDepth = int(map(sin(frameCount / 2), -1, 1, 0, 9));
  if (frameCount % 20 === 0) {
    offset = offset - 0.1;
    if (offset < 0.8) offset = 1.2;
  }
  //maxDepth = maxDepth%9
  print(maxDepth);
  //drawSquaresa(width / 2, height / 2, canvasSize, maxDepth);
  drawSq(width / 2, height / 2, canvasSize / 2, maxDepth);
}

function drawSquares(x, y, size, depth) {
  if (depth <= 0) return; // Stop when depth is 0

  // Draw the current square
  let shade = map(size, minSize, canvasSize, 5, 40); // Shade based on depth
  fill(shade);
  noStroke();
  rectMode(CENTER);
  rect(x, y, size, size);

  // Recursively draw the smaller squares in the center and corners
  let newSize = size * 0.5; // Reduce size by half
  let offset = size / 2;

  // Draw squares in all 5 positions (center + four corners)
  drawSquares(x, y, newSize, depth - 1); // Center square
  drawSquares(x - offset, y - offset, newSize, depth - 1); // Top-left
  drawSquares(x + offset, y - offset, newSize, depth - 1); // Top-right
  drawSquares(x - offset, y + offset, newSize, depth - 1); // Bottom-left
  drawSquares(x + offset, y + offset, newSize, depth - 1); // Bottom-right
}

function drawSquaresa(x, y, size, depth) {
  if (depth <= 0) return; // Stop when depth is 0

  // Draw the current square
  let shade = map(size, minSize, canvasSize, 5, 40); // Shade based on depth
  fill(255);
  //noStroke();
  rectMode(CENTER);
  ellipse(x, y, size, size);

  // Recursively draw the smaller squares in the center and corners
  let newSize = size * 0.5; // Reduce size by half
  let offset = size / 2;

  // Draw squares in all 5 positions (center + four corners)
  drawSquaresa(x, y, newSize, depth - 1); // Center square
  drawSquaresa(x, y - offset, newSize, depth - 1); // Top-left
  //drawSquaresa(x + offset, y, newSize, depth - 1); // Top-right
  drawSquaresa(x, y + offset, newSize, depth - 1); // Bottom-left
  // drawSquaresa(x - offset, y, newSize, depth - 1); // Bottom-right
}

function drawSq(x, y, size, depth) {
  let shade = map(size, minSize, canvasSize / 2, 5, 40);
  fill(shade);
  noStroke();
  rectMode(CENTER);
  rect(x, y, size, size);
  // set offset as a global;

  // exit condition
  if (depth > 0) {
    drawSq(x + size / offset, y, size / 2, depth - 1);
    drawSq(x - size / offset, y, size / 2, depth - 1);
    drawSq(x, y + size / offset, size / 2, depth - 1);
    drawSq(x, y - size / offset, size / 2, depth - 1);
  }

  //
}
