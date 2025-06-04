'use client'
import { motion } from 'framer-motion'
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

      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 px-4"
      >
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-white text-5xl sm:text-6xl font-bold mb-4"
        >
          Aryan Kharva
        </motion.h1>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-white text-lg sm:text-xl mx-auto whitespace-nowrap"
        >
          Frontend Developer · Undergraduate Researcher · CS Student at UNC Charlotte
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Hero
