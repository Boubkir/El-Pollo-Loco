class Bottle extends MovableObjects {
  height = 130;
  width = 130;
  y = 350;
  currentImage = 0;
  IMAGES = [
    '../img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
    '../img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
  ]
  offset = {
    top: 20,
    left: 60,
    right: 85,
    bottom: 30,
  }


  constructor() {
    super().loadImage(this.IMAGES[0])
    this.x = 100 + Math.random() * 1000;
    this.height = 100;
  }


}