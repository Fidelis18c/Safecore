import { MessageCircle } from 'lucide-react'
import { COMPANY } from '../../data/staticContent'

export default function WhatsAppFloat({ message = 'Hello SAFE Core, I would like to enquire about your services.' }) {
  const url = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
      <span className="hidden sm:inline text-sm font-semibold">Chat with us</span>

      {/* Pulse ring */}
      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-brand-green">
        <span className="absolute inset-0 rounded-full bg-brand-green animate-ping opacity-75"></span>
      </span>
    </a>
  )
}
