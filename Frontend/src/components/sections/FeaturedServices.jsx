import { SERVICES } from '../../data/staticContent'
import ServiceImageCard from '../cards/ServiceImageCard'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function FeaturedServices() {
  // triggerOnce: false — replay the slide-in every time the section re-enters view
  const [ref, isVisible] = useScrollAnimation({ triggerOnce: false })

  // Featured services shown as equal portrait image cards
  const featuredSlugs = ['mining-safety-training', 'workplace-safety-audits', 'ppe-supply-distribution']
  const featuredServices = featuredSlugs.map(slug => SERVICES.find(s => s.slug === slug))

  return (
    <section className="py-20 md:py-28 bg-brand-grey-light">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
        <SectionHeader
          badge="Our Expertise"
          plainBadge
          title="Comprehensive Safety Solutions"
          subtitle="From frontline training to executive consultancy, we provide end-to-end services to keep your operations compliant and your workforce safe."
        />

        <div
          ref={ref}
          className={`flex flex-col lg:flex-row items-stretch gap-6 lg:gap-0 mb-12 max-w-6xl mx-auto ${isVisible ? 'visible' : ''}`}
        >
          {/* Card 1 — slides in from the left */}
          <div className={`flex-1 slide-left ${isVisible ? 'visible' : ''}`}>
            <ServiceImageCard service={featuredServices[0]} className="min-h-[640px]" />
          </div>

          {/* Animated vertical divider */}
          <Divider isVisible={isVisible} />

          {/* Card 2 — fades up in the middle */}
          <div className={`flex-1 fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
            <ServiceImageCard service={featuredServices[1]} className="min-h-[640px]" />
          </div>

          {/* Animated vertical divider */}
          <Divider isVisible={isVisible} />

          {/* Card 3 — slides in from the right */}
          <div className={`flex-1 slide-right ${isVisible ? 'visible' : ''}`}>
            <ServiceImageCard service={featuredServices[2]} className="min-h-[640px]" />
          </div>
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

// Thin vertical line between cards that "draws" itself in when the section appears
function Divider({ isVisible }) {
  return (
    <div className="hidden lg:flex items-center justify-center px-6 shrink-0">
      <span
        className={`block w-px h-3/4 bg-gradient-to-b from-transparent via-brand-green to-transparent origin-center transition-transform duration-[1200ms] ease-out ${
          isVisible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
      />
    </div>
  )
}
