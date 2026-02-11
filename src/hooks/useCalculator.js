import { useCallback, useEffect, useState } from "react";
import { calculate, formatOperation } from "../utils/calculator";

/**
 * Custon hook que gerencia o estado lógico da calculadora
 */

export function useCalculator() {
	// Estado atual do display
	const [display, setDisplay] = useState("0");

	// Primeiro operando
	const [firstOperand, setFirstOperand] = useState(null);

	// Operador selecionado (+, -, *, /)
	const [operator, setOperator] = useState(null);

	//Indica se acabou de calcular (para limpar o display no próximo número)
	const [waitingForOperand, setWaitingForOperand] = useState(false);

	// Carrega histórico do localstorage ao iniciar
	const [history, setHistory] = useState(() => {
		const savedHistory = localStorage.getItem("calculator-history");
		return savedHistory ? JSON.parse(savedHistory) : [];
	});

	// Salva histórico no localStorage sempre que mudar
	useEffect(() => {
		localStorage.setItem("calculator-history", JSON.stringify(history));
	}, [history]);

	/**
	 * Adiciona um dígito ao display
	 */
	const handleNumberClick = useCallback(
		(digit) => {
			setDisplay((prevDisplay) => {
				if (waitingForOperand) {
					setWaitingForOperand(false);
					return String(digit);
				}

        // Remove a vírgula para contar somente os dígitos
        const currentDisplay = prevDisplay.replace(",", "");

        // Limita o display a 13 dígitos
        if (currentDisplay.length >= 13) {
          return prevDisplay;
        }

				return prevDisplay === "0" ? String(digit) : prevDisplay + digit;
			});
		},
		[waitingForOperand],
	);
	/**
	 * Adiciona ponto decimal
	 */
	const handleDecimalClick = useCallback(() => {
		if (waitingForOperand) {
			setDisplay("0,");
			setWaitingForOperand(false);
		} else if (display.indexOf(",") === -1) {
			setDisplay(`${display},`);
		}
	}, [display, waitingForOperand]);

	/**
	 * Limpa a entrada atual (CE - Clear Entry)
	 */
	const handleClearEntry = useCallback(() => {
		setDisplay("0");
	}, []);

	/**
	 * Limpa todo o display
	 */
	const handleClear = useCallback(() => {
		setDisplay("0");
		setFirstOperand(null);
		setOperator(null);
		setWaitingForOperand(false);
	}, []);

	/**
	 * Gerencia click em operador (+, -, *, /)
	 */
	const handleOperatorClick = useCallback(
		(nextOperator) => {
			setDisplay((prevDisplay) => {
				const inputValue = parseFloat(prevDisplay.replace(",", "."));

				if (firstOperand === null) {
					setFirstOperand(inputValue);
					setWaitingForOperand(true);
					setOperator(nextOperator);
					return prevDisplay;
				}

				if (operator) {
					try {
						const result = calculate(firstOperand, inputValue, operator);
						setFirstOperand(result);
						setWaitingForOperand(true);
						setOperator(nextOperator);

						return String(result).replace(".", ",");
					} catch (error) {
						setDisplay("Erro");
						console.error("Erro na calculadora:", error);
						setFirstOperand(null);
						setOperator(null);
						setWaitingForOperand(true);
						return "Erro";
					}
				}

				setWaitingForOperand(true);
				setOperator(nextOperator);
				return prevDisplay;
			});
		},
		[firstOperand, operator],
	);

	/**
	 * Calcula o resultado final (=)
	 */
	const handleEquals = useCallback(() => {
		const inputValue = parseFloat(display.replace(",", "."));

		if (operator && firstOperand !== null) {
			try {
				let result = calculate(firstOperand, inputValue, operator);

        // Limita a quantidade de dígitos do resultado (8 casas decimais para números decimais - 14 dígitos para inteiros)
        if (String(result).length >= 14) {
          if (String(result).includes(".")) {
            result = result.toFixed(8);
          } else {
            result = result.toExponential(10);
          }
          
        }

				// Adiciona ao histórico
				const operationString = formatOperation(
					String(firstOperand),
					operator,
					display.replace(",", "."),
					String(result),
				);

        

				const newHistoryEntry = {
					id: `${Date.now()}-${operationString}`,
					operation: operationString,
				};

				setHistory((prev) => [newHistoryEntry, ...prev].slice(0, 50)); // Mantém últimas 50

				setDisplay(String(result).replace(".", ","));
				setFirstOperand(null);
				setOperator(null);
				setWaitingForOperand(true);
			} catch (error) {
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
			return `${String(firstOperand).replace(",", ".")} ${operator} ${display.replace(",", ".")}`;
		}
		return "";
	}, [firstOperand, operator, display]);

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
		handleClearHistory,
	};
}
