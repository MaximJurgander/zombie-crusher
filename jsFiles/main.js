function preload() {
  myFont = loadFont('./assets/Montserrat-Medium.ttf');
  bgImage = loadImage('./assets/backgroud.jpg');
  character = loadImage('./assets/soldier.png');
  zombie = loadImage('./assets/zombie.png');
  bossZombie = loadImage('./assets/zombie-boss.png');
  gameOver = loadImage('./assets/gameover.jpg');
  song = loadSound('./audio/GunsAndRoses-WelcomeToTheJungle.mp3');
  pistolSound = loadSound('./audio/pistolNewSound.mp3');
  shotgunSound = loadSound('./audio/shotgun.mp3')
}

const game = new Game();

function setup() {
  song.play();
  createCanvas(1000, 550);
  game.setup();
}

function gunShot() {
  pistolSound.play();
}

function shotgun() {
  shotgunSound.play();
}

function draw() {
  clear();
  game.draw();
}
 
function keyPressed() {
  if (keyCode === 38) {
    game.player.moveUp(50);
  }
  if (keyCode === 40) {
    game.player.moveDown(50);
  }
  if (keyCode === 39) {
    game.player.moveRight(50);
  }
  if (keyCode === 37) {
    game.player.moveLeft(50);
  }
  if (keyCode === 32) {
    let bullet = new Bullets(game.player.x, game.player.y)
    game.bulletsArr.push(bullet);
    if (game.numOfKills >= 10) {
      shotgun();
    } else {
      gunShot();
    }
  }
}