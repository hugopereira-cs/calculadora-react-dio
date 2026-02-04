/**
 * Funções utilitárias para cálculos da calculadora
 */

/**
 * Executa operação matemática
 * @param {number} a - Primeiro operando
 * @param {number} b - Segundo operando
 * @param {string} operator - Operador (+, -, *, /)
 * @returns {number} Resultado da operação
 */
export function calculate(a, b, operator) {
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  switch (operator) {
    case "+":
      return numA + numB;
    case "-":
      return numA - numB;
    case "*":
      return numA * numB;
    case "/":
      if (numB === 0) {
        throw new Error("Não é possível realizar uma divisão por zero!")
      }
      return numA / numB;
    default:
      throw new Error('Operador inválido');
  }
}

/**
 * Formata número para exibição
 * @param {number|string} value - Valor a ser formatado
 * @returns {string} Valor formatado
 */
export function formatDisplay(value) {
  if (value === '') return 0;

  // Converte o valor para número, para que seja possível fazer verificações.
  const num = parseFloat(value);
  if (Number.isNaN(num)) return value;

  // Se for muito grande, usa notação científica
  if (Math.abs(num) > 999999999) {
    return num.toExponential(5);
  }

  // Formata o número para exibição, trocando o ponto decimal por vírgula.
  return num.toString().replace(".", ",");
}

/**
 * Formata operação completa para o histórico
 * @param {string} firstOperand - Primeiro número
 * @param {string} operator - Operador
 * @param {string} secondOperand - Segundo número
 * @param {string} result - Resultado
 * @returns {string} Operação formatada
 */
export function formatOperation(firstOperand, operator, secondOperand, result) {
  return `${formatDisplay(firstOperand)} ${operator} ${formatDisplay(secondOperand)} = ${formatDisplay(result)}`;
}