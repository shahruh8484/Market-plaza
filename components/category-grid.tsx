import Link from 'next/link'
import Image from 'next/image'

const categories = [
  {
    name: 'Electronics',
    description: 'Latest tech & gadgets',
    slug: 'electronics',
    image: '/modern-electronics-gadgets-smartphone-laptop.jpg'
  },
  {
    name: 'Home & Kitchen',
    description: 'Essential home goods',
    slug: 'home-kitchen',
    image: '/modern-kitchen-home-interior-appliances.jpg'
  },
  {
    name: 'Beauty & Personal Care',
    description: 'Look & feel great',
    slug: 'beauty-personal-care',
    image: '/beauty-products-cosmetics-skincare-elegant.jpg'
  },
  {
    name: 'Clothing, Shoes & Jewelry',
    description: 'Fashion for everyone',
    slug: 'clothing-shoes-jewelry',
    image: '/fashion-clothing-shoes-jewelry-accessories.jpg'
  },
  {
    name: 'Toys & Games',
    description: 'Fun for all ages',
    slug: 'toys-games',
    image: '/colorful-toys-games-playful-kids-entertainment.jpg'
  },
  {
    name: 'Health & Household',
    description: 'Wellness essentials',
    slug: 'health-household-baby',
    image: '/health-household-wellness-products-vitamins.jpg'
  },
  {
    name: 'Baby',
    description: 'Everything for baby',
    slug: 'health-household-baby',
    image: '/baby-products-cute-nursery-items-infant-care.jpg'
  },
  {
    name: 'Sports & Outdoors',
    description: 'Active lifestyle gear',
    slug: 'sports-outdoors',
    image: '/sports-equipment-outdoor-gear-fitness-athletic.jpg'
  },
  {
    name: 'Books',
    description: 'Read & discover',
    slug: 'books',
    image: '/books-library-reading-literature-knowledge.jpg'
  },
  {
    name: 'Pet Supplies',
    description: 'Happy pets, happy life',
    slug: 'pet-supplies',
    image: '/pet-supplies-dog-cat-products-accessories.jpg'
  },
  {
    name: 'Garden & Tools',
    description: 'Build & grow',
    slug: 'garden-tools',
    image: '/garden-tools-plants-outdoor-equipment-hardware.jpg'
  }
]

export function CategoryGrid() {
  return (
    <section id="categories" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
            Explore our wide range of products across all categories
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {categories.map((category) => {
            return (
              <Link
                key={category.name}
                href={`/category/${category.slug}`}
                className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <h3 className="font-semibold text-sm md:text-base mb-0.5 leading-tight">
                    {category.name}
                  </h3>
                  <p className="text-xs text-white/90">
                    {category.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
