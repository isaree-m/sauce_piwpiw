import { Animation } from './classes/Animation.js';
import { Coin } from './classes/Coin.js';
import { Door } from './classes/Door.js';
import Player from './classes/Player.js';

/* ─────────────────  Canvas setup ─────────────────── */
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


/* ───────────────── Input state ──────────────────── */
const keys = { left: false, right: false, jump: false };

document.addEventListener("keydown", e => {
  if (e.code == "ArrowLeft")    keys.left = true;
  if (e.code == "ArrowRight")   keys.right = true;
  if (e.code == "ArrowUp")      keys.jump = true;
});

document.addEventListener("keyup", e => {
  if (e.code == "ArrowLeft")    keys.left = false;
  if (e.code == "ArrowRight")   keys.right = false;
  if (e.code == "ArrowUp")      keys.jump = false;
});

/* ───────────────── Create ──────────────────── */

const player = new Player(300,300);
// Create one coin
const coins = [ new Coin(50, 50) ];

// Dummy player just to satisfy update()
const dummyPlayer = {
  x: 0, y: 0, width: 0, height: 0, score: 0
};

const secondDummyPlayer = {
  x: 10, y: 0, width: 50, height: 50, score: 0
}

// create door
const door1 = new Door(10, 5)

/* ───────────────── Game Loop ──────────────────── */
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  player.update(keys);
  player.draw(ctx)

  coins.forEach(coin => {
    coin.update(dummyPlayer); // no real collision
    coin.draw(ctx);
  });

  door1.update(dummyPlayer)
  door1.draw(ctx)
  requestAnimationFrame(gameLoop);
}

gameLoop();

