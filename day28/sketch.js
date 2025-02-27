let nx = 1000;
let nxstart = 1000;
let nystart = 1000;
let ny = 1000;
let sp = 0.03;
let sz;
let column = 60;
let rows = 100;
//let asciiChars = [' ', '.', ':', '-', '=', '+', '*', '#', '%', '@']; // ASCII gradient

let asciiChars = [
  "🐭",
  "🐭",
  "🐭",
  "🐂",
  "🐅",
  "🐇",
  "🐉",
  "🐍",
  "🐎",
  "🐐",
  "🐒",
  "🐓",
  "🐕",
  "🐖",
  "🐖",
  "🐖",
];
let clr;

function setup() {
  createCanvas(windowWidth, windowHeight); // Full-screen canvas
  sz = width / column; // Adjust size based on width
  rows = floor(height / sz); // adjust rows to height for mobile
  background(0);
  noStroke();
  textSize(sz);
  textFont("monospace");
  pixelDensity(1);
  frameRate(10);
}

function draw() {
  background(0);
  column = floor(map(mouseX, 0, width, 15, 50));
  sz = width / column; // Adjust size based on width
  rows = floor(height / sz); // adjust rows to height for mobile
  sp = map(mouseY, 0, height, -0.1, 0.1);
  ny = nystart;
  for (let j = 0; j < rows; j++) {
    nx = nxstart; // reset noise x position
    for (let i = 0; i < column; i++) {
      clr = noise(nx, ny);
      //let charIndex =
      //  asciiChars.length - 1 - floor(clr * (asciiChars.length - 1));
      //let charIndex = floor(clr * (asciiChars.length - 1));
      let charIndex = floor(map(clr, 0, 1, 0, (asciiChars.length - 1) * 2)); // Stretch the range
      let emojiIndex = charIndex % asciiChars.length; // Wrap around if over the length

      //let charIndex = floor(map(clr, 0, 1, 0, asciiChars.length - 1));
      let asciiChar = asciiChars[emojiIndex];
      fill(0); // White color for text
      textSize(sz);
      text(asciiChar, i * sz, j * sz + sz);
      nx += 0.05;
    }
    ny += 0.05;
  }
  nystart += sp;
}
