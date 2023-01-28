let bgSprite = null;
let playerSprite = null;
let projetilSprite = null;
let inimigoSprite = null;

let bg = null;
let player = null;
let projeteis = [];

function preload() {
    bgSprite = loadImage("./assets/sprites/background.png");
    playerSprite = loadImage("./assets/sprites/player.png");
    projetilSprite = loadImage("./assets/sprites/laser.png");
    inimigoSprite = loadImage("./assets/sprites/enemy.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    bg = new BackgroundController({ sprite: bgSprite });
    player = new PlayerController({ sprite: playerSprite });
}

function draw() {
    bg.mostrar();
    ProjetilController.mostrar();
    InimigoController.gerarInimigo({sprite: inimigoSprite, width: 100, height: 100});
    player.mostrar();
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