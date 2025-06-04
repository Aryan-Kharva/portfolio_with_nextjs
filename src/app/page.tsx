import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
