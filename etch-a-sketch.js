const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', resetSketch)

const container = document.querySelector('#container');
const containerWidth = container.offsetWidth;
const rows = 16;

generateGrid(rows);  //Generate initial 16x16 grid


function resetSketch() {
  const newRows = prompt("How many columns/rows would you like for your new sketch? (1 - 100)");  //Propt user for new dimensions of grid
  const newNumberPixels = newRows * newRows;

  if (!Number.isFinite(parseInt(newRows)) || newRows < 1 || newRows > 100) {  //Check if user input is finite and between 1 and 100
    alert("Alert! User input not between 1 and 100, please enter a new number of columns/rows.");
    resetSketch();
    return;
  } 

  //Remove all previous pixel nodes
  let child = container.lastElementChild; 
  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
  }

  generateGrid(newRows);    //Generate new grid
}


function generateGrid(rows) {
  const numberOfPixels = rows * rows;
  const pixelWidth = containerWidth / rows;

  for (let i = 0; i < numberOfPixels; i++) {
    let pixel = document.createElement('div');
    container.append(pixel);
  
    pixel.classList.add('pixel');
    pixel.style.width =  `${pixelWidth}px`;
    pixel.style.height =  `${pixelWidth}px`;
  
    pixel.addEventListener('mouseover', () => pixel.style.backgroundColor = 'black');
  }
}