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

const coins = [ new Coin(200, 500) ];

const door1 = new Door(600, 400)

/* ───────────────── Game Loop ──────────────────── */
function gameLoop() {
  // fill bg
  ctx.fillStyle = "#87CEEB";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // CODE : ctx.clearRect(0, 0, canvas.width, canvas.height);

  door1.update(player)
  door1.draw(ctx)

  player.update(keys);
  player.draw(ctx)

  coins.forEach(coin => {
    coin.update(player); // no real collision
    coin.draw(ctx);
  });

  
  requestAnimationFrame(gameLoop);
}

gameLoop();

