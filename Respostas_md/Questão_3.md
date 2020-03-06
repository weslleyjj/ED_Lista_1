#Pilha implementada por duas filas
```
import Fila from "./Fila";
//PILHA A PARTIR DE DUAS FILAS
class StackQueue {
    constructor(size = 5){
        this.fila1 = new Fila(size);
        this.fila2 = new Fila(size);
        
    }

    push(dado){
        if(this.fila1.isEmpty()){
            this.fila2.enqueue(dado);
        }else{
            this.fila1.enqueue(dado);
        }
    }

    pop(){
        if(this.fila2.isEmpty()){
            let size = this.fila1.size();
            let contador = 0;
            while(contador<size-1){
                this.fila2.enqueue(this.fila1.dequeue());
                contador++;
            }
            return this.fila1.dequeue();
        }else{
            let size = this.fila2.size();
            let contador = 0;
            while(contador<size-1){
                this.fila1.enqueue(this.fila2.dequeue());
                contador++;
            } 
            return this.fila2.dequeue();
        }
    }
    top(){
        if(this.fila1.isEmpty()){
            return this.fila2.ultimo();
        }else{
            return this.fila1.ultimo();
        }
    }
}

export default StackQueue;
```
##Teste
```
import StackQueue from "../src/StackQueue";

    let s = new StackQueue();

    test("Adicionou no topo?", () => {
        s.push(1)
        s.push(2)
        s.push(3)
        s.push(4)
        expect(s.top()).toBe(4);
    });

    test("Removeu o topo da pilha?", () => {
        expect(s.pop()).toBe(4);
    });
```