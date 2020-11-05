class Background {
  constructor() {
    //  this.height = height;
    //  this.width = width;
    this.x = 0;
  }
  setup() {
    this.height = height;
    this.width = width;
  }

  draw() {
    // we draw the first image that appears in the game at launch
    image(bgImage, this.x, 0, this.width, this.height);
    // we draw another image to the right of the previous one, to create the loop effect whenever it moves left
    image(bgImage, this.x + this.width, 0, this.width, this.height);
    if (this.x <= -this.width) {
      // reset the background back to its starting point, to give the illusion of never ending loop
      this.x = 0;
    }
  }
}
