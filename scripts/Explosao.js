class Explosao{
    constructor({sprites, posX, posY, width = null, height = null}){
        this.sprites = sprites;
        this.posX = posX,
        this.posY = posY,
        this.width = width || sprites[0].width;
        this.height = height || sprites[0].height;

        this.spriteAtual = 0;
        this.contador = 1;
    }

    mostrar(){
        image(this.sprites[this.spriteAtual], this.posX, this.posY, this.width, this.height);
        this.animar();
        
        if(this.spriteAtual == this.sprites.length - 1) return false;

        return true;
    }

    animar(){
        this.contar();
        if(this.contador <= 0 && this.spriteAtual < this.sprites.length - 1){
            this.spriteAtual++;
            this.contador = 1;
        }
    }

    contar(){
        if(frameCount % 8 == 0 && this.contador > 0 ){
            this.contador--;
        }
    }
}