let fibNumbers = [0, 1]; // Initial Fibonacci sequence
let cellSize = 20; // Size of each rectangle
let maxFibIndex = 50; // Number of Fibonacci numbers to display
let bitSize = 32; // Fixed binary size (32-bit)
let cnv;
function setup() {
  cnv = createCanvas(800, 800);
  let cx = (windowWidth - cnv.width) / 2;
  let cy = (windowHeight - cnv.height) / 2;
  cnv.position(cx, cy);
  background(0);
  //noStroke();
  stroke(0, 127, 0);
  textAlign(CENTER, CENTER);

  // Generate Fibonacci sequence up to maxFibIndex
  for (let i = 2; i <= maxFibIndex; i++) {
    fibNumbers.push(fibNumbers[i - 1] + fibNumbers[i - 2]);
  }

  drawFibonacciBinary();
}

function drawFibonacciBinary() {
  let x = 0; // Starting x position
  let y = 0; // Starting y position

  for (let i = 1; i < fibNumbers.length; i++) {
    let binary = fibNumbers[i].toString(2).padStart(bitSize, "0"); // Convert to 32-bit binary

    for (let j = 0; j < binary.length; j++) {
      if (binary[j] === "1") {
        fill(0, 255, 0); // Black for 1
      } else {
        fill(0); // White for 0
      }
      rect(x + j * cellSize, y, cellSize, cellSize); // Draw rectangle
    }

    // Draw Fibonacci number as text below the row
    fill(0, 255, 0);
    text(fibNumbers[i], x + binary.length * cellSize + 50, y + cellSize / 2);
    y += cellSize; // Move to the next row
  }
}
