import PageMeta from '../components/seo/PageMeta'
import BreadCrumb from '../components/ui/BreadCrumb'
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
        <section className="bg-brand-navy-dark pt-32 pb-32 border-b border-white/10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 text-center">
            <div className="flex justify-center mb-8">
              <BreadCrumb items={[{ label: 'Book Consultation' }]} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Free Safety Consultation
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your current safety challenges and explore how SAFE Core can help you achieve total compliance.
            </p>
          </div>
        </section>

        <section className="pb-20 bg-brand-grey-light relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-20">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col md:flex-row">
              
              <div className="w-full md:w-5/12 bg-brand-navy p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">What to expect</h3>
                <ul className="flex flex-col gap-6">
                  <li className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold">30-Minute Session</h4>
                      <p className="text-white/70 text-sm mt-1">A brief, focused discussion on your immediate needs.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Video className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold">Virtual or Phone</h4>
                      <p className="text-white/70 text-sm mt-1">We can meet via Zoom, Teams, or a standard phone call.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold">No Obligation</h4>
                      <p className="text-white/70 text-sm mt-1">Completely free initial assessment with zero commitment required.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-7/12 p-8 md:p-12 bg-brand-navy-light">
                <ConsultationForm />
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  )
}
