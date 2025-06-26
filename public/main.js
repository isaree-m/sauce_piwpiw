import { Animation } from './classes/Animation.js';
import { Coin } from './classes/Coin.js';




const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Create one coin
const coins = [ new Coin(50, 50) ];

// Dummy player just to satisfy update()
const dummyPlayer = {
  x: 0, y: 0, width: 0, height: 0, score: 0
};

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  coins.forEach(coin => {
    coin.update(dummyPlayer); // no real collision
    coin.draw(ctx);
  });

  requestAnimationFrame(gameLoop);
}

gameLoop();

