import { Link } from 'react-router-dom'
import PageMeta from '../components/seo/PageMeta'
import PageHeroBg from '../components/ui/PageHeroBg'
import NavlinksHero from '../assets/Navlinks Hero.jpeg'
import SectionHeader from '../components/ui/SectionHeader'
import CtaBand from '../components/sections/CtaBand'
import { SERVICES } from '../data/staticContent'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ClipboardList, GraduationCap, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react'

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
        <section className="relative overflow-hidden bg-brand-navy-dark pt-32 pb-20 border-b border-white/10">
          <PageHeroBg image={NavlinksHero} />
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 relative z-10">
            <div className="max-w-3xl">
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
              align="left"
            />
            
            <div
              ref={ref}
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 stagger-children ${isVisible ? 'visible' : ''}`}
            >
              {SERVICES.map((service) => (
                <div key={service.slug} className="flex flex-col">
                  <Link to={`/services/${service.slug}`} className="block overflow-hidden group">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <h3 className="mt-5 text-xl font-bold text-brand-navy">{service.title}</h3>
                  <p className="mt-2 text-sm text-brand-grey-mid leading-relaxed">{service.shortDesc}</p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-4 inline-flex items-center gap-2 self-start text-sm font-semibold text-brand-green group"
                  >
                    Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
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
                    <div className="w-20 h-20 rounded-full bg-white border-4 border-brand-grey-light flex items-center justify-center mb-6 group-hover:border-brand-green transition-colors">
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
