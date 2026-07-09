import PageMeta from '../components/seo/PageMeta'
import SectionHeader from '../components/ui/SectionHeader'
import BreadCrumb from '../components/ui/BreadCrumb'
import CtaBand from '../components/sections/CtaBand'
import { CORE_VALUES } from '../data/staticContent'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { CheckCircle2, Shield, Target } from 'lucide-react'

export default function About() {
  const [ref1, isVisible1] = useScrollAnimation()
  const [ref2, isVisible2] = useScrollAnimation()

  const objectives = [
    'To provide world-class safety training tailored to the Tanzanian mining context.',
    'To assist organisations in achieving and maintaining full compliance with OSHA Tanzania regulations.',
    'To supply high-quality, certified PPE to protect workers in hazardous environments.',
    'To foster a proactive safety culture that prioritises hazard awareness and risk mitigation.',
    'To reduce the frequency and severity of workplace accidents across the sectors we serve.'
  ]

  return (
    <>
      <PageMeta 
        title="About SAFE Core | Mining Safety Experts in Tanzania" 
        description="Learn about SAFE Core Company Limited — our mission, vision, values and expert team dedicated to protecting Tanzania's mining workforce."
      />
      
      <main id="main-content">
        {/* Page Hero */}
        <section className="bg-brand-navy-dark pt-32 pb-20 border-b border-white/10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
            <BreadCrumb items={[{ label: 'About Us' }]} />
            <div className="mt-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                About SAFE Core
              </h1>
              <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
                We are Tanzania's premier occupational health and safety consultancy, dedicated to protecting lives and building safer, more productive workplaces.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-brand-navy mb-6">Our Story</h2>
                <div className="prose prose-lg text-brand-grey-mid">
                  <p>
                    SAFE Core Company Limited was founded in Dar es Salaam with a singular, urgent mission: to drastically reduce workplace accidents in Tanzania's demanding mining and industrial sectors.
                  </p>
                  <p>
                    We witnessed firsthand the devastating impact of inadequate safety protocols, insufficient training, and substandard protective equipment, particularly in the artisanal and small-scale mining communities. We recognised that safety shouldn't be a luxury for large multinationals—it is a fundamental right for every worker.
                  </p>
                  <p>
                    Today, SAFE Core bridges the gap between international safety standards and local operational realities. We don't just supply equipment or deliver theoretical lectures; we partner with organisations to embed a robust culture of safety that protects their people and enhances their productivity.
                  </p>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop" 
                  alt="Team inspecting equipment" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-navy/20 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-brand-grey-light">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
            <div 
              ref={ref1}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children ${isVisible1 ? 'visible' : ''}`}
            >
              <div className="bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-brand-green/20 relative overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-bl-[100px] -z-10 group-hover:bg-brand-green/10 transition-colors"></div>
                <Shield className="w-12 h-12 text-brand-green mb-6" />
                <h2 className="text-3xl font-extrabold text-brand-navy mb-4">Our Vision</h2>
                <p className="text-lg text-brand-grey-mid leading-relaxed">
                  To be the leading and most trusted occupational health and safety partner in Tanzania, setting the gold standard for workplace protection and compliance across the mining and industrial sectors.
                </p>
              </div>
              
              <div className="bg-brand-navy rounded-3xl p-10 md:p-12 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] -z-10 group-hover:bg-white/10 transition-colors"></div>
                <Target className="w-12 h-12 text-brand-green mb-6" />
                <h2 className="text-3xl font-extrabold text-white mb-4">Our Mission</h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  To empower organisations with expert safety training, rigorous compliance audits, and high-quality protective solutions, ensuring that every worker returns home safely at the end of the day while maximising operational productivity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
            <SectionHeader 
              badge="What Drives Us"
              title="Our Core Values"
            />
            
            <div 
              ref={ref2}
              className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 stagger-children ${isVisible2 ? 'visible' : ''}`}
            >
              {CORE_VALUES.map((value, idx) => (
                <div key={idx} className="bg-brand-grey-light p-6 rounded-2xl border border-gray-100 hover:-translate-y-1 transition-transform">
                  <div className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center font-bold mb-4 shadow-md shadow-brand-green/30">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">{value.title}</h3>
                  <p className="text-sm text-brand-grey-mid">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Objectives */}
        <section className="py-20 bg-brand-navy-dark border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888087326-80f089f3032b?q=80&w=2940&auto=format&fit=crop')] opacity-5 bg-cover bg-center mix-blend-screen"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12">
              Our Strategic Objectives
            </h2>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
              <ul className="flex flex-col gap-6">
                {objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-lg text-white/90">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Founder Profile */}
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
              <div className="w-full md:w-1/3">
                <div className="aspect-square rounded-full overflow-hidden border-8 border-brand-grey-light mx-auto max-w-[300px] shadow-xl">
                  {/* Placeholder for Founder Photo */}
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                    alt="Managing Director" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <Badge variant="green" className="mb-4">Leadership</Badge>
                <h2 className="text-3xl font-extrabold text-brand-navy mb-2">Managing Director</h2>
                <h3 className="text-xl text-brand-grey-mid mb-6">Expert Safety Consultant</h3>
                <p className="text-brand-grey-dark leading-relaxed mb-6">
                  With over a decade of experience in occupational health and safety across East Africa, our leadership brings unparalleled expertise to SAFE Core. Holding advanced certifications in safety management and risk assessment, they have successfully led compliance turnarounds for major mining operations in Tanzania.
                </p>
                <p className="text-brand-grey-dark leading-relaxed font-medium italic">
                  "Safety is not just a regulatory hurdle; it is the absolute foundation of sustainable, profitable operations. At SAFE Core, we are dedicated to ensuring that every miner returns to their family safe and sound."
                </p>
              </div>
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
    </>
  )
}

function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: "bg-brand-grey-light text-brand-grey-dark",
    green: "bg-brand-green/10 text-brand-green",
  }
  return <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${variants[variant]} ${className}`}>{children}</span>
}
