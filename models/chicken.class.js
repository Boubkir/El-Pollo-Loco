class Chicken extends MovableObjects {
    height = 60;
    width = 80;
    y = 380;
    IMAGES_WALKING = [
        '../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ]
    currentImage = 0;
    offset = {
        top: 5,
        left: 5,
        right: 10,
        bottom: 10,
    }


    constructor() {
        super().loadImage('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
        this.x = 400 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.4;
        this.loadImages(this.IMAGES_WALKING)
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING)
        }, 100);
    }


}