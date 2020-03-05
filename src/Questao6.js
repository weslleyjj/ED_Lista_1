import Fila from "./Fila";

class Deque {
    constructor(tamanho){        
        this.deque = new Fila(tamanho);
        this.aux = new Fila(tamanho);
    }

    inserirInicio(dado){
        //console.log(this.deque);
        if(this.deque.isEmpty()){
            this.deque.enqueue(dado);
        }else{
            while(!this.deque.isEmpty()){
                this.aux.enqueue(this.deque.dequeue());
            }
            this.deque.clear();
            this.deque.enqueue(dado);
            while(!this.aux.isEmpty()){
                this.deque.enqueue(this.aux.dequeue());
            }
            this.aux.clear();
        }
    }
    inserirFim(dado){
        this.deque.enqueue(dado);
    }
    removerInicio(){
        return this.deque.dequeue();
    }
    removerFim(){
        let temp;
        temp = this.deque.size();
        for(let i=0;i<temp-1;i++){
            this.aux.enqueue(this.deque.dequeue());
        }
        let res = this.deque.dequeue();
        this.deque.clear();
        while(!this.aux.isEmpty()){
            this.deque.enqueue(this.aux.dequeue());
        }
        this.aux.clear();
        return res;
    }

}
export default Deque;