let canvas;
let world;
let keyboard = new Keyboard;
let muted = false;
let walkingSound = new Audio('audio/walking.mp3');
let jumpingSound = new Audio('audio/jump.mp3');
let gameSound = new Audio('audio/game.mp3');
let collectItemSound = new Audio('audio/collect.mp3');
let throwBottleSound = new Audio('audio/throw.mp3');
let bottleSplashSound = new Audio('audio/bottle-splash.mp3');
let deadChickenSound = new Audio('audio/chicken.mp3');
let charakterHurtSound = new Audio('audio/hurt.mp3')
let endbossSound = new Audio('audio/endboss.mp3')


function startGame() {
    gameSound.volume = 0.5;
    hideStartScreen()
    startLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}


function hideStartScreen(){
    document.getElementById('play-button').style.display = "none";
    document.getElementById('start-picture').style.display = "none";
    document.getElementById('game-info').style.display = "none";
    document.getElementById('you-win').style.display = "none";
}


function mutePage() {
    walkingSound.muted = !walkingSound.muted
    jumpingSound.muted = !jumpingSound.muted
    bottleSplashSound.muted = !bottleSplashSound.muted
    gameSound.muted = !gameSound.muted
    collectItemSound.muted = !collectItemSound.muted
    throwBottleSound.muted = !throwBottleSound.muted
    deadChickenSound.muted = !deadChickenSound.muted
    charakterHurtSound.muted = !charakterHurtSound.muted
    endbossSound.muted = !endbossSound.muted
    muted = !muted;
    toggleSound();
}


function toggleSound() {
    if (muted) {
        document.getElementById('audio-button').src = 'img/icons/audio.png';
    } else {
        document.getElementById('audio-button').src = 'img/icons/muted.png';
    }
}


function restartGame() {
    document.getElementById('game-over').style.display = "none";
    document.getElementById('new-game').style.display = "none";
    document.getElementById('game-info').style.display = "flex";
    document.getElementById('play-button').style.display = "flex";
    document.getElementById('start-picture').style.display = "flex";
}

