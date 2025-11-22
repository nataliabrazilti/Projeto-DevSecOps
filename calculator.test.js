const { somar, subtrair, multiplicar, dividir } = require('./calculator');

test('soma dois números', () => {
    expect(somar(2, 3)).toBe(5);
});

test('subtrai dois números', () => {
    expect(subtrair(10, 4)).toBe(6);
});

test('multiplica dois números', () => {
    expect(multiplicar(3, 5)).toBe(15);
});

test('divide dois números', () => {
    expect(dividir(20, 4)).toBe(5);
});

test('não deve dividir por zero', () => {
    expect(() => dividir(10, 0)).toThrow("Não é possível dividir por zero!");
});
