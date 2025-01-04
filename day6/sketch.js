let sbtm;
let sp;
let lns = 80;
let h;
let scrll = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //fullScreen();
  background(0);
  stroke(0, 255, 0);
  sp = width / lns;
  // small change
  sbtm = 10;
  h = 0;
  frameRate(25);
}

function draw() {
  background(0);
  h = map(mouseY, 0, height, 0, height - height / 4);
  sbtm = map(mouseX, 0, width, 10, 60);
  noFill();
  ellipse(width - width / 4, h - height / 4, height / 5, height / 5);
  noiseLands();
  //rect((frameCount * 2) % width, h - height / 10, height / 20, height / 10);
  for (let i = 0; i < lns; i++) {
    line(i * sp, h, (i - lns / 2) * sp * sbtm, height);
  }
  scrll += 20;
  print(scrll);
}

function noiseLand() {
  for (let x = 0; x < width; x += 20) {
    // Set the noise level and scale.
    let noiseLevel = 100;
    let noiseScale = 0.02;

    // Scale the input coordinate.
    //let x = frameCount;
    let nx = noiseScale * x;

    // Compute the noise value.
    let y = noiseLevel * noise(nx);

    // Draw the line.
    rect(x, h - y, 20, y);
  }
}

function noiseLands() {
  // Increment this variable over time to simulate scrolling

  for (let x = 0; x < width; x += 20) {
    // Set the noise level and scale
    let noiseLevel = 200;
    let noiseScale = 0.02;

    // Compute the scaled noise input using both position and timeOffset
    let nx = noiseScale * (x + scrll);

    // Compute the noise value
    let y = noiseLevel * noise(nx);

    // Draw the rectangle
    rect(x, h - y, 20, y);
  }
}
