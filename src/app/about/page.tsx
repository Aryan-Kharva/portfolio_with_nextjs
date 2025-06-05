'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Slider from 'react-slick';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const personalImages = [
  {
    img: '/personal3.jpg',
    caption: "The class that started it all — AP CSA, 2021",
  },
  {
    img: '/personal6.jpg',
    caption: 'Still building — just traded bricks for code.',
  },
  {
    img: '/personal5.jpg',
    caption: 'My foundation — the people who keep me grounded, motivated, and smiling.',
  },
  {
    img: '/personal4.jpg',
    caption: 'Stepping away from the screen to gain a new perspective.',
  },
  {
    img: '/personal2.jpg',
    caption: 'Catching a show to refuel my creativity.',
  },
  {
    img: '/personal1.jpg',
    caption: 'Always down to meet other llamas — this one just doesn’t do AI.',
  },
];

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    className="absolute top-1/2 transform -translate-y-1/2 text-2xl text-gray-500 cursor-pointer z-10 hover:text-gray-700 left-[-25px]"
    onClick={onClick}
  >
    ‹
  </div>
);

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    className="absolute top-1/2 transform -translate-y-1/2 text-2xl text-gray-500 cursor-pointer z-10 hover:text-gray-700 right-[-25px]"
    onClick={onClick}
  >
    ›
  </div>
);

export default function AboutPage() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2300,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  };

  return (
    <>
      <Navbar />

      <section className="bg-white text-black pt-24 px-4 md:px-12">
        {/* About Section */}
        <div className="w-full flex justify-center">
          <div className="flex flex-col md:flex-row gap-12 items-start max-w-[1000px] px-4">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <Image
                src="/profile.jpg"
                alt="Aryan Kharva"
                width={320}
                height={380}
                className="rounded-xl shadow-md object-cover max-w-[300px] aspect-[4/5] h-[410px]"
              />
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-left w-full max-w-[550px] flex flex-col justify-between"
            >
              <h1 className="text-4xl font-bold mb-4">About Me</h1>
              <p className="mb-2">
                {"I'm Aryan Kharva, a Computer Science student at UNC Charlotte with a concentration in Web/Mobile Development & Software Engineering. My love for building started as a kid with Lego sets, Minecraft worlds, and woodworking — anything that let me design and problem-solve creatively."}
              </p>
              <p className="mb-2">
                {"I explored every corner of the field — from cybersecurity and data science to cloud computing and AI — because I believe in trying before judging. That led me to discover what I truly enjoy: building smart, beautiful tools with web technologies and generative AI."}
              </p>
              <p className="mb-2">
                {"I'm currently doing undergraduate research working on a RAG model using Llama 2 and OpenAI APIs. I’m a three-time Chancellor’s List recipient (Spring 2024, Fall 2024, and Spring 2025) and constantly looking for ways to grow as a developer and a person."}
              </p>
              {/* Resume Visibility */}
              {/* <p className="mt-2">
                🔗{" "}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-bold text-neutral-800 transition-transform duration-300 hover:scale-105 hover:text-indigo-800"
                >
                  View My Resume
                </a>
              </p> */}
            </motion.div>
          </div>
        </div>

        {/* Beyond the Code Section */}
        <div className="max-w-7xl mx-auto mt-16">
          <h2 className="text-[1.55rem] font-semibold text-gray-900 mb-2">
            Beyond the Code
          </h2>
          <p className="mb-3">
            {"I'm more than just my resume. I still build LEGO sets — especially Star Wars ones — and I’ll defend The Clone Wars as peak Star Wars to anyone who asks. Star Wars has always inspired my creativity and love of storytelling."}
          </p>
          <p className="mb-3">
            {"I also love trying new foods, discovering underrated restaurants, and spending quality time with family and friends. Whether it’s late-night boba runs, spontaneous road trips, or backyard bonfires — these moments fuel me as much as my projects do."}
          </p>
          <p className="mb-8">
            {"I bring that same spirit into my work: curious, thoughtful, and driven to build things that bring joy, clarity, or just a touch of wow."}
          </p>

          <Slider {...sliderSettings} className="mb-12 px-2">
            {personalImages.map((item, i) => (
              <div key={i} className="px-2">
                <div className="relative overflow-hidden rounded-xl group">
                  <Image
                    src={item.img}
                    alt={`Personal ${i}`}
                    width={400}
                    height={300}
                    className="rounded-xl shadow-md object-cover w-full h-[500px] group-hover:brightness-[70%] transition-all duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white px-3 py-2 text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.caption}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Currently Section */}
        <div className="max-w-7xl mx-auto mt-12 pb-20">
          <h2 className="text-[1.55rem] font-semibold text-gray-900 mb-2">
            Currently...
          </h2>
          <p className="mb-3">
            {"I'm continuing my undergraduate research in Generative AI. Outside the classroom, I’m refining my NBA analytics app, "}
            <strong>DribbleData</strong>
            {", and leveling up my skills in full stack development, data handling, and modern UI design. Additionally, I'm currently brainstorming my next personal project — specifically looking into "}
            <strong>mobile development</strong>
            {"!"}
          </p>
          <p className="mb-6">
            {"I'm open to opportunities across "}
            <strong>software engineering</strong>, <strong>AI/ML</strong>,{" "}
            <strong>frontend development</strong>, <strong>UX/UI design</strong>
            {", and other areas of computer science where I can contribute, grow, and help build meaningful, impactful projects."}
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
