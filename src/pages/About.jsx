import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-16 sm:gap-20">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-gray-100 tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* About Main Content */}
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          {/* Animated Developer Illustration using Framer Motion */}
<div className="w-full md:w-1/2 flex justify-center md:justify-start">
  <motion.div
    className="relative w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 rounded-full 
               bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-300 
               shadow-2xl flex items-center justify-center overflow-hidden"
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {/* Core bubble animation */}
    <motion.div
      className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent"
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        repeat: Infinity,
        duration: 15,
        ease: "linear",
      }}
    />

    {/* Floating icons — React, Node, MongoDB, JS */}
    <motion.div
      className="absolute text-white text-3xl"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      💻
    </motion.div>

    <motion.div
      className="absolute top-4 right-10 text-2xl"
      animate={{
        y: [0, -8, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      ⚛️
    </motion.div>

    <motion.div
      className="absolute bottom-6 left-6 text-2xl"
      animate={{
        y: [0, 8, 0],
        rotate: [0, -360],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      🟢
    </motion.div>

    <motion.div
      className="absolute top-10 left-12 text-2xl"
      animate={{
        y: [0, -10, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      ⚙️
    </motion.div>

    {/* Glowing ring effect */}
    <motion.div
      className="absolute inset-0 rounded-full border-4 border-white/30"
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  </motion.div>
</div>


          {/* Text Section */}
          <div className="w-full md:w-1/2 space-y-6 text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed text-center md:text-left">
            <p>
              Hey there! I’m{" "}
              <span className="font-semibold text-purple-500">
                Saptgiri Yangal
              </span>
              , a passionate{" "}
              <span className="font-semibold">Software Engineer</span> who loves
              building intuitive, fast, and scalable digital experiences. I
              specialize in the{" "}
              <span className="font-semibold">MERN stack</span> and enjoy
              creating impactful full-stack solutions that feel effortless to
              use.
            </p>

            <p>
              With hands-on experience in{" "}
              <span className="font-semibold">
                React.js, Node.js, Express, MongoDB, and JavaScript
              </span>
              , I’ve developed multiple projects that bring together clean UI,
              optimized backend logic, and modern deployment practices. I’m
              deeply motivated by the process of turning an idea into a real,
              usable product.
            </p>

            <p>
              I’m also a lifelong learner — exploring{" "}
              <span className="font-semibold">
                system design, performance optimization, and open-source
                collaboration
              </span>
              . Outside of coding, I love reading tech blogs, trying new tools,
              and experimenting with frameworks that push my boundaries.
            </p>
          </div>
        </motion.div>

        {/* Highlight Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-4">
          {/* Education Panel */}
          <motion.div
            className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
              🎓 Education
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              <span className="font-semibold">
                B.Tech in Electrical Engineering
              </span>
              , 4th Year <br />
              N.K. Orchid College of Engineering & Technology, Solapur
            </p>
          </motion.div>

          {/* Interests Panel */}
          <motion.div
            className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
              💡 Interests
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              Web Development (MERN Stack), Open Source Contribution, and
              exploring emerging technologies like AI & Cloud Systems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
