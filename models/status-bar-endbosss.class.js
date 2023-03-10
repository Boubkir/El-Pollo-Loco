class StatusBarEndboss extends DrawableObjects {
  x = 470;
  y = 70;
  width = 200;
  height = 60;
  IMAGES = [
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png'
  ]
  percentage = 100;


  constructor() {
    super().loadImage('img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png')
    this.loadImages(this.IMAGES)
    this.setPercentage(100);
  }


  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }
}