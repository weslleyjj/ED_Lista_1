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