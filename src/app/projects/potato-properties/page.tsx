'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const PotatoProperties = () => {
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
              src="/project3.jpg"
              alt="Potato Properties"
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
            <h1 className="text-[2.25rem] font-bold text-gray-900 mb-1">Potato Properties</h1>
            <div className="flex gap-6 text-sm text-gray-500 border-b border-gray-300 pb-4 mb-6">
              <span>Apartment Management Website</span>
              <span>Full Stack</span>
            </div>
            <p className="text-[1.075rem] leading-[1.75] mb-6">
              Potato Properties is a full-stack property comparison platform developed by a team of students. It allows users to browse, compare, and save property listings in a clean, responsive interface.
            </p>
            <ul className="list-disc pl-5 mb-6 text-[1.05rem] leading-[1.75]">
              <li>Search and compare properties by criteria like price and room count</li>
              <li>Favorites system for saving listings</li>
              <li>Responsive layout optimized for all devices</li>
              <li>Modular backend routes and templates</li>
            </ul>
            <p className="text-[1.025rem] text-gray-700 mb-6">
              <strong>Tech Stack:</strong> Node.js, Express.js, MongoDB, EJS, JavaScript, CSS
            </p>
            <Link
              href="https://github.com/Aryan-Kharva/Apartment-Management"
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
          <h2 className="text-[1.6rem] font-semibold text-gray-900 mb-2">More About This Project</h2>
          <p className="mb-6 text-[1.075rem] leading-[1.75]">
            This was a collaborative effort between team members, with responsibilities split across features like search, compare, and saved listings. I led the initial design process and frontend structure.
          </p>

          <h3 className="text-[1.6rem] font-semibold text-gray-900 mt-12 mb-2">Design Process</h3>
          <p className="mb-2 text-[1.075rem] leading-[1.75]">
            I kicked off our team project by drafting the layout and structure in Figma. This helped align our group on what pages we needed, how the flow should work, and how to visually present search results, comparisons, and saved properties.
          </p><br></br>
          <Image
            src="/figma2.jpg"
            alt="Potato Properties Figma wireframe"
            width={800}
            height={500}
  className="rounded-lg shadow-xl drop-shadow-lg"
          />
          <p className="text-sm text-gray-600 mt-1">
            Initial Figma wireframe created to guide feature layout and team development
          </p>

          <h3 className="text-[1.6rem] font-semibold text-gray-900 mt-12 mb-2">Key Features</h3>
          <ul className="list-disc pl-5  text-[1.05rem] leading-[1.75]">
            <li>Compare multiple properties side-by-side with interactive toggling</li>
            <li>Property search with filtering by price, number of rooms, and type</li>
            <li>Favorites/saved properties with persistent local state</li>
            <li>Modular design using EJS templates and custom backend logic</li>
            <li>Fully responsive layout built with CSS Grid and Flexbox</li>
            <li>Team collaboration using Git for version control and component-based division of work</li>
          </ul>
          <br></br>
          <Image
            src="/potato_home.jpg"
            alt="Potato Properties home page screenshot"
            width={800}
            height={500}
  className="rounded-lg shadow-xl drop-shadow-lg"   
          />
          <p className="text-sm text-gray-600 mt-1">
            Home page — users can browse available properties and filter listings
          </p>

          <h3 className="text-[1.6rem] font-semibold text-gray-900 mt-12 mb-2">Challenges</h3>
          <p className="mb-6 text-[1.075rem] leading-[1.75]">
            Coordinating multiple contributors came with challenges — merging code, organizing Git branches, and keeping styles consistent. Implementing comparison logic without overlapping elements also took iteration.
          </p>

          <h3 className="text-[1.6rem] font-semibold text-gray-900 mt-12 mb-2">What I Learned</h3>
          <p className="text-[1.075rem] leading-[1.75]">
            This project taught me how to translate Figma designs into working code with a team. It strengthened my frontend architecture skills, responsive design abilities, and experience with version control in real-world collaboration.
          </p>
        </div>
      </section>
    </main>
  );
};

export default PotatoProperties;
