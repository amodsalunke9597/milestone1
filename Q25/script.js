const image = document.getElementById('myImage');
let xPos = 0;
let yPos = 0;
const stepSize = 10;

document.addEventListener('keydown', (event) => {
  switch(event.keyCode) {
    case 37: // Left arrow key
      xPos -= stepSize;
      break;
    case 38: // Up arrow key
      yPos -= stepSize;
      break;
    case 39: // Right arrow key
      xPos += stepSize;
      break;
    case 40: // Down arrow key
      yPos += stepSize;
      break;
  }

  image.style.left = `${xPos}px`;
  image.style.top = `${yPos}px`;
});
