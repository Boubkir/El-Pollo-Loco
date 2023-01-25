class Endboss extends MovableObjects {
  currentImage = 0;
  height = 300;
  width = 270;
  y = 160;

  IMAGES_WALKING = [
    '../img/4_enemie_boss_chicken/2_alert/G5.png',
    '../img/4_enemie_boss_chicken/2_alert/G6.png',
    '../img/4_enemie_boss_chicken/2_alert/G7.png',
    '../img/4_enemie_boss_chicken/2_alert/G8.png',
    '../img/4_enemie_boss_chicken/2_alert/G9.png',
    '../img/4_enemie_boss_chicken/2_alert/G10.png',
    '../img/4_enemie_boss_chicken/2_alert/G11.png',
    '../img/4_enemie_boss_chicken/2_alert/G12.png'
  ]


  constructor() {
    super().loadImage('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
    this.x = 1400;
    this.speed = 0;
    this.loadImages(this.IMAGES_WALKING)
    this.animate();
  }


  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING)
    }, 200);
  }

}