export function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`
        bg-background
        shadow-(--shaddow)
        rounded-2xl
        ${className}
        `}
        {...props}
    >
      {children}
    </div>
  )
}