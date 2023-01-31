class DrawableObjects {
  img;
  imageCache = {};
  currentImage = 0;
  x = 140;
  y = 250;
  height = 150;
  width = 100;


  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }


  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }


  drawFrame(ctx, mo) {
    if (this instanceof Character || this instanceof Chicken || this instanceof Endboss || this instanceof Coin || this instanceof Bottle || this instanceof Heart) {
      ctx.beginPath();
      ctx.lineWidth = '5';
      ctx.strokeStyle = 'blue';
      ctx.rect(this.x + mo.offset.left, this.y + mo.offset.top, this.width - mo.offset.right, this.height - mo.offset.bottom);
      ctx.stroke();
    }
  }
  //ctx.rect(this.x +25, this.y + 120, this.width - 65, this.height - 130);

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    })
  }
}