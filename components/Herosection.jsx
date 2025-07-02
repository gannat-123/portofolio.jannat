"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4 sm:px-8 overflow-hidden py-16"
    >
      {/* Decorative gradients */}
      <div className="absolute -top-40 -left-40 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-fuchsia-500 via-purple-600 to-blue-500 opacity-30 rounded-full blur-3xl z-0 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-44 h-44 sm:w-72 sm:h-72 bg-gradient-to-tr from-cyan-400 to-blue-500 opacity-20 rounded-full blur-2xl z-0"></div>

      {/* Content */}
      <div className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-10 lg:gap-20 relative z-10">
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6">
          <h2 className="text-gray-400 text-sm sm:text-base md:text-lg uppercase tracking-widest font-semibold">
            Welcome!
          </h2>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-blue-500 text-transparent bg-clip-text drop-shadow-lg">
            I'm Jannat
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-medium max-w-xl mx-auto lg:mx-0">
            Creative Frontend Developer crafting modern, responsive web
            experiences.
          </p>
          <p className="sr-only">
            Also known as: المبرمجة جنات – البشمهندسة جنات – Jannat Ashraf –
            Frontend Developer
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5 pt-4 sm:pt-6">
            <a
              href="/Jannat_Ashraf_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all text-sm sm:text-base flex items-center gap-2"
            >
              <span>Download CV</span>
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="inline-block"
              >
                <path d="M4 12l4 4 4-4M8 16V4" />
              </svg>
            </a>

            <Link
              href="https://github.com/gannat-123"
              target="_blank"
              className="hover:scale-110 transition-transform"
              aria-label="GitHub"
            >
              <FaGithub size={24} className="text-gray-300 hover:text-white" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/jannat-ashraf-895871352"
              target="_blank"
              className="hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <FaLinkedin
                size={24}
                className="text-blue-400 hover:text-blue-500"
              />
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative mb-8 lg:mb-0">
          <div className="relative w-32 h-32 xs:w-40 xs:h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-blue-500 opacity-40 blur-2xl group-hover:opacity-60 transition"></div>
            <Image
              src="/about.png.png"
              alt="Jannat Ashraf Frontend Developer"
              fill
              className="rounded-full object-cover border-4 border-white/10 shadow-2xl relative z-10"
              priority
              sizes="(max-width: 400px) 128px, (max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 256px, 320px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
