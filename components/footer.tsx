export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          {/* Company Info */}
          <div>
            <h3 className="font-serif font-semibold text-base mb-2">Market Plaza</h3>
            <p className="text-xs text-muted-foreground">
              Your trusted destination for quality products across all categories.
            </p>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-sm mb-2">Customer Service</h4>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li><a href="/contact" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="/faqs" className="hover:text-foreground transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-2">Company</h4>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li><a href="/about" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="/careers" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-border text-center text-xs text-muted-foreground">
          {/* Disclaimer */}
          <div className="mb-3 max-w-4xl mx-auto">
            <h4 className="font-semibold text-sm mb-2">Disclaimer</h4>
            <p className="text-xs leading-relaxed">
              The information provided on this website is for general informational purposes only. While we strive to provide accurate and up-to-date product information, specifications, and pricing may vary. All product descriptions, images, and links are provided by third-party sellers. We do not manufacture, sell, or ship any products directly. Please verify all product details, availability, and pricing with the respective sellers before making a purchase decision. We are not responsible for any discrepancies, errors, or changes in product information.
            </p>
          </div>
          
          <p className="mb-2">
            We are participant in the Amazon Services LLC Associates Program. As an Amazon Associate, we earn from qualifying purchases.
          </p>
          <p>&copy; 2025 Market Plaza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
