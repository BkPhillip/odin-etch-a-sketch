const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', resetSketch)

const container = document.querySelector('#container');
const containerWidth = container.offsetWidth;
const rows = 16;

generateGrid(rows);  //Generate initial 16x16 grid


function resetSketch() {
  const newRows = prompt("How many columns would you like for your new sketch?");  //Propt user for new dimensions of grid
  const newNumberPixels = newRows * newRows;

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