import { PhoneCall, ClipboardList, ShieldCheck } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function HowItWorks() {
  const [ref, isVisible] = useScrollAnimation()

  const steps = [
    {
      icon: PhoneCall,
      title: '1. Initial Consultation',
      desc: 'We discuss your specific operations, workforce size, and safety challenges to understand your exact needs.'
    },
    {
      icon: ClipboardList,
      title: '2. Safety Assessment',
      desc: 'Our experts conduct a thorough review or on-site audit to identify compliance gaps and hazard risks.'
    },
    {
      icon: ShieldCheck,
      title: '3. Implementation',
      desc: 'We deliver tailored training, supply required PPE, and help implement robust safety management systems.'
    }
  ]

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-5/12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6">
              A Simplified Path to <span className="text-brand-green">Total Compliance</span>
            </h2>
            <p className="text-brand-grey-mid text-lg mb-8 leading-relaxed">
              We understand that safety regulations can be complex. Our proven three-step process makes achieving OSHA Tanzania compliance straightforward and hassle-free.
            </p>
          </div>
          
          <div className="w-full lg:w-7/12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-8 left-8 bottom-8 w-0.5 bg-brand-grey-light z-0"></div>
            
            <div 
              ref={ref}
              className={`flex flex-col gap-8 stagger-children ${isVisible ? 'visible' : ''}`}
            >
              {steps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <div key={idx} className="relative z-10 flex gap-6 group">
                    <div className="shrink-0 w-16 h-16 rounded-full bg-white border-4 border-brand-grey-light flex items-center justify-center group-hover:border-brand-green group-hover:bg-brand-green/10 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-brand-navy group-hover:text-brand-green transition-colors" />
                    </div>
                    <div className="pt-3">
                      <h3 className="text-xl font-bold text-brand-navy mb-2">{step.title}</h3>
                      <p className="text-brand-grey-mid">{step.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
