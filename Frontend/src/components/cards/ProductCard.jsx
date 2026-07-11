import { MessageCircle, CheckCircle2 } from 'lucide-react'
import { COMPANY } from '../../data/staticContent'

export default function ProductCard({ product }) {
  const { name, description, features, whatsapp_msg, image } = product

  const defaultMsg = whatsapp_msg || `Hello SAFE Core, I am interested in purchasing ${name}. Please provide a quote.`
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(defaultMsg)}`

  // Fallback for products that don't have a photo yet
  const placeholderImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=F4F6F9&color=14294D&size=400&font-size=0.15`

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(10,31,68,0.12)] border border-gray-100 hover:border-brand-navy/20 transition-all duration-500 flex flex-col h-full group hover:-translate-y-2">
      <div className="relative aspect-square bg-brand-grey-light overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-grey-light to-white/50 mix-blend-overlay"></div>
            <img
              src={placeholderImage}
              alt={name}
              className="relative z-10 w-full h-full object-contain p-8 mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
          </>
        )}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-brand-navy text-xs font-black px-4 py-1.5 rounded-full shadow-[0_8px_20px_rgb(0,0,0,0.1)] z-20">
          IN STOCK
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow relative">
        <div className="absolute top-0 right-8 -mt-6 bg-brand-green text-white w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 z-30">
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
          className="inline-flex items-center self-center gap-2 bg-gradient-to-r from-brand-green to-brand-green-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:from-brand-green-dark hover:to-[#1B6626] shadow-md shadow-brand-green/30 hover:shadow-lg hover:shadow-brand-green/40 transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          Order on WhatsApp
        </a>
      </div>
    </div>
  )
}
