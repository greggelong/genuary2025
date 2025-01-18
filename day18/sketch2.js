let cols, rows, vScale;
let flowField;
let res = 40;
let z = 100;
let hairColors;
function setup() {
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight); // larger canvas to draw to
  print(width, height);
  if (windowWidth < windowHeight) {
    vScale = floor(width / res); // vScale tied to window width so it can work on phone and computer
    console.log("by width");
  } else {
    vScale = floor(height / res);
    console.log("by height");
  }

  myvideo = createCapture(VIDEO);
  myvideo.size(width / vScale, height / vScale);
  //myvideo.hide();
  // video dom element , the source, will be smaller by vScale which is 40 by 30 to improve performance
  frameRate(15);

  hairColors = [
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
}

function draw() {
  background(0);
  // load the myvideo to pixel array
  myvideo.loadPixels(); // gets a pixes arry for video capture

  // loop through the small video capture
  for (let y = 0; y < myvideo.height; y++) {
    // for each y there are some x's
    for (let x = 0; x < myvideo.width; x++) {
      //this mirrors the index for see note book
      let index = (myvideo.width - x - 1 + y * myvideo.width) * 4;
      let r = myvideo.pixels[index + 0];
      let g = myvideo.pixels[index + 1];
      let b = myvideo.pixels[index + 2];
      print(myvideo);

      let bright = floor((r + g + b) / 3); // the brightness or greyscale 0-255 is the average of the rgb
      let angle = map(bright, 0, 255, 0, TWO_PI * 1.7);
      //let angle = noise(x * 0.1, y * 0.1,z) * TWO_PI * 2;
      let v = p5.Vector.fromAngle(angle);

      // Draw hair strands
      let xPos = x * vScale;
      let yPos = y * vScale;
      let clr = floor(map(angle, 0, TWO_PI * 1.7, 0, hairColors.length - 1));

      stroke(hairColors[clr]);
      strokeWeight(3); // hair thickness tied to angle
      push();
      translate(xPos, yPos);
      rotate(v.heading());
      line(0, 0, vScale, 0);
      pop();
    }
    z += 0.001;
  }
}
