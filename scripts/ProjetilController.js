class ProjetilController {
    static projeteis = [];

    static disparar({ sprite, posX, posY, width = null, height = null }) {
        let novo = new ProjetilPlayer({ sprite, posX, posY, width, height });

        this.projeteis.push(novo);
    }

    static mostrar() {
        this.projeteis.forEach(projetil => {
            projetil.mostrar();

            if(projetil.posY < -projetil.height){
                this.destruirProjetil(projetil);
            }

            InimigoController.inimigos.forEach(inimigo => {
                if(projetil.verificarColisao(inimigo)){
                    ExplosaoController.gerarExplosao({sprites: inimigo.explosaoSprites, posX: inimigo.posX, posY: inimigo.posY});
                    InimigoController.destruirInimigo(inimigo);
                    this.destruirProjetil(projetil);
                }
            });
        });
    }

    static destruirProjetil(projetil){
        this.projeteis.splice(this.projeteis.indexOf(projetil), 1);
    }
}