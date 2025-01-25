let cnv;
let inputBox, button, messageDiv;

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
  let x = width / 2;
  let y = height / 2;
  let angle = 0;

  background(220); // Clear the canvas
  // print text
  noStroke();
  fill(0, 0, 255);
  textSize(40);
  text(inputString, 50, 50, width - 50, height - 50);

  // Draw the turtle's path
  stroke(0);
  strokeWeight(2);
  noFill();

  beginShape();
  vertex(x, y);

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    print(char);

    if (char === " ") {
      // Move forward without turning for spaces
      x += cos(radians(angle)) * 20;
      y += sin(radians(angle)) * 20;
    } else if (angleMap[char] !== undefined) {
      // Turn based on the character's angle and move forward
      angle += angleMap[char];
      x += cos(radians(angle)) * 20;
      y += sin(radians(angle)) * 20;
    }

    // Wrap around the canvas if the turtle goes out of bounds
    x = (x + width) % width; // Wraps x around
    y = (y + height) % height; // Wraps y around

    vertex(x, y);
  }

  endShape();
}
