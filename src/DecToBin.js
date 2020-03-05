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

    /*toString() {      //Apenas se desejar imprimir o numero binário bruto
        let result = "";
        for (let i = 0; i < 8; i++) {
            let temp;
            temp = this.res.pop();
            result += `${temp}`;
            this.aux.push(temp);
        }
        for (let i = 0; i < 8; i++) {
            this.res.push(this.aux.pop());
        }

        result += "";
        return result.split('').reverse().join('');
        //return this.res.toString();
    }*/
}

export default DecToBin;