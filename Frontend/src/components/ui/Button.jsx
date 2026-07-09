import { Link } from 'react-router-dom'

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  to, 
  className = '', 
  icon: Icon,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-green to-brand-green-dark text-white hover:from-brand-green-dark hover:to-[#1B6626] shadow-[0_8px_20px_rgb(46,157,66,0.3)] hover:shadow-[0_12px_25px_rgb(46,157,66,0.4)] hover:-translate-y-0.5 focus:ring-brand-green",
    secondary: "bg-brand-navy text-white hover:bg-brand-navy-light shadow-[0_8px_20px_rgb(10,31,68,0.2)] hover:shadow-[0_12px_25px_rgb(10,31,68,0.3)] hover:-translate-y-0.5 focus:ring-brand-navy",
    outline: "bg-transparent border-2 border-white/80 text-white hover:bg-white hover:text-brand-navy focus:ring-white",
    ghost: "bg-transparent text-brand-green hover:text-brand-green-dark hover:underline focus:ring-brand-green",
    white: "bg-white text-brand-navy hover:bg-brand-grey-light shadow-md hover:shadow-[0_8px_20px_rgb(0,0,0,0.1)] hover:-translate-y-0.5 focus:ring-white focus:ring-offset-brand-navy",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_25px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 focus:ring-[#25D366]"
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {children}
      {Icon && <Icon className={`w-5 h-5 ${variant === 'ghost' ? 'transition-transform group-hover:translate-x-1' : ''}`} />}
    </>
  )

  if (to) {
    return <Link to={to} className={classes} {...props}>{content}</Link>
  }

  if (href) {
    return <a href={href} className={classes} {...props}>{content}</a>
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}
