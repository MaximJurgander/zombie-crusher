class Obstacle {
  constructor() {
    this.x = width;
    this.y = random(0, height-80);
    this.width = 70;
    this.height = 80;
    this.zombie = zombie;
    this.bossZombie = bossZombie;
  }
  draw() {
    if (game.level === 1) {
      image(this.zombie, this.x, this.y, this.width, this.height);
      this.x -= 3;
    }
    if (game.level === 2) {
      image(this.bossZombie, this.x, this.y, this.width, this.height);
      this.x -= 9;
    } if(game.level === 3) {
      image(this.bossZombie, this.x, this.y, this.width, this.height);
      this.x -= 13;
    }
  }
}
