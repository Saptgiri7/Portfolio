import { FaReact, FaNodeJs, FaJsSquare, FaHtml5, FaCss3Alt, FaPython, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiPostman, SiRust, SiGithub } from "react-icons/si";

const skills = [
  { name: "C++", icon: null },
  { name: "C", icon: null },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Python", icon: <FaPython /> },
  { name: "HTML & CSS", icon: <><FaHtml5 /><FaCss3Alt /></> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Postman", icon: <SiPostman /> },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-10">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center justify-center"
            >
              {skill.icon && (
                <div className="text-purple-600 dark:text-purple-400 text-4xl mb-2">
                  {skill.icon}
                </div>
              )}
              <p className="text-gray-800 dark:text-gray-100 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
