import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="font-serif text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Market Plaza, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website and use our services. Please read
                this policy carefully.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect information about you in a variety of ways. The information we may collect includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Personal Data: Name, email address, phone number, and other contact information you provide</li>
                <li>
                  Usage Data: Information about how you use our website, including your IP address, browser type, and
                  access times
                </li>
                <li>Cookies and Tracking: Data collected through cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect in the following ways:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>To provide, operate, and maintain our website and services</li>
                <li>To improve, personalize, and expand our services</li>
                <li>To communicate with you, including customer service and support</li>
                <li>To send you updates, marketing communications, and promotional materials</li>
                <li>To monitor and analyze usage and trends to improve user experience</li>
                <li>To detect, prevent, and address technical issues and security vulnerabilities</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">Sharing Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may share your information with third parties only in the ways described in this Privacy Policy. We
                may share your information with service providers who perform services on our behalf, such as payment
                processing, data analysis, email delivery, and customer service. When you make a purchase through our
                website, you are redirected to Amazon, and their privacy policy applies to that transaction.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">Security of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use administrative, technical, and physical security measures to protect your personal information.
                While we have taken reasonable steps to secure the personal information you provide to us, please be
                aware that no security measures are perfect or impenetrable, and no method of data transmission can be
                guaranteed against any interception or other type of misuse.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">Your Privacy Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>The right to access and receive a copy of your personal data</li>
                <li>The right to correct or update your personal information</li>
                <li>The right to delete your personal data</li>
                <li>The right to restrict or object to our processing of your data</li>
                <li>The right to data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold certain
                information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for children under the age of 13. We do not knowingly collect personally
                identifiable information from children under 13. If you are a parent or guardian and you are aware that
                your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date at the top of this policy. You are
                advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-muted-foreground mt-4">
                Email: privacy@marketplaza.com
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
