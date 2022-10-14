const canvas = document.querySelector('canvas');
canvas.style.border = "2px solid blue";
const ctx = canvas.getContext('2d');
const startScreen = document.querySelector(".game-intro");
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const carHorizontalSpeed = 3;


const background = new Image ();
background.src = "images/road.png";
const car = new Image();
car.src = "images/car.png"


window.onload = () => {
  ctx.drawImage(background, 0, 0, canvasWidth, canvasHeight);
  ctx.drawImage(car, canvasWidth * 0.421, canvasHeight * 0.7, canvas.width * 0.15, canvas.height * 0.18);
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    startScreen.style.display = "none";
  }
};
/* const speed, listen for event of button clicks, if right, move according to const, if left, go negative, if off, stop.*/

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
  ctx.drawImage(car, x, y);                       // draw image at current position
  x -= 4;
  if (x > 250) requestAnimationFrame(animate)        // loop
}