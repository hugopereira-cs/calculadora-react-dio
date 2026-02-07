import { Button } from './ui/Button'
import { Card } from './ui/Card'
import { Text } from './ui/Text'


export function OperationHistory({ history, onClearHistory }) {
  return (
    <Card className="w-89 sm:w-full py-10 px-8 bg-[#1E293B]">
      <div className="flex items-center justify-between mb-4">
        <Text as="h1" variant="heading">
          Histórico de Operações
        </Text>
        {history.length > 0 && (
          <Button
          onClick={onClearHistory}
          className="px-4 py-2 h-auto text-sm"
          variant="primary"
          >
            Limpar
          </Button>
        )}
      </div>

      {history.length === 0 ? (
        <Text variant="muted" className="text-center py-8">
          Histórico de operações vazio.
        </Text>
      ) : (
        <ul className="flex flex-col gap-3 max-h-96 overflow-y-auto pr-2">
          {history.map(historyEntry => (
            <Text
            as="li"
            key={historyEntry.id}
            className="hove:text-white transition-colors"
            >
              {historyEntry.operation}
            </Text>
          ))}
        </ul>
      )}
    </Card>
  )
}