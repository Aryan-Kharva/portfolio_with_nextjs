'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const SpinCityMarket = () => {
  return (
    <main className="bg-[#f9f9f9] text-black font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center justify-between">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[58%]"
          >
            <Image
              src="/project1.jpg"
              alt="Spin City Market"
              width={960}
              height={720}
              className="rounded-lg object-cover w-full max-h-[620px] shadow-xl drop-shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[42%]"
          >
            <h1 className="text-[2.25rem] font-bold text-gray-900 mb-1">Spin City Market</h1>
            <div className="flex gap-6 text-sm text-gray-500 border-b border-gray-300 pb-4 mb-6">
              <span>Vinyl Marketplace</span>
              <span>Full Stack</span>
            </div>
            <p className="text-[1.075rem] leading-[1.75] mb-6">
              Spin City Market is a full-stack web application where users can browse, list, and manage vinyl record listings. It provides a dynamic online marketplace for vinyl enthusiasts to discover new records, post their own for sale, and manage listings with ease.
            </p>
            <ul className="list-disc pl-5 mb-6 text-[1.05rem] leading-[1.75]">
              <li>Create listings with images and detailed info (title, artist, condition, price)</li>
              <li>Search functionality with keyword filters</li>
              <li>Edit, soft delete, and manage records</li>
              <li>Secure image upload with multer</li>
              <li>Styled with EJS templates and custom CSS</li>
            </ul>
            <p className="text-[1.05rem] text-gray-700 mb-6">
              <strong>Tech Stack:</strong> Node.js, Express.js, MongoDB, EJS, CSS, Multer
            </p>
            <Link
              href="https://github.com/Aryan-Kharva/spin_city_market"
              target="_blank"
              className="inline-block bg-[#003366] text-white py-2.5 px-6 rounded-md hover:bg-[#001f4d] transition text-[1rem]"
            >
              View GitHub Repository
            </Link>
          </motion.div>
        </div>
      </section>

      {/* More About Section */}
      <section className="py-20 bg-white px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[1.6rem] font-semibold text-gray-900 mb-2">More About This Project</h2>
          <p className="mb-6 text-[1.075rem] leading-[1.75]">
            As someone who’s always been passionate about music, I knew I had to channel that into a project. Spin City Market was born from that love—my way of combining tech with my interests. I wanted to build something music-related, so I created a vinyl record marketplace where users could explore, list, and manage their collections.
          </p>

          <h3 className="text-[1.6rem] font-semibold text-gray-900 mt-12 mb-2">Design Process</h3>
          <p className="mb-2 text-[1.075rem] leading-[1.75]">
            I began by creating the logo using Canva. I wanted something simple yet catchy to represent the vinyl niche.
          </p>
          <Image
            src="/canva1.jpg"
            alt="Canva logo design screenshot"
            width={800}
            height={500}
            className="rounded-lg shadow-xl drop-shadow-lg mb-8"
          />

          <p className="mb-2 text-[1.075rem] leading-[1.75]">
            After finalizing the branding, I moved into Figma to plan out the site’s UI/UX. This helped me map out the page structure and interactions before diving into code.
          </p>
          <Image
            src="/figma1.jpg"
            alt="Figma design wireframe"
            width={800}
            height={500}
            className="rounded-lg shadow-xl drop-shadow-lg mb-8"
          />

          <h3 className="text-[1.6rem] font-semibold text-gray-900 mt-12 mb-2">Development</h3>
          <p className="mb-2 text-[1.075rem] leading-[1.75]">
            I built the full-stack application using what I learned in my Network-Based Application Development course at UNC Charlotte. This course gave me a solid understanding of REST APIs, Express routing, and database connectivity, which I applied directly to this project.
          </p>
          <p className="mb-6 text-[1.075rem] leading-[1.75]">
            Every feature—from listing creation to secure image uploads—was an opportunity to practice and refine my skills. Spin City Market became more than just a fun build; it became a personal milestone.
          </p>

          <h3 className="text-[1.6rem] font-semibold text-gray-900 mt-12 mb-2">Key Features</h3>
          <ul className="list-disc pl-5 mb-6 text-[1.05rem] leading-[1.75]">
            <li>Full CRUD for vinyl listings including image upload, editing, and soft deletion</li>
            <li>Search functionality with dynamic keyword filtering using query strings</li>
            <li>Modular EJS templates for reusable layout and cleaner code</li>
            <li>Responsive design using custom CSS for desktop and mobile views</li>
            <li>Multer-based image upload system with file validation</li>
            <li>MongoDB integration using Mongoose for schema definition and database operations</li>
          </ul>

          <div className="mb-6">
            <Image
              src="/browse.jpg"
              alt="Browse page screenshot"
              width={800}
              height={500}
              className="rounded-lg shadow-xl drop-shadow-lg"
            />
            <p className="text-sm text-gray-600 mt-2">
              Browse page — users can explore all vinyl listings and filter by keyword
            </p>
          </div>

          <h3 className="text-[1.6rem] font-semibold text-gray-900 mt-12 mb-2">Challenges</h3>
          <p className="mb-6 text-[1.075rem] leading-[1.75]">
            One of the trickiest parts was setting up image uploads. Getting Multer to work correctly with file types, storage settings, and rendering uploaded files dynamically took a lot of trial and error. I also ran into some roadblocks connecting to MongoDB initially and had to troubleshoot local vs cloud connections during development.
          </p>

          <h3 className="text-[1.6rem] font-semibold text-gray-900 mt-12 mb-2">What I Learned</h3>
          <p className="text-[1.075rem] leading-[1.75]">
            This was my first full-stack web app, so I learned a ton about Express routing, middleware, environment variables, and MVC structure. More importantly, I realized how much I enjoy bringing everything together — from UI and styling to database logic and debugging. It gave me confidence that I can independently scope, build, and ship a complete web application.
          </p>
        </div>
      </section>
    </main>
  )
}

export default SpinCityMarket
