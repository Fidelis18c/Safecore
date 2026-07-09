import { SERVICES } from '../../data/staticContent'
import ServiceCard from '../cards/ServiceCard'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function FeaturedServices() {
  const [ref, isVisible] = useScrollAnimation()
  
  // Only show the first 4 services on the home page
  const featuredServices = SERVICES.slice(0, 4)

  return (
    <section className="py-20 md:py-28 bg-brand-grey-light">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
        <SectionHeader 
          badge="Our Expertise"
          title="Comprehensive Safety Solutions"
          subtitle="From frontline training to executive consultancy, we provide end-to-end services to keep your operations compliant and your workforce safe."
        />
        
        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 stagger-children ${isVisible ? 'visible' : ''}`}
        >
          {featuredServices.map((service, idx) => (
            <ServiceCard key={service.slug} service={service} index={idx} />
          ))}
        </div>
        
        <div className="text-center">
          <Button to="/services" variant="secondary" icon={ArrowRight}>
            View All 8 Services
          </Button>
        </div>
      </div>
    </section>
  )
}
