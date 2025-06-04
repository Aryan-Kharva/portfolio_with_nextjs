'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const DribbleData = () => {
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
              src="/project4.jpg"
              alt="DribbleData"
              width={880}
              height={600}
              className="rounded-lg object-cover w-full max-h-[580px] shadow-xl drop-shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[42%]"
          >
            <h1 className="text-[2.25rem] font-bold text-gray-900 mb-1">DribbleData</h1>
            <div className="flex gap-6 text-sm text-gray-500 border-b border-gray-300 pb-4 mb-6">
              <span>NBA Analytics Website</span>
              <span>Full Stack</span>
            </div>
            <p className="text-[1.075rem] leading-[1.75] mb-6">
              DribbleData is a basketball analytics platform that lets users explore NBA stats through charts, filters, and a generative AI-powered chatbot. It was developed as a final group project combining frontend, backend, and AI integration.
            </p>
            <ul className="list-disc pl-5 mb-6 text-[1.05rem] leading-[1.75]">
              <li>NBA stat visualizations and filters</li>
              <li>Chatbot to answer basketball questions using AI</li>
              <li>Responsive UI with clean user experience</li>
            </ul>
            <p className="text-[1.05rem] text-gray-700 mb-6">
              <strong>Tech Stack:</strong> JavaScript, HTML/CSS, Flask, Chart.js, OpenAI API
            </p>
            <Link
              href="https://github.com/Aryan-Kharva/dribbledata"
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
            DribbleData was developed as a team project for our class, combining our interests in basketball and data visualization. It allows users to explore NBA statistics through interactive charts, filters, and summaries. The project also features a custom-built AI chatbot to answer basketball-related queries.
          </p>

          <h3 className="text-[1.6rem] font-semibold text-gray-900 mt-12 mb-2">Presentation</h3>
          <p className="mb-2 text-[1.075rem] leading-[1.75]">
            As part of our final showcase, we presented DribbleData to our classmates and professor. I demoed the chatbot feature and explained how it was integrated using the OpenAI API.
          </p>
          <div className="mb-2">
            <Link
              href="https://docs.google.com/presentation/d/1NICCr0dG_vvVedHdyVFWMGsKgA_Ax7Xx/edit?usp=sharing&ouid=106013390410796778067&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform transform hover:scale-105 duration-300"
            >
              <Image
                src="/dribble_slides.jpg"
                alt="Presentation cover slide"
                width={720}
                height={450}
                className="rounded-lg shadow-xl drop-shadow-lg"
              />
            </Link>
            <p className="text-sm text-gray-600 mt-1">
              Click the cover slide to view our full project presentation
            </p>
          </div>

          <h3 className="text-[1.6rem] font-semibold text-gray-900 mt-12 mb-2">My Contributions</h3>
          <p className="mb-6 text-[1.075rem] leading-[1.75]">
            I was responsible for implementing the entire chatbot feature — both frontend and backend — leveraging what I had learned from my research in generative AI. I also led the frontend development, designing the UI and layout to be clean, consistent, and responsive. In addition to my main tasks, I collaborated with teammates and helped debug issues across other areas of the site.
          </p>

          <h3 className="text-[1.6rem] font-semibold text-gray-900 mt-12 mb-2">Key Features</h3>
          <ul className="list-disc pl-5 mb-6 text-[1.05rem] leading-[1.75]">
            <li>AI-powered chatbot trained to answer basketball-related queries using OpenAI</li>
            <li>Player and team statistics visualized with interactive charts</li>
            <li>Dynamic filters and dropdowns for stat categories, seasons, and teams</li>
            <li>Clean, responsive UI built with HTML, CSS, and JavaScript</li>
            <li>Collaborative development with modularized frontend/backend logic</li>
          </ul>

          <Image
            src="/dribble_chatbot.jpg"
            alt="Chatbot interface screenshot"
            width={450}
            height={420}
            className="rounded-lg shadow-xl drop-shadow-lg mb-2"
          />
          <p className="text-sm text-gray-600 mt-1">
            Chatbot feature — answers player stats questions using AI integration
          </p>

          <h3 className="text-[1.6rem] font-semibold text-gray-900 mt-12 mb-2">Challenges</h3>
          <p className="mb-6 text-[1.075rem] leading-[1.75]">
            Integrating the chatbot smoothly was tricky — especially when managing async responses from the API and rendering them properly in the chat window. We also had to troubleshoot deployment bugs and data inconsistencies when pulling stats from external sources.
          </p>

          <h3 className="text-[1.6rem] font-semibold text-gray-900 mt-12 mb-2">What I Learned</h3>
          <p className="text-[1.075rem] leading-[1.75]">
            This project taught me how to integrate real-time AI tools into web applications and manage state across asynchronous operations. It also sharpened my frontend design skills and gave me experience working on a team with shared responsibilities and version control.
          </p>
        </div>
      </section>
    </main>
  )
}

export default DribbleData
