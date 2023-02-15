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
    top: 0,
    bottom: 0,
    left: 20,
    right: 20
  }


  constructor() {
    super().loadImage(this.IMAGES[0])
    this.x = 400 + Math.random() * 500 * 8;
    this.height = 100;
  }


}