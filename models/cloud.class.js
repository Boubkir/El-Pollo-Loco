class Cloud extends MovableObjects {
  y = 20;
  height = 250;
  width = 500;
  speed = 0.2;


  constructor(path) {
    super().loadImage(path)
    this.x = Math.random() * 500;
    this.moveLeft(this.speed);
  }
}