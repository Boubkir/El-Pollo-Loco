class Cloud extends MovableObjects {
  y = 20;
  height = 250;
  width = 500;
  speed = 0.2;


  constructor(path) {
    super().loadImage(path)
    this.x = 400 + Math.random() * 500 * 8;
    this.moveLeft();
    this.animate();
  }

  
  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
  }
}