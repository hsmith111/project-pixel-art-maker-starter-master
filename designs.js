// Select height input
let height = document.getElementById('inputHeight');

// Select width input
let width = document.getElementById('inputWidth');

// Select color picker to use value
let colorPicker = document.getElementById('colorPicker');

// Select html table element
let grid = document.getElementById('pixelCanvas');

// Create grid when Submit button is clicked
let button = document.getElementById('sizePicker');
button.addEventListener('submit', function (event) {
  event.preventDefault();
  makeGrid(height, width);
});

// Clear canvas when page loads
grid.innerHTML = null;

// Build grid
function makeGrid(height, width) {
  // Clear canvas each time the makeGrid function is called
  grid.innerHTML = null;
  // Adding rows based on the height value
  for (let r = 0; r < height.value; r++) {
    let row = grid.insertRow(r);
    // Adding columns based on the width value
    for (let c = 0; c < width.value; c++) {
      let cell = row.insertCell(c);
      // If individual cells are clicked, the color value will fill the cell
      cell.addEventListener('click', function () {
        cell.style.backgroundColor = colorPicker.value;
      });
    }
  }
}
