import { Book, Shield, Truck, DollarSign } from 'lucide-react'

export function BuyingGuide() {
  const guides = [
    {
      icon: Book,
      title: 'Research & Compare',
      description:
        'Read product descriptions, reviews, and ratings to make informed decisions. Compare similar products across categories.',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description:
        'All products are sourced from trusted Amazon sellers with verified ratings and customer feedback.',
    },
    {
      icon: Truck,
      title: 'Fast Shipping',
      description:
        'Enjoy Amazon Prime benefits including fast, free shipping and easy returns on eligible items.',
    },
    {
      icon: DollarSign,
      title: 'Best Value',
      description:
        'We curate products that offer the best balance of quality, features, and pricing for your needs.',
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Buying Guide</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know to make smart purchasing decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-6 border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <guide.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{guide.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {guide.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-background rounded-lg p-8 border">
          <h3 className="font-semibold text-xl mb-4">How to Shop Smart</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                  1
                </span>
                Browse by Category
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed ml-8">
                Start by exploring our organized categories to find exactly what you're looking for.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                  2
                </span>
                Read Reviews
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed ml-8">
                Check product ratings and customer reviews to learn from others' experiences.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                  3
                </span>
                Compare Features
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed ml-8">
                Look at product specifications and features to ensure it meets your needs.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                  4
                </span>
                Purchase on Amazon
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed ml-8">
                Click through to Amazon for secure checkout and fast delivery to your door.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
