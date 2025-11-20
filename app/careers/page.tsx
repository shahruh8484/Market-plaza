import { Footer } from "@/components/footer"
import { Briefcase, MapPin, Clock } from "lucide-react"

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <h1 className="font-serif text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">Help us build the future of online shopping</p>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-center">Why Market Plaza?</h2>
            <p className="text-muted-foreground leading-relaxed text-center mb-12">
              At Market Plaza, we're building more than just an e-commerce platform—we're creating a community of
              passionate individuals dedicated to delivering exceptional shopping experiences. Join us and be part of
              something special.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Growth Opportunities</h3>
                <p className="text-sm text-muted-foreground">
                  Advance your career with continuous learning and development programs
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Work-Life Balance</h3>
                <p className="text-sm text-muted-foreground">
                  Flexible schedules and remote work options to fit your lifestyle
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Great Benefits</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive health coverage, retirement plans, and more
                </p>
              </div>
            </div>

            {/* Open Positions */}
            <h2 className="font-serif text-3xl font-semibold mb-8 text-center">Open Positions</h2>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Senior Product Manager</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          New York, NY
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Full-time
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Lead product strategy and development for our e-commerce platform. Work with cross-functional teams to
                  deliver innovative features that delight our customers.
                </p>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                  Apply Now
                </button>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Customer Success Manager</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          Remote
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Full-time
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Build lasting relationships with our customers and ensure they have exceptional experiences. Provide
                  support, gather feedback, and champion customer needs.
                </p>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                  Apply Now
                </button>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Marketing Specialist</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          San Francisco, CA
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Full-time
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Create and execute marketing campaigns that drive growth and engagement. Work with creative teams to
                  develop compelling content and strategies.
                </p>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                  Apply Now
                </button>
              </div>
            </div>

            <div className="mt-12 bg-muted/50 border border-border rounded-lg p-8 text-center">
              <h3 className="font-serif text-2xl font-semibold mb-4">Don't See a Perfect Fit?</h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for talented individuals to join our team. Send us your resume and tell us how you
                can contribute to Market Plaza.
              </p>
              <a
                href="mailto:careers@marketplaza.com"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
