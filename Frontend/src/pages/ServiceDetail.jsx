import { useParams, Link, Navigate } from 'react-router-dom'
import PageMeta from '../components/seo/PageMeta'
import { SERVICES } from '../data/staticContent'
import { ArrowRight } from 'lucide-react'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = SERVICES.find(s => s.slug === slug)

  if (!service) {
    return <Navigate to="/not-found" />
  }

  const { title, fullDesc, benefits, deliverables, image } = service
  
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
          {image && (
            <img src={image} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
          )}
          {/* Overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark/75 via-brand-navy-dark/45 to-brand-navy-dark/20"></div>
          <div className="absolute inset-0 bg-brand-green/5 mix-blend-overlay"></div>
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white max-w-4xl leading-tight">
              {title}
            </h1>
          </div>
        </section>

        <section className="py-20 bg-brand-grey-light">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">

            {/* Image (left, wider) + Description (right) */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center">
              <div className="aspect-[3/2] overflow-hidden shadow-lg">
                {image && (
                  <img src={image} alt={title} className="w-full h-full object-cover" />
                )}
              </div>

              <div>
                <p className="text-lg text-brand-grey-mid leading-relaxed mb-8">{fullDesc}</p>

                <Link
                  to="/quote"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-green text-white text-sm font-semibold rounded-lg shadow-md shadow-brand-green/30 hover:bg-brand-green-dark transition-colors"
                >
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Key Benefits + What You Receive — directly on the page, no cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mt-16 pt-14 border-t border-gray-200">
              <div>
                <h3 className="text-2xl font-bold text-brand-navy mb-6">
                  Key Benefits
                </h3>
                <ul className="flex flex-col gap-3">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-brand-grey-dark">
                      <div className="w-2 h-2 rounded-full bg-brand-green shrink-0 mt-2"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-navy mb-6">
                  What You Receive
                </h3>
                <ul className="flex flex-col gap-3">
                  {deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-brand-grey-dark">
                      <div className="w-2 h-2 rounded-full bg-brand-green shrink-0 mt-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Related Services */}
            <div className="mt-16 pt-14 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-brand-navy mb-8">Other Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {relatedServices.map(s => (
                  <div key={s.slug} className="flex flex-col">
                    <Link to={`/services/${s.slug}`} className="block overflow-hidden group">
                      <img
                        src={s.image}
                        alt={s.title}
                        loading="lazy"
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>
                    <h4 className="mt-5 text-xl font-bold text-brand-navy">{s.title}</h4>
                    <p className="mt-2 text-sm text-brand-grey-mid leading-relaxed">{s.shortDesc}</p>
                    <Link
                      to={`/services/${s.slug}`}
                      className="mt-4 inline-flex items-center gap-2 self-start text-sm font-semibold text-brand-green group"
                    >
                      Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  )
}
