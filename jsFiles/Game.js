class Game {
  constructor() {
    this.player = new Character();
    this.background = new Background();
    this.obstacles = [];
    this.bulletsArr = [];
    this.numOfKills = 0;
    this.gameOver = gameOver;
    this.level = 1;
  }

  setup() {
    this.background.setup();
  }

  draw() {
    this.background.draw();
    this.player.draw();
    fill(255)
    textSize(20);
    textFont(myFont);
    text(`Kills: ${this.numOfKills}`, 10, 25);
    textSize(20);
    text(`Level: ${this.level}`, 10, 50);
    if (this.numOfKills === 10) {
      this.level = 2;
    }
    if (this.numOfKills === 20) {
      this.level = 3;
    }
    if (frameCount % 120 === 0) {
      this.obstacles.push(new Obstacle());
    }
    this.obstacles.forEach((obstacle, index) => {
      obstacle.draw();
      if (obstacle.x + obstacle.width <= 0) {
        this.obstacles.splice(index, 1);
      }
      if (this.collisionCheck(obstacle, this.player)) { 
        image(gameOver, 0, 0, 1000, 550);
        fill(255, 255, 255);
        textAlign(CENTER);
        textSize(30);
        textFont(myFont);
        text(`Congratulations buddy, your score is ${this.numOfKills}!`, 500, 430);
        obstacle.hide();
        noLoop();
      }
    });
    
    this.bulletsArr.forEach((bullet, i) => {
      if (this.numOfKills >= 10) {
        bullet.shotGun();
      } else {
        bullet.shoot();
      }
      if (bullet.x >= 1000) {
        this.bulletsArr.splice(i, 1);
      }
      this.obstacles.forEach((obstacle, i) => {
        if (this.bulletHitCheck(obstacle, bullet)) {
          this.obstacles.splice(i, 1);
          this.numOfKills += 1; 
        }
      })
    })
  }

  bulletHitCheck(obstacle, bullet) {
    const bulletX = bullet.x - bullet.r;
    const obstacleX = obstacle.x;
    const bulletYTop = bullet.y - bullet.r;
    const bulletYBottom = bullet.y + (bullet.r / 2);
    const obstacleTop = obstacle.y;
    const obstacleBottom = obstacle.y + (obstacle.height);
    const bulletRightSide = bullet.x + bullet.r;
    
    if (bulletRightSide > obstacleX && bulletYTop < obstacleBottom && bulletYBottom > obstacleTop) {
      return true;
    }
    return false;
  }

  collisionCheck(obstacle, player) {
    if (player.x + player.width < obstacle.x) {
      return false;
    }
    if (obstacle.x + obstacle.width < player.x) {
      return false;
    }
    if (player.y > obstacle.y + obstacle.height) {
      return false;
    }
    if (obstacle.y > player.y + player.height) {
      return false;
    }
    return true;
  }
}
