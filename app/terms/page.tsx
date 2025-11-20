import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="font-serif text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Market Plaza's website and services, you accept and agree to be bound by the
                terms and provisions of this agreement. If you do not agree to these Terms of Service, please do not use
                our website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">Use of Our Service</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Market Plaza provides a platform for discovering and purchasing products through our partnership with
                Amazon. By using our service, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Use the website only for lawful purposes and in accordance with these Terms</li>
                <li>Not use the website in any way that violates any applicable laws or regulations</li>
                <li>Not engage in any conduct that restricts or inhibits anyone's use of the website</li>
                <li>Not use the website to transmit any harmful or malicious code</li>
                <li>Provide accurate and complete information when using our services</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">Product Information and Purchases</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to provide accurate product descriptions, images, and pricing information. However, we do not
                warrant that product descriptions, pricing, or other content on our website is accurate, complete,
                reliable, current, or error-free. All purchases are completed through Amazon, and Amazon's terms and
                conditions apply to all transactions. We are not responsible for order fulfillment, shipping, returns,
                or refunds, which are handled by Amazon.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">Intellectual Property Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                The website and its entire contents, features, and functionality (including but not limited to all
                information, software, text, displays, images, video, and audio) are owned by Market Plaza, its
                licensors, or other providers of such material and are protected by copyright, trademark, and other
                intellectual property laws. You may not reproduce, distribute, modify, create derivative works of,
                publicly display, or exploit any content from our website without express written permission.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you create an account on our website, you are responsible for maintaining the confidentiality of your
                account information and password. You agree to accept responsibility for all activities that occur under
                your account. We reserve the right to suspend or terminate your account if we suspect any unauthorized
                use or breach of security.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">Links to Third-Party Websites</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website contains links to third-party websites, including Amazon. We are not responsible for the
                content, privacy policies, or practices of third-party websites. We encourage you to review the terms
                and privacy policies of any third-party websites you visit.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                THE WEBSITE AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF
                ANY KIND, EITHER EXPRESS OR IMPLIED. Market Plaza does not warrant that the website will be
                uninterrupted, secure, or error-free, or that defects will be corrected. We make no warranties about the
                accuracy or completeness of the website's content.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                TO THE FULLEST EXTENT PERMITTED BY LAW, Market Plaza shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred
                directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from
                your access to or use of or inability to access or use the website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify, defend, and hold harmless Market Plaza and its officers, directors, employees,
                and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable
                attorneys' fees and costs, arising out of or in any way connected with your access to or use of the
                website or your violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of New York,
                United States, without regard to its conflict of law provisions. Any legal action or proceeding arising
                under these Terms will be brought exclusively in the federal or state courts located in New York.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision
                is material, we will provide at least 30 days' notice prior to any new terms taking effect. By
                continuing to access or use our website after those revisions become effective, you agree to be bound by
                the revised terms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-muted-foreground mt-4">
                Email: legal@marketplaza.com
                <br />
                Phone: 1-800-555-1234
                <br />
                Address: 123 Market Street, Suite 100, New York, NY 10001
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
