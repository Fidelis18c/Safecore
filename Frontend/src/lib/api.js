import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

export const api = axios.create({ baseURL })

export const submitContactForm = (data) => api.post('/api/contact', data)
export const submitQuoteForm = (data) => api.post('/api/quotes', data)
export const submitConsultationForm = (data) => api.post('/api/consultations', data)

export const getErrorMessage = (error, fallback) =>
  error.response?.data?.errors?.[0]?.message || error.response?.data?.error || fallback
