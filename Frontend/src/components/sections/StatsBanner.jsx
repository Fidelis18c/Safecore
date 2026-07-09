import { STATS } from '../../data/staticContent'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function StatsBanner() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.5 })

  return (
    <section className="relative -mt-20 md:-mt-24 z-20 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
      <div className="bg-brand-navy-dark/90 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgb(0,0,0,0.3)]">
        <div 
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/10 stagger-children ${isVisible ? 'visible' : ''}`}
        >
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-green mb-2 font-heading tracking-tighter drop-shadow-lg">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-white/80 font-bold uppercase tracking-widest mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
