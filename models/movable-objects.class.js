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
        }, 1000 / 30)
    }


    youWin() {
        endbossSound.volume = 0;
        gameSound.volume = 0;
        document.getElementById('you-win-container').style.display = "flex";
        this.clearAllIntervals()
    }


    gameOver() {
        endbossSound.volume = 0;
        gameSound.volume = 0;
        this.clearAllIntervals()
        document.getElementById('game-over-container').style.display = "flex";
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


    isDead() {
        return this.energy == 0;
    }


    isHurt(x) {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < x;
    }


    killObject() {
        return this.energy = 0;
    }


    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) {
            window.clearInterval(i);
        }
    }
}
