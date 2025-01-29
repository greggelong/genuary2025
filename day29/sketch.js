let mesg =
  "Welcome to the ART WORKERS exhibition. Here, we explore how to make living labor into art itself, turning future obedience to algorithms into an ancient ritual of creation and destruction. This includes activities like algorithm brick-pushing and bioelectric sound experiments. Our practice, *The Daily Life Practice Manual*, is rooted in creating within the ruins of the end of the world, channeling light that may remain unseen, and writing poetry on the ground with discarded metal powder. It sharpens sensitivity to fleeting, transformative moments in everyday life. This practice merges courage and faith in one's energy with a heightened awareness of the body's neglected corners, connecting ancient memories to the end of the future. In this, we reflect on how to live fully in the present.";

let grid = [];
let ham;
let speech; // Declare speech object
let lastSpokenText = ""; // To keep track of the last spoken text

function preload() {
  ham = loadImage("hammer.png"); // Load your hammer image
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor(); // Hide default cursor
  speech = new p5.Speech(); // Initialize speech
  textAlign(LEFT, TOP);
  generateGrid();
}

function draw() {
  background(255);

  for (let cell of grid) {
    let d = dist(mouseX, mouseY, cell.x, cell.y);
    let newSize;

    // Normal conditional statement for text size enlargement
    if (d < 50) {
      newSize = cell.txtSize + 20; // Enlarge on hover

      // Only speak if the text is different from the last spoken one
      if (cell.text !== lastSpokenText) {
        speech.stop(); // Stop the last speech
        speech.speak(cell.text); // Speak the current text
        lastSpokenText = cell.text; // Update the last spoken text
      }
    } else {
      newSize = cell.txtSize; // Keep normal size
    }

    textSize(newSize);
    fill(0);
    text(cell.text, cell.x, cell.y, cell.w, cell.h);
  }

  // Draw hammer cursor
  image(ham, mouseX, mouseY, 50, 50);
}

// Adjusts rows and columns dynamically, repeats text if necessary
function generateGrid() {
  grid = []; // Clear previous grid

  let cols = floor(width / 200); // Adjust column count dynamically
  let rows = floor(height / 100); // Adjust row count dynamically
  let w = width / cols;
  let h = height / rows;

  let words = mesg.split(" ");
  let index = 0;
  let totalWords = words.length;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let txtSize = random(12, 40); // Random font size
      let textSegment = words.slice(index, index + 5).join(" "); // Get text chunk
      index = (index + 5) % totalWords; // Loop back to start if we run out of words

      grid.push({
        x: i * w + 10,
        y: j * h + 10,
        w: w - 20,
        h: h - 20,
        text: textSegment,
        txtSize: txtSize,
      });
    }
  }
}

// Recalculate grid on window resize
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  generateGrid();
}
