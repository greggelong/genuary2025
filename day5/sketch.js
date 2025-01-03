// refrenced paul wheelers code for iso cube
// https://github.com/sflanker
let minsize = 300;
let startsize = 300;
let cnv;
function setup() {
  pixelDensity(1);
  cnv = createCanvas(900, 900);
  let cx = (windowWidth - cnv.width) / 2;
  let cy = (windowHeight - cnv.height) / 2;
  cnv.position(cx, cy);

  frameRate(1);
}

function draw() {
  background(220);

  fractIso(width / 2, height / 2, startsize);
  minsize *= 0.5;
  if (minsize < 5) minsize = 300;
}

function fractIso(x, y, size) {
  isoCube(x, y, size);

  if (size > minsize) {
    fractIso(x + size / 1, y + size / 1, size / 2);
    fractIso(x - size / 1, y + size / 1, size / 2);
    fractIso(x + size / 1, y - size / 1, size / 2);
    fractIso(x - size / 1, y - size / 1, size / 2);
  }
}

function isoCube(x, y, tileSize) {
  //const tileSize = 100;
  let sin30 = 1 / 2;
  let cos30 = Math.sqrt(3) / 2;
  let halfTileLength = tileSize * cos30;
  let halfTileBreadth = tileSize * sin30;
  let tileLength = halfTileLength * 2;
  let tileBreadth = halfTileBreadth * 2;

  fill(50);
  quad(
    x,
    y,
    x - halfTileLength,
    y - halfTileBreadth,
    x,
    y - tileBreadth,
    x + halfTileLength,
    y - halfTileBreadth
  );
  fill(100);
  quad(
    x,
    y,
    x + halfTileLength,
    y - halfTileBreadth,
    x + halfTileLength,
    y - halfTileBreadth + tileSize,
    x,
    y + tileSize
  );
  fill(150);
  quad(
    x,
    y,
    x,
    y + tileSize,
    x - halfTileLength,
    y - halfTileBreadth + tileSize,
    x - halfTileLength,
    y - halfTileBreadth
  );
}
