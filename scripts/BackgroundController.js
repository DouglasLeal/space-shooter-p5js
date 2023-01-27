class BackgroundController{
    constructor({sprite, speed = 3}){
        this.sprite = sprite;
        this.speed = speed;

        this.posX = 0;
        this.posY1 = 0;
        this.posY2 = -windowHeight;
    }

    mostrar(){
        image(this.sprite, this.posX, this.posY1, windowWidth, windowHeight);
        image(this.sprite, this.posX, this.posY2, windowWidth, windowHeight);

        this.mover();
    }

    mover(){
        this.posY1 += 3;
        this.posY2 += 3;

        if(this.posY1 >= windowHeight) this.posY1 = -windowHeight;
        if(this.posY2 >= windowHeight) this.posY2 = -windowHeight;
    }
}