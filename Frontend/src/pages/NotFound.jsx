import { Link } from 'react-router-dom'
import PageMeta from '../components/seo/PageMeta'
import Button from '../components/ui/Button'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <PageMeta title="Page Not Found | SAFE Core" description="The page you are looking for does not exist." />
      
      <main id="main-content" className="min-h-[70vh] flex items-center justify-center bg-brand-grey-light py-20">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="text-9xl font-black text-brand-navy/10 mb-4">404</div>
          <h1 className="text-3xl font-extrabold text-brand-navy mb-4">Page Not Found</h1>
          <p className="text-brand-grey-mid mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button to="/" icon={Home}>
            Back to Home
          </Button>
        </div>
      </main>
    </>
  )
}
