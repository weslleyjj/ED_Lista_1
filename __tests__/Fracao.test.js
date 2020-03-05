import Fracao from "../src/Fracao";

    let f;
    
    beforeEach(() => {
	    f = new Fracao(6, 2);
    });

    test("teste da multiplicação", () => {
        let t = new Fracao(9, 3);
        let res = f.multiplica(t);
        expect(res.numerador).toBe(54);
        expect(res.denominador).toBe(6);        
    });
    test("teste da divisão", () => {
        let t = new Fracao(9, 3);
        let res = f.dividir(t);
        expect(res.numerador).toBe(18);
        expect(res.denominador).toBe(18);        
    });
