const container = document.querySelector('#container');
const containerWidth = container.offsetWidth;

const rows = columns = 16;
const numberOfPixels = rows * columns;
const pixelWidth = pixelHeight = containerWidth / rows

for (let i = 0; i < numberOfPixels; i++) {
  let pixel = document.createElement('div');
  container.append(pixel);

  pixel.classList.add('pixel');
  pixel.style.width =  `${pixelWidth}px`;
  pixel.style.height =  `${pixelHeight}px`;
}
