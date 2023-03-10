class Endboss extends MovableObjects {
  currentImage = 0;
  x = 5950;
  y = 105;
  width = 300;
  height = 350;
  firstContact = false;
  speed = 20;
  speedAfterHit = 50;
  energy = 100;
  IMAGES_WALKING = [
    'img/4_enemie_boss_chicken/1_walk/G1.png',
    'img/4_enemie_boss_chicken/1_walk/G2.png',
    'img/4_enemie_boss_chicken/1_walk/G3.png',
    'img/4_enemie_boss_chicken/1_walk/G4.png',
  ];
  IMAGES_ALERT = [
    'img/4_enemie_boss_chicken/2_alert/G5.png',
    'img/4_enemie_boss_chicken/2_alert/G6.png',
    'img/4_enemie_boss_chicken/2_alert/G7.png',
    'img/4_enemie_boss_chicken/2_alert/G8.png',
    'img/4_enemie_boss_chicken/2_alert/G9.png',
    'img/4_enemie_boss_chicken/2_alert/G10.png',
    'img/4_enemie_boss_chicken/2_alert/G11.png',
    'img/4_enemie_boss_chicken/2_alert/G12.png',
  ];
  IMAGES_ATTACK = [
    'img/4_enemie_boss_chicken/3_attack/G13.png',
    'img/4_enemie_boss_chicken/3_attack/G14.png',
    'img/4_enemie_boss_chicken/3_attack/G15.png',
    'img/4_enemie_boss_chicken/3_attack/G16.png',
    'img/4_enemie_boss_chicken/3_attack/G17.png',
    'img/4_enemie_boss_chicken/3_attack/G18.png',
    'img/4_enemie_boss_chicken/3_attack/G19.png',
    'img/4_enemie_boss_chicken/3_attack/G20.png',
  ];
  IMAGES_HURT = [
    'img/4_enemie_boss_chicken/4_hurt/G21.png',
    'img/4_enemie_boss_chicken/4_hurt/G22.png',
    'img/4_enemie_boss_chicken/4_hurt/G23.png',
  ];
  IMAGES_DEAD = [
    'img/4_enemie_boss_chicken/5_dead/G24.png',
    'img/4_enemie_boss_chicken/5_dead/G25.png',
    'img/4_enemie_boss_chicken/5_dead/G26.png',
  ];
  offset = {
    top: 100,
    bottom: 50,
    left: 40,
    right: 40,
  }


  constructor() {
    super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
    this.loadImages(this.IMAGES_ALERT)
    this.loadImages(this.IMAGES_WALKING)
    this.loadImages(this.IMAGES_ATTACK)
    this.loadImages(this.IMAGES_HURT)
    this.loadImages(this.IMAGES_DEAD)
    this.animate();
  }


  reached() {
    return world.character.x > 3000 && !this.firstContact;
  }


  fight() {
    return world.character.x > world.level.endboss[0].x - 1000;
  }


  rush() {
    let increaseSpeed = world.level.endboss[0].x -= this.speedAfterHit;
    return increaseSpeed;
  }


  animate() {
    let i = 0;
    setInterval(() => {
      this.logicEndboss(i);
      i++;
      if (this.reached()) {
        i = 0;
        this.firstContact = true;
        gameSound.volume = 0;
        endbossSound.volume = 0.5;
        endbossSound.play();
      }
    }, 120);
  }


  logicEndboss(i) {
    if (i < 15) {
      this.playAnimation(this.IMAGES_ALERT);
    } else if (!this.isDead() && !this.isHurt(0.5) && this.fight()) {
      this.playAnimation(this.IMAGES_WALKING);
      this.moveLeft()
    } else if (this.isHurt(0.5)) {
      this.playAnimation(this.IMAGES_ATTACK);
      this.rush();
    } else if (this.x <= 100) {
      this.gameOver();
    } else if (this.isDead()) {
      this.playAnimation(this.IMAGES_DEAD);
      setTimeout(() => {
          this.youWin()
      }, 500);
  }
}
}