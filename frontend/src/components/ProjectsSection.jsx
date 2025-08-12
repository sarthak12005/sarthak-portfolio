import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, Folder, Star } from "lucide-react";

const ProjectsSection = () => {
 const projects = [
  {
    title: "CodeCollab",
    description:
      "A collaborative coding platform where multiple users can solve problems together in real-time with integrated video and chat. Includes Firebase authentication and persistent code sessions.",
    image: "https://res.cloudinary.com/dmhm7q4ow/image/upload/v1751304445/Screenshot_2025-06-30_225819_akz9ci.png",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Socket.io",
      "WebRTC",
      "Firebase Auth",
      "MongoDB"
    ],
    githubUrl: "https://github.com/sarthak12005/CodeCollab", // Replace with your actual GitHub link
    liveUrl: "https://coderscollab.vercel.app/", // Replace with your live URL
    featured: true,
  },
  {
    title: "Inventory Management System",
    description:
      "An enterprise-grade inventory tracking system developed for my company. Allows adding items with QR codes, tracking inward and outward movement via QR scans, and managing stock efficiently.",
    
    technologies: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "WebSockets"
    ],
    githubUrl: "", // Replace with actual link
    liveUrl: "https://prym-ims-inventory.vercel.app", // Replace with live URL if public
    featured: true,
  },
  {
    title: "Shoes Shop",
    description:
      "A responsive recycle Shoes shop with the clean ui with html, css, and javascript",
    image: "/api/placeholder/400/250",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/sarthak12005/PLASHOE",
    liveUrl: "https://plashoe-nine.vercel.app/",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills with modern design and smooth animations.",
    image: "/api/placeholder/400/25",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/sarthak12005/sarthak-portfolio",
    liveUrl: "https://sarth-portfolio.vercel.app/",
    featured: false,
  },
  {
    title: "Blog Platform",
    description:
      "A full-featured blog platform with user authentication, content management, and comment system.",
    image: "/api/placeholder/400/250",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
  }
];


  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 section-padding bg-white dark:bg-secondary-900 relative overflow-hidden">
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
            <Folder className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-sm sm:text-base">Portfolio</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            A showcase of my recent work, featuring full-stack applications and creative solutions that demonstrate my technical expertise and design sensibility.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="space-y-12 sm:space-y-16 lg:space-y-24 mb-12 sm:mb-16 lg:mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/2">
                <motion.div
                  className="relative group project-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="glass dark:glass-dark rounded-3xl overflow-hidden border border-white/20 dark:border-secondary-700/50">
                    <div className="relative">
                      <div className="w-full h-80 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 flex items-center justify-center">
                        <div className="text-center">
                        {project?.image ? ( <img src={project.image} alt="project image" className="object-center object-cover w-full h-full"/>) : (<><Eye size={64} className="text-primary-400 mx-auto mb-4" />
                          <p className="text-secondary-600 dark:text-secondary-400 font-medium">
                            Project Preview
                          </p></>)}
                        </div>
                      </div>
                        
                      {/* Overlay with actions */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/90 to-accent-500/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-6">
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-300"
                          whileHover={{ scale: 1.1, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-8 h-8 text-white" />
                        </motion.a>
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-300"
                          whileHover={{ scale: 1.1, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-8 h-8 text-white" />
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <motion.div
                    className="absolute -top-4 -right-4 bg-gradient-to-r from-accent-400 to-accent-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Featured
                  </motion.div>
                </motion.div>
              </div>

              <div className="lg:w-1/2 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-4xl font-display font-bold text-secondary-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <div className="glass dark:glass-dark rounded-2xl p-6 border border-white/20 dark:border-secondary-700/50">
                    <p className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200/50 dark:border-primary-700/50"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  className="flex space-x-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-6 h-6 text-primary-500" />
              <h3 className="text-3xl font-display font-bold text-secondary-900 dark:text-white">
                Other Notable Projects
              </h3>
            </div>
            <p className="text-secondary-600 dark:text-secondary-400">
              Additional projects that showcase different aspects of my development skills
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative card-hover"
              >
                <div className="glass dark:glass-dark rounded-2xl p-6 border border-white/20 dark:border-secondary-700/50 h-full">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Folder className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-display font-bold text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
