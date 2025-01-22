let sz = 20;
let binnum = "111101111";
let cnv;
let wall;
let pipe;
let win;
let btop;
let buildparts = [];
let byhight = false;
let exitCase;

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
  if (cnv.height > cnv.width) {
    byhight = true;
  } else {
    byheith = false;
  }
  angleMode(DEGREES);
  print("byheight", byhight);

  //frameRate(10);
}

function draw() {
  background(255);

  // take care of the center square if it is zero
  // take this out for this version
  /* if (binnum[4] == "0") {
    fill(255);
    noStroke();
    rect(width / 2, height / 2, sz, sz);
  } */
  // frameCount * 0.X controls the speed
  if (byhight === true) {
    sz = map(sin(frameCount * 0.3), -1, 1, height / 3, 50);
    exitCase = cnv.height;
  } else {
    sz = map(sin(frameCount * 0.3), -1, 1, width / 3, 10);
    exitCase = cnv.width;
  }
  //if (sz < 10) sz = width / 3;
  drawShape(win, width / 2, height / 2, sz, 0);
  //print(sz);
  //noLoop();
  noCursor();
}

function drawShape(img, x, y, d) {
  // d is disance to place the shape/ sz

  fill(0);
  noStroke();

  //rect(x, y, sz - 1, sz - 1);

  //print(d)
  if (d < exitCase) {
    //change the exit case to by by height or width
    // ignores the depth case is size
    let newD = d * 3; // need to the steps
    if (binnum[0] == "1") {
      drawShape(btop, x - d, y - d, newD); // top left
    }
    if (binnum[1] == "1") {
      drawShape(pipe, x, y - d, newD); // top middle
    }
    if (binnum[2] == "1") {
      drawShape(btop, x + d, y - d, newD); // top right
    }
    if (binnum[3] == "1") {
      drawShape(wall, x - d, y, newD); // left
    }
    if (binnum[4] == "1") {
      drawShape(win, x, y, newD); //cente
    }
    if (binnum[5] == "1") {
      drawShape(wall, x + d, y, newD); // right
    }
    if (binnum[6] == "1") {
      drawShape(wall, x - d, y + d, newD); // bottom left
    }

    if (binnum[7] == "1") {
      drawShape(win, x, y + d, newD); // bottom middle
    }

    if (binnum[8] == "1") {
      drawShape(wall, x + d, y + d, newD); // bottom right
    }
  }

  //image(img, x, y, sz - 1, sz - 1);
  image(img, x, y, sz, sz);
}
