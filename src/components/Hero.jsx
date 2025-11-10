import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-6 md:px-12 py-16 bg-gray-50 dark:bg-gray-900 text-center min-h-screen">
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m <span className="text-purple-500">Saptgiri Yangal</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I’m a passionate <span className="font-semibold">Software Engineer</span> specializing in MERN stack.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col md:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <a
          href="https://frontend-unjz.onrender.com/"
          className="inline-block px-6 py-3 bg-purple-500 text-black font-semibold rounded-lg shadow hover:bg-purple-400 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          View My Work
        </a>

        <a
          href={`${process.env.PUBLIC_URL}/resume.pdf`}
          download="saptgiri-yangal-resume.pdf"
          className="inline-block px-6 py-3 bg-purple-500 text-black font-semibold rounded-lg shadow hover:bg-purple-400 transition"
        >
          <FaDownload className="inline-block mr-2" /> Download Resume
        </a>
      </motion.div>

      {/* Resume Preview */}
      <motion.div
        className="mt-12 w-full max-w-4xl aspect-[8.5/11] md:aspect-auto md:h-[90vh] bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <iframe
          src={`${process.env.PUBLIC_URL}/resume.pdf`}
          title="Saptgiri Yangal Resume Preview"
          className="w-full h-full"
          style={{ minHeight: "90vh" }}
        ></iframe>
      </motion.div>
    </section>
  );
}

export default Hero;
