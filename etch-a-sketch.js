const container = document.querySelector('#container');
const rows = columns = 16;
const numberOfPixels = rows * columns;
for (let i = 0; i < numberOfPixels; i++) {
  const pixel = document.createElement('div');
  container.append(pixel);
}