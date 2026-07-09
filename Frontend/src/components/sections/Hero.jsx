import { ArrowRight, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function Hero() {
  const [ref, isVisible] = useScrollAnimation()

  // Placeholder background image
  const bgImage = 'https://images.unsplash.com/photo-1541888087326-80f089f3032b?q=80&w=2940&auto=format&fit=crop'

  return (
    <section className="relative min-h-[95vh] flex items-center pt-20 pb-12 overflow-hidden bg-brand-navy-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Mining operations in Tanzania" 
          className="w-full h-full object-cover scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-brand-navy-dark/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-transparent to-brand-navy-dark/50"></div>
        <div className="absolute inset-0 bg-grid-pattern-light opacity-20"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 relative z-10 w-full py-12 md:py-24">
        <div 
          ref={ref}
          className={`max-w-3xl stagger-children ${isVisible ? 'visible' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-sm font-semibold mb-8">
            <Shield className="w-4 h-4 text-brand-green" />
            <span>Tanzania's Premier Mining Safety Partner</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black text-white leading-[1.1] mb-6 tracking-tight">
            Protecting Lives.<br/>
            <span className="text-brand-green">Building Safer Workplaces.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl font-medium">
            Expert safety training, rigorous workplace audits, and certified PPE solutions for mining companies and industrial operations across Tanzania.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/quote" size="lg" icon={ArrowRight}>
              Request a Quote
            </Button>
            <Button to="/services" variant="outline" size="lg">
              Explore Our Services
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 flex items-center gap-6 pt-8 border-t border-white/20">
            <div className="text-sm">
              <div className="text-white font-bold text-xl">100%</div>
              <div className="text-white/60">OSHA Compliant</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-sm">
              <div className="text-white font-bold text-xl">Certified</div>
              <div className="text-white/60">Safety Trainers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
