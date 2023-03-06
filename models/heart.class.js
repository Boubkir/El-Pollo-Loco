class Heart extends MovableObjects {
  height = 130;
  width = 130;
  y = 350;
  currentImage = 0;
  offset = {
    top: 45,
    left: 25,
    right: 55,
    bottom: 65,
  }


  constructor() {
    super().loadImage('img/7_statusbars/3_icons/icon_health.png')
    this.x = 400 + Math.random() * 500 * 8;
    this.y = 350 - Math.random() * 350;
  }


}