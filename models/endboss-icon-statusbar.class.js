class EndbossIcon extends DrawableObjects {
  x = 450;
  y = 75;
  width = 70;
  height = 70;
  IMG = [
    'img/7_statusbars/3_icons/icon_health_endboss.png'];


  constructor() {
    super().loadImage(this.IMG);
  }
}