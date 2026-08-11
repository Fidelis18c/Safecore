import { useState } from 'react'
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react'
import { SERVICES } from '../../data/staticContent'
import { submitQuoteForm, getErrorMessage } from '../../lib/api'

export default function QuoteForm({ serviceSlug = '', onSuccess }) {
  const [status, setStatus] = useState('idle') // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Honeypot check
    const formData = new FormData(e.target)
    if (formData.get('honeypot')) return // Silent rejection for bots
    
    setStatus('submitting')
    setErrorMessage('')
    
    try {
      await submitQuoteForm(Object.fromEntries(formData.entries()))
      e.target.reset()
      setStatus('success')
      setTimeout(() => setStatus('idle'), 5000)
      if (onSuccess) setTimeout(onSuccess, 2000)
    } catch (error) {
      setStatus('error')
      setErrorMessage(getErrorMessage(error, 'Something went wrong. Please try again later or contact us directly.'))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {status === 'success' && (
        <div className="bg-brand-success/10 text-brand-success p-4 rounded-xl flex items-start gap-3 text-sm">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <p>Quote request sent! Our team will get back to you within 24 hours.</p>
        </div>
      )}
      {status === 'error' && (
        <div className="bg-brand-danger/10 text-brand-danger p-4 rounded-xl flex items-start gap-3 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}
      
      {/* Honeypot field - invisible to users */}
      <input type="text" name="honeypot" className="hidden" tabIndex="-1" autoComplete="off" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-semibold text-brand-navy">Full Name <span className="text-brand-danger">*</span></label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="px-4 py-3 bg-brand-grey-light border border-transparent focus:border-brand-green focus:bg-white rounded-xl outline-none transition-all"
            placeholder="John Mwanga"
          />
        </div>
        
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-sm font-semibold text-brand-navy">Company Name</label>
          <input 
            type="text" 
            id="company" 
            name="company" 
            className="px-4 py-3 bg-brand-grey-light border border-transparent focus:border-brand-green focus:bg-white rounded-xl outline-none transition-all"
            placeholder="TanzGold Mining Ltd"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-semibold text-brand-navy">Phone Number <span className="text-brand-danger">*</span></label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            required 
            className="px-4 py-3 bg-brand-grey-light border border-transparent focus:border-brand-green focus:bg-white rounded-xl outline-none transition-all"
            placeholder="+255 7XX XXX XXX"
          />
        </div>
        
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-semibold text-brand-navy">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="px-4 py-3 bg-brand-grey-light border border-transparent focus:border-brand-green focus:bg-white rounded-xl outline-none transition-all"
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className="text-sm font-semibold text-brand-navy">Service of Interest</label>
        <select 
          id="service" 
          name="service" 
          defaultValue={serviceSlug}
          className="px-4 py-3 bg-brand-grey-light border border-transparent focus:border-brand-green focus:bg-white rounded-xl outline-none transition-all appearance-none"
        >
          <option value="">Select a service (Optional)</option>
          {SERVICES.map(s => (
            <option key={s.slug} value={s.slug}>{s.title}</option>
          ))}
          <option value="other">Other / Multiple Services</option>
        </select>
      </div>
      
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold text-brand-navy">Project Details / Requirements <span className="text-brand-danger">*</span></label>
        <textarea 
          id="message" 
          name="message" 
          required 
          rows="4"
          className="px-4 py-3 bg-brand-grey-light border border-transparent focus:border-brand-green focus:bg-white rounded-xl outline-none transition-all resize-none"
          placeholder="Please describe your needs, number of workers, location, etc."
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full py-4 mt-2 bg-brand-green text-white font-bold rounded-xl hover:bg-brand-green-dark focus:ring-4 focus:ring-brand-green/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <><Loader2 className="w-5 h-5 animate-spin" /> Sending Request...</>
        ) : (
          'Request Quote Now'
        )}
      </button>
      
      <p className="text-xs text-center text-brand-grey-mid mt-2">
        Your information is secure. We will never spam you.
      </p>
    </form>
  )
}
