import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { NAV_LINKS, COMPANY } from '../../data/staticContent'

export default function Navbar({ transparent = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // The navbar is a sticky bar in normal flow (it doesn't overlay the hero), so it's
  // always solid white — this keeps every nav link visible from the moment you land.
  // A slightly stronger shadow kicks in once you scroll.
  const isTransparent = false
  const navBg = `bg-white/95 backdrop-blur-md border-b border-brand-grey-light ${
    scrolled ? 'shadow-lg shadow-brand-navy/10' : 'shadow-sm'
  }`

  const linkIdle = 'text-brand-grey-dark hover:text-brand-navy'

  return (
    <>
      {/* Skip link */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${navBg}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
          <div className="flex items-center justify-between h-16 lg:h-[72px] gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center group shrink-0 ml-2 lg:ml-6" aria-label="SAFE Core Company Limited — Home">
              <span className={`inline-flex items-center rounded-xl px-3 py-1.5 group-hover:scale-[1.03] transition-transform ${isTransparent ? 'bg-white shadow-md' : ''}`}>
                <img
                  src="/safecore-logo.png"
                  alt="SAFE Core Company Limited"
                  className="w-32 lg:w-36"
                  width="1084"
                  height="335"
                />
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-3">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative group">
                    <Link
                      to={link.href}
                      className={`relative flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-200 after:absolute after:bottom-1 after:left-3.5 after:right-6 after:h-0.5 after:rounded-full after:bg-brand-green after:origin-left after:transition-transform after:duration-300 ${
                        location.pathname === link.href || (location.pathname.startsWith('/services') && link.href === '/services')
                          ? 'text-brand-green after:scale-x-100'
                          : `${linkIdle} after:scale-x-0 group-hover:after:scale-x-100`
                      }`}
                      onClick={() => setServicesOpen(false)}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                    </Link>

                    {/* Mega dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-2xl shadow-brand-navy/20 border border-gray-100 p-4 min-w-[320px] grid grid-cols-1 gap-0.5">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={`px-4 py-2.5 rounded-lg text-sm transition-colors ${
                              location.pathname === child.href
                                ? 'bg-brand-green/10 text-brand-green font-semibold'
                                : 'text-brand-grey-dark hover:bg-brand-grey-light hover:text-brand-navy'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-200 after:absolute after:bottom-1 after:left-3.5 after:right-3.5 after:h-0.5 after:rounded-full after:bg-brand-green after:origin-left after:transition-transform after:duration-300 ${
                      location.pathname === link.href
                        ? 'text-brand-green after:scale-x-100'
                        : `${linkIdle} after:scale-x-0 hover:after:scale-x-100`
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/quote"
                className="group/cta hidden md:inline-flex items-center gap-2 pl-7 pr-6 py-3 bg-gradient-to-r from-brand-green to-brand-green-dark text-white text-sm font-semibold rounded-lg shadow-md shadow-brand-green/30 hover:shadow-lg hover:shadow-brand-green/50 hover:-translate-y-0.5 transition-all duration-200 ring-1 ring-inset ring-white/10"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 rounded-md transition-colors ${isTransparent ? 'text-white hover:bg-white/10' : 'text-brand-navy hover:bg-brand-grey-light'}`}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={`lg:hidden fixed inset-0 top-16 z-40 bg-brand-navy transition-all duration-300 ${
            mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="h-full overflow-y-auto px-4 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <div className="w-full flex items-center justify-between px-4 py-3 text-white/90 text-base font-medium rounded-lg hover:bg-white/5 group">
                    <Link 
                      to={link.href} 
                      onClick={() => setMobileOpen(false)}
                      className="flex-1"
                    >
                      {link.label}
                    </Link>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        setServicesOpen(!servicesOpen);
                      }} 
                      className="p-1 text-white/70 hover:text-white"
                      aria-expanded={servicesOpen}
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-4 py-1 flex flex-col gap-0.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={`px-4 py-2.5 rounded-lg text-sm transition-colors ${
                            location.pathname === child.href
                              ? 'bg-brand-green/20 text-brand-green font-semibold'
                              : 'text-white/60 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    location.pathname === link.href
                      ? 'text-brand-green bg-white/5'
                      : 'text-white/90 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Mobile CTA */}
            <div className="mt-6 px-4 flex flex-col gap-3">
              <Link
                to="/consultation"
                className="w-full text-center px-5 py-3 bg-brand-navy-light text-white font-semibold rounded-lg hover:bg-white hover:text-brand-navy border border-white/20 transition-all"
              >
                Book Consultation
              </Link>
              <Link
                to="/quote"
                className="w-full text-center px-5 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-brand-green-dark transition-colors"
              >
                Request a Quote
              </Link>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent('Hello SAFE Core, I would like to enquire about your services.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-5 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
