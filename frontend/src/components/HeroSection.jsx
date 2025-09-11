import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Download, Eye, Sparkles } from "lucide-react";
import { smoothScrollTo } from "../utils/smoothScroll";

const HeroSection = () => {
  const scrollToSection = (href) => {
    smoothScrollTo(href, 80);
  };

  const handleDownloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/Sarthak_Joshi.pdf'; // Assuming resume.pdf is in the public folder
    link.download = 'Sarthak_Resume.pdf';
    link.click();
  };



  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 pb-8 section-padding bg-pattern dark:bg-pattern-dark relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary-200/20 dark:bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-accent-200/20 dark:bg-accent-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="max-w-3xl text-center lg:text-left">
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="text-primary-500 w-4 h-4 sm:w-5 sm:h-5" />
              <p className="text-sm sm:text-base text-primary-600 dark:text-primary-400 font-display font-medium">
                Hi, my name is
              </p>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span
                className="text-gradient inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Sarthak
              </motion.span>
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-secondary-700 dark:text-secondary-300 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I craft digital experiences
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-secondary-600 dark:text-secondary-400 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              I'm a passionate full-stack developer specializing in creating exceptional digital experiences.
              Currently focused on building accessible, performant, and user-centered applications that make a difference.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection("#projects")}
                className="btn-primary glow-effect w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">View My Work</span>
              </motion.button>

              <motion.button
                onClick={handleDownloadResume}
                className="btn-secondary w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Download Resume</span>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("#contact")}
                className="btn-secondary w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm sm:text-base">Get In Touch</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-start space-x-4 sm:space-x-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:sarthak@example.com", label: "Email" }
              ].map(({ icon: IconComponent, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="group relative p-2 sm:p-3 rounded-xl bg-white/10 dark:bg-secondary-800/50 backdrop-blur-sm border border-white/20 dark:border-secondary-700/50 hover:bg-primary-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-600 dark:text-secondary-400 group-hover:text-primary-500 transition-colors" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Profile Section */}
          <motion.div
            className="relative flex justify-center mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Animated rings */}
              <motion.div
                className="absolute inset-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border-2 border-primary-300/30 dark:border-primary-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-2 sm:inset-3 lg:inset-4 w-44 h-44 sm:w-58 sm:h-58 lg:w-72 lg:h-72 xl:w-88 xl:h-88 rounded-full border border-accent-300/20 dark:border-accent-500/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Main profile container */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full bg-gradient-to-br from-primary-400 via-primary-500 to-accent-500 p-1 float-animation">
                <div className="w-full h-full rounded-full bg-white dark:bg-secondary-900 flex items-center justify-center glass dark:glass-dark">
                  <div className="w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full bg-gradient-to-br from-secondary-100 to-secondary-200 dark:from-secondary-800 dark:to-secondary-700 flex items-center justify-center overflow-hidden">

                    {/* Replace 'S' with your image */}
                    <img
                      src="/path-to-your-image.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                    />

                  </div>
                </div>
              </div>


              {/* Floating elements */}
              <motion.div
                className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-primary-500/20 rounded-full backdrop-blur-sm flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-sm sm:text-lg lg:text-2xl">⚡</span>
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-accent-500/20 rounded-full backdrop-blur-sm flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-xs sm:text-base lg:text-xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced scroll indicator */}
        <motion.div
          className="hidden lg:flex absolute top-[90%] sm:bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span className="text-xs sm:text-sm text-secondary-500 mb-2 font-medium">Scroll to explore</span>
          <motion.button
            onClick={() => scrollToSection("#about")}
            className="p-2 rounded-full bg-white/10 dark:bg-secondary-800/50 backdrop-blur-sm border border-white/20 dark:border-secondary-700/50 hover:bg-primary-500/20 transition-all duration-300"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-600 dark:text-secondary-400" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
