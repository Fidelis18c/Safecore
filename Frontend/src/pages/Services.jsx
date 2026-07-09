import PageMeta from '../components/seo/PageMeta'
import SectionHeader from '../components/ui/SectionHeader'
import BreadCrumb from '../components/ui/BreadCrumb'
import ServiceCard from '../components/cards/ServiceCard'
import CtaBand from '../components/sections/CtaBand'
import { SERVICES } from '../data/staticContent'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ClipboardList, GraduationCap, ShieldCheck, TrendingUp } from 'lucide-react'

export default function Services() {
  const [ref, isVisible] = useScrollAnimation()

  const processSteps = [
    { icon: ClipboardList, title: 'Audit & Assess', desc: 'Identify gaps and evaluate current safety practices against OSHA standards.' },
    { icon: GraduationCap, title: 'Train & Equip', desc: 'Deliver certified training and supply high-quality protective equipment.' },
    { icon: ShieldCheck, title: 'Implement', desc: 'Establish robust safety management systems and emergency protocols.' },
    { icon: TrendingUp, title: 'Review & Improve', desc: 'Conduct ongoing monitoring to ensure a sustainable safety culture.' },
  ]

  return (
    <>
      <PageMeta 
        title="Mining Safety Services Tanzania | SAFE Core Company" 
        description="Comprehensive safety services for mining: training, hazard awareness, audits, risk assessments, emergency response and PPE supply."
      />
      
      <main id="main-content">
        {/* Page Hero */}
        <section className="bg-brand-navy-dark pt-32 pb-20 border-b border-white/10 bg-[url('https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center bg-blend-multiply">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
            <BreadCrumb items={[{ label: 'Services' }]} />
            <div className="mt-8 max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Comprehensive, end-to-end safety solutions designed to protect your workforce, ensure total regulatory compliance, and boost operational efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-brand-grey-light">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
            <SectionHeader 
              title="What We Offer"
              subtitle="Select a service below to learn more about how we can support your specific safety needs."
              align="left"
            />
            
            <div 
              ref={ref}
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children ${isVisible ? 'visible' : ''}`}
            >
              {SERVICES.map((service, idx) => (
                <ServiceCard key={service.slug} service={service} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
            <SectionHeader 
              badge="Methodology"
              title="The SAFE Core Process"
              subtitle="We employ a systematic, continuous improvement approach to occupational health and safety."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mt-16">
              {/* Connecting line (desktop only) */}
              <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-brand-grey-light z-0"></div>
              
              {processSteps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                    <div className="w-20 h-20 rounded-full bg-white border-4 border-brand-grey-light flex items-center justify-center mb-6 group-hover:border-brand-green transition-colors shadow-sm">
                      <Icon className="w-8 h-8 text-brand-navy group-hover:text-brand-green transition-colors" />
                    </div>
                    <div className="bg-brand-navy text-white text-xs font-bold px-3 py-1 rounded-full mb-4">Step {idx + 1}</div>
                    <h3 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h3>
                    <p className="text-sm text-brand-grey-mid">{step.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
    </>
  )
}
