import { useParams, Link, Navigate } from 'react-router-dom'
import PageMeta from '../components/seo/PageMeta'
import BreadCrumb from '../components/ui/BreadCrumb'
import QuoteForm from '../components/forms/QuoteForm'
import { SERVICES } from '../data/staticContent'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = SERVICES.find(s => s.slug === slug)

  if (!service) {
    return <Navigate to="/not-found" />
  }

  const { title, fullDesc, benefits, deliverables, targetAudience, icon: Icon } = service
  
  // Find related services (excluding current)
  const relatedServices = SERVICES.filter(s => s.slug !== slug).slice(0, 3)

  return (
    <>
      <PageMeta 
        title={`${title} Tanzania | SAFE Core`} 
        description={service.shortDesc}
      />
      
      <main id="main-content">
        {/* Page Hero */}
        <section className="bg-brand-navy-dark pt-32 pb-20 border-b border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-green/5 mix-blend-overlay"></div>
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 relative z-10">
            <BreadCrumb items={[
              { label: 'Services', href: '/services' },
              { label: title }
            ]} />
            <div className="mt-8 flex items-center gap-6">
              <div className="hidden md:flex w-20 h-20 rounded-2xl bg-white/10 border border-white/20 items-center justify-center backdrop-blur-sm">
                <Icon className="w-10 h-10 text-brand-green" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white max-w-4xl leading-tight">
                {title}
              </h1>
            </div>
          </div>
        </section>

        <section className="py-20 bg-brand-grey-light">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              
              {/* Left Column: Content */}
              <div className="w-full lg:w-2/3">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
                  <h2 className="text-3xl font-extrabold text-brand-navy mb-6">Service Overview</h2>
                  <div className="prose prose-lg text-brand-grey-mid mb-12">
                    <p className="leading-relaxed">{fullDesc}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h3 className="text-xl font-bold text-brand-navy mb-5 flex items-center gap-2">
                        <CheckCircle2 className="w-6 h-6 text-brand-success" />
                        Key Benefits
                      </h3>
                      <ul className="flex flex-col gap-3">
                        {benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-brand-grey-dark">
                            <div className="w-2 h-2 rounded-full bg-brand-green shrink-0 mt-1.5"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-brand-navy mb-5 flex items-center gap-2">
                        <CheckCircle2 className="w-6 h-6 text-brand-success" />
                        What You Receive
                      </h3>
                      <ul className="flex flex-col gap-3">
                        {deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-brand-grey-dark">
                            <div className="w-2 h-2 rounded-full bg-brand-green shrink-0 mt-1.5"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-10 pt-8 border-t border-gray-100 bg-brand-grey-light/50 -mx-8 -mb-8 p-8 rounded-b-3xl">
                    <h4 className="font-bold text-brand-navy mb-2">Who is this for?</h4>
                    <p className="text-sm text-brand-grey-mid">{targetAudience}</p>
                  </div>
                </div>

                {/* Related Services */}
                <div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-6">Other Services</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {relatedServices.map(s => (
                      <Link 
                        key={s.slug} 
                        to={`/services/${s.slug}`}
                        className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all group"
                      >
                        <s.icon className="w-6 h-6 text-brand-green mb-3" />
                        <h4 className="font-bold text-brand-navy text-sm mb-2 group-hover:text-brand-green transition-colors line-clamp-2">{s.title}</h4>
                        <div className="flex items-center gap-1 text-xs text-brand-grey-mid font-medium group-hover:text-brand-navy transition-colors">
                          Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Inline Form */}
              <div className="w-full lg:w-1/3">
                <div className="sticky top-28 bg-white rounded-3xl p-8 shadow-xl border border-brand-green/20">
                  <h3 className="text-2xl font-extrabold text-brand-navy mb-2">Request this Service</h3>
                  <p className="text-sm text-brand-grey-mid mb-8">
                    Fill out the form below to get a custom quote for {title.toLowerCase()}.
                  </p>
                  
                  <QuoteForm serviceSlug={slug} />
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  )
}
