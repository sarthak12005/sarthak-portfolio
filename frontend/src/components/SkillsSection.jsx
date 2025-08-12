import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone, Zap, Star } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      color: "from-blue-400 to-purple-500",
      skills: [
        { name: "React.js", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML5", level: 98 },
        { name: "CSS3", level: 92 },
        { name: "Tailwind CSS", level: 88 },
        { name: "BootStrap", level: 93 }
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "from-green-400 to-teal-500",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "MySQL", level: 78 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 75 },
        { name: "socket.io", level: 88 },
        { name: "webRTC", level: 79 }
      ],
    },
    {
      icon: Globe,
      title: "Web Technologies",
      color: "from-orange-400 to-red-500",
      skills: [
        { name: "Git & GitHub", level: 92 },
        { name: "Webpack", level: 80 },
        { name: "Vite", level: 85 },
        { name: "Render", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Vercel", level: 88 }
        
      ],
    },
    {
      icon: Smartphone,
      title: "Programming Languages",
      color: "from-pink-400 to-purple-500",
      skills: [
        { name: "C & C++", level: 85 },
        { name: "python", level: 78 },
        { name: "Java", level: 75 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 90 },
        { name: "Linux", level: 80 }
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="skills" className="py-16 sm:py-20 lg:py-24 section-padding bg-secondary-50 dark:bg-secondary-800 relative overflow-hidden">
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
            <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-sm sm:text-base">Skills & Expertise</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="glass dark:glass-dark rounded-3xl p-8 border border-white/20 dark:border-secondary-700/50 card-hover">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-secondary-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skills with progress bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-secondary-700 dark:text-secondary-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-secondary-500 dark:text-secondary-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
                        <motion.div
                          className={`bg-gradient-to-r ${category.color} h-2 rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 + 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Technologies */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="glass dark:glass-dark rounded-3xl p-8 border border-white/20 dark:border-secondary-700/50">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Star className="w-6 h-6 text-primary-500" />
              <h3 className="text-2xl font-display font-bold text-secondary-900 dark:text-white">
                Additional Technologies
              </h3>
            </div>
            <p className="text-secondary-600 dark:text-secondary-400 mb-8">
              Other tools and technologies I've worked with
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "PHP", "Laravel", "Vue.js", "Angular",
                "Redux", "Next.js", "Firebase", "Firebase Auth", "Supabase", "Prisma", "Heroku",
                "Netlify", "Cloudinary", "S3 buckets"
              ].map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200/50 dark:border-primary-700/50 hover:scale-105 transition-transform duration-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 4px 20px rgba(20, 184, 166, 0.3)"
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
