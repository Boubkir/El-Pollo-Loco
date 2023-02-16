class World {
    character = new Character();
    level = level1;
    clouds = level1.clouds;
    enemies = level1.enemies;
    endboss = level1.endboss;
    backgroundObjects = level1.backgroundObjects;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    throwableObjects = []
    statusBar = new StatusBar();
    statusBottleBar = new StatusBottleBar();
    statusCoinBar = new StatusCoinBar();
    statusEndbossBar = new StatusBarEndboss();
    endbossIcon = new EndbossIcon()
    coin = new Coin();
    bottle = new Bottle();
    heart = new Heart();
    throw = true;
    collect = true;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }


    setWorld() {
        this.character.world = this;
    }


    addBackground() {
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
    }


    addCollectables() {
        this.addObjectsToMap(this.level.coin);
        this.addObjectsToMap(this.level.heart);
        this.addObjectsToMap(this.level.bottle);
    }


    addStatusBars() {
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBottleBar);
        this.addToMap(this.statusCoinBar);
        this.addToMap(this.statusEndbossBar);
        this.addToMap(this.endbossIcon);
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addBackground();
        this.addCollectables();
        this.ctx.translate(-this.camera_x, 0);
        this.addStatusBars();
        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endboss);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        gameSound.play()
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    clearAllIntervals() {
        for (let i = 1; i < 999; i++) {
            window.clearInterval(i);
        }
    }


    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo)
        }
        mo.draw(this.ctx)
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0)
        this.ctx.scale(-1, 1)
        mo.x = mo.x * -1;
    }


    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }


    checkCollisions(array) {
        array.forEach((enemie) => {
            if (this.character.isColliding(enemie) && !this.character.isAboveGround()) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy)
            }
        })
    }


    collectItem(array, characterItem, statusBar) {
        array.forEach((item) => {
            if (this.character.isColliding(item) && characterItem <= 100) {
                characterItem += 10;
                statusBar.setPercentage(characterItem)
                let index = array.indexOf(item)
                array.splice(index, 1)
                collectItemSound.play()
            }
        })
    }


    collectBottle() {
        this.level.bottle.forEach((bottles) => {
            if (this.character.isColliding(bottles) && this.character.bottles <= 100) {
                this.character.bottles += 10;
                this.statusBottleBar.setPercentage(this.character.bottles)
                let index = this.level.bottle.indexOf(bottles)
                this.level.bottle.splice(index, 1)
                collectItemSound.play()
            }
        })
    }




    collectCoin() {
        this.level.coin.forEach((coins) => {
            if (this.character.isColliding(coins) && this.character.coins <= 100) {
                this.character.coins += 10;
                this.statusCoinBar.setPercentage(this.character.coins)
                let index = this.level.coin.indexOf(coins)
                this.level.coin.splice(index, 1)
                collectItemSound.play()
            }
        })
    }


    collectHeart() {
        this.level.heart.forEach((hearts) => {
            if (this.character.isColliding(hearts) && this.character.energy <= 100) {
                this.character.energy += 10;
                this.statusBar.setPercentage(this.character.energy)
                let index = this.level.heart.indexOf(hearts)
                this.level.heart.splice(index, 1)
                collectItemSound.play()
            }
        })
    }


    checkCollectItems() {
        this.collectBottle();
        this.collectCoin();
        this.collectHeart();
    }


    run() {
        setInterval(() => {
            this.checkThrowObjects();
            this.checkCollectItems();
            this.checkBottleHitChicken();
            this.checkIfJumpOnChicken();
        }, 1000 / 60)
        setInterval(() => {
            this.checkCollisions(this.level.endboss);
            this.checkCollisions(this.level.enemies);
            this.checkBottleHitEndboss();
        }, 300)
    }


    checkThrowObjects() {
        if (this.keyboard.SPACE && this.character.bottles > 0 && this.throw) {
            let bottle = new ThrowableObjects(this.character.x + 60, this.character.y + 100, this.character.otherDirection)
            this.throwableObjects.push(bottle)
            this.character.bottles -= 10;
            throwBottleSound.play()
            this.throw = false;
            this.statusBottleBar.setPercentage(this.character.bottles)
            setTimeout(() => {
                this.throw = true;
            }, 250)
        }
    }


    checkBottleHitChicken() {
        this.throwableObjects.forEach((bottle) => {
            this.level.enemies.forEach((enemy) => {
                if (bottle.isColliding(enemy)) {
                    bottleSplashSound.play();
                    deadChickenSound.play();
                    enemy.killObject()
                }
            })
        })
    }


    checkIfJumpOnChicken() {
        this.level.enemies.forEach((enemys) => {
            if (this.character.isColliding(enemys) && this.character.isAboveGround()) {
                enemys.killObject()
                this.character.speedY = 30;
                deadChickenSound.play();
            }
        })
    }


    checkBottleHitEndboss() {
        this.throwableObjects.forEach((bottle) => {
            if (bottle.isColliding(world.level.endboss[0])) {
                world.level.endboss[0].hit();
                // this.playSoundEnbossHit();
                this.statusEndbossBar.setPercentage(world.level.endboss[0].energy);
                setTimeout(() => {
                    this.deleteBottleFromArray(bottle);
                }, 180);
            }
        });
    }


    deleteObjectFromArray(array, object) {
        let i = array.indexOf(object);
        array.splice(i, 1);
    }


    deleteBottleFromArray(bottle) {
        let i = this.throwableObjects.indexOf(bottle);
        this.throwableObjects.splice(i, 1);
    }
}
