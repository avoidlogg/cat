import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-24 px-4 md:px-8 lg:px-12">
        <div className="w-full max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl shadow-black/20">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          
          <div className="prose prose-invert prose-blue max-w-none space-y-6 text-muted-foreground">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, such as when you create an account, make a purchase, or communicate with us. This may include your Discord ID, email address, payment information, and IP address for security purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">2. Hardware Information</h2>
              <p>
                To provide our software services (including our HWID Spoofer and licensing systems), we automatically collect specific hardware identifiers from your computer. This information is strictly used for authentication and license enforcement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">3. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Provide, maintain, and improve our services.</li>
                <li>Process transactions and send related information.</li>
                <li>Authenticate your identity and prevent fraudulent use of our software.</li>
                <li>Send technical notices, updates, and security alerts.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We utilize industry-standard encryption for data transmission and storage.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">5. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or processing payments, so long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">6. Your Rights</h2>
              <p>
                You have the right to request access to the personal information we hold about you, to ask that your personal information be corrected, updated, or deleted. To exercise these rights, please contact our support team.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
