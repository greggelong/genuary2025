let canvasSize = 900;
let maxDepth = 9; // Maximum recursion depth
let minSize =5

function setup() {
  createCanvas(canvasSize, canvasSize);
  background(0); // Matte black background
  //noLoop();
  //angleMode(DEGREES)
  frameRate(5)
  //drawSquares(width / 2, height / 2, canvasSize, maxDepth);
}

function draw(){
  background(0)
  maxDepth = int(map(sin(frameCount/2),-1,1,2,9))
  //maxDepth = maxDepth%9
  print(maxDepth)
  drawSquares(width / 2, height / 2, canvasSize, maxDepth);

}

function drawSquares(x, y, size, depth) {
  if (depth<=0) return; // Stop when depth is 0

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
