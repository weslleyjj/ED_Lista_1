#Conversor Decimal -> Binário
```
import Pilha from "./Pilha";

class DecToBin {

    constructor(numero) {
        this.num = numero;
        this.res = new Pilha(8);
        this.aux = new Pilha(8);
    }

    converter() {
        let bin;

        for (let i = 0; i < 8; i++) {
            bin = this.num % 2;
            this.num /= 2;
            this.aux.push(Math.floor(bin));
        }
        for (let i = 0; i < 8; i++) {
            this.res.push(this.aux.pop());
        }

    }
    toString() {
        return this.res.toString();
    }

}

export default DecToBin;
```
##Teste
```
import DecToBin from "../src/DecToBin";

let decimal;

beforeEach(() => {
    decimal = new DecToBin(54);
});

test("Converter para binário", () => {
    decimal.converter();
    //console.log(decimal.toString());
    expect(decimal.toString()).toBe('[ 0  0  1  1  0  1  1  0 ]');

});
```