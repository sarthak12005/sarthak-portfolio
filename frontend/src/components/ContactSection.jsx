import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { contactAPI } from "../utils/api";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const data = await contactAPI.submit(formData);

      if (data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "sarthakjoshi12005@gmail.com",
      link: "mailto:sarthakjoshi12005@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 9325619172",
      link: "tel:+919325619172",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Jalna, Maharashtra, India",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 section-padding bg-white dark:bg-secondary-900 relative overflow-hidden">
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
            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-sm sm:text-base">Let's Connect</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            I'm always open to discussing new opportunities and interesting projects.
            Let's connect and see how we can work together to bring your ideas to life!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass dark:glass-dark rounded-3xl p-8 border border-white/20 dark:border-secondary-700/50">
              <h3 className="text-3xl font-display font-bold text-secondary-900 dark:text-white mb-6">
                Let's Talk
              </h3>
              <p className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to
                say hello, I'd love to hear from you. Feel free to reach out through any
                of the following channels.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="glass dark:glass-dark rounded-2xl p-6 border border-white/20 dark:border-secondary-700/50 card-hover"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-accent-500 rounded-2xl flex items-center justify-center">
                      <div className="text-white text-xl">{info.icon}</div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary-500 dark:text-secondary-400 mb-1">
                        {info.title}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-lg font-display font-bold text-secondary-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-display font-bold text-secondary-900 dark:text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass dark:glass-dark rounded-3xl p-8 border border-white/20 dark:border-secondary-700/50">
              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-3"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-secondary-200 dark:border-secondary-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white/50 dark:bg-secondary-800/50 text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-secondary-400 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-secondary-200 dark:border-secondary-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white/50 dark:bg-secondary-800/50 text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-secondary-400 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-3"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border border-secondary-200 dark:border-secondary-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white/50 dark:bg-secondary-800/50 text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-secondary-400 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-4 border border-secondary-200 dark:border-secondary-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white/50 dark:bg-secondary-800/50 text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-secondary-400 resize-none transition-all duration-300"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              {submitStatus && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus === "success"
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                      : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                  }`}
                >
                  {submitStatus === "success"
                    ? "Thank you! Your message has been sent successfully."
                    : "Sorry, there was an error sending your message. Please try again."}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-display font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </motion.button>
            </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
