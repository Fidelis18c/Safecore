import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'
import { COMPANY, SERVICES } from '../../data/staticContent'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy-dark text-white/70 pt-20 pb-8 border-t border-white/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & About */}
          <div className="flex flex-col gap-6">
            <Link to="/" onClick={scrollToTop} className="flex items-center group w-fit" aria-label="SAFE Core Company Limited — Home">
              <span className="inline-flex items-center bg-white rounded-xl px-3 py-2 shadow-md group-hover:scale-[1.03] transition-transform">
                <img
                  src="/safecore-logo.png"
                  alt="SAFE Core Company Limited"
                  className="h-16 w-auto"
                  width="1084"
                  height="335"
                />
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              {COMPANY.tagline}. Tanzania's trusted partner for mining safety training, workplace audits, and certified PPE solutions.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="text-sm font-medium hover:text-brand-green transition-colors">LinkedIn</a>
              <a href="#" className="text-sm font-medium hover:text-brand-green transition-colors">Facebook</a>
              <a href="#" className="text-sm font-medium hover:text-brand-green transition-colors">Instagram</a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about" onClick={scrollToTop} className="text-sm hover:text-brand-green transition-colors">About Us</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="text-sm hover:text-brand-green transition-colors">All Services</Link></li>
              <li><Link to="/products" onClick={scrollToTop} className="text-sm hover:text-brand-green transition-colors">PPE Catalogue</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} className="text-sm hover:text-brand-green transition-colors">Contact Us</Link></li>
              <li><Link to="/consultation" onClick={scrollToTop} className="text-sm hover:text-brand-green transition-colors">Book Consultation</Link></li>
              <li><Link to="/quote" onClick={scrollToTop} className="text-sm hover:text-brand-green transition-colors">Request a Quote</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Our Services</h3>
            <ul className="flex flex-col gap-3">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link 
                    to={`/services/${service.slug}`} 
                    onClick={scrollToTop}
                    className="text-sm hover:text-brand-green transition-colors line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" onClick={scrollToTop} className="text-sm text-brand-green font-medium hover:text-brand-green-light transition-colors mt-2 inline-block">
                  View all 8 services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-green shrink-0" />
                <a href={`tel:${COMPANY.phone}`} className="text-sm hover:text-white transition-colors">{COMPANY.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-green shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="text-sm hover:text-white transition-colors">{COMPANY.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 text-center md:text-left">
            &copy; {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" onClick={scrollToTop} className="text-xs text-white/50 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <button 
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-white/70" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
