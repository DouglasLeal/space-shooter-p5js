class PlayerController{
    constructor({sprite, speed = 10, width = null, height = null}){
        this.sprite = sprite;
        this.speed = speed;
        this.width = width || sprite.width;
        this.height = height || sprite.height;

        this.startPosX = (windowWidth / 2) - (this.width / 2);
        this.startPoxY = windowHeight - this.height - 10;

        this.posX = this.startPosX;
        this.posY = this.startPoxY;

        this.posXMin = 0;
        this.posXMax = windowWidth - this.width;
        this.posYMin = 0;
        this.posYMax = windowHeight - this.height;
    }

    mostrar(){
        image(this.sprite, this.posX, this.posY, this.width, this.height);

        this.mover();
    }

    mover(){
        if(keyIsDown(LEFT_ARROW) && this.posX >= this.posXMin){
            this.posX -= this.speed;
        }

        if(keyIsDown(RIGHT_ARROW) && this.posX <= this.posXMax){
            this.posX += this.speed;
        }            

        if(keyIsDown(UP_ARROW) && this.posY >= this.posYMin){
            this.posY -= this.speed;
        }  
        
        if(keyIsDown(DOWN_ARROW) && this.posY <= this.posYMax){
            this.posY += this.speed;
        } 
    }
}