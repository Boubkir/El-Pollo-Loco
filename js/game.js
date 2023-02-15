let canvas;
let world;
let keyboard = new Keyboard;
let muted = false;
let walkingSound = new Audio('audio/walking.mp3');
let jumpingSound = new Audio('audio/jump.mp3');
let gameSound = new Audio('audio/game.mp3');
let collectItemSound = new Audio('audio/collect.mp3');
let throwBottleSound = new Audio ('audio/throw.mp3');
let bottleSplashSound = new Audio('audio/bottle-splash.mp3');
let deadChickenSound = new Audio('audio/chicken.mp3');
let charakterHurtSound = new Audio('audio/hurt.mp3')


function init() {

}


window.addEventListener('keydown', (e) => {
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    };
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    };
    if (e.keyCode == 38) {
        keyboard.UP = true;
    };
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    };
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
        console.log(keyboard.SPACE)
    };

});


window.addEventListener('keyup', (e) => {
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    };
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    };
    if (e.keyCode == 38) {
        keyboard.UP = false;
    };
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    };
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
        console.log(keyboard.SPACE)
    };
});

function startGame() {
    document.getElementById('play-button').style.display = "none";
    document.getElementById('start-picture').style.display = "none";
    document.getElementById('game-info').style.display = "none";
    startLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function mutePage() {
    walkingSound.muted = !walkingSound.muted
    jumpingSound.muted = !jumpingSound.muted
    bottleSplashSound.muted = !bottleSplashSound.muted
    gameSound.muted = !gameSound.muted
    collectItemSound.muted = !collectItemSound.muted
    throwBottleSound.muted = !throwBottleSound.muted
    deadChickenSound.muted =!deadChickenSound.muted
    charakterHurtSound.muted = !charakterHurtSound.muted
    muted = !muted;
    toggleSound();
}

function toggleSound(){
    if(muted){
        document.getElementById('audio-button').src = 'img/icons/audio.png';
    }else{
        document.getElementById('audio-button').src = 'img/icons/muted.png';
    }
}


function restartGame(){
    document.getElementById('game-over').style.display = "none";
    document.getElementById('new-game').style.display = "none";
    document.getElementById('game-info').style.display = "flex";
    document.getElementById('play-button').style.display = "flex";
    document.getElementById('start-picture').style.display = "flex";
}

