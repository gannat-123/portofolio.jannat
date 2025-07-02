"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-4 sm:px-6 py-16 flex flex-col items-center justify-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-8 sm:mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
      >
        Get In Touch
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-white/5 backdrop-blur-md p-4 xs:p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl"
      >
        <form
          action="https://formspree.io/f/xpwrbpno"
          method="POST"
          className="flex flex-col gap-4 sm:gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="bg-white/10 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="bg-white/10 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="bg-white/10 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl text-white font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 sm:mt-10 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center text-xs xs:text-sm text-gray-300">
          <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
            <FaEnvelope className="text-lg sm:text-xl text-pink-400" />
            <span className="break-all">gannata79@gmail.com</span>
          </div>
          <div className="flex gap-4 sm:gap-5 justify-center sm:justify-end">
            <a
              href="https://github.com/gannat-123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition text-lg sm:text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jannat-ashraf-895871352"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition text-lg sm:text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
