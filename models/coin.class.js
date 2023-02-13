class Coin extends MovableObjects{
  height = 130;
  width = 130;
  y = 350;
  currentImage = 0;
  offset = {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20
  }


  constructor() {
    super().loadImage('../img/8_coin/coin_2.png')
    this.x = 100 + Math.random() * 1000;
    this.y = 350 - Math.random() * 350;
  }


}