import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ service, index = 0 }) {
  const { slug, title, shortDesc, icon: Icon } = service
  
  return (
    <Link 
      to={`/services/${slug}`}
      className="group relative block bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(46,157,66,0.15)] border border-gray-100 hover:border-brand-green/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-green/10 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-125 duration-500 z-0"></div>
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-8 group-hover:bg-gradient-to-br group-hover:from-brand-green group-hover:to-brand-green-dark transition-all duration-500 shadow-sm group-hover:shadow-[0_8px_20px_rgb(46,157,66,0.3)]">
          <Icon className="w-8 h-8 text-brand-green group-hover:text-white transition-colors duration-500" />
        </div>
        
        <h3 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-green transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-brand-grey-mid text-sm leading-relaxed mb-8 line-clamp-3">
          {shortDesc}
        </p>
        
        <div className="flex items-center gap-2 text-brand-navy font-bold text-sm group-hover:text-brand-green transition-colors duration-300">
          Explore Service
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
