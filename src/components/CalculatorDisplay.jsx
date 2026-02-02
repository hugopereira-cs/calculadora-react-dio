// TODO

import { Text } from './ui/Text';

export function CalculatorDisplay({ operation, result }) {
  return (
    <div className="flex flex-col gap-2 px-5.5 cursor-default select-none" >
      <Text as="div" variant="muted" className="flex items-center justify-end">
        {operation}
      </Text>
      <div className="flex items-center justify-betweeen">
        <Text variant="muted">=</Text>
        <Text variant="blast">{result}</Text>

      </div>
    </div>
  )
}