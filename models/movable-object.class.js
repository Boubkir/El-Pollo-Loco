class MovableObject {
    x = 140;
    y = 250;
    img;
    height = 150;
    width = 100;
    imageCache = {};


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    loadImages(arr) {
        arr.forEach((path) => {
            this.img = new Image();
            this.img.src = path;
            this.imageCache[path] = path;
        })

    }


    moveRight() {

    }


    moveLeft() {

    }
}