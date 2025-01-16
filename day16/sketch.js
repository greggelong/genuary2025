let input; // Input box for text
let multiplierInput; // Input box for multiplier
let words = []; // Array to store words from input
let colors = []; // Array to store colors corresponding to words
let multiplier = 33; // Default multiplier
let outputTextArea; // Text area to display hex color codes
let submitButton; // Submit button

function setup() {
  // Create canvas and attach to the canvas container div
  let canvas = createCanvas(600, 400);
  canvas.parent(select("#canvas-container")); // Attach the canvas to the div

  textSize(18);
  textAlign(CENTER, CENTER);

  // Select input elements from the DOM
  input = select("#text-input");
  multiplierInput = select("#multiplier-input");

  // Select the submit button
  submitButton = select("#submit-button");
  submitButton.mousePressed(generateColors);

  // Select the output text area
  outputTextArea = select("#output-text");
}

function draw() {
  background(255);

  let yOffset = 60; // Start drawing rectangles below the input box

  // Draw rectangles for each word and color
  for (let i = 0; i < words.length; i++) {
    fill(colors[i]);
    rect(20, yOffset, width - 40, 50);

    fill(0);
    text(words[i], width / 2, yOffset + 25); // Draw word in the center of the rectangle

    fill(0);
    text(colors[i], width / 2, yOffset + 45); // Draw the hex color below the word

    yOffset += 60; // Space between rectangles
  }
}

function generateColors() {
  let inputText = input.value().toLowerCase(); // Get the text from the input box
  words = split(inputText, " "); // Split the input text into words

  // Get the multiplier value from the multiplier input box
  multiplier = int(multiplierInput.value());

  colors = []; // Clear any previous colors

  // Generate a color for each word using the selected multiplier
  for (let i = 0; i < words.length; i++) {
    let colorHex = stringToColor(words[i], multiplier);
    colors.push(colorHex); // Store the color
  }

  // Update the output text area with the hex values
  let outputText = words
    .map((word, index) => `${word}: ${colors[index]}`)
    .join("\n");
  outputTextArea.html(outputText); // Display the hex codes in the text area
}

function stringToColor(str, multiplier) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * multiplier) ^ str.charCodeAt(i);
  }
  hash = hash & 0xffffff; // Mask to 24 bits
  let hexColor = "#" + hash.toString(16).padStart(6, "0").toUpperCase();
  return hexColor;
}
