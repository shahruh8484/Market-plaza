import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="font-serif text-4xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            Find answers to common questions about shopping on Market Plaza. Can't find what you're looking for? Contact
            our support team.
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                How do I place an order?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Browse our product catalog, click on any product you're interested in, and you'll be directed to Amazon
                where you can complete your purchase securely. We partner with Amazon to ensure fast shipping and
                reliable service.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                What payment methods are accepted?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Since orders are processed through Amazon, you can use any payment method accepted by Amazon including
                credit cards, debit cards, Amazon Pay, and gift cards.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                How long does shipping take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Shipping times vary depending on the product and your location. Most items ship within 1-2 business
                days, with delivery typically taking 3-5 business days. Amazon Prime members may receive free expedited
                shipping on eligible items.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                What is your return policy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Returns are handled through Amazon's standard return policy. Most items can be returned within 30 days
                of receipt for a full refund. Please check the specific product page on Amazon for detailed return
                information.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                How can I track my order?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Once your order is placed through Amazon, you'll receive a confirmation email with tracking information.
                You can track your package through your Amazon account or the tracking link provided in the email.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Are the products authentic?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes, all products are sourced directly from Amazon's verified sellers and manufacturers. We only link to
                products with high ratings and positive reviews to ensure quality and authenticity.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Do you offer customer support?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Our customer support team is available Monday through Friday, 9am to 6pm EST. You can reach us via email
                at support@marketplaza.com or call 1-800-555-1234 for assistance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Can I cancel or modify my order?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Orders are processed through Amazon, so you'll need to manage cancellations or modifications through
                your Amazon account. Visit Amazon's "Your Orders" section to make changes before the item ships.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  )
}
