#Teste de sequências
```
import Pilha from "./Pilha";

class Questao8{
    constructor(string){
        this.texto = string;
        this.tamanho = string.length;
        this.p = new Pilha(this.tamanho);
    }

    formacao(){    

        for(let i=0;i<this.tamanho;i++){
            if(this.texto.charAt(i) === '(' || this.texto.charAt(i) === '['){
                this.p.push(this.texto.charAt(i));
            }else if(this.texto.charAt(i) === ')' || this.texto.charAt(i) === ']'){
                if(this.p.size()<=0){
                    return false;
                    //throw new Error("Inválida e mal formada");
                }
                this.p.pop();
            }
        }
        if(this.p.size()===0){
            console.log("String Válida"); 
            return true;
        }
        else{
            return false;
        }
    }

}

export default Questao8;
```

##Teste
```
import Questao8 from "../src/Questao8";

let q = new Questao8("()(([()]))");
let q2 = new Questao8("[](()))")


test("String válida", () => {
    expect(q.formacao()).toBe(true);
});

test("String Inválida", () => {
    expect(q2.formacao()).toBe(false);
});
```