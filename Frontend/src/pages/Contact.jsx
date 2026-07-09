import PageMeta from '../components/seo/PageMeta'
import BreadCrumb from '../components/ui/BreadCrumb'
import ContactForm from '../components/forms/ContactForm'
import { COMPANY } from '../data/staticContent'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <>
      <PageMeta 
        title="Contact SAFE Core | Mining Safety Consultancy Tanzania" 
        description="Get in touch with SAFE Core Company Limited in Dar es Salaam. Request a quote, book a free consultation or enquire via WhatsApp."
      />
      
      <main id="main-content">
        <section className="bg-brand-navy-dark pt-32 pb-20 border-b border-white/10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
            <BreadCrumb items={[{ label: 'Contact Us' }]} />
            <div className="mt-8 max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Have a question about our services or need immediate safety support? Our team is ready to assist you.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-brand-grey-light relative">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              
              {/* Contact Info */}
              <div className="w-full lg:w-1/3 flex flex-col gap-8">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-6">
                    <MapPin className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Our Office</h3>
                  <p className="text-brand-grey-mid">{COMPANY.address}</p>
                </div>
                
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-6">
                    <Phone className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Call Us</h3>
                  <p className="text-brand-grey-mid mb-2">Mon-Fri from 8am to 5pm</p>
                  <a href={`tel:${COMPANY.phone}`} className="text-lg font-bold text-brand-navy hover:text-brand-green transition-colors">
                    {COMPANY.phone}
                  </a>
                </div>
                
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-6">
                    <Mail className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Email Us</h3>
                  <p className="text-brand-grey-mid mb-2">We typically reply within 24 hours</p>
                  <a href={`mailto:${COMPANY.email}`} className="text-lg font-bold text-brand-navy hover:text-brand-green transition-colors break-all">
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="w-full lg:w-2/3">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 h-full">
                  <h2 className="text-3xl font-extrabold text-brand-navy mb-2">Send a Message</h2>
                  <p className="text-brand-grey-mid mb-8">Fill out the form below and our team will get back to you promptly.</p>
                  <ContactForm />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Map Embed Placeholder */}
        <section className="h-[400px] bg-brand-grey-light w-full">
          <div className="w-full h-full flex items-center justify-center text-brand-grey-mid bg-gray-200">
            [Google Maps Embed - Dar es Salaam]
          </div>
        </section>
      </main>
    </>
  )
}
