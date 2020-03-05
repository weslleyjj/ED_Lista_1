import Fila from "./Fila";

class Clinica {
    constructor(tamanho){
        this.filaTotem = new Fila(tamanho);
        this.filaAtend = new Fila(tamanho);
    }

    pegarSenha(pessoa){
        this.filaTotem.enqueue(pessoa);
        if(!this.filaAtend.isFull()){
            this.filaAtend.enqueue(this.filaTotem.dequeue());
            if(this.filaTotem.isEmpty()){
                this.filaTotem.clear(); 
            }
        }
    }

    atender(){
        if(this.filaAtend.isEmpty()){
            throw new Error("Não há ninguém para atender");
        }else if(this.filaAtend.size() >= 3){
            for(let i=0;i<3;i++){
                this.filaAtend.dequeue();    
            }  
        }else if(this.filaAtend.size() < 3 && this.filaAtend.size() > 0){
            let tmp = this.filaAtend.size();
            while(tmp > 0){
                this.filaAtend.dequeue();
                tmp--;
            }
        }

        if(this.filaAtend.isEmpty()){
            this.filaAtend.clear();
        }
    }

}
export default Clinica;

