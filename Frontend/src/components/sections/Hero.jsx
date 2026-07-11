import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import bgImage from '../../assets/Hero1.jpeg'

export default function Hero() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section className="relative min-h-[95vh] flex items-center pt-20 pb-24 overflow-hidden bg-brand-navy-dark [clip-path:polygon(0_0,100%_0,100%_100%,50%_calc(100%-110px),0_100%)]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Mining operations in Tanzania"
          className="w-full h-full object-cover scale-105"
          loading="eager"
        />
        {/* Light base tint so the photo stays visible but slightly cohesive */}
        <div className="absolute inset-0 bg-brand-navy-dark/35"></div>
        {/* Left-to-right scrim: dark behind the copy, fully clear on the right so the image shows */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark/50 via-brand-navy-dark/20 to-transparent"></div>
        {/* Top/bottom fade to blend with the page */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/80 via-transparent to-brand-navy-dark/40"></div>
        <div className="absolute inset-0 bg-grid-pattern-light opacity-10"></div>
        {/* Vignette — soft inner shadow framing the image edges */}
        <div className="absolute inset-0 shadow-[inset_0_0_80px_0px_rgba(6,19,43,0.12)]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 relative z-10 w-full py-12 md:py-24">
        <div 
          ref={ref}
          className={`max-w-3xl stagger-children ${isVisible ? 'visible' : ''}`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black text-white leading-[1.1] mb-6 tracking-tight [text-shadow:0_2px_20px_rgba(6,19,43,0.6)]">
            Protecting Lives.<br/>
            <span className="text-brand-green">Building Safer Workplaces.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl font-medium [text-shadow:0_1px_12px_rgba(6,19,43,0.5)]">
            Expert safety training, rigorous workplace audits, and certified PPE solutions for mining companies and industrial operations across Tanzania.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button to="/quote" size="md" icon={ArrowRight}>
              Request a Quote
            </Button>
            <Button to="/services" variant="outline" size="md">
              Explore Our Services
            </Button>
          </div>

          {/* Divider line */}
          <div className="mt-16 pt-8 border-t border-white/20"></div>
        </div>
      </div>
    </section>
  )
}
