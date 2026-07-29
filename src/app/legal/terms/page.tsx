import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-24 px-4 md:px-8 lg:px-12">
        <div className="w-full max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl shadow-black/20">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Terms of <span className="text-primary">Service</span>
          </h1>
          
          <div className="prose prose-invert prose-blue max-w-none space-y-6 text-muted-foreground">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Heroic Bypass ("Service", "we", "us", or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">2. Digital Goods & Refunds</h2>
              <p>
                Due to the nature of our products being digital goods, all sales are considered final. We do not offer refunds once a license key has been generated or viewed, unless our software completely fails to function on your officially supported operating system and our support team is unable to resolve the issue.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">3. Usage Restrictions</h2>
              <p>
                You agree not to modify, reverse engineer, decompile, or disassemble any part of our software. You may not share, resell, or distribute your license key to any third party. Any violation of these terms will result in immediate termination of your license without a refund.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">4. Account Ban Liability</h2>
              <p>
                While we strive to keep our products secure and undetected, use of our software is entirely at your own risk. We are not responsible for any game bans, account suspensions, or hardware bans that may occur as a result of using our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">5. Service Availability</h2>
              <p>
                We reserve the right to modify, suspend, or discontinue any part of the service at any time without notice. We are not liable to you or to any third party for any modification, suspension, or discontinuance of the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">6. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us via our Discord server or through the support ticketing system.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
