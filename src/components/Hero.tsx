'use client'
import Image from 'next/image'

const Hero = () => {
  return (
<section className="relative h-[120vh] w-full flex items-center justify-center text-center overflow-hidden">
  <Image
    src="/main.jpg"
    alt="Hero Background"
    fill
    className="object-cover z-0"
    priority
  />
  <div className="absolute inset-0 bg-black/15 z-10" />
  <div className="relative z-20 px-4">
    <h1 className="text-white text-5xl sm:text-6xl font-bold mb-4">Aryan Kharva</h1>
    <p className="text-white text-lg sm:text-xl mx-auto whitespace-nowrap">
      Frontend Developer · Undergraduate Researcher · CS Student at UNC Charlotte
    </p>
  </div>
</section>

  )
}

export default Hero
