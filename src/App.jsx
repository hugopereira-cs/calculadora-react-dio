import { Calculator } from './components/Calculator'
import { OperationHistory } from './components/OperationHistory'
import { useCalculator } from './hooks/useCalculator'

function App() {
  const calculator = useCalculator();
  
  return (
    <main className="py-12 px-4 sm:py-28 sm:px-10 lg:px-20 xl:px-32 2xl:px-64
      flex flex-col sm:flex-row
      items-center sm:items-stretch
      gap-6">
      <Calculator calculator={calculator}/>
      <OperationHistory 
        history={calculator.history}
        onClearHistory={calculator.handleClearHistory}
      />
    </main>
  )
}

export default App
