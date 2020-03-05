import Pilha from "./Pilha";
//FILA A PARTIR DE DUAS PILHAS
class QueueStack {
    constructor(size){
        this.pilha1 = new Pilha(size);
        this.pilha2 = new Pilha(size);
    }
    enqueue(dado){
        if(this.pilha1.isFull()){
            throw new Error("Fila cheia!") 
        }else{
            this.pilha1.push(dado);
        }                
    }
    dequeue(){

        //console.log(this.pilha1.size());
        let cont = this.pilha1.size()
        for(let i=0;i<cont;i++){
            this.pilha2.push(this.pilha1.pop());
        }
        //console.log(this.pilha2);
        let res = this.pilha2.pop();
        if(this.pilha2.isEmpty){
            return res;
        }
        for(let i=0;i<this.pilha2.size();i++){
            this.pilha1.push(this.pilha2.pop());
        }
        return res;
    }

    front(){
        let cont = this.pilha1.size();
        for(let i=0;i<cont;i++){
            this.pilha2.push(this.pilha1.pop());
        }
        let inicio = this.pilha2.pop();
        this.pilha2.push(inicio);
        let cont2 = this.pilha2.size();
        for(let i=0;i<cont;i++){
            this.pilha1.push(this.pilha2.pop());
        }
        return inicio;
    }

    end(){
        return this.pilha1.top();        
    }

}

export default QueueStack;