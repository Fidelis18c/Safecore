import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

// Layout Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/ui/WhatsAppFloat'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Products from './pages/Products'
import Resources from './pages/Resources'
import ResourceDetail from './pages/ResourceDetail'
import Contact from './pages/Contact'
import Quote from './pages/Quote'
import Consultation from './pages/Consultation'
import PrivacyPolicy from './pages/PrivacyPolicy'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  
  return null
}

function App() {
  const { pathname } = useLocation()
  // Make navbar transparent only on the home page hero
  const isHome = pathname === '/'

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      
      <Navbar transparent={isHome} />
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<ResourceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
