import { ArrowRight, MessageCircle } from 'lucide-react'
import Button from '../ui/Button'
import { COMPANY } from '../../data/staticContent'

export default function CtaBand() {
  return (
    <section className="bg-brand-green relative overflow-hidden">
      {/* Abstract wave background */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full object-cover">
          <path fill="#ffffff" fillOpacity="1" d="M0,160L48,165.3C96,171,192,181,288,170.7C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,112C1248,85,1344,43,1392,21.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 py-16 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-3/5 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
              Ready to protect your workforce?
            </h2>
            <p className="text-lg text-white/90 font-medium max-w-xl mx-auto md:mx-0">
              Contact SAFE Core today for a free initial consultation. Let's discuss how we can elevate your site's safety standards and ensure full OSHA compliance.
            </p>
          </div>
          
          <div className="w-full md:w-2/5 flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
            <Button to="/consultation" variant="white" size="lg" className="w-full sm:w-auto">
              Book Free Consultation
            </Button>
            <Button 
              href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent('Hello SAFE Core, I would like to enquire about your services.')}`}
              variant="outline" 
              size="lg" 
              icon={MessageCircle}
              className="w-full sm:w-auto hover:bg-white hover:text-brand-green border-white text-white"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
