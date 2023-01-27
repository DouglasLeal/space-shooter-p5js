let bgSprite = null;
let playerSprite = null;

let bg = null;
let player = null;

function preload(){
    bgSprite = loadImage("./assets/sprites/background.png");
    playerSprite = loadImage("./assets/sprites/player.png");
}

function setup(){
    createCanvas(windowWidth, windowHeight);

    bg = new BackgroundController({sprite: bgSprite});
    player = new PlayerController({sprite: playerSprite});
}

function draw(){
    bg.mostrar();
    player.mostrar();
}