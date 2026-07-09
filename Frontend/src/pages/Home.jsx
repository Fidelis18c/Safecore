import PageMeta from '../components/seo/PageMeta'
import Hero from '../components/sections/Hero'
import StatsBanner from '../components/sections/StatsBanner'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import FeaturedServices from '../components/sections/FeaturedServices'
import HowItWorks from '../components/sections/HowItWorks'
import TestimonialSlider from '../components/sections/TestimonialSlider'
import CtaBand from '../components/sections/CtaBand'
import { COMPANY } from '../data/staticContent'

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
                {/* Placeholder Image */}
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop" 
                  alt="Mining safety audit" 
                  className="relative z-10 w-full h-[550px] object-cover rounded-[2.5rem] shadow-2xl border-8 border-white group-hover:-translate-y-2 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Floating card */}
                <div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-[0_20px_40px_rgb(0,0,0,0.1)] z-20 border border-white max-w-[260px] animate-bounce-slow">
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-green-dark mb-2">0</div>
                  <div className="text-brand-navy font-bold text-sm uppercase tracking-wider">Lost Time Injuries Target</div>
                </div>
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
                    <div className="w-6 h-6 rounded-full bg-brand-success/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-brand-success"></div>
                    </div>
                    <div>
                      <strong className="text-brand-navy block">Ensure Total Compliance</strong>
                      <span className="text-brand-grey-mid text-sm">Avoid OSHA penalties and legal liabilities.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-success/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-brand-success"></div>
                    </div>
                    <div>
                      <strong className="text-brand-navy block">Reduce Operational Downtime</strong>
                      <span className="text-brand-grey-mid text-sm">Fewer accidents mean higher, uninterrupted productivity.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-success/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-brand-success"></div>
                    </div>
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
