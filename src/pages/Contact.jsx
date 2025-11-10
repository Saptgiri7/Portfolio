import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 bg-brand-light dark:bg-gray-900 transition-colors duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto flex flex-col items-center gap-10"
      >
        {/* Heading */}
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-800 dark:text-gray-100 tracking-tight"
          >
            Let’s Connect ✨
          </motion.h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to collaborate. Feel free to reach out!
          </p>
        </div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-full md:w-3/4 text-center space-y-4 hover:shadow-purple-400/30 transition-shadow duration-300"
        >
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:saptgiriyangal@gmail.com"
              className="text-purple-600 dark:text-purple-400 hover:underline"
            >
              saptgiriyangal@gmail.com
            </a>
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Phone:</span> +91 8856041544
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Location:</span> Solapur, India
          </p>

          {/* CTA Button */}
          <motion.a
            href="mailto:saptgiriyangal@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-4 px-6 py-2 bg-purple-500 text-white font-semibold rounded-full shadow-md hover:bg-purple-400 transition"
          >
            Send a Message
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex space-x-6 mt-6 text-3xl justify-center"
        >
          {[
            { icon: <FaGithub />, link: "https://github.com/Saptgiri7" },
            {
              icon: <FaLinkedin />,
              link: "http://www.linkedin.com/in/saptgiri-yangal-79047b270",
            },
            { icon: <FaEnvelope />, link: "mailto:saptgiriyangal@gmail.com" },
            {
              icon: <FaInstagram />,
              link: "http://www.instagram.com/saptgiri7",
            },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-purple-500 dark:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.7)] transition-all"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
