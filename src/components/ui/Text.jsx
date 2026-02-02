const textVariants = {
  default: 'text-xl',
  muted: 'text-xl text-text-secondary',
  heading: 'text-2xl',
  blast: 'text-3xl'
}

export function Text({
  as = 'span',
  variant = 'default',
  className = '',
  children,
  ...props
}) {
  const Component = as;

  return (
    <Component
      className={`${textVariants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}