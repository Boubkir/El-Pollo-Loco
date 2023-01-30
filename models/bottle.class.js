class Bottle extends MovableObjects {
  height = 130;
  width = 130;
  y = 350;
  currentImage = 0;
  IMAGES = [
    '../img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
    '../img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
  ]


  constructor() {
    super().loadImage(this.IMAGES[Math.round(Math.random())])
    this.x = 100 + Math.random() * 1000;
    this.height = 100;
  }


}