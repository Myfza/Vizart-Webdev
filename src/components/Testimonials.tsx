import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Nielson Razzaka',
      role: 'CEO, NelzStore',
      avatar:
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content:
        'The visual branding Muhammad delivered gave our tech store a fresh, professional look that instantly built customer trust and recognition.',
      rating: 5,
      project: 'Tech Store Rebranding',
    },
    {
      id: 2,
      name: 'Emma',
      role: 'Engineering Manager, AutoTech Industries',
      avatar:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content:
        'Working with Muhammad on our robotics control interface was a game-changer. His expertise in both hardware integration and intuitive UI design resulted in a system that our operators love using.',
      rating: 5,
      project: 'Robotics Control System',
    },
    {
      id: 3,
      name: 'Lisa Thompson',
      role: 'Product Director, InnovateLab',
      avatar:
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content:
        "Muhammad's AI-powered quality control system transformed our production line. His ability to combine machine learning with practical automation solutions is truly impressive for someone his age.",
      rating: 5,
      project: 'Computer Vision QC System',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-orange-900/20" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-full blur-xl" />

      <div className="container mx-auto px-6 sm:px-8 md:px-6 lg:px-8 relative z-10 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron mb-3 sm:mb-4 uppercase tracking-wide">
            <span className="gradient-text">Client Testimonials</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-poppins px-4 sm:px-0">
            What collaborators say about working with me in building innovative
            and connected digital-physical solutions.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Main Testimonial Card */}
            <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-2xl" />

              {/* Quote Icon */}
              <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400/50 mb-4 sm:mb-6" />

              {/* Testimonial Content */}
              <blockquote className="text-base sm:text-lg md:text-xl text-gray-200 font-poppins leading-relaxed mb-6 sm:mb-8 relative z-10">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4 sm:mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-purple-400/30 flex-shrink-0"
                />
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold font-orbitron text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400 font-poppins">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-xs sm:text-sm text-purple-400 font-medium">
                    Project: {testimonials[currentIndex].project}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 sm:p-3 bg-black/20 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-purple-400 transition-colors" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-1 sm:gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-blue-400 to-purple-400'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 sm:p-3 bg-black/20 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 group"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-purple-400 transition-colors" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16"
        >
          <div className="text-center p-4 sm:p-0">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-orbitron text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2">
              5+
            </div>
            <p className="text-sm sm:text-base text-gray-400 font-poppins">Projects Completed</p>
          </div>
          <div className="text-center p-4 sm:p-0">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-orbitron text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-2">
              95%
            </div>
            <p className="text-sm sm:text-base text-gray-400 font-poppins">Client Satisfaction</p>
          </div>
          <div className="text-center p-4 sm:p-0">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2">
              24/7
            </div>
            <p className="text-sm sm:text-base text-gray-400 font-poppins">Support Available</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
