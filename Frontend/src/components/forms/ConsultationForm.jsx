import { useState } from 'react'
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react'

export default function ConsultationForm() {
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (new FormData(e.target).get('honeypot')) return
    
    setStatus('submitting')
    setErrorMessage('')
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatus('success')
    } catch (error) {
      setStatus('error')
      setErrorMessage('Booking failed. Please try calling us instead.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-brand-navy p-8 rounded-2xl text-center text-white">
        <CheckCircle2 className="w-12 h-12 text-brand-success mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Booking Request Sent</h3>
        <p className="text-white/70 text-sm">
          Our team will contact you shortly to confirm the exact time for your consultation.
        </p>
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
      
      <input 
        type="text" 
        name="name" 
        required 
        placeholder="Full Name *"
        className="px-4 py-3 bg-white/10 text-white placeholder:text-white/50 border border-white/20 rounded-xl outline-none focus:border-brand-green"
      />
      
      <input 
        type="tel" 
        name="phone" 
        required 
        placeholder="Phone Number *"
        className="px-4 py-3 bg-white/10 text-white placeholder:text-white/50 border border-white/20 rounded-xl outline-none focus:border-brand-green"
      />
      
      <div className="grid grid-cols-2 gap-4">
        <input 
          type="date" 
          name="preferred_date" 
          className="px-4 py-3 bg-white/10 text-white border border-white/20 rounded-xl outline-none focus:border-brand-green [&::-webkit-calendar-picker-indicator]:filter-invert"
        />
        <select 
          name="preferred_time"
          className="px-4 py-3 bg-[#132A55] text-white border border-white/20 rounded-xl outline-none focus:border-brand-green appearance-none"
        >
          <option value="">Time</option>
          <option value="morning">Morning (8am-12pm)</option>
          <option value="afternoon">Afternoon (1pm-5pm)</option>
        </select>
      </div>
      
      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="py-3.5 mt-2 bg-brand-green text-white font-bold rounded-xl hover:bg-brand-green-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {status === 'submitting' ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Book Free Consultation'}
      </button>
    </form>
  )
}
