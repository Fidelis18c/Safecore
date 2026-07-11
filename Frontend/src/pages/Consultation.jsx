import PageMeta from '../components/seo/PageMeta'
import PageHeroBg from '../components/ui/PageHeroBg'
import NavlinksHero from '../assets/Navlinks Hero.jpeg'
import ConsultationForm from '../components/forms/ConsultationForm'
import { Calendar, Clock, Video } from 'lucide-react'

export default function Consultation() {
  return (
    <>
      <PageMeta 
        title="Book Free Consultation | SAFE Core" 
        description="Schedule a free initial consultation with our safety experts to discuss your compliance and training needs."
      />
      
      <main id="main-content">
        <section className="relative overflow-hidden bg-brand-navy-dark pt-32 pb-24 border-b border-white/10">
          <PageHeroBg image={NavlinksHero} />
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                Free Safety Consultation
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Let's discuss your current safety challenges and explore how SAFE Core can help you achieve total compliance.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20 bg-brand-grey-light relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative mt-12">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col md:flex-row">
              
              <div className="w-full md:w-5/12 bg-brand-navy p-10 md:p-16 text-white">
                <h3 className="text-2xl font-bold mb-6">What to expect</h3>
                <ul className="flex flex-col gap-6">
                  <li className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-white shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold">30-Minute Session</h4>
                      <p className="text-white/70 text-sm mt-1">A brief, focused discussion on your immediate needs.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Video className="w-6 h-6 text-white shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold">Virtual or Phone</h4>
                      <p className="text-white/70 text-sm mt-1">We can meet via Zoom, Teams, or a standard phone call.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-white shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold">No Obligation</h4>
                      <p className="text-white/70 text-sm mt-1">Completely free initial assessment with zero commitment required.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-7/12 p-10 md:p-16 bg-brand-navy-light">
                <ConsultationForm />
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  )
}
