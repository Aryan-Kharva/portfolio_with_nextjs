'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { projectsData } from '@/data/projects'

const Projects = () => {
  // animation variant for sliding cards from left or right
  const cardVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i % 2 === 0 ? -100 : 100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="projects" className="bg-gray-100 py-20 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold lowercase text-black">portfolio</h1>
        <p className="text-gray-600 text-lg mt-2">
          Check out some of my latest work — full stack apps, frontend builds, and UI-focused projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.slug}
            className="bg-white shadow-md overflow-hidden border border-gray-200 rounded-xl"
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover rounded-t-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-1 text-black">{project.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{project.tag}</p>
              <p className="text-gray-700 text-base mb-4">{project.desc}</p>
              <Link
  href={`/projects/${project.slug}`}
  className="group inline-flex items-center text-gray-700 font-semibold hover:text-black transition-all duration-300"
>
  <span>View Project</span>
  <span
    className="ml-1 opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
  >
    →
  </span>
</Link>


            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
