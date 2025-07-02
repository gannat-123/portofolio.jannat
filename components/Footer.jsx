import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-12 px-8 sm:px-16 w-full text-lg">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
        <p className="text-base sm:text-lg text-gray-300">
          © {new Date().getFullYear()} Jannat. All rights reserved.
        </p>
        <div className="flex gap-10 text-3xl">
          <a
            href="https://github.com/gannat-123"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jannat-ashraf-895871352"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/+201117095817"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.facebook.com/share/1BntmrzzLK/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/j.a.n.n.a.t.o"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://tiktok.com/@jannat._.ashraf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
