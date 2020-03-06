#Fila implementada por duas pilhas
```
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

        
        let cont = this.pilha1.size()
        for(let i=0;i<cont;i++){
            this.pilha2.push(this.pilha1.pop());
        }
        
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
```
##Teste
```
import QueueStack from "../src/QueueStack";

    let f;
    beforeEach(() => {
        f = new QueueStack(10);
    });

    test("Testando enqueue e dequeue", () => {
        
        f.enqueue(1);
        f.enqueue(2);
        f.enqueue(3);
        f.enqueue(4);
        f.enqueue(5);
        f.enqueue(6);
        //console.log(f);
        expect(f.dequeue()).toBe(1);
        expect(f.dequeue()).toBe(2);
        expect(f.dequeue()).toBe(3);
        expect(f.dequeue()).toBe(4);
        expect(f.dequeue()).toBe(5);
        expect(f.dequeue()).toBe(6);
    });

    test("front e end", () => {
        f.enqueue(1);
        f.enqueue(2);
        f.enqueue(3);
        f.enqueue(4);
        f.enqueue(5);
        //console.log(f);
        expect(f.front()).toBe(1);
        expect(f.end()).toBe(5);
        f.dequeue();
        f.dequeue();
        expect(f.front()).toBe(3);
        f.enqueue(7);
        expect(f.end()).toBe(7);
    });
```