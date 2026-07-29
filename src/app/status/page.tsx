import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function StatusPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-24 px-4 md:px-8 lg:px-12 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              System <span className="text-primary">Status</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Current operational status of Heroic Bypass services and products.
            </p>
          </div>

          <div className="space-y-6">
            {/* Heroic Bypass Status */}
            <div className="bg-card border border-border rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg shadow-black/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Heroic Bypass</h3>
                  <p className="text-sm text-muted-foreground">Product Status</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-green-500 font-medium text-sm">Undetected</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
