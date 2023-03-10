class Character extends MovableObjects {
    speed = 10;
    height = 300;
    width = 150;
    x = 0;
    y = 150;
    offset = {
        top: 70,
        bottom: 10,
        left: 35,
        right: 35,
    }
    bottles = 0;
    energy = 50;
    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ]
    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ]
    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ]
    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ]
    currentImage = 0;
    world;


    constructor() {
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png')
        this.loadImages(this.IMAGES_DEAD)
        this.loadImages(this.IMAGES_HURT)
        this.loadImages(this.IMAGES_WALKING)
        this.loadImages(this.IMAGES_JUMPING)
        this.animate()
        this.applyGravity();
    }


    animate() {
        setInterval(() => {
            this.charakterMovingLogic();
        }, 1000 / 60)


        setInterval(() => {
            this.characterPictureLogic();
        }, 200);
    }


    charakterMovingLogic() {
        if (this.world.keyboard.RIGHT && this.x < 710 * 8) {
            this.charakterMovesRight()
        }
        if (this.world.keyboard.LEFT && this.x > -520) {
            this.charakterMovesleft()
        }
        if (this.world.keyboard.UP && !this.isAboveGround()) {
            this.charakterJump()
        }
        this.world.camera_x = -this.x + 100;
    }


    characterPictureLogic() {
        if (this.isHurt(1)) {
            this.charakterHurt();
        } else if (this.isDead()) {
            this.characterDies();
        } else if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMPING)
        } else {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALKING)
            }
        }
    }


    charakterHurt() {
        charakterHurtSound.volume = 0.5;
        charakterHurtSound.play()
        this.playAnimation(this.IMAGES_HURT)
    }


    characterDies() {
        this.playAnimation(this.IMAGES_DEAD)
        gameOverSound.volume = 1;
        gameOverSound.play()
        setTimeout(() => {
            this.gameOver()
        }, 1600)
    }


    charakterMovesRight() {
        this.moveRight();
        this.otherDirection = false;
        walkingSound.play()
    }


    charakterMovesleft() {
        this.moveLeft();
        this.otherDirection = true;
        walkingSound.play()
    }


    charakterJump() {
        this.jump();
        jumpingSound.play()
    }
}