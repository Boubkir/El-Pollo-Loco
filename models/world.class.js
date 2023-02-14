class World {
    character = new Character();
    level = level1;
    clouds = level1.clouds;
    enemies = level1.enemies;
    backgroundObjects = level1.backgroundObjects;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    throwableObjects = []
    statusBottleBar = new StatusBottleBar();
    statusCoinBar = new StatusCoinBar();
    coin = new Coin();
    bottle = new Bottle();
    heart = new Heart();
    gameSound = new Audio('audio/game.mp3')
    collectItemSound = new Audio('audio/collect.mp3')

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


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coin);
        this.addObjectsToMap(this.level.heart);
        this.addObjectsToMap(this.level.bottle);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBottleBar);
        this.addToMap(this.statusCoinBar);
        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.enemies);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        this.gameSound.play()


        requestAnimationFrame(function () {
            self.draw();
        });
    }


    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo)
        }

        mo.draw(this.ctx)
        //mo.drawFrame(this.ctx);

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


    checkCollisions() {
        this.level.enemies.forEach((enemys) => {
            if (this.character.isColliding(enemys)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy)
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
                this.collectItemSound.play()
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
                this.collectItemSound.play()
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
                this.collectItemSound.play()
            }
        })
    }


    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.collectBottle();
            this.collectCoin();
            this.checkBottleHitTarget();
            this.checkIfJumpOnChicken();
            this.collectHeart();
        }, 100)
    }


    checkThrowObjects() {
        if (this.keyboard.SPACE && this.character.bottles > 0) {
            let bottle = new ThrowableObjects(this.character.x + 60, this.character.y + 100)
            this.throwableObjects.push(bottle)
            this.character.bottles -= 10;
            this.statusBottleBar.setPercentage(this.character.bottles)
        }
    }

    checkBottleHitTarget() {
        this.level.enemies.forEach((enemys) => {
            if (this.bottle.isColliding(enemys)) {
                let index = this.level.enemies.indexOf(enemys)
                this.level.enemies.splice(index, 1)
            }
        })
    }


    checkIfJumpOnChicken() {
        this.level.enemies.forEach((enemys) => {
            if (this.character.isColliding(enemys) && this.character.isAboveGround()) {
                enemys.killObject()
                this.character.speedY = 30;
                setTimeout(() => {
                    this.deleteObjectFromArray(this.level.enemies, enemys)
                }, 700);
            }
        })
    }

    deleteObjectFromArray(array, object) {
        let i = array.indexOf(object);
        array.splice(i, 1);
    }

    
}
