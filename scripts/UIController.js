class UIController{
    static pontos = 0;
    
    static pontuar(){
        this.pontos++;
    }

    static mostrarPontos(){
        text(`${this.pontos}`, windowWidth/2 , 85);
    }
}