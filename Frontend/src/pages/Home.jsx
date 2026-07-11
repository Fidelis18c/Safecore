import PageMeta from '../components/seo/PageMeta'
import Hero from '../components/sections/Hero'
import StatsBanner from '../components/sections/StatsBanner'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import FeaturedServices from '../components/sections/FeaturedServices'
import HowItWorks from '../components/sections/HowItWorks'
import TestimonialSlider from '../components/sections/TestimonialSlider'
import CtaBand from '../components/sections/CtaBand'
import { COMPANY } from '../data/staticContent'
import protectLarge from '../assets/Protect Large.jpeg'
import protectSmall from '../assets/Protect Small.jpeg'

export default function Home() {
  const metaDesc = `${COMPANY.tagline}. Tanzania's leading mining safety company. Expert training, audits, risk assessments & PPE supply for mining companies in Dar es Salaam and beyond.`

  return (
    <>
      <PageMeta 
        title={`${COMPANY.name} | Mining Safety Training Tanzania`} 
        description={metaDesc}
      />
      
      <main id="main-content">
        <Hero />
        <StatsBanner />
        <WhyChooseUs />
        <FeaturedServices />
        <HowItWorks />
        
        {/* Client Benefits Section (from plan) */}
        <section className="py-24 md:py-32 bg-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-grey-light/50 -skew-x-12 translate-x-32 hidden lg:block"></div>
          
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="order-2 lg:order-1 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green to-brand-green-dark rounded-[2.5rem] transform -rotate-3 scale-105 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
                {/* Large image */}
                <img
                  src={protectLarge}
                  alt="Workplace safety in action"
                  className="relative z-10 w-full h-[550px] object-cover rounded-[2.5rem] group-hover:-translate-y-2 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Small floating image (bouncing) */}
                <img
                  src={protectSmall}
                  alt="SAFE Core safety team"
                  className="absolute -bottom-8 -right-8 w-40 h-40 md:w-52 md:h-52 object-cover rounded-3xl z-20 animate-bounce-slow"
                  loading="lazy"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-navy mb-6">
                  Protect Your People.<br />
                  <span className="text-brand-green">Protect Your Productivity.</span>
                </h2>
                <p className="text-brand-grey-mid text-lg leading-relaxed mb-8">
                  Workplace accidents don't just harm your team—they halt operations, damage reputations, and invite regulatory fines. Partnering with SAFE Core ensures your operations run smoothly and safely, every single day.
                </p>
                <ul className="flex flex-col gap-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div>
                      <strong className="text-brand-navy block">Ensure Total Compliance</strong>
                      <span className="text-brand-grey-mid text-sm">Avoid OSHA penalties and legal liabilities.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div>
                      <strong className="text-brand-navy block">Reduce Operational Downtime</strong>
                      <span className="text-brand-grey-mid text-sm">Fewer accidents mean higher, uninterrupted productivity.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div>
                      <strong className="text-brand-navy block">Boost Worker Morale</strong>
                      <span className="text-brand-grey-mid text-sm">A safe environment attracts and retains the best talent.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <TestimonialSlider />
        <CtaBand />
      </main>
    </>
  )
}
