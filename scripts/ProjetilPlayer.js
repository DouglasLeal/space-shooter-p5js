class ProjetilPlayer {
    constructor({ sprite, posX, posY, speed = 10, width = null, height = null }) {
        this.sprite = sprite;
        this.speed = speed;
        this.width = width || sprite.width;
        this.height = height || sprite.height;
        this.posX = posX - (this.width / 2);
        this.posY = posY;
    }

    mostrar() {
        image(this.sprite, this.posX, this.posY, this.width, this.height);

        this.mover();
    }

    mover() {
        this.posY -= this.speed;
    }
}