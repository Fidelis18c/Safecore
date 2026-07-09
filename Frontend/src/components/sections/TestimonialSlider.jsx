import { useState, useEffect } from 'react'
import { TESTIMONIALS } from '../../data/staticContent'
import SectionHeader from '../ui/SectionHeader'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500)
    return () => clearTimeout(timer)
  }, [currentIndex])

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 md:py-28 bg-brand-navy relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border-[20px] border-white"></div>
        <div className="absolute top-1/2 -right-32 w-64 h-64 rounded-full border-[15px] border-brand-green"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 relative z-10">
        <SectionHeader 
          badge="Client Success"
          title="Trusted by Tanzania's Industry Leaders"
          light={true}
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <Quote className="absolute top-6 right-8 w-16 h-16 text-white/10" />
            
            <div className="relative min-h-[220px] md:min-h-[180px] flex items-center">
              {TESTIMONIALS.map((testimonial, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-in-out ${
                    idx === currentIndex 
                      ? 'opacity-100 translate-x-0 pointer-events-auto' 
                      : 'opacity-0 translate-x-8 pointer-events-none'
                  }`}
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-brand-green text-brand-green" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-bold">{testimonial.name}</div>
                      <div className="text-white/60 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-brand-navy border border-white/20 text-white flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-colors shadow-lg"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-brand-navy border border-white/20 text-white flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-colors shadow-lg"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
