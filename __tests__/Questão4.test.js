import QueueStack from "../src/QueueStack";

    let f;
    beforeEach(() => {
        f = new QueueStack(10);
    });

    test("Testando enqueue e dequeue", () => {
        
        f.enqueue(1);
        f.enqueue(2);
        f.enqueue(3);
        f.enqueue(4);
        f.enqueue(5);
        f.enqueue(6);
        //console.log(f);
        expect(f.dequeue()).toBe(1);
        expect(f.dequeue()).toBe(2);
        expect(f.dequeue()).toBe(3);
        expect(f.dequeue()).toBe(4);
        expect(f.dequeue()).toBe(5);
        expect(f.dequeue()).toBe(6);
    });

    test("front e end", () => {
        f.enqueue(1);
        f.enqueue(2);
        f.enqueue(3);
        f.enqueue(4);
        f.enqueue(5);
        //console.log(f);
        expect(f.front()).toBe(1);
        expect(f.end()).toBe(5);
        f.dequeue();
        f.dequeue();
        expect(f.front()).toBe(3);
        f.enqueue(7);
        expect(f.end()).toBe(7);
    });