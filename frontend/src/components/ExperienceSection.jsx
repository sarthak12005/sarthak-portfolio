import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Briefcase, Award } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
  {
    title: "Jr. Full Stack Developer",
    company: "PRYM Aerospace Pvt Ltd",
    location: "Remote",
    period: "April 2025 - Present",
    description: [
      "Worked on an Unmanned Traffic Management (UTM) and real-time aerospace tracking system with live data updates and optimized API performance.",
      "Developed an Inventory Management System for tracking stock using QR code scanning, including inward/outward movement and real-time status updates.",
      "Built an Invoice Generator application to streamline billing processes with dynamic data handling and PDF export functionality.",
      "Designed scalable frontends using React.js and Tailwind CSS, and secure backends using Node.js, Express.js, and MongoDB.",
      "Integrated advanced technologies including Firebase Auth, Socket.io, WebRTC, SQL, Leaflet, and GeoJSON for interactive mapping and collaboration.",
      "Collaborated with cross-functional teams under strict industry standards for performance, security, and data integrity."
    ],
    technologies: [
      "React.js", "Node.js", "Express.js", "MongoDB", "Firebase Auth",
      "Socket.io", "WebRTC", "SQL", "Firebase", "Leaflet", "GeoJSON",
      "HTML5", "CSS3", "JavaScript", "Git", "GitHub", "Tailwind CSS"
    ],
    current: true,
  },
  {
    title: "Software Intern",
    company: "PRYM Aerospace Pvt Ltd",
    location: "Remote",
    period: "Feb 2025 - March 2025",
    description: [
      "Worked on an Unmanned Traffic Management (UTM) and drone tracking system.",
      "Handled full-stack tasks including UI development in React.js and backend APIs in Node.js, Express.js, and MongoDB.",
      "Applied core skills in HTML, CSS, JavaScript, Git, and GitHub to meet project requirements."
    ],
    technologies: [
      "React.js", "Node.js", "Express.js", "MongoDB",
      "HTML5", "CSS3", "JavaScript", "Git", "GitHub", "Tailwind CSS"
    ],
    current: false,
  }
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 section-padding bg-secondary-50 dark:bg-secondary-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-pattern dark:bg-pattern-dark opacity-30" />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-sm sm:text-base">Career Journey</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            My professional journey and the experiences that have shaped my skills and expertise in web development.
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative mb-8 sm:mb-12 lg:mb-16 last:mb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-primary-500 to-accent-500 hidden md:block"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-6 h-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full hidden md:block border-4 border-white dark:border-secondary-800 shadow-lg"></div>

              <div className="md:ml-20 group">
                <div className="glass dark:glass-dark rounded-3xl p-8 border border-white/20 dark:border-secondary-700/50 card-hover">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-display font-bold text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          {experience.title}
                        </h3>
                        {experience.current && (
                          <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-medium rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-xl font-medium text-primary-600 dark:text-primary-400 mb-2">
                        {experience.company}
                      </p>
                    </div>
                    <div className="flex flex-col lg:items-end space-y-2">
                      <div className="flex items-center text-secondary-600 dark:text-secondary-400">
                        <Calendar className="w-5 h-5 mr-2 text-primary-500" />
                        <span className="font-medium">{experience.period}</span>
                      </div>
                      <div className="flex items-center text-secondary-600 dark:text-secondary-400">
                        <MapPin className="w-5 h-5 mr-2 text-primary-500" />
                        <span className="font-medium">{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <ul className="space-y-3">
                      {experience.description.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          className="text-secondary-700 dark:text-secondary-300 flex items-start leading-relaxed"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: itemIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-primary-500 mr-3 mt-1 text-lg">▸</span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3">
                    {experience.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200/50 dark:border-primary-700/50"
                        whileHover={{ scale: 1.05, y: -2 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
