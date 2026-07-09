import { useState } from 'react'
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react'

export default function ContactForm() {
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (new FormData(e.target).get('honeypot')) return
    
    setStatus('submitting')
    setErrorMessage('')
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1200))
      setStatus('success')
    } catch (error) {
      setStatus('error')
      setErrorMessage('Failed to send message. Please try calling us instead.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-brand-success/10 border border-brand-success/20 rounded-2xl p-8 text-center flex flex-col items-center justify-center h-full min-h-[300px]">
        <CheckCircle2 className="w-12 h-12 text-brand-success mb-4" />
        <h3 className="text-xl font-bold text-brand-navy mb-2">Message Sent</h3>
        <p className="text-sm text-brand-grey-mid">We've received your message and will reply shortly.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-semibold text-brand-success hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {status === 'error' && (
        <div className="bg-brand-danger/10 text-brand-danger p-3 rounded-lg text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4" /> {errorMessage}
        </div>
      )}
      
      <input type="text" name="honeypot" className="hidden" tabIndex="-1" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input 
          type="text" 
          name="name" 
          required 
          placeholder="Your Name *"
          className="px-4 py-3 bg-brand-grey-light rounded-xl outline-none focus:ring-2 focus:ring-brand-green"
        />
        <input 
          type="email" 
          name="email" 
          required 
          placeholder="Email Address *"
          className="px-4 py-3 bg-brand-grey-light rounded-xl outline-none focus:ring-2 focus:ring-brand-green"
        />
      </div>
      
      <input 
        type="text" 
        name="subject" 
        placeholder="Subject"
        className="px-4 py-3 bg-brand-grey-light rounded-xl outline-none focus:ring-2 focus:ring-brand-green"
      />
      
      <textarea 
        name="message" 
        required 
        rows="5"
        placeholder="How can we help you? *"
        className="px-4 py-3 bg-brand-grey-light rounded-xl outline-none focus:ring-2 focus:ring-brand-green resize-none"
      ></textarea>
      
      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="py-3.5 bg-brand-navy text-white font-bold rounded-xl hover:bg-brand-navy-light transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {status === 'submitting' ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Send Message'}
      </button>
    </form>
  )
}
