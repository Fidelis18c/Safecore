import { useState } from 'react'
import { Loader2, AlertCircle } from 'lucide-react'
import { submitConsultationForm, getErrorMessage } from '../../lib/api'

export default function ConsultationForm() {
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    if (formData.get('honeypot')) return

    setStatus('submitting')
    setErrorMessage('')

    try {
      await submitConsultationForm(Object.fromEntries(formData.entries()))
      e.target.reset()
      setStatus('success')
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setStatus('error')
      setErrorMessage(getErrorMessage(error, 'Booking failed. Please try calling us instead.'))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">Book Your Free Consultation</h3>
        <p className="text-white/60 text-sm">Fill in your details and we'll reach out to confirm a time.</p>
      </div>

      {status === 'success' && (
        <div className="bg-white/10 text-white p-3 rounded-lg text-sm">
          Message sent successfully.
        </div>
      )}
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
          placeholder="Full Name *"
          className="px-4 py-3 bg-white/10 text-white placeholder:text-white/50 placeholder:text-sm border border-white/20 rounded-xl outline-none focus:border-brand-green"
        />

        <input
          type="tel"
          name="phone"
          required
          placeholder="Phone Number *"
          className="px-4 py-3 bg-white/10 text-white placeholder:text-white/50 placeholder:text-sm border border-white/20 rounded-xl outline-none focus:border-brand-green"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
