let cnv;
let inputBox, button, messageDiv;
let x;
let y;

// Angle mapping for characters
const characters = "abcdefghijklmnopqrstuvwxyz.,?!";
const angleMap = {};
for (let i = 0; i < characters.length; i++) {
  angleMap[characters[i]] = i * 12;
}

function setup() {
  // Create the canvas inside the canvasDiv
  cnv = createCanvas(800, 800);
  cnv.parent("canvasDiv");

  background(220);

  // Select the input box and button from the DOM
  inputBox = select("#textInput");
  button = select("#submitButton");
  messageDiv = select("#messageDiv");

  // Add a click event to the button
  button.mousePressed(handleInput);
}

function handleInput() {
  // Get the text from the input box
  const text = inputBox.value().toLowerCase();
  if (text) {
    messageDiv.html(`Drawing: "${text}"`);
    turtleFunction(text); // Call the turtle function with the text
  } else {
    messageDiv.html("Please enter some text.");
  }
}

function turtleFunction(inputString) {
  x = width / 2;
  y = height / 2;
  let angle = 0;
  let nx = x;
  let ny = y;

  background(220); // Clear the canvas
  // print text
  noStroke();
  fill(0, 0, 255, 100);
  textSize(40);
  text(inputString, 50, 50, width - 50, height - 50);

  // Draw the turtle's path
  stroke(0);
  strokeWeight(3);
  noFill();

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    if (char === " ") {
      // Move forward without turning for spaces
      nx += cos(radians(angle)) * 20;
      ny += sin(radians(angle)) * 20;
    } else if (angleMap[char] !== undefined) {
      // Turn based on the character's angle and move forward
      angle += angleMap[char];
      nx += cos(radians(angle)) * 20;
      ny += sin(radians(angle)) * 20;
    }

    // Wrap around
    nx = (nx + width) % width; // need to improve wrapping
    ny = (ny + height) % height; //

    line(x, y, nx, ny);
    print(x, nx, y, ny);
    x = nx;
    y = ny;
  }
}
