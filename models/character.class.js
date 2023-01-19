class Character extends MovableObject {
    speed = 10;
    height = 300;
    width = 150;
    x = 100;
    y = 150;
    IMAGES_WALKING = [
        '../img/2_character_pepe/2_walk/W-21.png',
        '../img/2_character_pepe/2_walk/W-22.png',
        '../img/2_character_pepe/2_walk/W-23.png',
        '../img/2_character_pepe/2_walk/W-24.png',
        '../img/2_character_pepe/2_walk/W-25.png',
        '../img/2_character_pepe/2_walk/W-26.png'
    ]
    currentImage = 0;
    world;

    constructor() {
        super().loadImage('../img/2_character_pepe/1_idle/idle/I-1.png')
        this.loadImages(this.IMAGES_WALKING)
        this.animate()
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.otherDirection = false;
                let i = this.currentImage % this.IMAGES_WALKING.length;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
                this.x += this.speed;
            }
            if (this.world.keyboard.LEFT) {
                this.otherDirection = true;
                let i = this.currentImage % this.IMAGES_WALKING.length;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
                this.x -= this.speed;
            }
            this.world.camera_x = -this.x
        }, 1000/15);
    }

    jump() {

    }
}