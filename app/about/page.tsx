import { Footer } from "@/components/footer"
import { ShoppingBag, Users, Award, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <h1 className="font-serif text-5xl font-bold mb-6">About Market Plaza</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your trusted destination for quality products across all categories
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-center">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed text-center mb-12">
              At Market Plaza, we're dedicated to making online shopping simple, reliable, and enjoyable. We carefully
              curate products from trusted sellers to bring you the best selection across electronics, home goods,
              beauty products, fashion, and more. Our goal is to be your go-to destination for discovering quality
              products that enhance your everyday life.
            </p>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingBag className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Quality Selection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We partner with Amazon to bring you carefully selected products from verified sellers, ensuring
                  authenticity and quality with every purchase.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Customer First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your satisfaction is our priority. We provide detailed product information and reviews to help you
                  make informed decisions with confidence.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Trusted Brands</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We feature products from well-known and trusted brands across all categories, giving you peace of mind
                  with every purchase.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Passionate Team</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our team is passionate about helping you find exactly what you need. We're constantly updating our
                  catalog with the latest and greatest products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-center">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Market Plaza was founded with a simple vision: to create a seamless shopping experience that connects
                customers with quality products across every category imaginable. From electronics and home essentials
                to beauty products and outdoor gear, we believe everyone deserves access to the best products the market
                has to offer.
              </p>
              <p>
                By partnering with Amazon, we leverage their trusted fulfillment network while providing our own curated
                selection and exceptional customer service. This unique approach allows us to focus on what we do best:
                finding great products and helping customers discover exactly what they need.
              </p>
              <p>
                Today, Market Plaza serves thousands of satisfied customers, offering an ever-growing selection of
                products backed by detailed reviews and ratings. We're committed to making your shopping experience
                better every day.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
