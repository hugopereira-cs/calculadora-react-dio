import {  useCallback, useEffect, useState } from 'react';
import { calculate, formatOperation } from '../utils/calculator';

/**
 * Custon hook que gerencia o estado lógico da calculadora
 */

export function useCalculator() {
  // Estado atual do display
  const [display, setDisplay] = useState('0');

  // Primeiro operando
  const [firstOperand, setFirstOperand] = useState(null);
  
  // Operador selecionado (+, -, *, /)
  const [operator, setOperator] = useState(null);

  //Indica se acabou de calcular (para limpar o display no próximo número)
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  // Carrega histórico do localstorage ao iniciar
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem('calculator-history');
    return savedHistory ? JSON.parse(savedHistory) : []
  });

  // Salva histórico no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem('calculator-history', JSON.stringify(history));
  }, [history]);

  /**
   * Adiciona um dígito ao display
   */
  const handleNumberClick = useCallback((digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  }, [display, waitingForOperand]);

  /**
   * Adiciona ponto decimal
   */
  const handleDecimalClick = useCallback(() => {
    if (waitingForOperand) {
      setDisplay('0,');
      setWaitingForOperand(false);
    } else if (display.indexOf(',') === -1) {
      setDisplay(`${display},`);
    }
  }, [display, waitingForOperand]);

  /**
   * Limpa a entrada atual (CE - Clear Entry)
   */
  const handleClearEntry = useCallback(() => {
    setDisplay('0');
  }, []);

  /**
   * Limpa todo o display
   */
  const handleClear = useCallback(() => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForOperand(false);
  },[]);

  /**
   * Gerencia click em operador (+, -, *, /)
   */
  const handleOperatorClick = useCallback((nextOperator) => {
    const inputValue = parseFloat(display.replace(',', '.'));

    if (firstOperand === null) {
      // Primeiro número - apenas armazena
      setFirstOperand(inputValue);
    } else if (operator) {
      // Já tem operador anterior - calcula resultado
      try {
        const result = calculate(firstOperand, inputValue, operator);
        setDisplay(String(result).replace('.', ','));
        setFirstOperand(result);
      } catch (error) {
        setDisplay(`Erro: ${error}`);
        setFirstOperand(null);
        setOperator(null);
        setWaitingForOperand(true);
        return;
      }
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  }, [display, firstOperand, operator]);

  /**
   * Calcula o resultado final (=)
   */
  const handleEquals = useCallback(() => {
    const inputValue = parseFloat(display.replace(',', '.'));

    if (operator && firstOperand !== null) {
      try {
        const result = calculate(firstOperand, inputValue, operator);

        // Adiciona ao histórico
        const operationString = formatOperation(
          String(firstOperand),
          operator,
          display.replace(',', '.'),
          String(result)
        );

        const newHistoryEntry = {
          id: `${Date.now()}-${operationString}`,
          operation: operationString
        }

        setHistory(prev => [newHistoryEntry, ...prev].slice(0,50)); // Mantém últimas 50

        setDisplay(String(result).replace('.', ','));
        setFirstOperand(null);
        setOperator(null);
        setWaitingForOperand(true);
      } catch (error){
        setDisplay(`Erro: ${error}`);
        setFirstOperand(null);
        setOperator(null);
        setWaitingForOperand(true);
      }
    }
  }, [display, firstOperand, operator]);

  /**
   * Limpa histórico
   */
  const handleClearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  /**
   * Retorna a operação atual sendo construída
   */
  const getCurrentOperation = useCallback(() => {
    if (firstOperand !== null && operator) {
      return `${String(firstOperand).replace(',', '.')} ${operator}`;
    }
    return '';
  }, [firstOperand, operator]);

  return {
    display,
    history,
    currentOperation: getCurrentOperation(),
    handleNumberClick,
    handleDecimalClick,
    handleClearEntry,
    handleClear,
    handleOperatorClick,
    handleEquals,
    handleClearHistory
  }
}