let sz = 10;
let rows = 160;
let cols = 160;
// Set the noise level and scale.
let noiseScale = 0.002;
let nsp = 0.001;
let terrainColors; // Array to store colors
let off = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  cols = floor(width / sz);
  rows = floor(height / sz);
  //noLoop();

  // Define geographical colors in an array
  terrainColors = [
    color(0, 75, 150), // Ocean (Deep Blue)
    color(237, 201, 175), // Sand (Sandy Brown)
    color(34, 139, 34), // Forest (Deep Green)
    color(139, 121, 94), // Hill (Earthy Brown)
    color(255, 250, 250), // Mountain (Snowy White)
  ];
}

function draw() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let nx = noiseScale * x + off;
      let ny = noiseScale * y; //+ off;
      let colind = floor(map(noise(nx, ny), 0, 1, 0, terrainColors.length));
      fill(terrainColors[colind]);
      noStroke();
      rect(x * sz, y * sz, sz, sz);
    }
  }
  noiseScale += nsp;
  if (noiseScale > 0.1 || noiseScale < 0.002) {
    nsp = nsp * -1;
    off += 1000;
  }
}
