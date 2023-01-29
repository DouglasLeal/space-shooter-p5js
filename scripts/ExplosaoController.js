class ExplosaoController{
    static explosoes = [];
    static sound = null;

    static gerarExplosao({sprites, posX, posY, width = null, height = null}){
        let novaExplosao = new Explosao({sprites, posX, posY, width, height});
        this.explosoes.push(novaExplosao);
        this.sound.play();
    }

    static mostrar(){
        this.explosoes.forEach(explosao => {
            if(!explosao.mostrar()){
                this.apagarExplosao(explosao);
            }
        });
    }

    static apagarExplosao(explosao){
        this.explosoes.splice(this.explosoes.indexOf(explosao), 1);
    }
}