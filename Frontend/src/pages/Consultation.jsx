import PageMeta from '../components/seo/PageMeta'
import PageHeroBg from '../components/ui/PageHeroBg'
import NavlinksHero from '../assets/Navlinks Hero.jpeg'
import ConsultationForm from '../components/forms/ConsultationForm'

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
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative mt-12">
            <div className="bg-brand-navy-light rounded-3xl overflow-hidden shadow-2xl border border-gray-100 p-10 md:p-16">
              <ConsultationForm />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
