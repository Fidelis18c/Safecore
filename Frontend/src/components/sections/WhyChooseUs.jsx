import { WHY_CHOOSE } from '../../data/staticContent'
import SectionHeader from '../ui/SectionHeader'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function WhyChooseUs() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-28 bg-brand-grey-light bg-grid-pattern">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
        <SectionHeader
          badge="Why Choose SAFE Core"
          plainBadge
          title="The Standard in Mining Safety"
          subtitle="We don't just tick compliance boxes. We build robust safety cultures that protect your most valuable asset—your people."
        />
        
        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children ${isVisible ? 'visible' : ''}`}
        >
          {WHY_CHOOSE.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(10,31,68,0.08)] border border-gray-100 hover:border-brand-navy/20 transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-16 h-16 rounded-2xl bg-brand-navy/5 flex items-center justify-center mb-8 group-hover:bg-brand-navy transition-colors duration-500">
                  <Icon className="w-8 h-8 text-brand-navy group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-green transition-colors duration-300">{item.title}</h3>
                <p className="text-brand-grey-mid leading-relaxed text-base">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
