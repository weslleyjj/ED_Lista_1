import Questao8 from "../src/Questao8";

let q = new Questao8("()(([()]))");
let q2 = new Questao8("[](()))")


//beforeEach(() => {
//   q = new Questao8("((([])))");
//});

test("String válida", () => {
    expect(q.formacao()).toBe(true);
});

test("String Inválida", () => {
    expect(q2.formacao()).toBe(false);
});