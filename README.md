Copiar

# 🧮 Calculadora React

Uma calculadora web moderna e funcional desenvolvida com React, Tailwind CSS e Vite.

**🔗 [Acesse a aplicação](https://hugopereira-cs.github.io/calculadora-react-dio/)**

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)

---

## 📋 Índice

- [Características](#-características)
- [Tecnologias](#-tecnologias-utilizadas)
- [Instalação](#-instalação)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Componentes](#-componentes-principais)
- [Hooks Customizados](#-hooks-customizados)
- [Utilitários](#-utilitários)
- [Atalhos de Teclado](#⌨️-atalhos-de-teclado)
- [Tema e Estilos](#-tema-e-estilos)
- [Scripts](#-scripts-disponíveis)

---

## ✨ Características

### Funcionalidades Principais

✅ **Operações matemáticas básicas** - Adição, subtração, multiplicação e divisão  
✅ **Números decimais** - Suporte a vírgula decimal  
✅ **Histórico de operações** - Armazena até 50 operações no localStorage  
✅ **Entrada via teclado** - Suporte completo para atalhos de teclado  
✅ **Validações** - Proteção contra divisão por zero e overflow  
✅ **Notação científica** - Para números muito grandes  
✅ **Interface responsiva** - Adaptável a mobile e desktop  
✅ **Feedback visual** - Indicador visual do operador ativo  
✅ **Persistência de dados** - Histórico salvo automaticamente

---

## 🛠️ Tecnologias Utilizadas

- **[React 19.2.0](https://react.dev/)** - Biblioteca JavaScript para construção de interfaces
- **[Tailwind CSS 4.1.18](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Vite 7.2.4](https://vitejs.dev/)** - Build tool e dev server de nova geração
- **[ESLint](https://eslint.org/)** - Ferramenta de linting para JavaScript

### Dependências de Desenvolvimento

```json
{
  "@vitejs/plugin-react": "^5.1.1",
  "eslint": "^9.39.1",
  "eslint-plugin-react-hooks": "^7.0.1",
  "eslint-plugin-react-refresh": "^0.4.24"
}
```

---

## 📦 Instalação

### Pré-requisitos

- Node.js (versão 20.19.0 ou superior)
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/hugopereira-cs/calculadora-react-dio.git
cd calculadora-react-dio
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

---

## 📁 Estrutura do Projeto

```
projeto-calculadora/
├── public/
│   ├── calculator.svg          # Ícone da calculadora
│   └── vite.svg               # Logo do Vite
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx     # Componente de botão reutilizável
│   │   │   ├── Card.jsx       # Componente de card
│   │   │   ├── Text.jsx       # Componente de texto
│   │   │   └── index.jsx      # Exports centralizados
│   │   ├── Calculator.jsx     # Interface da calculadora
│   │   ├── CalculatorDisplay.jsx  # Display de operações
│   │   └── OperationHistory.jsx   # Histórico de operações
│   ├── hooks/
│   │   ├── useCalculator.js   # Hook com lógica da calculadora
│   │   └── useKeyboard.js     # Hook para entrada via teclado
│   ├── utils/
│   │   └── calculator.js      # Funções utilitárias
│   ├── App.jsx                # Componente principal
│   ├── main.jsx              # Entry point
│   └── index.css             # Estilos globais
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

---

## 🧩 Componentes Principais

### `<Calculator />`

Componente principal que renderiza a interface da calculadora.

**Props:**
- `calculator` (Object) - Objeto retornado pelo hook `useCalculator`

**Exemplo:**
```jsx

```

---

### `<CalculatorDisplay />`

Exibe a operação atual e o resultado no display.

**Props:**
- `operation` (String) - Operação sendo construída (ex: "5 + 3")
- `result` (String) - Valor a ser exibido no display

**Exemplo:**
```jsx

```

---

### `<OperationHistory />`

Lista o histórico de operações realizadas.

**Props:**
- `history` (Array) - Array de objetos `{id, operation}`
- `onClearHistory` (Function) - Callback para limpar o histórico

**Exemplo:**
```jsx

```

---

### Componentes UI

#### `<Button />`

Botão customizável com duas variantes de estilo.

**Props:**
- `variant` (String) - `"default"` | `"primary"`
- `className` (String) - Classes adicionais do Tailwind
- `children` (ReactNode) - Conteúdo do botão

**Variantes:**
- `default` - Gradiente azul claro (padrão)
- `primary` - Azul sólido semitransparente

**Exemplo:**
```jsx

  =

```

---

#### `<Card />`

Container com sombra e bordas arredondadas.

**Props:**
- `className` (String) - Classes adicionais
- `children` (ReactNode) - Conteúdo do card

---

#### `<Text />`

Componente de texto com variantes tipográficas.

**Props:**
- `as` (String) - Tag HTML (padrão: `"span"`)
- `variant` (String) - `"default"` | `"muted"` | `"heading"` | `"blast"`
- `className` (String) - Classes adicionais
- `children` (ReactNode) - Conteúdo

**Variantes:**
- `default` - Texto padrão (20px)
- `muted` - Texto esmaecido (#94A3B8)
- `heading` - Cabeçalho (24px)
- `blast` - Destaque (30px)

---

## 🔧 Hooks Customizados

### `useCalculator()`

Hook que gerencia todo o estado e lógica da calculadora.

**Retorna:**
```javascript
{
  display,              // String - Valor atual no display
  history,              // Array - Histórico de operações
  currentOperation,     // String - Operação sendo construída
  operator,             // String - Operador ativo
  handleNumberClick,    // Function(digit) - Adiciona dígito
  handleDecimalClick,   // Function() - Adiciona vírgula
  handleClearEntry,     // Function() - Limpa entrada atual (CE)
  handleClear,          // Function() - Limpa tudo (C)
  handleOperatorClick,  // Function(operator) - Define operador
  handleEquals,         // Function() - Calcula resultado
  handleClearHistory,   // Function() - Limpa histórico
}
```

**Estado Interno:**
- `display` - Valor mostrado no visor
- `firstOperand` - Primeiro número da operação
- `operator` - Operador selecionado (+, -, *, /)
- `waitingForOperand` - Flag para substituir display
- `history` - Array de operações (persistido no localStorage)

**Exemplo de Uso:**
```jsx
function App() {
  const calculator = useCalculator();
  
  return (
    
  );
}
```

---

### `useKeyboard(handlers)`

Hook que adiciona suporte a entrada via teclado.

**Parâmetros:**
```javascript
{
  handleNumberClick,     // Function
  handleDecimalClick,    // Function
  handleOperatorClick,   // Function
  handleEquals,          // Function
  handleClear,           // Function
  handleClearEntry,      // Function
}
```

**Teclas Suportadas:**
- Números: `0-9`
- Operadores: `+ - * /`
- Decimal: `, .`
- Calcular: `= Enter`
- Limpar: `Delete` (tudo) | `Backspace` (entrada atual)

**Exemplo de Uso:**
```jsx
useKeyboard({
  handleNumberClick: calculator.handleNumberClick,
  handleDecimalClick: calculator.handleDecimalClick,
  handleOperatorClick: calculator.handleOperatorClick,
  handleEquals: calculator.handleEquals,
  handleClear: calculator.handleClear,
  handleClearEntry: calculator.handleClearEntry,
});
```

---

## 🧮 Utilitários

### `calculate(a, b, operator)`

Executa operação matemática básica.

**Parâmetros:**
- `a` (Number) - Primeiro operando
- `b` (Number) - Segundo operando
- `operator` (String) - `"+"` | `"-"` | `"*"` | `"/"`

**Retorna:** `Number`

**Exceções:**
- Lança erro se divisão por zero
- Lança erro se operador inválido

**Exemplo:**
```javascript
calculate(10, 5, '+')  // 15
calculate(10, 5, '-')  // 5
calculate(10, 5, '*')  // 50
calculate(10, 5, '/')  // 2
calculate(10, 0, '/')  // Error: Não é possível realizar uma divisão por zero!
```

---

### `formatDisplay(value)`

Formata número para exibição no display.

**Parâmetros:**
- `value` (Number|String) - Valor a ser formatado

**Retorna:** `String`

**Comportamento:**
- Troca ponto por vírgula (padrão brasileiro)
- Usa notação científica para números > 999.999.999
- Retorna "0" para valores inválidos (NaN)

**Exemplo:**
```javascript
formatDisplay(1234.56)        // "1234,56"
formatDisplay(1000000000)     // "1.0000000000e+9"
formatDisplay("invalid")      // "0"
```

---

### `formatOperation(firstOperand, operator, secondOperand, result)`

Formata operação completa para o histórico.

**Parâmetros:**
- `firstOperand` (String) - Primeiro número
- `operator` (String) - Operador
- `secondOperand` (String) - Segundo número
- `result` (String) - Resultado

**Retorna:** `String` no formato `"a op b = resultado"`

**Exemplo:**
```javascript
formatOperation("5", "+", "3", "8")  // "5 + 3 = 8"
formatOperation("10.5", "*", "2", "21")  // "10,5 * 2 = 21"
```

---

## ⌨️ Atalhos de Teclado

| Tecla | Ação | Descrição |
|-------|------|-----------|
| `0` - `9` | Inserir dígito | Adiciona número ao display |
| `+` | Soma | Define operador de adição |
| `-` | Subtração | Define operador de subtração |
| `*` | Multiplicação | Define operador de multiplicação |
| `/` | Divisão | Define operador de divisão |
| `,` ou `.` | Decimal | Adiciona vírgula decimal |
| `=` ou `Enter` | Calcular | Executa a operação |
| `Backspace` | CE | Limpa entrada atual (Clear Entry) |
| `Delete` | C | Limpa tudo (Clear) |

---

## 🎨 Tema e Estilos

### Variáveis CSS Customizadas

```css
--text: #F8FAFC;           /* Texto principal (branco) */
--body-bg: #0C1222;        /* Fundo da página (azul escuro) */
--button-default: #1E293B; /* Cor base dos botões (cinza escuro) */
```

### Gradientes

**Gradiente Padrão (Botões):**
```css
--gradient: 180deg,
  rgba(14, 165, 233, 0.1) 0%,
  rgba(14, 165, 233, 0.05) 100%;
```

**Gradiente Hover:**
```css
--gradient-hover: 180deg,
  rgba(14, 165, 233, 0.2) 0%,
  rgba(14, 165, 233, 0.1) 100%;
```

### Sombras

Sombra complexa aplicada a cards e botões:
```css
--shadow: 
  0px 11px 7px 0px rgba(0, 0, 0, 0.01),
  0px 7px 7px 0px rgba(0, 0, 0, 0.04),
  0px 4px 6px 0px rgba(0, 0, 0, 0.10),
  0px 2px 4px 0px rgba(0, 0, 0, 0.26),
  0px 0px 2px 0px rgba(0, 0, 0, 0.29),
  0px 2px 3px 0px rgb(255, 255, 255, 0.06) inset;
```

### Barra de Rolagem Customizada

Estilização da barra de rolagem no histórico:
```css
ul::-webkit-scrollbar {
  width: 8px;
}

ul::-webkit-scrollbar-track {
  background: rgba(30, 41, 59, 0.5);
  border-radius: 4px;
}

ul::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.5);
  border-radius: 4px;
}

ul::-webkit-scrollbar-thumb:hover {
  background: rgba(148, 163, 184, 0.7);
}
```

---

## 📱 Responsividade

O layout se adapta automaticamente a diferentes tamanhos de tela:

### Mobile (< 640px)
- Layout vertical (coluna)
- Calculadora acima do histórico
- Largura fixa de 356px (w-89)

### Desktop (≥ 640px)
- Layout horizontal (linha)
- Calculadora ao lado do histórico
- Histórico ocupa espaço restante

**Breakpoints Tailwind:**
```
sm:  640px   (tablet)
md:  768px   (tablet landscape)
lg:  1024px  (laptop)
xl:  1280px  (desktop)
2xl: 1536px  (large desktop)
```

---

## 💾 Persistência de Dados

O histórico de operações é armazenado automaticamente no **localStorage** do navegador.

**Detalhes:**
- **Chave:** `calculator-history`
- **Formato:** Array JSON
- **Estrutura:** `[{id, operation}, ...]`
- **Limite:** 50 operações mais recentes
- **Sincronização:** Automática em cada operação

**Exemplo de Dados Armazenados:**
```json
[
  {
    "id": "1707654321000-5 + 3 = 8",
    "operation": "5 + 3 = 8"
  },
  {
    "id": "1707654320000-10 * 2 = 20",
    "operation": "10 * 2 = 20"
  }
]
```

---

## ⚠️ Limitações e Validações

### Limitação de Dígitos

| Contexto | Limite | Comportamento |
|----------|--------|---------------|
| **Entrada no display** | 14 dígitos | Ignora novos dígitos |
| **Resultado inteiro** | 14 dígitos | Converte para notação científica |
| **Resultado decimal** | 8 casas decimais | Arredonda com `toFixed(8)` |

### Validações de Operação

✅ **Divisão por zero**
```javascript
10 / 0  // Erro: "Não é possível realizar uma divisão por zero!"
```

✅ **Overflow numérico**
```javascript
999999999 * 999999999  // Convertido para notação científica
```

✅ **Encadeamento de operações**
```javascript
5 + 3 * 2  // Calcula: 5 + 3 = 8, depois 8 * 2 = 16
```

---

## 🔍 Fluxo de Operação

### Operação Simples

1. **Usuário digita:** `5`
   - `display = "5"`
   
2. **Usuário clica:** `+`
   - `firstOperand = 5`
   - `operator = "+"`
   - `waitingForOperand = true`

3. **Usuário digita:** `3`
   - `display = "3"`
   - `waitingForOperand = false`

4. **Usuário clica:** `=`
   - `result = calculate(5, 3, "+")`
   - `display = "8"`
   - Adiciona ao histórico: `"5 + 3 = 8"`
   - Reseta estado

### Operação Encadeada

1. **Usuário:** `5 + 3 =`
   - `display = "8"`

2. **Usuário:** `* 2 =`
   - Usa resultado anterior (8)
   - `display = "16"`
   - Histórico: `"8 * 2 = 16"`

---

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev      # Inicia servidor em http://localhost:5173

# Build
npm run build    # Gera build otimizado em /dist

# Preview
npm run preview  # Visualiza build de produção

# Linting
npm run lint     # Executa ESLint no código
```

---

## 🎯 Boas Práticas Implementadas

✅ **Componentização** - Componentes pequenos e reutilizáveis  
✅ **Separação de responsabilidades** - Lógica separada da apresentação  
✅ **Hooks customizados** - Lógica encapsulada e reutilizável  
✅ **Acessibilidade** - Labels ARIA em botões  
✅ **Validação de entrada** - Proteção contra erros  
✅ **Tratamento de erros** - Try/catch em operações críticas  
✅ **Documentação JSDoc** - Funções documentadas  
✅ **Nomenclatura consistente** - Convenções claras  
✅ **CSS modular** - Componentes com estilos isolados  
✅ **Performance** - useCallback para otimizar re-renders  

---

## 🐛 Tratamento de Erros

### Divisão por Zero
```javascript
try {
  calculate(10, 0, '/');
} catch (error) {
  console.error(error.message);
  // "Não é possível realizar uma divisão por zero!"
}
```

### Operador Inválido
```javascript
try {
  calculate(10, 5, '%');
} catch (error) {
  console.error(error.message);
  // "Operador inválido"
}
```

### Display de Erro
Quando ocorre erro, a calculadora:
1. Exibe "Erro" no display
2. Reseta o estado interno
3. Aguarda nova operação

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abrir um Pull Request

---

## 👤 Autor

**Hugo Pereira**

- LinkedIn: [hugopereiradev](https://www.linkedin.com/in/hugopereiradev/)
- GitHub: [@hugopereira-cs](https://github.com/hugopereira-cs)
- Projeto: [calculadora-react-dio](https://github.com/hugopereira-cs/calculadora-react-dio)

---

## 🙏 Agradecimentos

- [React](https://react.dev/) - Biblioteca incrível
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Vite](https://vitejs.dev/) - Build tool super rápido

---

<div align="center">

**⭐ Se este projeto foi útil, considere dar uma estrela!**

Desenvolvido com ❤️ usando React + Tailwind CSS

[🔝 Voltar ao topo](#-calculadora-react)

</div>