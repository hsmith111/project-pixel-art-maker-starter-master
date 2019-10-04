
// Select table
let table = document.getElementsByTagName('table');

// Create grid when Submit button is clicked
let submit = document.getElementById('sizePicker');
submit.addEventListener('submit', makeGrid);


function makeGrid() {
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  for (let r = 0; r < height; r++) {
    let row = table.insertRow(r);
    for (let c = 0; c < width; c++) {
      let cell = row.insertCell(c);
      let colorPicker = document.getElementById('colorPicker');
      cell.addEventListener('click', function () {
        cell.style.backgroundColor = colorPicker.value;
      });
    };
  };
}
