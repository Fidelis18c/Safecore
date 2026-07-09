export default function SectionHeader({ badge, title, subtitle, align = 'center', light = false }) {
  const alignClass = align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : 'text-right'

  return (
    <div className={`${alignClass} mb-12 md:mb-16 max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}>
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4 ${
          light
            ? 'bg-white/10 text-white/90'
            : 'bg-brand-green/10 text-brand-green'
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-tight mb-4 ${
        light ? 'text-white' : 'text-brand-navy'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed ${
          light ? 'text-white/70' : 'text-brand-grey-mid'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
