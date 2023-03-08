class ThrowableObjects extends MovableObjects {
  IMAGES_ROTATE = [
    'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
    'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
  ]
  IMAGES_SPLASH = [
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
    'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
  ];


  constructor(x, y, otherDirection) {
    super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png')
    this.x = x;
    this.y = y;
    this.height = 100;
    this.otherDirection = otherDirection
    this.throw();
    this.loadImages(this.IMAGES_ROTATE)
    this.loadImages(this.IMAGES_SPLASH)
    this.animate();
  }


  throw() {
    this.speedY = 30;
    this.applyGravity();
    setInterval(() => {
      if (this.otherDirection) {
        this.x -= 10;
      } else {
        this.otherDirection;
        this.x += 10;
      }
    }, 25)
  }


  animate() {
    let throwAnimation = setInterval(() => {
      if (world.level.endboss[0].isHurt()) {
        bottleSplashSound.play()
        this.playAnimation(this.IMAGES_SPLASH)
        clearInterval(throwAnimation)
      } else {
        this.playAnimation(this.IMAGES_ROTATE)
      }
    }, 50);
  }
}