const canvas = document.querySelector('canvas');
canvas.style.border = "2px solid blue";
const ctx = canvas.getContext('2d');
const startScreen = document.querySelector(".game-intro");

const background = new Image ();
background.src = "images/road.png";
const car = new Image();
car.src = "images/car.png"


window.onload = () => {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(car, canvas.width * 0.412, canvas.height * 0.7, canvas.width * 0.17, canvas.height * 0.18);
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    startScreen.style.display = "none";
  }
};