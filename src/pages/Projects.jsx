import { FaGithub, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Store",
    description:
      "A complete full-stack E-Commerce platform built with the MERN stack. It offers secure JWT authentication, Redux-powered cart management, dynamic product rendering, and a responsive, performance-optimized UI. Designed for scalability and real-world deployment, this project showcases my ability to build production-ready web applications from front to back.",
    features: [
      "Real-time Cart & Product Management",
      "JWT Authentication with Role-based Access",
      "Dynamic Product Loading with Redux Integration",
      "Responsive UI optimized with Tailwind CSS",
      "Deployed full-stack on Render (Frontend + Backend)"
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "JWT Auth",
      "Tailwind CSS"
    ],
    github: "https://github.com/Saptgiri7/webService/tree/main/backend",
    demo: "https://frontend-unjz.onrender.com/",
    image:
      `${process.env.PUBLIC_URL}/e-commerce.png` 
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects, background, and skills. Built with React and Tailwind CSS, it features smooth transitions, responsive layouts, and a modern dark/light theme toggle.",
    features: [
      "Dark mode with theme persistence",
      "Smooth section transitions using Framer Motion",
      "Responsive and fast-loading UI",
    ],
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "JavaScript"],
    github: "https://github.com/Saptgiri7/Portfolio/",
    demo: "https://portfolio-ri7v.onrender.com/",
    image:
      `${process.env.PUBLIC_URL}/portfolio.png`
  }
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-16">
          Featured Projects 🚀
        </h2>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <div className="md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
                />
              </div>

              {/* Project Info */}
              <div className="md:w-1/2 text-left">
                <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  {project.title}
                </h3>

                {/* Links */}
                <div className="flex gap-6 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-800 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition"
                  >
                    <FaGithub size={20} /> GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-800 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition"
                    >
                      <FaGlobe size={20} /> Live Demo
                    </a>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 mt-4">
                  {project.description}
                </p>

                {/* Feature List */}
                <ul className="list-disc pl-5 mb-6 text-gray-700 dark:text-gray-300 text-sm space-y-1">
                  {project.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 rounded-full text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
