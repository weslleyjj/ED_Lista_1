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