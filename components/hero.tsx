import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-accent">
      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance mb-6">
            Discover quality products for every need
          </h1>
          <p className="text-lg text-muted-foreground text-pretty mb-8 max-w-2xl">
            Shop from our curated collection of electronics, home essentials, beauty products, fashion, and more. Quality you can trust, prices you'll love.
          </p>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:block">
        <img
          src="/modern-minimalist-shopping-lifestyle.jpg"
          alt="Hero"
          className="h-full w-full object-cover opacity-20"
        />
      </div>
    </section>
  )
}
