import { useParams, Navigate, Link } from 'react-router-dom'
import PageMeta from '../components/seo/PageMeta'
import BreadCrumb from '../components/ui/BreadCrumb'
import CtaBand from '../components/sections/CtaBand'
import { BLOG_POSTS } from '../data/staticContent'
import { Calendar, Clock, Tag } from 'lucide-react'

export default function ResourceDetail() {
  const { slug } = useParams()
  const post = BLOG_POSTS.find(p => p.slug === slug)

  if (!post) return <Navigate to="/not-found" />

  const date = new Date(post.publishedAt).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  })

  // Simulated markdown content rendering (placeholder for actual content)
  const renderContent = () => (
    <div className="prose prose-lg max-w-none text-brand-grey-dark prose-headings:text-brand-navy prose-a:text-brand-green hover:prose-a:text-brand-green-dark prose-img:rounded-2xl">
      <p className="lead text-xl text-brand-grey-mid">{post.excerpt}</p>
      
      <h2>Introduction</h2>
      <p>Mining in Tanzania is a critical sector, contributing significantly to the national economy. However, it remains one of the most hazardous industries. Ensuring the safety of workers—especially in artisanal and small-scale operations—requires rigorous adherence to safety protocols and an understanding of the common hazards.</p>
      
      <h2>Key Takeaways</h2>
      <ul>
        <li>Understanding the primary risks in both surface and underground mining.</li>
        <li>The role of proper PPE in mitigating daily hazards.</li>
        <li>Why continuous training is more effective than one-off sessions.</li>
        <li>Compliance requirements under OSHA Tanzania.</li>
      </ul>
      
      <blockquote>
        "Safety is not an intellectual exercise to keep us in work. It is a matter of life and death. It is the sum of our contributions to safety management that determines whether the people we work with live or die."
      </blockquote>
      
      <h2>Conclusion</h2>
      <p>Developing a proactive safety culture is not an overnight task, but it is an essential one. By identifying these hazards and implementing robust control measures, mining operations can protect their most valuable asset: their people.</p>
    </div>
  )

  return (
    <>
      <PageMeta title={`${post.title} | SAFE Core Resources`} description={post.excerpt} />
      
      <main id="main-content">
        <article>
          {/* Article Header */}
          <header className="bg-brand-navy-dark pt-32 pb-20 border-b border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-green/5 mix-blend-overlay"></div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <BreadCrumb items={[
                { label: 'Resources', href: '/resources' },
                { label: 'Article' }
              ]} />
              
              <div className="mt-8">
                <span className="inline-block bg-brand-green text-white px-3 py-1 rounded-full text-xs font-bold mb-6">
                  {post.category}
                </span>
                <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> {date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {post.readTime} min read
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div className="py-16 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Cover Image Placeholder */}
              <div className="w-full aspect-[21/9] bg-brand-grey-light rounded-3xl mb-12 overflow-hidden shadow-lg border border-gray-100">
                 <img 
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.category)}&background=14294D&color=fff&size=1200&font-size=0.1`} 
                    alt="Article cover"
                    className="w-full h-full object-cover opacity-80"
                  />
              </div>

              {renderContent()}

              {/* Tags */}
              <div className="mt-16 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <Tag className="w-5 h-5 text-brand-grey-mid" />
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="bg-brand-grey-light text-brand-grey-dark px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <CtaBand />
      </main>
    </>
  )
}
