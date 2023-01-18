class Chicken extends MovableObject {
    height = 60;
    width = 80;
    y = 380;
    IMAGES_WALKING = [
        '../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ]
    currentImage = 0;


    constructor() {
        super().loadImage('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.4;
        this.loadImages(this.IMAGES_WALKING)
        this.animate();
    }


    animate() {
        this.moveLeft(this.speed);
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }


}