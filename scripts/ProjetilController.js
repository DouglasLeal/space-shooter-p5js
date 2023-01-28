class ProjetilController {
    static projeteis = [];
    static speed = 10;

    static disparar({ sprite, posX, posY, width = null, height = null }) {
        let novo = new ProjetilPlayer({ sprite, posX, posY, width, height });

        this.projeteis.push(novo);
    }

    static mostrar() {
        this.projeteis.forEach(projetil => {
            projetil.mostrar();

            if(projetil.posY < -projetil.height){
                this.projeteis.splice(this.projeteis.indexOf(projetil), 1);
            }
        });
    }
}