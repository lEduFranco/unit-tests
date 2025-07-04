const CalculadoraDiferente = require('../CalculadoraDiferente');

describe('CalculadoraDiferente', () => {
  let calc;

  beforeEach(() => {
    calc = new CalculadoraDiferente();
  });

  describe('inverteNumero()', () => {
    test('deve inverter o número 1234 para 4321', () => {
      expect(calc.inverteNumero(1234)).toBe(4321);
    });

    test('deve inverter o número 100 para 1', () => {
      expect(calc.inverteNumero(100)).toBe(1);
    });
  });

  describe('fatorial()', () => {
    test('fatorial de 5 deve ser 120', () => {
      expect(calc.fatorial(5)).toBe(120);
    });

    test('fatorial de 0 deve ser 1', () => {
      expect(calc.fatorial(0)).toBe(1);
    });
  });

  describe('somaDobro()', () => {
    test('somaDobro(2, 3) deve ser 8', () => {
      expect(calc.somaDobro(2, 3)).toBe(8);
    });

    test('somaDobro(0, 4) deve ser 8', () => {
      expect(calc.somaDobro(0, 4)).toBe(8);
    });
  });
});