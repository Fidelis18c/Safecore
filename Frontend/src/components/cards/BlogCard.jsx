import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Badge from '../ui/Badge'

export default function BlogCard({ post }) {
  const { slug, title, excerpt, category, readTime, publishedAt } = post
  
  // Format date
  const date = new Date(publishedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
  
  // Placeholder image based on title
  const placeholderImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(category)}&background=14294D&color=fff&size=800&font-size=0.1`

  return (
    <Link 
      to={`/resources/${slug}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 h-full"
    >
      <div className="relative aspect-video overflow-hidden bg-brand-navy">
        <img 
          src={placeholderImage} 
          alt={title} 
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="green" className="bg-brand-green text-white">{category}</Badge>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs text-brand-grey-mid font-medium mb-3">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {date}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {readTime} min read
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-green transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-brand-grey-mid text-sm mb-6 line-clamp-3 flex-grow">
          {excerpt}
        </p>
        
        <div className="flex items-center gap-2 text-brand-navy font-semibold text-sm group-hover:text-brand-green transition-colors mt-auto">
          Read Article
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
