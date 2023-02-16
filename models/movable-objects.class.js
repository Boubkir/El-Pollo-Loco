class MovableObjects extends DrawableObjects {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy;
    lastHit = 0;
    bottles = 0;
    coins = 0;
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }

    
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)
    }


    youWin() {
        endbossSound.volume = 0;
        gameSound.volume = 0;
        document.getElementById('you-win').style.display = "flex";
        world.clearAllIntervals()
    }

    gameOver() {
            endbossSound.volume = 0;
            gameSound.volume = 0;
            world.clearAllIntervals()
            document.getElementById('game-over').style.display = "flex";
            document.getElementById('new-game').style.display = "flex";
    }


    isAboveGround() {
        if (this instanceof ThrowableObjects) {
            return true
        } else {
            return this.y < 145
        }
    }


    moveRight() {
        this.x += this.speed;
    }


    moveLeft() {
        this.x -= this.speed;
    }


    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    jump() {
        this.speedY = 35;
    }


    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }


    hit() {
        this.energy -= 20;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    throwAwayBottle() {
        this.bottles -= 10;
        if (this.bottles < 0) {
            this.bottles = 0
        }
    }

    isHurtEndboss() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 0.5;
    }

    isDead() {
        return this.energy == 0;
    }


    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }

    
    killObject() {
        return this.energy = 0;
    }


    hitEndboss() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0
        } else {
            this.lastHit = new Date().getTime();
        }
    }
}
