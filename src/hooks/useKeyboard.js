import { useEffect } from "react";

/**
 * Hook para capturar entrada via teclado e mapear para ações da calculadora
 * @param {Object} handlers - Objeto com handlers da calculadora
 */
export function useKeyboard({
  handleNumberClick,
  handleDecimalClick,
  handleOperatorClick,
  handleEquals,
  handleClear,
  handleClearEntry,

}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;

      // Previne ação padrão para teclas da calculador
      if (/^[0-9+\-*/=.,Enter]$/.test(key) || key === 'Espace' || key === 'Backspace' || key === 'Delete') {
        event.preventDefault();
      }

      // Números (0-9)
      if (/^[0-9]$/.test(key)) {
        handleNumberClick(parseInt(key, 10));
        return;
      }

      // Ponto decimal (, ou .)
      if (key === ',' || key === '.') {
        handleDecimalClick();
        return;
      }

      // ====== Utilizando Switch para Teclas Específicas
      switch (key) {
        // Operadores
        case '+':
        case '-':
        case '*':
        case '/':
          handleOperatorClick(key);
          break;

        // Calcular resultado (= ou Enter)
        case '=':
        case 'Enter':
          handleEquals();
          break;

        // Limpar tudo (Delete)
        case 'Delete':
          handleClear();
          break;

        // Limpar entrada atual (Backspace)
        case 'Backspace':
          handleClearEntry();
          break;

        // Tecla não mapeada, não faz nada.
        default:
          break;
      }
    };

    // Adiciona listener
    window.addEventListener('keydown', handleKeyDown);

    // Remove listener quando componente desmontar
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    handleNumberClick,
    handleDecimalClick,
    handleOperatorClick,
    handleEquals,
    handleClear,
    handleClearEntry
  ]);
}