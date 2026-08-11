import { useState } from 'react'
import { Loader2, AlertCircle, ChevronDown } from 'lucide-react'
import { submitContactForm, getErrorMessage } from '../../lib/api'

const inputClass =
  'w-full px-4 py-3 bg-brand-grey-light rounded-lg outline-none border border-transparent text-brand-navy placeholder:text-brand-grey-mid focus:border-brand-green focus:ring-2 focus:ring-brand-green/25 transition'

const COUNTRIES = ['Tanzania', 'Kenya', 'Uganda', 'Rwanda', 'Burundi', 'DR Congo', 'Zambia', 'Other']
const DIAL_CODES = ['+255', '+254', '+256', '+250', '+257', '+243', '+260', '+1', '+44']

function Label({ htmlFor, children, required }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-semibold text-brand-navy mb-2">
      {children}
      {required && <span className="text-brand-danger"> *</span>}
    </label>
  )
}

export default function ContactForm() {
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    if (formData.get('honeypot')) return

    setStatus('submitting')
    setErrorMessage('')

    try {
      await submitContactForm(Object.fromEntries(formData.entries()))
      e.target.reset()
      setStatus('success')
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setStatus('error')
      setErrorMessage(getErrorMessage(error, 'Failed to send message. Please try calling us instead.'))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {status === 'success' && (
        <div className="bg-brand-grey-light text-brand-navy p-3 rounded-lg text-sm">
          Message sent successfully.
        </div>
      )}
      {status === 'error' && (
        <div className="bg-brand-danger/10 text-brand-danger p-3 rounded-lg text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4" /> {errorMessage}
        </div>
      )}

      <input type="text" name="honeypot" className="hidden" tabIndex="-1" autoComplete="off" />

      {/* First / Last name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="firstName" required>First Name</Label>
          <input id="firstName" type="text" name="firstName" required className={inputClass} />
        </div>
        <div>
          <Label htmlFor="lastName" required>Last Name</Label>
          <input id="lastName" type="text" name="lastName" required className={inputClass} />
        </div>
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email" required>Email</Label>
        <input id="email" type="email" name="email" required className={inputClass} />
      </div>

      {/* Company */}
      <div>
        <Label htmlFor="companyName">Company Name</Label>
        <input id="companyName" type="text" name="companyName" className={inputClass} />
      </div>

      {/* Location / Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="location" required>Location</Label>
          <div className="relative">
            <select id="location" name="location" required defaultValue="Tanzania" className={`${inputClass} appearance-none pr-10 cursor-pointer`}>
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-brand-grey-mid absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <div className="flex items-stretch bg-brand-grey-light rounded-lg border border-transparent focus-within:border-brand-green focus-within:ring-2 focus-within:ring-brand-green/25 transition">
            <div className="relative shrink-0">
              <select name="phoneCode" defaultValue="+255" aria-label="Country code" className="h-full appearance-none bg-transparent pl-4 pr-8 py-3 outline-none text-brand-navy font-medium cursor-pointer rounded-l-lg">
                {DIAL_CODES.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-brand-grey-mid absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <div className="w-px my-2 bg-brand-grey-mid/25"></div>
            <input id="phone" type="tel" name="phone" placeholder="000 000 000" className="flex-1 min-w-0 bg-transparent px-4 py-3 outline-none text-brand-navy placeholder:text-brand-grey-mid" />
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message" required>How can we help?</Label>
        <textarea id="message" name="message" required rows="5" className={`${inputClass} resize-none`}></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="py-3.5 bg-brand-navy text-white font-bold rounded-lg hover:bg-brand-navy-light transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {status === 'submitting' ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Send Message'}
      </button>
    </form>
  )
}
