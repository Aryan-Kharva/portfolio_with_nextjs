"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const BollywoodThreads = () => {
  return (
    <main className="bg-[#f9f9f9] text-black font-sans text-[0.875rem] md:text-[0.95rem]">
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
              src="/project2.jpg"
              alt="Bollywood Threads Homepage"
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
            <h1 className="text-[2.25rem] font-bold text-gray-900 mb-1">Bollywood Threads</h1>
            <div className="flex gap-6 text-sm text-gray-500 border-b border-gray-300 pb-4 mb-6">
              <span>Small Business Website</span>
              <span>Freelance</span>
            </div>
            <p className="text-[1.075rem] leading-[1.75] mb-6">
              Bollywood Threads is a custom-built e-commerce and showcase
              website for a South Asian boutique. It allows users to explore
              designer clothing, view product details, and contact the seller
              via WhatsApp for inquiries.
            </p>
            <ul className="list-disc pl-5 mb-6 text-[1.05rem] leading-[1.75]">
              <li>Product gallery with dynamic filtering by type</li>
              <li>Clean modern design with emphasis on visuals</li>
              <li>Mobile-first, responsive layout</li>
              <li>Custom WhatsApp integration for inquiries</li>
            </ul>
            <p className="text-[1.025rem] text-gray-700 mb-6">
              <strong>Tech Stack:</strong> HTML, CSS, Bootstrap, JavaScript
            </p>
            <Link
              href="https://github.com/Aryan-Kharva/Bollywood-Threads-Website"
              target="_blank"
              className="inline-block bg-[#003366] text-white py-2.5 px-6 rounded-md hover:bg-[#001f4d] transition text-[1rem]"
            >
              View GitHub Repository
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 bg-white px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[1.55rem] font-semibold text-gray-900 mb-2">
            More About This Project
          </h2>
          <p className="mb-6 text-[1.05rem] leading-[1.75]">
            Bollywood Threads was one of my first client projects—created for a
            small business run by my mom, Vaishali Kharva. She wanted a website
            that could bring her vision for traditional Indian fashion into the
            digital space, and I knew I wanted to build something clean,
            elegant, and easy to use.
          </p>

          <h3 className="text-[1.55rem] font-semibold text-gray-900 mt-12 mb-2">
            Design Process
          </h3>
          <p className="mb-2 text-[1.05rem] leading-[1.75]">
            I came up with the name “Bollywood Threads” to reflect both our
            cultural roots and the colorful, expressive nature of South Asian
            fashion. I designed the logo entirely in Procreate using just my
            iPad and Apple Pencil, experimenting with different typography and
            graphical flourishes until I found something that felt bold and
            memorable.
          </p>
          <Image
            src="/brainstorm1.jpg"
            alt="Brainstorming sketches"
            width={700}
            height={440}
            className="rounded-lg shadow-xl drop-shadow-lg mb-2"
          />
          <p className="text-sm text-gray-600 mt-1">
            Initial brainstorming sketches for logo, layout, and brand elements
          </p>

          <h3 className="text-[1.55rem] font-semibold text-gray-900 mt-12 mb-2">
            Marketing and Flyers
          </h3>
          <p className="mb-6 text-[1.05rem] leading-[1.75]">
            After the site build, I continued helping with marketing by
            designing flyers and graphics for exhibitions and sales events.
            These were all created in Canva or Procreate, using elements
            consistent with our brand. I’ve included a few of those designs
            below.
          </p>

          <div className="scale-95">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 mb-12">
              <div className="flex justify-center">
                <Image
                  src="/parents.jpg"
                  alt="My parents"
                  width={360}
                  height={320}
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-5">

                <motion.img
                  initial={{ y: -40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.03 }}
                  src="/flyer1.jpg"
                  alt="Flyer 1"
                  className="rounded-lg shadow-md w-full aspect-square object-cover transition-transform duration-300"
                />


                <motion.img
                  initial={{ x: 40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  src="/flyer3.jpg"
                  alt="Flyer 3"
                  className="rounded-lg shadow-md w-full aspect-square object-cover transition-transform duration-300"
                />


                <motion.img
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.03 }}
                  src="/flyer2.jpg"
                  alt="Flyer 2"
                  className="rounded-lg shadow-md w-full aspect-square object-cover transition-transform duration-300"
                />


                <motion.img
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                  src="/flyer4.jpg"
                  alt="Flyer 4"
                  className="rounded-lg shadow-md w-full aspect-square object-cover transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <h3 className="text-[1.55rem] font-semibold text-gray-900 mt-12 mb-2">
            Key Features
          </h3>
          <ul className="list-disc pl-5 mb-6 text-[1.025rem] leading-[1.75]">
            <li>
              Custom-built responsive website using HTML, CSS, and modular
              structure
            </li>
            <li>
              Designed brand identity, logo, and visual language using Procreate
            </li>
            <li>
              Created wireframes and layout plans in Figma to map out site flow
            </li>
            <li>
              Developed pages for product listings, appointment booking, and
              events
            </li>
            <li>
              Implemented an interactive flyer showcase section using a CSS grid
              layout
            </li>
            <li>
              Ongoing collaboration with the business owner to align updates
              with live events
            </li>
          </ul>

          <Image
            src="/gallery.jpg"
            alt="Gallery page screenshot"
            width={700}
            height={400}
            className="rounded-lg shadow-xl drop-shadow-lg mb-2"
          />
          <p className="text-sm text-gray-600 mt-1">
            Gallery page — displays past exhibitions, pop-up events, and product
            highlights
          </p>

          <h3 className="text-[1.55rem] font-semibold text-gray-900 mt-12 mb-2">
            Challenges
          </h3>
          <p className="mb-6 text-[1.05rem] leading-[1.75]">
            Since this was a real client-facing project, I had to make sure the
            site reflected both the business’s vision and customer expectations.
            One challenge was keeping everything aligned visually — especially
            when balancing image-based content like flyers with mobile
            responsiveness.
          </p>

          <h3 className="text-[1.55rem] font-semibold text-gray-900 mt-12 mb-2">
            What I Learned
          </h3>
          <p className="text-[1.05rem] leading-[1.75]">
            This project helped me build confidence in working with a real
            stakeholder — my mom — and taught me how to communicate ideas
            visually and iteratively. I learned how to translate brand identity
            into a consistent digital experience, and it sparked a deeper
            interest in UX/UI design and client-focused development.
          </p>
        </div>
      </section>
    </main>
  );
};

export default BollywoodThreads;
