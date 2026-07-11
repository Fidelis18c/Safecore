import { useState } from 'react'
import PageHeroBg from '../components/ui/PageHeroBg'
import NavlinksHero from '../assets/Navlinks Hero.jpeg'
import PageMeta from '../components/seo/PageMeta'
import SectionHeader from '../components/ui/SectionHeader'
import ProductCard from '../components/cards/ProductCard'
import CtaBand from '../components/sections/CtaBand'
import { PRODUCTS, PRODUCT_CATEGORIES } from '../data/staticContent'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [ref, isVisible] = useScrollAnimation()

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory)

  return (
    <>
      <PageMeta 
        title="PPE Supplier Tanzania — Safety Equipment | SAFE Core" 
        description="Quality personal protective equipment for miners and industrial workers in Tanzania. Helmets, boots, vests, gloves and more."
      />
      
      <main id="main-content">
        {/* Page Hero */}
        <section className="relative overflow-hidden bg-brand-navy-dark pt-32 pb-20 border-b border-white/10">
          <PageHeroBg image={NavlinksHero} />
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 relative z-10">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                PPE Catalogue
              </h1>
              <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
                Certified, high-quality Personal Protective Equipment designed to withstand the rigours of the Tanzanian mining and industrial sectors.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white border-b border-gray-100 sticky top-16 lg:top-[72px] z-30">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex flex-wrap gap-2">
                {PRODUCT_CATEGORIES.map(cat => (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      activeCategory === cat.key 
                        ? 'bg-brand-navy text-white shadow-md' 
                        : 'bg-brand-grey-light text-brand-grey-dark hover:bg-brand-grey-mid/20'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-brand-grey-light min-h-[50vh]">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14">
            <div 
              ref={ref}
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children ${isVisible ? 'visible' : ''}`}
            >
              {filteredProducts.map(product => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <h3 className="text-xl font-bold text-brand-navy mb-2">No products found</h3>
                <p className="text-brand-grey-mid">Try selecting a different category.</p>
              </div>
            )}
          </div>
        </section>

        <CtaBand />
      </main>
    </>
  )
}
