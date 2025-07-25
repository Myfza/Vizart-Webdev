import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Eye, Cpu, Zap, ArrowDown } from 'lucide-react';

const Hero = () => {
  const floatingElements = [
    { Icon: Cpu, delay: 1, className: 'top-40 right-32 text-primary-purple' },
    { Icon: Zap, delay: 2, className: 'bottom-40 left-32 text-primary-cyan' },
    {
      Icon: Eye,
      delay: 0.5,
      className: 'top-60 right-20 text-primary-magenta',
    },
  ];

  const scrollToProjects = () => {
    document
      .getElementById('portfolio')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
link.href = '/muhammad-yusuf-cv.pdf';
link.download = 'muhammad-yusuf-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {floatingElements.map(({ Icon, delay, className }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ delay, duration: 1 }}
            className={`absolute hidden lg:block ${className} floating${
              index % 3 === 0 ? '-delayed' : index % 2 === 0 ? '-slow' : ''
            }`}
          >
            <Icon size={32} />
          </motion.div>
        ))}

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-primary-orange opacity-5 md:opacity-10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary-purple opacity-5 md:opacity-10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 bg-primary-cyan opacity-3 md:opacity-5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 sm:px-8 md:px-6 lg:px-8 z-10 max-w-6xl pt-24 md:pt-28">
        <div className="text-center space-y-8">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="font-bold font-orbitron mb-8 sm:mb-6 leading-tight tracking-wide uppercase gradient-text-name px-4 sm:px-0 mobile-heading-xl md:text-4xl lg:text-5xl"
            style={{
              fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)',
              lineHeight: '1.1',
            }}
          >
            Muhammad Yusuf Aditiya
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-12 sm:mb-16 max-w-4xl mx-auto px-4 sm:px-0"
          >
            <p
              className="text-gray-300 font-poppins leading-relaxed mobile-text-base sm:text-lg md:text-xl"
              style={{
                fontSize: 'clamp(0.9rem, 2vw, 1.25rem)',
                maxWidth: '60ch',
                lineHeight: '1.6',
                margin: '0 auto',
              }}
            >
              Design the Future. Code the System. Connect the World.{' '}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-20 px-4 sm:px-0"
          >
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold flex items-center gap-3 w-full sm:w-auto max-w-xs sm:max-w-none min-h-[48px] justify-center font-exo tracking-wide mobile-button-text sm:text-base"
            >
              See My Projects
            </motion.button>

            <motion.button
              onClick={downloadCV}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold flex items-center gap-3 w-full sm:w-auto max-w-xs sm:max-w-none min-h-[48px] justify-center font-exo tracking-wide mobile-button-text sm:text-base"
            >
              📄 Download CV
            </motion.button>
          </motion.div>

          {/* Scroll Indicator - Fixed positioning and spacing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-8 sm:mt-10 text-center text-sm text-gray-400 flex flex-col items-center z-10 px-4"
          >
            <span className="font-poppins mb-2">Scroll down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-4 h-4 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Blur Effect */}
      <div className="absolute inset-0 backdrop-blur-[0.5px] pointer-events-none" />
    </section>
  );
};

export default Hero;
