import { Link } from 'react-router-dom'
import PageMeta from '../components/seo/PageMeta'
import PageHeroBg from '../components/ui/PageHeroBg'
import NavlinksHero from '../assets/Navlinks Hero.jpeg'
import storyImage from '../assets/Mining Safety training.jpeg'
import SectionHeader from '../components/ui/SectionHeader'
import CtaBand from '../components/sections/CtaBand'
import { CORE_VALUES, SERVICES } from '../data/staticContent'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Shield, Target, ArrowRight } from 'lucide-react'

export default function About() {
  const [ref1, isVisible1] = useScrollAnimation()
  const [ref2, isVisible2] = useScrollAnimation()

  // Three core service categories (image pulled from the matching service)
  const categories = [
    {
      slug: 'mining-safety-training',
      title: 'Training',
      desc: 'Equip your workforce with certified, hands-on safety training tailored to mining and industrial operations across Tanzania.',
    },
    {
      slug: 'workplace-safety-audits',
      title: 'Audits & Assessment',
      desc: 'Identify compliance gaps and hazards with thorough on-site audits and structured risk assessments against OSHA standards.',
    },
    {
      slug: 'ppe-supply-distribution',
      title: 'PPE & Protection',
      desc: 'Source and distribute certified personal protective equipment that keeps your workers safe on every shift.',
    },
  ].map((c) => ({ ...c, image: SERVICES.find((s) => s.slug === c.slug)?.image }))

  return (
    <>
      <PageMeta 
        title="About SAFE Core | Mining Safety Experts in Tanzania" 
        description="Learn about SAFE Core Company Limited — our mission, vision, values and expert team dedicated to protecting Tanzania's mining workforce."
      />
      
      <main id="main-content">
        {/* Page Hero */}
        <section className="relative overflow-hidden bg-brand-navy-dark pt-32 pb-20 border-b border-white/10">
          <PageHeroBg image={NavlinksHero} />
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 relative z-10">
            <div>
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
              <div className="relative overflow-hidden shadow-2xl h-[500px]">
                <img
                  src={storyImage}
                  alt="SAFE Core safety training in action"
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
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto stagger-children ${isVisible1 ? 'visible' : ''}`}
            >
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-brand-green/20 relative overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-bl-[100px] -z-10 group-hover:bg-brand-green/10 transition-colors"></div>
                <Shield className="w-8 h-8 text-brand-navy mb-4" />
                <h2 className="text-2xl font-extrabold text-brand-navy mb-3">Our Vision</h2>
                <p className="text-base text-brand-grey-mid leading-relaxed">
                  To be the leading and most trusted occupational health and safety partner in Tanzania, setting the gold standard for workplace protection and compliance across the mining and industrial sectors.
                </p>
              </div>

              <div className="bg-brand-navy rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] -z-10 group-hover:bg-white/10 transition-colors"></div>
                <Target className="w-8 h-8 text-white mb-4" />
                <h2 className="text-2xl font-extrabold text-white mb-3">Our Mission</h2>
                <p className="text-base text-white/80 leading-relaxed">
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
              plainBadge
              bigBadge
            />
            
            <div 
              ref={ref2}
              className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 stagger-children ${isVisible2 ? 'visible' : ''}`}
            >
              {CORE_VALUES.map((value, idx) => (
                <div key={idx} className="bg-brand-grey-light p-6 rounded-2xl border border-gray-100 hover:-translate-y-1 transition-transform">
                  <h3 className="text-lg font-bold text-brand-navy mb-2">{value.title}</h3>
                  <p className="text-sm text-brand-grey-mid">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 bg-brand-grey-light">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
            <div className="max-w-4xl mx-auto text-center mb-14 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-navy leading-snug">
                We provide expert, independent safety services that make a real difference in workers' lives.
              </h2>
              <p className="mt-4 text-xl md:text-2xl font-semibold text-brand-navy">
                Our core services can be divided into three categories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {categories.map((cat) => (
                <div key={cat.slug} className="flex flex-col">
                  <Link to={`/services/${cat.slug}`} className="block overflow-hidden group">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      loading="lazy"
                      className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <h3 className="mt-6 text-2xl font-bold text-brand-navy">{cat.title}</h3>
                  <p className="mt-3 text-brand-grey-mid leading-relaxed">{cat.desc}</p>
                  <Link
                    to={`/services/${cat.slug}`}
                    className="mt-6 inline-flex items-center gap-2 self-start px-5 py-2.5 border border-brand-navy/25 rounded-lg text-sm font-semibold text-brand-navy hover:bg-brand-navy hover:text-white transition-colors"
                  >
                    Read more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>

            <p className="text-center mt-16 text-2xl md:text-3xl font-bold text-brand-navy">
              We also offer{' '}
              <Link to="/services/safety-consultancy" className="text-brand-green hover:underline">
                training and consultancy services
              </Link>
            </p>
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
