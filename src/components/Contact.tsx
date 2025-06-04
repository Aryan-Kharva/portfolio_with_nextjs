'use client'

import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return

    emailjs
      .sendForm(
        'service_ifxclks',
        'template_4i6rt1l',
        form.current,
        'qW3TaQzg9scotGxGf'
      )
      .then(() => {
        alert('Message sent successfully!')
        form.current?.reset()
      })
      .catch(() => {
        alert('Something went wrong. Please try again later.')
      })
  }

  return (
    <section id="contact-me" className="bg-[#f9f9f9] py-20 px-4">
      <div className="max-w-xl mx-auto bg-white p-10 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 placeholder-gray-500 text-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 placeholder-gray-500 text-black"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-md h-40 resize-none focus:outline-none focus:border-blue-600 placeholder-gray-500 text-black"
            required
          />
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-950 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
