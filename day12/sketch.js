let spaces = []; // List of available spaces to fill
let currentSpace; // Current space being processed

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  background(0);
  noStroke();
  spaces.push({ x: 0, y: 0, w: width, h: height }); // Start with the entire canvas
  frameRate(30); // Control the speed of the animation
}

function draw() {
  //background(20, 20, 20, 20); // Slight background to smooth redraws
  print(spaces.length);
  // If there are no spaces left, stop the animation
  if (spaces.length === 0) {
    noLoop();
    return;
  }

  // Select a random space and remove it from the list
  let spaceIndex = floor(random(spaces.length));
  currentSpace = spaces.splice(spaceIndex, 1)[0];

  // Random size for the rectangle, constrained to the available space
  let rw = random(20, currentSpace.w);
  let rh = random(20, currentSpace.h);

  // Draw the rectangle
  fill(random(100, 255), random(100, 255), random(100, 255), 200);
  rect(currentSpace.x, currentSpace.y, rw, rh);

  // Subdivide the remaining space and add the pieces back to the list
  if (currentSpace.w - rw > 0) {
    spaces.push({
      x: currentSpace.x + rw,
      y: currentSpace.y,
      w: currentSpace.w - rw,
      h: rh,
    });
  }
  if (currentSpace.h - rh > 0) {
    spaces.push({
      x: currentSpace.x,
      y: currentSpace.y + rh,
      w: rw,
      h: currentSpace.h - rh,
    });
  }
  if (currentSpace.w - rw > 0 && currentSpace.h - rh > 0) {
    spaces.push({
      x: currentSpace.x + rw,
      y: currentSpace.y + rh,
      w: currentSpace.w - rw,
      h: currentSpace.h - rh,
    });
  }
}
