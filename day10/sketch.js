let x;
let y;
let sz = 20;
//let spx = 1
//let spy =1
let sp = 20;
let clrs;
let textContain;
let dig = "";
let cnv;

let tauIndex = 0;
function setup() {
  cnv = createCanvas(900, 900);
  let cx = (windowWidth - cnv.width) / 2;
  let cy = (windowHeight - cnv.height) / 2;
  cnv.position(cx, cy);
  pixelDensity(1);
  background(0, 0);
  x = width / 2;
  y = height / 2;
  textContain = createDiv();
  textContain.style("word-wrap", "break-word");
  textContain.style("font-size", "x-large");

  clrs = [
    color(255, 222, 45), // Yellow
    color(0, 170, 173), // Turquoise
    color(80, 196, 221), // Aquamarine
    color(148, 110, 183), // Purple
    color(149, 82, 81), // Marsala
    color(181, 101, 167), // Radiant Orchid
    color(0, 155, 119), // Emerald
    color(221, 65, 36), // Tangerine Tango
    color(214, 80, 118), // Honeysuckle
  ];
}

function draw() {
  switch (tauarr[tauIndex]) {
    case 1:
      fill(clrs[0]);
      x -= sp;
      y -= sp;
      break;
    case 2:
      fill(clrs[1]);
      //x -= sp;
      y -= sp;
      break;
    case 3:
      fill(clrs[2]);
      x += sp;
      y -= sp;
      break;
    case 4:
      fill(clrs[3]);
      x -= sp;
      //y -= sp;
      break;
    case 5:
      fill(clrs[4]);
      //x -= sp;
      //y -= sp;
      break;
    case 6:
      fill(clrs[5]);
      x += sp;
      //y -= sp;
      break;
    case 7:
      fill(clrs[6]);
      x -= sp;
      y += sp;
      break;
    case 8:
      fill(clrs[7]);
      //x -= sp;
      y += sp;
      break;
    case 9:
      fill(clrs[8]);
      x += sp;
      y += sp;
      break;

    default:
      break;
  }
  // fill(255, 255, 0);

  if (x + sz / 2 < 0) x = width - sz / 2;
  else if (x - sz / 2 > width) x = sz / 2;
  else if (y + sz / 2 < 0) y = height - sz / 2;
  else if (y - sz / 2 > height) y = sz / 2;
  dig += tauarr[tauIndex];
  textContain.html(dig);
  ellipse(x, y, sz, sz);
  tauIndex++;
  if (tauIndex > tauarr.length - 1) {
    tauIndex = 0;
  }
}
