let bgSprite = null;
let playerSprite = null;
let projetilSprite = null;

let bg = null;
let player = null;
let projeteis = [];

function preload() {
    bgSprite = loadImage("./assets/sprites/background.png");
    playerSprite = loadImage("./assets/sprites/player.png");
    projetilSprite = loadImage("./assets/sprites/laser.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    bg = new BackgroundController({ sprite: bgSprite });
    player = new PlayerController({ sprite: playerSprite });
}

function draw() {
    bg.mostrar();
    ProjetilController.mostrar();
    player.mostrar();
}

function keyPressed() {
    if (keyCode === CONTROL) {
        ProjetilController
            .disparar({
                sprite: projetilSprite,
                posX: player.posX + player.width / 2,
                posY: player.posY
            });
    }
} 