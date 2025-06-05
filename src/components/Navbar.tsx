"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    setMenuOpen(false); // close menu on click
    if (pathname !== "/") {
      router.push("/#" + id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-[1050] bg-[#000000]"
    >
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="space-x-6 hidden md:flex">
          <button
            onClick={() => router.push("/")}
            className="text-[#d4d4d4] text-[1.2rem] hover:text-[#f0f0f0] transition-colors duration-200"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className="text-[#d4d4d4] text-[1.2rem] hover:text-[#f0f0f0] transition-colors duration-200"
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("contact-me")}
            className="text-[#d4d4d4] text-[1.2rem] hover:text-[#f0f0f0] transition-colors duration-200"
          >
            Contact
          </button>
          <Link
            href="/about"
            className="text-[#d4d4d4] text-[1.2rem] hover:text-[#f0f0f0] transition-colors duration-200"
          >
            About Me
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-[#000000ea] px-4 pb-4 space-y-2">
          <button
            onClick={() => router.push("/")}
            className="text-white text-lg text-left"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className="text-white text-lg text-left"
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("contact-me")}
            className="text-white text-lg text-left"
          >
            Contact
          </button>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="text-white text-lg"
          >
            About Me
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
