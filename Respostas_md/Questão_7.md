# Fila da clinica
```
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

```
## Teste
```
import Clinica from "../src/Clinica";

let f;

beforeEach(() => {
	f = new Clinica(7);
});

test("Pegar Senha", () => {
    f.pegarSenha('a');
    f.pegarSenha('b');
    f.pegarSenha('c');
    f.pegarSenha('d');
    f.pegarSenha('e');
    f.pegarSenha('f');
    f.pegarSenha('g');
    expect(f.filaTotem.size()).toBe(0);
    expect(f.filaAtend.size()).toBe(7);
    f.atender();
    expect(f.filaAtend.size()).toBe(4);

});

test("Atendimento de 3 em 3", () => {
    f.pegarSenha('a');
    f.pegarSenha('b');
    f.pegarSenha('c');
    f.pegarSenha('d');
    f.pegarSenha('e');
    f.pegarSenha('f');
    f.pegarSenha('g');
    f.atender();
    expect(f.filaAtend.size()).toBe(4);
    f.atender();
    expect(f.filaAtend.size()).toBe(1);
    f.atender();
    expect(f.filaAtend.size()).toBe(0);
});

test("Fila de atendimento cheia", () => {
    f.pegarSenha('a');
    f.pegarSenha('b');
    f.pegarSenha('c');
    f.pegarSenha('d');
    f.pegarSenha('e');
    f.pegarSenha('f');
    f.pegarSenha('g');
    f.pegarSenha('h');
    f.pegarSenha('i');
    f.pegarSenha('j');
    expect(f.filaAtend.size()).toBe(7);
    expect(f.filaTotem.size()).toBe(3);
    
});
```