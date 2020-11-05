class Bullets {
  constructor(x, y) {
    this.x = x+15;
    this.y = y+25;
    this.r = 10;
    this.damage = 25;
  }
  shoot() {
    this.x+= 20;
    circle(this.x, this.y, this.r);
    fill(255, 255, 0);
    stroke(128, 128, 0);
  }
  shotGun() {
    this.x += 20; 
    circle(this.x, this.y, this.r);
    circle(this.x, this.y + 40, this.r); 
    circle(this.x, this.y - 40, this.r);
    fill(255, 255, 0);
    stroke(128, 128, 0);
  }
}