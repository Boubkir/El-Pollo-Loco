class Character extends MovableObject {
    speed = 8;
    height = 300;
    width = 150;
    x = 10;
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
            if (this.world.keyboard.RIGHT){
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
            this.x += this.speed;
        }
        }, 100);
    }

    jump() {

    }
}