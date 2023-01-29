class InimigoController{
    static inimigos = [];
    static contador = 1;

    static gerarInimigo({sprite, explosaoSprites, width = null, height = null}){
        this.contar();
        
        if(this.contador <= 0){
            this.gerarTempo();

            let posY = -height || -sprite.height;
            let posX = random(0, windowWidth - width || sprite.width);
            let speed = random(1, 10);

            let inimigo = new Inimigo({sprite, posX, posY, speed, explosaoSprites, width, height});

            this.inimigos.push(inimigo);
        }

        this.mostrar();
    }

    static contar(){
        if(frameCount % 60 == 0 && this.contador > 0 ){
            this.contador--;
        }
    }

    static gerarTempo(){
        this.contador = random(0, 2)
    }

    static mostrar(){
        this.inimigos.forEach(inimigo => {
            inimigo.mostrar();
        });
    }

    static destruirInimigo(inimigo){
        this.inimigos.splice(this.inimigos.indexOf(inimigo), 1);
    }
}