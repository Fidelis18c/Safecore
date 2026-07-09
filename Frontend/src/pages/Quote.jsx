import PageMeta from '../components/seo/PageMeta'
import BreadCrumb from '../components/ui/BreadCrumb'
import QuoteForm from '../components/forms/QuoteForm'

export default function Quote() {
  return (
    <>
      <PageMeta 
        title="Request a Quote | SAFE Core" 
        description="Request a custom quote for mining safety training, workplace audits, or bulk PPE supply in Tanzania."
      />
      
      <main id="main-content">
        <section className="bg-brand-navy-dark pt-32 pb-32 border-b border-white/10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 text-center">
            <div className="flex justify-center mb-8">
              <BreadCrumb items={[{ label: 'Request Quote' }]} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Request a Custom Quote
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Tell us about your project requirements and we'll provide a comprehensive proposal tailored to your needs.
            </p>
          </div>
        </section>

        <section className="pb-20 bg-brand-grey-light relative">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-20">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
