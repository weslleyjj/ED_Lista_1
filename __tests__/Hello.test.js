import Hello from "../src/Hello";

test("sayHello()", () => {
	let p = new Hello();
	expect(p.sayHello()).toBe("hello");
});

test("sum()", () => {
	let p = new Hello();
	expect(p.sum(5, 7)).toBe(12);
})