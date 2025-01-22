let sz = 20;
let binnum = "111101111";
let cnv;
let wall;
let pipe;
let win;
let btop;
let buildparts = [];
let depth = 1;
console.log("hello");
function preload() {
  wall = loadImage("building/wall.jpg");
  pipe = loadImage("building/pipe.jpg");
  win = loadImage("building/win.jpg");
  btop = loadImage("building/top.jpg");
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  let cx = (windowWidth - cnv.width) / 2;
  let cy = (windowHeight - cnv.height) / 2;
  cnv.position(cx, cy);
  buildparts = [wall, pipe, win, btop];
  rectMode(CENTER);
  imageMode(CENTER);

  sz = height / 3;
  angleMode(DEGREES);
  //frameRate(10);
}

function draw() {
  background(255);

  drawShape(win, width / 2, height / 2, sz, depth);

  // take care of the center square if it is zero
  // take this out for this version
  /* if (binnum[4] == "0") {
    fill(255);
    noStroke();
    rect(width / 2, height / 2, sz, sz);
  } */
  // frameCount * 0.X controls the speed
  sz = map(sin(frameCount * 0.3), -1, 1, width / 1.5, 10);
  //if (sz < 10) sz = width / 3;
}

function drawShape(img, x, y, d, depth) {
  // d is disance to place the shape/ sz

  fill(0);
  noStroke();

  //rect(x, y, sz - 1, sz - 1);

  //print(d)
  if (d < width) {
    // ignores the depth case is size
    let newD = d * 3; // need to the steps
    if (binnum[0] == "1") {
      drawShape(btop, x - d, y - d, newD, depth - 1); // top left
    }
    if (binnum[1] == "1") {
      drawShape(pipe, x, y - d, newD, depth - 1); // top middle
    }
    if (binnum[2] == "1") {
      drawShape(btop, x + d, y - d, newD, depth - 1); // top right
    }
    if (binnum[3] == "1") {
      drawShape(wall, x - d, y, newD, depth - 1); // left
    }
    if (binnum[4] == "1") {
      drawShape(win, x, y, newD, depth - 1); //cente
    }
    if (binnum[5] == "1") {
      drawShape(wall, x + d, y, newD, depth - 1); // right
    }
    if (binnum[6] == "1") {
      drawShape(wall, x - d, y + d, newD, depth - 1); // bottom left
    }

    if (binnum[7] == "1") {
      drawShape(win, x, y + d, newD, depth - 1); // bottom middle
    }

    if (binnum[8] == "1") {
      drawShape(wall, x + d, y + d, newD, depth - 1); // bottom right
    }
  }

  //image(img, x, y, sz - 1, sz - 1);
  image(img, x, y, sz, sz);
}
