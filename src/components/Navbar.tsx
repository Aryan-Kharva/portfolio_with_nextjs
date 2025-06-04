'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter()

  const handleScroll = (id: string) => {
    if (pathname !== '/') {
      router.push('/#' + id)
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed top-0 w-full z-[1050] bg-[#000000ea] bg-black">
      <nav className="max-w-7xl w-full mx-auto px-0 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <div className="space-x-6 hidden md:flex">
          <button
            onClick={() => router.push('/')}
            className="text-[#d4d4d4] text-[1.2rem] hover:text-[#f0f0f0] transition-colors duration-200"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll('projects')}
            className="text-[#d4d4d4] text-[1.2rem] hover:text-[#f0f0f0] transition-colors duration-200"
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll('contact-me')}
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
      </nav>
    </div>
  )
}

export default Navbar
