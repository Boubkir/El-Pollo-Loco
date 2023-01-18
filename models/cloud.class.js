class Cloud extends MovableObject {
  y = 20;
  height = 250;
  width = 500;

  constructor(path) {
    super().loadImage(path)
    this.x = Math.random() * 500;
    this.animate();
  }


  animate() {
    setInterval(() => {
      this.x -= 0.2;
    }, 1000 / 60);
  }


}