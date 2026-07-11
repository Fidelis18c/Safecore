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
          
          <div className="w-full lg:w-7/12">
            <div
              ref={ref}
              className={`flex flex-col gap-5 stagger-children ${isVisible ? 'visible' : ''}`}
            >
              {steps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <div key={idx} className="flex gap-4 group items-start">
                    <Icon className="shrink-0 w-8 h-8 text-brand-green mt-0.5" />
                    <div>
                      <h3 className="text-xl font-bold text-brand-navy mb-1.5">{step.title}</h3>
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
