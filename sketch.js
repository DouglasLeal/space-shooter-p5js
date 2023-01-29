let bgSprite = null;
let playerSprite = null;
let projetilSprite = null;
let inimigoSprite = null;
let explosaoSprites = [];

let projetilSound = null;
let explosaoSound = null;

let bg = null;
let player = null;

function preload() {
    bgSprite = loadImage("./assets/sprites/background.png");
    playerSprite = loadImage("./assets/sprites/player.png");
    projetilSprite = loadImage("./assets/sprites/laser.png");
    inimigoSprite = loadImage("./assets/sprites/enemy.png");
    explosaoSprites = [
        loadImage("./assets/sprites/explosion/01.png"),
        loadImage("./assets/sprites/explosion/02.png"),
        loadImage("./assets/sprites/explosion/03.png"),
        loadImage("./assets/sprites/explosion/04.png"),
    ];

    projetilSound = loadSound("./assets/sounds/laser.mp3");
    explosaoSound = loadSound("./assets/sounds/explosion.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    bg = new BackgroundController({ sprite: bgSprite });
    player = new PlayerController({ sprite: playerSprite });
    ExplosaoController.sound = explosaoSound;
    ProjetilController.sound = projetilSound;
}

function draw() {
    bg.mostrar();
    ProjetilController.mostrar();
    InimigoController.gerarInimigo({sprite: inimigoSprite, explosaoSprites, width: 100, height: 100});
    ExplosaoController.mostrar();

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