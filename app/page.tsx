import { Hero } from '@/components/hero'
import { CategoryGrid } from '@/components/category-grid'
import { FeaturedProducts } from '@/components/featured-products'
import { BuyingGuide } from '@/components/buying-guide'
import { ComparisonTables } from '@/components/comparison-tables'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <CategoryGrid />
        <FeaturedProducts />
        <BuyingGuide />
        <ComparisonTables />
      </main>
      <Footer />
    </div>
  )
}
