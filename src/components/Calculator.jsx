import { CalculatorDisplay } from './CalculatorDisplay'
import { Button } from './ui/Button'
import { Card } from './ui/Card'


export function Calculator({ calculator }) {
  const {
    display,
    currentOperation,
    handleNumberClick,
    handleDecimalClick,
    handleClearEntry,
    handleClear,
    handleOperatorClick,
    handleEquals,
    operator
  } = calculator;

  return (
    <Card className="flex flex-col gap-8 w-89 pt-14 px-8 pb-8 bg-[#1E293B]">
      <CalculatorDisplay operation={currentOperation} result={display} />
      
      <div className="flex flex-col gap-3">
        {/* Linha 1: CE, C, / */}
        <div className="flex gap-3">
          <Button className="w-16 h-16" onClick={handleClearEntry} aria-label="Botão para apagar o número atual">CE</Button>
          <Button className="flex-1 h-16" onClick={handleClear} aria-label="Botão para apagar a operação atual">C</Button>
          <Button className="w-16 h-16" variant="primary" onClick={() => handleOperatorClick('/')} style={operator === '/' ? { opacity: 1} : {}} aria-label="Botão para realizar a divisão">/</Button>
        </div>

        {/* Linha 2: 7, 8, 9, * */}
        <div className="flex gap-3">
          <Button className="w-16 h-16" onClick={() => handleNumberClick(7)} aria-label="Número 7">7</Button>
          <Button className="w-16 h-16" onClick={() => handleNumberClick(8)} aria-label="Número 8">8</Button>
          <Button className="w-16 h-16" onClick={() => handleNumberClick(9)} aria-label="Número 9">9</Button>
          <Button className="w-16 h-16" variant="primary" onClick={() => handleOperatorClick('*')} style={operator === '*' ? {opacity: 1} : {}} aria-label="Botão para realizar a multiplicação">*</Button>
        </div>
        <div className="flex gap-3">
          <Button className="w-16 h-16" onClick={() => handleNumberClick(4)} aria-label="Número 4">4</Button>
          <Button className="w-16 h-16" onClick={() => handleNumberClick(5)} aria-label="Número 5">5</Button>
          <Button className="w-16 h-16" onClick={() => handleNumberClick(6)} aria-label="Número 6">6</Button>
          <Button className="w-16 h-16" variant="primary" onClick={() => handleOperatorClick('-')} style={operator === '-' ? {opacity: 1} : {}} aria-label="Botão para realizar a subtração">-</Button>
        </div>
        <div className="flex gap-3">
          <Button className="w-16 h-16" onClick={() => handleNumberClick(1)} aria-label="Número 1">1</Button>
          <Button className="w-16 h-16" onClick={() => handleNumberClick(2)} aria-label="Número 2">2</Button>
          <Button className="w-16 h-16" onClick={() => handleNumberClick(3)} aria-label="Número 3">3</Button>
          <Button className="w-16 h-16" variant="primary" onClick={() => handleOperatorClick('+')} style={operator === '+' ? {opacity: 1} : {}} aria-label="Botão para realizar a adição">+</Button>
        </div>
        <div className="flex gap-3">
          <Button className="flex-1 h-16" onClick={() => handleNumberClick(0)} aria-label="Número 0">0</Button>
          <Button className="w-16 h-16" onClick={handleDecimalClick}aria-label="Botão para adicionar uma vírgula">,</Button>
          <Button className="w-16 h-16 bg-[#1E40AF]/99" variant="primary" onClick={handleEquals} aria-label="Botão para realizar a operação">=</Button>
        </div>
      </div>
    </Card>
  )
}