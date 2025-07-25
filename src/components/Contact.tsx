import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSuccessMsg('');

    try {
      await emailjs.sendForm(
        'service_hvfb77g',
        'template_353t59x',
        formRef.current!,
        'B7w-KZZ9dT5YzL5cQ'
      );
      setSuccessMsg('✅ Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('❌ Failed to send message:', error);
      setSuccessMsg('❌ Failed to send message. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-6 sm:px-8 md:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron mb-3 sm:mb-4 uppercase tracking-wide">
            <span className="mobile-heading-lg sm:text-4xl md:text-5xl">Let's</span> <span className="gradient-text">Connect</span>
          </h2>
          <p className="mobile-text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-poppins px-4 sm:px-0">
            Ready to collaborate on innovative robotics and automation projects?
            Let's discuss how we can build the future together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="mobile-heading-md sm:text-2xl font-bold mb-4 sm:mb-6 font-orbitron gradient-text">
                Get In Touch
              </h3>
              <p className="mobile-text-base sm:text-base text-gray-300 mb-6 sm:mb-8 font-poppins leading-relaxed">
                I'm always excited to discuss new opportunities in robotics,
                automation, and AI. Whether you have a project in mind or just
                want to connect, feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg glass-card flex items-center justify-center cursor-pointer flex-shrink-0"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.2)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Mail className="text-blue-400 hover:text-blue-300 transition-colors duration-300" size={16} />
                </motion.div>
                <div>
                  <p className="text-gray-400 mobile-text-sm sm:text-sm font-poppins">Email</p>
                  <p className="mobile-text-base sm:text-base text-white font-poppins hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                    vizart.id@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg glass-card flex items-center justify-center cursor-pointer flex-shrink-0"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 20px rgba(6, 182, 212, 0.4), 0 0 40px rgba(6, 182, 212, 0.2)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <MapPin className="text-primary-cyan hover:text-cyan-300 transition-colors duration-300" size={16} />
                </motion.div>
                <div>
                  <p className="text-gray-400 mobile-text-sm sm:text-sm font-poppins">Location</p>
                  <p className="mobile-text-base sm:text-base text-white font-poppins hover:text-primary-cyan transition-colors duration-300 cursor-pointer">
                    Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="mobile-card-title sm:text-lg font-semibold mb-3 sm:mb-4 font-orbitron">
                Follow Me
              </h4>
              <div className="flex gap-3 sm:gap-4">
                <motion.button
                  onClick={() => handleSocialClick('https://github.com/Myfza')}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg glass-card flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 20px rgba(255, 255, 255, 0.4), 0 0 40px rgba(255, 255, 255, 0.2)'
                  }}
                  aria-label="Visit GitHub profile"
                >
                  <Github className="hover:text-white transition-colors duration-300" size={16} />
                </motion.button>
                
                <motion.button
                  onClick={() => handleSocialClick('https://www.linkedin.com/in/myfza/')}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg glass-card flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.2)'
                  }}
                  aria-label="Visit LinkedIn profile"
                >
                  <Linkedin className="hover:text-blue-400 transition-colors duration-300" size={16} />
                </motion.button>
                
                <motion.button
                  onClick={() => handleSocialClick('https://instagram.com/vizart.in')}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg glass-card flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 20px rgba(236, 72, 153, 0.4), 0 0 40px rgba(236, 72, 153, 0.2)'
                  }}
                  aria-label="Visit Instagram profile"
                >
                  <Instagram className="hover:text-pink-400 transition-colors duration-300" size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-6"
            >
              <div>
                <label htmlFor="name" className="block mobile-text-sm sm:text-sm font-medium mb-2 font-poppins">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg glass border border-white/10 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors font-poppins mobile-text-base sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mobile-text-sm sm:text-sm font-medium mb-2 font-poppins">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg glass border border-white/10 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors font-poppins mobile-text-base sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mobile-text-sm sm:text-sm font-medium mb-2 font-poppins">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project or Inquiry Subject"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg glass border border-white/10 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors font-poppins mobile-text-base sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mobile-text-sm sm:text-sm font-medium mb-2 font-poppins">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or just say hello!"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg glass border border-white/10 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors resize-none font-poppins mobile-text-base sm:text-base"
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                className="w-full btn-primary py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 font-exo focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 mobile-button-text sm:text-base min-h-[48px]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={16} className="sm:w-5 sm:h-5" aria-hidden="true" />
                {sending ? 'Sending...' : 'Send Message'}
              </motion.button>
              
              {successMsg && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mobile-text-sm sm:text-sm text-green-400 mt-2 font-poppins"
                >
                  {successMsg}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;