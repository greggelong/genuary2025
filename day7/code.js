//code for the apps scripts

function populateRandomCells() {
  // Get the active sheet
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // set the rows and cells
  const totalRows = 24;
  const totalCols = 14;
  const numberOfCells = 50; // Adjust this for the number of random cells to fill

  for (let i = 0; i < numberOfCells; i++) {
    // random row and col
    const randomRow = Math.floor(Math.random() * totalRows) + 1;
    const randomCol = Math.floor(Math.random() * totalCols) + 1;

    // get a random number
    const randomNumber = Math.floor(Math.random() * 100) + 1; // random number

    // Generate a random background color
    const randomColor = getRandomColor();

    // Set the value and background color for the cell
    const cell = sheet.getRange(randomRow, randomCol);
    cell.setValue(randomNumber);
    cell.setBackground(randomColor);
  }
}

// Cool function to generate a random hex color code. Why haven't I used this before
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Create a custom menu in the spreadsheet
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("Custom Scripts") // Name of the menu
    .addItem("Populate Random Cells", "populateRandomCells") // Add an item
    .addToUi();
}
