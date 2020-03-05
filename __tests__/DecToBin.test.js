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