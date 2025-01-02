let hair;
let mytxt = ["My", "PRETTY", "HAIR", "HAIR", "HAIR"];
function preload() {
  hair = loadImage("hair.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  pixelDensity(1);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  hair.resize(200, 0);
  frameRate(7);
}

function draw() {
  //background(220);
  for (let i = 0; i < 20; i++) {
    image(hair, random(width), random(height));
  }

  fill(0, 255, 0);
  textFont("Courier New", random(40, 142));

  for (let j = 0; j < 5; j++) {
    text(random(mytxt), random(width), random(height));
  }
}
