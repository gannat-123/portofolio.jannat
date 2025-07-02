"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  "Frontend Development",
  "Next.js & React",
  "Python Basics",
  "Word & Excel",
  "Git & GitHub",
];

const socialLinks = [
  {
    href: "https://github.com/gannat-123",
    icon: <FaGithub className="text-2xl" />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/jannat-ashraf-895871352",
    icon: <FaLinkedin className="text-2xl" />,
    label: "LinkedIn",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex items-center justify-center px-4 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-5xl rounded-3xl bg-white/10 backdrop-blur-2xl shadow-2xl border border-white/10 p-8 sm:p-14 grid md:grid-cols-2 gap-12"
      >
        {/* Left Side - Image */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-8 border-purple-400 shadow-2xl bg-gradient-to-br from-purple-700 via-purple-400 to-pink-400 animate-pulse-slow">
            <Image
              src="/about.png.png"
              alt="Genat photo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="mt-6 text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-md text-lg">
              Web Developer
            </span>
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-400 to-blue-400 mb-4 drop-shadow-lg">
            Hi, I'm Jannat <span className="animate-wave inline-block">👋</span>
          </h2>
          <p className="text-gray-200 mb-4 leading-relaxed text-lg">
            I'm a{" "}
            <span className="text-purple-400 font-semibold">
              self-taught web developer
            </span>{" "}
            passionate about modern frontend frameworks like{" "}
            <span className="text-purple-300 font-semibold">Next.js</span> and{" "}
            <span className="text-purple-300 font-semibold">React</span>.
            Currently learning{" "}
            <span className="text-blue-300 font-semibold">Python</span> and
            building real-world projects to sharpen my skills.
          </p>
          <p className="text-gray-400 mb-8 text-base">
            Exploring tools like{" "}
            <span className="text-pink-400 font-semibold">Word</span> and{" "}
            <span className="text-pink-400 font-semibold">Excel</span>, and
            building a portfolio to showcase my journey into the tech world.
          </p>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-purple-200 mb-3">Skills</h3>
            <ul className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600/70 to-pink-500/70 text-white text-sm rounded-full border border-white/20 shadow hover:scale-105 hover:bg-purple-500/90 transition-all duration-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="flex gap-6 mt-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="bg-gradient-to-br from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white p-4 rounded-full shadow-xl transition-transform hover:scale-125 duration-200 border-2 border-white/20"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
      <style jsx>{`
        .animate-wave {
          animation: wave 2s infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          10% {
            transform: rotate(14deg);
          }
          20% {
            transform: rotate(-8deg);
          }
          30% {
            transform: rotate(14deg);
          }
          40% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.7);
          }
          50% {
            box-shadow: 0 0 40px 20px rgba(236, 72, 153, 0.3);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
