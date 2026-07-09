export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: "bg-brand-grey-light text-brand-grey-dark",
    primary: "bg-brand-navy/10 text-brand-navy",
    green: "bg-brand-green/10 text-brand-green",
    success: "bg-brand-success/10 text-brand-success",
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
