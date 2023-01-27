let bgSprite = null;

let bg = null;

function preload(){
    bgSprite = loadImage("./assets/sprites/background.png");
}

function setup(){
    createCanvas(windowWidth, windowHeight);

    bg = new BackgroundController({sprite: bgSprite});
}

function draw(){
    bg.mostrar();
}