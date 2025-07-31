import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Users, Coffee, Heart } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "1+", label: "Years Experience", icon: Code2 },
    { number: "3+", label: "Projects Completed", icon: Rocket },
  ];

  const interests = [
    "Frontend Development",
    "Backend Architecture",
    "UI/UX Design",
    "Cloud Computing",
    "Open Source"
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
    <section id="about" className="py-16 sm:py-20 lg:py-24 section-padding bg-white dark:bg-secondary-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-pattern dark:bg-pattern-dark opacity-50" />

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
            <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-sm sm:text-base">About Me</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">
            Passionate About{" "}
            <span className="text-gradient">Creating</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            I'm a full-stack developer who loves turning complex problems into simple, beautiful solutions.
            When I'm not coding, you'll find me exploring new technologies or contributing to open source.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* About content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-secondary-900 dark:text-white">
                My Journey
              </h3>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed">
                <p>
                  My journey into web development started during college when I built my first website.
                  What began as curiosity quickly became a passion for creating digital experiences that matter.
                </p>
                <p>
                  Today, I specialize in building scalable web applications using modern technologies.
                  I believe in writing clean, maintainable code and creating intuitive user interfaces
                  that solve real-world problems.
                </p>
                <p>
                  When I'm not coding, I enjoy contributing to open source projects, mentoring aspiring developers,
                  and staying up-to-date with the latest industry trends.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-lg sm:text-xl font-display font-semibold text-secondary-900 dark:text-white mb-3 sm:mb-4">
                What I'm passionate about:
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Visual element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main card */}
              <div className="glass dark:glass-dark rounded-3xl p-8 border border-white/20 dark:border-secondary-700/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-accent-500 rounded-2xl flex items-center justify-center">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-secondary-900 dark:text-white">
                      Design & Development
                    </h4>
                    <p className="text-secondary-600 dark:text-secondary-400">
                      Crafting digital experiences
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-600 dark:text-secondary-400">Frontend</span>
                    <div className="flex-1 mx-4 bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "90%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">90%</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-secondary-600 dark:text-secondary-400">Backend</span>
                    <div className="flex-1 mx-4 bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1, delay: 0.7 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">85%</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-secondary-600 dark:text-secondary-400">UI/UX</span>
                    <div className="flex-1 mx-4 bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "80%" }}
                        transition={{ duration: 1, delay: 0.9 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">80%</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code2 className="w-10 h-10 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center group"
            >
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-primary-400 to-accent-500 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </motion.div>
              <motion.div
                className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gradient mb-1 sm:mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <p className="text-sm sm:text-base text-secondary-600 dark:text-secondary-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
