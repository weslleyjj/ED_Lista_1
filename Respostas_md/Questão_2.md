#Trocar base pelo topo e vice-versa
###Teste
```
import Pilha from "../src/Pilha";

    let p, aux;
    p = new Pilha(5);
    aux = new Pilha(5);

    test("Troca base da pilha", () => {
        let final = new Pilha(5);
        p.push(1)
        p.push(2)
        p.push(3)
        p.push(4)
        p.push(5)        
        final.push(p.pop());
        for(let i=0;i<=p.size();i++){
            aux.push(p.pop());
        }
        for(let i=0;i<=aux.size();i++){
            final.push(aux.pop());
        }
        final.push(p.pop());
        
        expect(final.top()).toBe(1);
        expect(final.base()).toBe(5);
        
    });
```