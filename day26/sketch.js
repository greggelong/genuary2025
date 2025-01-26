let capture;
let vScale;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  //colorMode(HSB);
  if (width < height) {
    vScale = floor(width / 40); // vScale tied to window width so it can work on phone and computer
    console.log("by width");
  } else {
    vScale = floor(height / 40);
    console.log("by height");
  }
  capture = createCapture(VIDEO, { flipped: true });
  capture.size(floor(width / vScale), floor(height / vScale));

  noStroke();
  capture.hide();
}

function draw() {
  // For every row of pixels
  for (let y = 0; y < capture.height; y += 1) {
    // Visit every column of pixels
    for (let x = 0; x < capture.width; x += 1) {
      // Get the color array [r,g,b,a] at x,y
      let colorAtXY = capture.get(x, y);
      // Extract the brightness level of the color
      //let b = brightness(colorAtXY);
      // Test for a brightness threshold of 50
      // if(b > 50) fill('white');
      // else fill('black');
      fill(colorAtXY);
      // Draw a 10x10 rectangle at x,y
      rect(x * vScale, y * vScale, vScale, vScale);
      rect(width - x * vScale, y * vScale, vScale, vScale);
      rect(x * vScale, height - y * vScale, vScale, vScale);
      rect(width - x * vScale, height - y * vScale, vScale, vScale);
    }
  }
}
