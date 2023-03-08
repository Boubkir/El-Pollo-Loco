let canvas;
let world;
let keyboard = new Keyboard;
let muted = false;
let fullScreen = false;
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
    gameSound.currentTime = 0.0;
    hideStartScreen()
    startLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}


function hideStartScreen() {
    document.getElementById('start-container').style.display = "none";
    document.getElementById('you-win-container').style.display = "none";
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
    if (!muted) {
        document.getElementById('audio-button').src = 'img/icons/muted.png';
    } else {
        document.getElementById('audio-button').src = 'img/icons/audio.png';
    }
}


function restartGame() {
    document.getElementById('game-over-container').style.display = "none";
    document.getElementById('you-win-container').style.display = "none";
    document.getElementById('start-container').style.display = "flex";
}

function toggleFullScreen() {
    if (!fullScreen) {
        let elem = document.getElementById('canvas-div');
        giveContainerFullSize();
        openFullscreen(elem);
        fullScreen = true;
    } else {
        closeFullscreen();
        fullScreen = false;
    }
}

function giveContainerFullSize(){
    document.getElementById('canvas').classList.add('full-screen');
    document.getElementById('canvas').classList.add('full-screen');
    document.getElementById('start-picture').style.maxWidth = '100vw';
    document.getElementById('start-picture').style.maxHeight = '100vh';
    document.getElementById('game-over-picture').style.maxWidth = '100vw';
    document.getElementById('game-over-picture').style.maxHeight = '100vh';
    document.getElementById('win-picture').style.maxWidth = '100vw';
    document.getElementById('win-picture').style.maxHeight = '100vh';
}


function giveContainerDefaultSize(){
    document.getElementById('canvas').classList.remove('full-screen');
    document.getElementById('canvas').classList.remove('full-screen');
    document.getElementById('start-picture').style.maxWidth = '720px';
    document.getElementById('start-picture').style.maxHeight = '480px';
    document.getElementById('game-over-picture').style.maxWidth = '720px';
    document.getElementById('game-over-picture').style.maxHeight = '480px';
    document.getElementById('win-picture').style.maxWidth = '480px';
    document.getElementById('win-picture').style.maxHeight = '720px';
}

function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}


function closeFullscreen() {
    giveContainerDefaultSize();
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

