class Character {
  constructor(x, y) {
    this.x = 50;
    this.y = 230;
    this.width = 70;
    this.height = 80;
  }

  moveUp(steps) {
    if (this.y < height - 100) {
      this.y += steps;
    }
  }
  //Goes outside?
  moveDown(steps) {
    if (this.y >= this.height - 50) {
      this.y -= steps;  
    } 
  }
  moveRight(steps) {
    if (width > width - this.x) {
      this.x -= steps;  
    }
  }
  moveLeft(steps) {
    if (this.x < width - this.width) {
      this.x += steps; 
    }
  }
  draw() {
    image(character, this.x, this.y, this.width, this.height);
  }
}