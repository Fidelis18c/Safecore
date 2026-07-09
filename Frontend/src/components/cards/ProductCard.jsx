import { MessageCircle, CheckCircle2 } from 'lucide-react'
import { COMPANY } from '../../data/staticContent'

export default function ProductCard({ product }) {
  const { name, description, features, whatsapp_msg } = product
  
  const defaultMsg = whatsapp_msg || `Hello SAFE Core, I am interested in purchasing ${name}. Please provide a quote.`
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(defaultMsg)}`
  
  // Using placeholder image since real images aren't available yet
  const placeholderImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=F4F6F9&color=14294D&size=400&font-size=0.15`

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(10,31,68,0.12)] border border-gray-100 hover:border-brand-navy/20 transition-all duration-500 flex flex-col h-full group hover:-translate-y-2">
      <div className="relative aspect-square bg-brand-grey-light p-8 flex items-center justify-center overflow-hidden">
        {/* Placeholder for actual product image */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-grey-light to-white/50 mix-blend-overlay"></div>
        <img 
          src={placeholderImage} 
          alt={name} 
          className="relative z-10 w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-brand-navy text-xs font-black px-4 py-1.5 rounded-full shadow-[0_8px_20px_rgb(0,0,0,0.1)] z-20">
          IN STOCK
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow relative">
        <div className="absolute top-0 right-8 -mt-6 bg-brand-green text-white w-12 h-12 rounded-full flex items-center justify-center shadow-[0_8px_20px_rgb(46,157,66,0.4)] opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 z-30">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        
        <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-green transition-colors">{name}</h3>
        <p className="text-brand-grey-mid text-sm mb-6 line-clamp-2 leading-relaxed">{description}</p>
        
        <div className="mb-8 flex-grow">
          <ul className="flex flex-col gap-3">
            {features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-brand-grey-dark">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5 shrink-0"></div>
                <span className="font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-4 py-3.5 rounded-xl font-bold hover:from-[#128C7E] hover:to-[#075E54] transition-all shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_25px_rgba(37,211,102,0.4)] hover:-translate-y-0.5"
        >
          <MessageCircle className="w-5 h-5" />
          Order on WhatsApp
        </a>
      </div>
    </div>
  )
}
