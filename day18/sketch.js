let cols, rows;
let flowField;
let resolution = 20;
let z = 100;
let skyColors;
function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  cols = floor(width / resolution);
  rows = floor(height / resolution);
  skyColors = [
    color(135, 206, 235), // Sky Blue
    color(173, 216, 230), // Light Blue
    color(176, 224, 230), // Powder Blue
    color(240, 248, 255), // Alice Blue
    color(224, 255, 255), // Light Cyan
    color(135, 206, 250), // Light Sky Blue
    color(70, 130, 180), // Steel Blue
    color(255, 250, 250), // Snow White
    color(245, 245, 245), // White Smoke
    //color(255, 255, 255), // Pure White
  ];

  //noiseSeed(0); // Optional: To keep the noise consistent
  frameRate(25);
}

function draw() {
  background(0);
  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      //let index = x + y * cols;
      let angle = map(noise(xoff, yoff, z), 1, 0, 0, TWO_PI * 1.7); //* 360 * 1.36;

      let v = p5.Vector.fromAngle(angle);
      xoff += 0.1;

      // Draw hair strands
      let xPos = x * resolution;
      let yPos = y * resolution;
      let clr = floor(map(angle, 0, TWO_PI * 1.7, 0, 8));

      stroke(skyColors[8 - clr]);
      strokeWeight(3); // hair thickness tied to angle
      push();
      translate(xPos, yPos);
      rotate(v.heading());

      line(0, 0, resolution, 0);
      pop();
    }
    yoff += 0.1;
    z += 0.0005;
  }
}
