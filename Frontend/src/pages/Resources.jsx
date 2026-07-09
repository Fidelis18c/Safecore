import PageMeta from '../components/seo/PageMeta'
import SectionHeader from '../components/ui/SectionHeader'
import BreadCrumb from '../components/ui/BreadCrumb'
import BlogCard from '../components/cards/BlogCard'
import CtaBand from '../components/sections/CtaBand'
import { BLOG_POSTS } from '../data/staticContent'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Resources() {
  const [ref, isVisible] = useScrollAnimation()
  
  const featuredPost = BLOG_POSTS[0]
  const regularPosts = BLOG_POSTS.slice(1)

  return (
    <>
      <PageMeta 
        title="Mining Safety Resources & Blog | SAFE Core Tanzania" 
        description="Expert articles on mining safety, PPE best practices, OSHA Tanzania compliance and workplace hazard prevention."
      />
      
      <main id="main-content">
        <section className="bg-brand-navy-dark pt-32 pb-20 border-b border-white/10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
            <BreadCrumb items={[{ label: 'Resources' }]} />
            <div className="mt-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Safety Insights
              </h1>
              <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
                Expert knowledge, regulatory updates, and best practices to keep your workplace safe and compliant.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-20 bg-brand-grey-light border-b border-gray-200">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
            <SectionHeader title="Featured Article" align="left" />
            
            <Link to={`/resources/${featuredPost.slug}`} className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 relative aspect-video lg:aspect-auto overflow-hidden bg-brand-navy">
                  <img 
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(featuredPost.category)}&background=14294D&color=fff&size=800&font-size=0.1`} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-brand-green text-white px-3 py-1 rounded-full text-xs font-bold">{featuredPost.category}</span>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-brand-grey-mid font-medium mb-4">
                    <span>{new Date(featuredPost.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    <span className="w-1 h-1 rounded-full bg-brand-grey-mid"></span>
                    <span>{featuredPost.readTime} min read</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-brand-navy mb-4 group-hover:text-brand-green transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-lg text-brand-grey-mid leading-relaxed mb-8">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-brand-navy font-bold group-hover:text-brand-green transition-colors">
                    Read Full Article <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Article Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
            <SectionHeader title="Latest Articles" align="left" />
            
            <div 
              ref={ref}
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children ${isVisible ? 'visible' : ''}`}
            >
              {regularPosts.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
    </>
  )
}
