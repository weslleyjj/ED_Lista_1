class Fracao {
    constructor(a, b){
        this.numerador = a;
        this.denominador = b;
    }

    multiplica(fracao){ //a - numerador b - denominador

        let num = this.numerador*fracao.numerador;
        let den = this.denominador*fracao.denominador;
        let res = new Fracao(num, den);
        return res;
    }

    dividir(fracao){
        let num = this.numerador*fracao.denominador;
        let den = this.denominador*fracao.numerador;
        let res = new Fracao(num, den);
        return res; 
    }
}

export default Fracao;