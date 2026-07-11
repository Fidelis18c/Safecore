import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// Image-led service card: the service photo fills the card with the title
// (and an "Explore" affordance) overlaid at the bottom.
export default function ServiceImageCard({ service, className = '' }) {
  const { slug, title, image } = service

  return (
    <Link
      to={`/services/${slug}`}
      className={`group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-brand-navy-dark min-h-[240px] h-full p-6 md:p-8 ${className}`}
    >
      {image && (
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}
      {/* Bottom-weighted scrim for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/45 to-transparent group-hover:from-brand-navy transition-colors duration-500"></div>

      <div className="relative z-10">
        <h3 className="text-white font-bold text-xl md:text-2xl leading-tight [text-shadow:0_2px_12px_rgba(6,19,43,0.7)]">
          {title}
        </h3>
        <div className="mt-3 flex items-center gap-2 text-brand-green-light text-sm font-semibold opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          Explore Service
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
