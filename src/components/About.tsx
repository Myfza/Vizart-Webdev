import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  MapPin,
  GraduationCap,
  Sparkles,
  Mail,
  Linkedin,
  Github,
  Award,
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: '18', label: 'Years Old', icon: User },
    { number: '10+', label: 'Professional Credentials', icon: Award },
    { number: '15+', label: 'Project', icon: GraduationCap },
    { number: '2+', label: 'Years Experience', icon: GraduationCap },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-6 sm:px-8 md:px-6 lg:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mobile-heading-lg sm:text-4xl md:text-5xl font-bold font-orbitron mb-6 sm:mb-8 tracking-wide uppercase"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-6 sm:mb-8"
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <MapPin size={20} className="text-primary-orange" />
                <span className="text-gray-300 font-poppins">Indonesia</span>
              </div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <GraduationCap size={20} className="text-primary-purple" />
                <span className="text-gray-300 font-poppins">
                  Robotics & Automation Student
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mobile-text-base sm:text-lg text-gray-300 leading-relaxed font-poppins mb-6 sm:mb-8"
            >
              I'm{' '}
              <span className="gradient-text font-semibold">
                Muhammad Yusuf Aditiya
              </span>
              , Undergraduate student in Instrumentation and Automation
              Engineering at Institut Teknologi Sumatera, focusing on robotics,
              control systems, and smart automation. Currently exploring and
              developing skills in AI/Machine Learning and IoT-based robotics,
              with a focus on combining control logic (PLC/SCADA), sensor
              integration, and integration into real-time industrial
              applications.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mobile-text-base sm:text-lg text-gray-300 leading-relaxed font-poppins mb-6 sm:mb-8"
            >
              Experience in UI/UX design (Figma, Adobe XD), brand identity
              creation (Adobe Illustration, Adobe Photoshop), and full-stack web
              development. Also familiar with{' '}
              <span className="gradient-text">
                network engineering concepts, including Mikrotik configuration,
                Linux administration, and cybersecurity.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card rounded-xl p-3 sm:p-4 text-center"
                >
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-orange mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold gradient-text font-space">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-poppins">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Profile Image Card */}
              <div className="glass-card rounded-2xl relative overflow-hidden hover:neon-glow transition-all duration-300 aspect-[4/5] max-w-sm mx-auto lg:max-w-none">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
                
                {/* Full-Width Profile Image */}
                <img
                  src="/Profile-foto.jpg"
                  alt="Muhammad Yusuf Aditiya - Professional Profile"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                
                {/* Subtle overlay for better visual integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 glass-card rounded-full flex items-center justify-center"
              >
                <Sparkles className="text-primary-cyan" size={20} />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 glass-card rounded-full flex items-center justify-center"
              >
                <GraduationCap className="text-primary-magenta" size={16} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
