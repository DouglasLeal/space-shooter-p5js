class Inimigo{
    constructor({sprite, posX, posY, speed, explosaoSprites, width = null, height = null}){
        this.sprite = sprite;
        this.posX = posX;
        this.posY = posY;
        this.speed = speed;
        this.width = width || this.sprite.width;
        this.height = height || this.sprite.height;
        this.explosaoSprites = explosaoSprites;
    }

    

    mostrar(){
        image(this.sprite, this.posX, this.posY, this.width, this.height);

        this.mover();
    }

    mover(){
        this.posY += this.speed;
    }
}