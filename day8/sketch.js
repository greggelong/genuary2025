let textContain;
let chars = "         abcdefghijklmnopqrstuvwxyz"; // extra spaces
let total = 0;

function setup() {
  noCanvas();
  textContain = createDiv();
  textContain.style("word-wrap", "break-word");
  let omc = ""; // string to hold characters
  let max = 1000000; //max one million
  let chunk = 10000; // chunk size
  for (let i = 0; i < max; i++) {
    // get random character
    omc += chars[floor(random(chars.length))];
    total++;
    if (i % chunk === 0 && i > 0) {
      // add to dom incrementally
      textContain.html(textContain.html() + omc);
      // reset the buffer
      omc = "";
    }
  }
  // Append the final chunk
  textContain.html(textContain.html() + omc + " : total characters" + total);
}
