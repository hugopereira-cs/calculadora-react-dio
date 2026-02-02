import { Text } from "./Text"

const buttonVariants = {
  default: 'bg-background',
  primary: 'bg-primary'
}

export function Button({ 
  variant = 'default',
  className = '', 
  children,
  ...props 
}) {
  return (
    <Text
      as="button"
      variant="heading"
      className={`
        flex items-center justify-center rounded-xl
        p-3 cursor-pointer text-text
        bg-[linear-gradient(var(--gradient))]
        hover:bg-[linear-gradient(var(--gradient-hover))]
        shadow-(--shadow)
        transition-all duration-200
        active:scale-95
        ${buttonVariants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </Text>
  )
}