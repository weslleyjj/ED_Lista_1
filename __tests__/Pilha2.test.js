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
        //console.log(p);
        //for(let i=4;i>=0;i--){
        //    aux.push(p.dados[i]);
        //}
        final.push(p.pop());
        for(let i=0;i<=p.size();i++){
            aux.push(p.pop());
        }
        for(let i=0;i<=aux.size();i++){
            final.push(aux.pop());
        }
        final.push(p.pop());
        //console.log(final);
        expect(final.top()).toBe(1);
        expect(final.base()).toBe(5);
        //console.log(final);
    });