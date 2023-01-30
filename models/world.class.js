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


        requestAnimationFrame(function () {
            self.draw();
        });
    }


    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo)
        }

        mo.draw(this.ctx)
        // mo.drawFrame(this.ctx);

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


    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200)
    }


    checkThrowObjects() {
        if (this.keyboard.SPACE && this.character.bottles > 0) {
            let bottle = new ThrowableObjects(this.character.x + 60, this.character.y + 100)
            this.throwableObjects.push(bottle)
            this.character.bottles -= 10;
            this.statusBottleBar.setPercentage(this.character.bottles)
        }
    }
}
