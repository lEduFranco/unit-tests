class CalculadoraDiferente {
  inverteNumero(numero) {
    let numeroInvertido = 0;
    let temp = 0;

    while (numero > 0) {
      temp = numero % 10;
      numeroInvertido = numeroInvertido * 10 + temp;
      numero = Math.floor(numero / 10);
    }

    return numeroInvertido;
  }

  fatorial(numero) {
    if (numero === 0 || numero === 1) return 1;

    let fatorial = numero;
    for (let i = numero - 1; i > 1; i--) {
      fatorial *= i;
    }
    return fatorial;
  }

  somaDobro(a, b) {
    return a + b * 2;
  }
}

module.exports = CalculadoraDiferente;