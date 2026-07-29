import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import Products from "@/components/Products"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Features />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
