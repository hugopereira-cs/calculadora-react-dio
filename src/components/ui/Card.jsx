export function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`
        bg-background
        shadow-(--shadow)
        rounded-2xl
        ${className}
        `}
        {...props}
    >
      {children}
    </div>
  )
}