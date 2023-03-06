class Chicken extends MovableObjects {
    height = 60;
    width = 80;
    y = 380;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ]
    IMAGES_DEATH = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ]
    currentImage = 0;
    offset = {
        top: 5,
        left: 5,
        right: 10,
        bottom: 10,
    }
    energy = 10;


    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
        this.x = 400 + Math.random() * 500 * 8;
        this.speed = 0.15 + Math.random() * 0.4;
        this.loadImages(this.IMAGES_WALKING)
        this.animate();
    }


    animate() {
        let movingChickenInverval = setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        
        setInterval(() => {
            if (!this.isDead()) {
                this.playAnimation(this.IMAGES_WALKING)
            } else {
                this.chickenDeadLogic(movingChickenInverval);
            }
        }, 100);
    }


    chickenDeadLogic(movingChickenInverval){
        this.loadImage(this.IMAGES_DEATH)
        clearInterval(movingChickenInverval)
        setTimeout(() => {
            this.x = -2000
        }, 400)
    }
}