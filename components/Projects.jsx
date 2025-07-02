"use client";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Store",
    description:
      "A modern online shop built with Next.js, Tailwind CSS, and Stripe for payments.",
    image: "/ecommerce.jpg",
    live: "https://your-live-link.com",
    code: "https://github.com/gannat-123",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio to showcase my work and skills. Built with React and Framer Motion.",
    image: "/portfolio.jpg",
    live: "https://your-portfolio-link.com",
    code: "https://github.com/gannat-123",
  },
  {
    title: "To-Do App (Python)",
    description:
      "Simple and clean to-do list built using Python and Tkinter GUI framework.",
    image: "/todo.jpg",
    live: "", // live link مش موجود
    code: "https://github.com/gannat-123",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.96 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: "spring",
      stiffness: 80,
    },
  }),
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-tr from-[#18122B] via-[#393053] to-[#635985] text-white px-4 py-24"
    >
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
        className="text-5xl sm:text-7xl font-black text-center mb-20 bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl tracking-tight"
      >
        Projects
      </motion.h1>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
            className="group bg-white/10 border border-white/10 rounded-3xl p-6 flex flex-col shadow-xl hover:shadow-2xl hover:scale-[1.025] transition-all duration-300 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-fuchsia-500/30 to-cyan-400/20 rounded-full blur-2xl" />
            </div>
            <div className="relative h-52 w-full rounded-2xl overflow-hidden mb-5 shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={i === 0}
              />
            </div>
            <h3 className="text-2xl font-bold text-fuchsia-200 mb-2 tracking-tight">
              {project.title}
            </h3>
            <p className="text-base text-gray-200 flex-1 mb-6">
              {project.description}
            </p>

            <div className="flex gap-4 mt-auto flex-wrap">
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white font-semibold shadow-md hover:from-fuchsia-400 hover:to-cyan-300 transition"
                >
                  Live <FaExternalLinkAlt className="text-sm" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-gray-300 font-medium shadow-inner cursor-not-allowed">
                  Coming Soon
                </span>
              )}

              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white font-semibold shadow-md hover:from-blue-500 hover:to-fuchsia-500 transition"
                >
                  Code <FaGithub className="text-base" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
