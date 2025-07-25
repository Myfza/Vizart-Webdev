import React from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  Wifi,
  Code,
  Palette,
  Shield,
  Cog,
  Zap,
  Database,
  Smartphone,
  Gamepad2,
  Globe,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI & Machine Learning',
      description:
        'Developing AI-powered systems for automation using machine learning, computer vision, and natural language processing to enable real-time decision-making.',
      features: [
        'Computer Vision',
        'Neural Networks',
        'NLP & Chatbots',
        'AI Automation',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Wifi,
      title: 'IoT System Architecture',
      description:
        'Building connected environments with ESP32, sensor networks, and real-time data acquisition using low-power protocols and cloud monitoring.',
      features: [
        'Sensor Integration',
        'Edge Computing',
        'Remote Monitoring',
        'Realtime Cloud Monitoring',
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Code,
      title: 'Full-Stack Web Development',
      description:
        'Developing responsive web apps platforms using modern stacks (Tailwind, Javascript, React, Node.js, and PostgreSQL) with seamless frontend-backend integration.',
      features: [
        'React / Tailwind',
        'FastAPI / Node.js Services',
        'PostgreSQL / Firebase',
        'JWT / OAuth2 Authentication',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Palette,
      title: 'UI/UX & Brand Design',
      description:
        'Creating functional interfaces and brand visuals using Figma and Adobe tools, prioritizing consistency, clarity, user-friendly experiences.',
      features: [
        'Component-Based UI Design',
        'Brand Identity Systems',
        'Responsive Interaction Design',
        'UX Prototyping with Figma',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Globe,
      title: 'Network Engineering',
      description:
        'Experienced in designing, configuring, and maintaining reliable network infrastructures, with proficiency in MikroTik routing, Linux-based systems, structured subnetting, and network diagnostics',
      features: [
        'MikroTik & Linux Configuration',
        'Subnetting & Topology Setup',
        'Network Diagnostics & Troubleshooting',
        'Scalable Network Architecture',
      ],
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Cog,
      title: 'Industrial Automation',
      description:
        'Developing automated control systems using PLCs, microcontrollers, and HMI interfaces. Focused on sensor-driven logic and industrial workflow optimization.',
      features: [
        'Arduino / ESP32',
        'PLC Programming & Ladder Logic',
        'HMI Development & SCADA Systems',
        'Sensor Integration & Actuator Control',
      ],
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,107,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-6 sm:px-8 md:px-6 lg:px-8 relative z-10 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron mb-3 sm:mb-4 uppercase tracking-wide">
            MY
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent ml-4">
              Expertise
            </span>
          </h2>
          <p className="font-poppins text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Developing end-to-end solutions by integrating control systems, web technologies, secure networks, AI, and user-centered interfaces
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 h-full hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                ></div>

                {/* Icon */}
                <div
                  className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-orbitron text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="font-poppins text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4 sm:mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-xs sm:text-sm"
                      >
                        <Zap className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                        <span className="font-poppins text-gray-400">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 uppercase tracking-wide">
              Ready to Innovate Together?
            </h3>
            <p className="font-poppins text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              Let's discuss how we can leverage these technologies to create
              intelligent, automated solutions for your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              {/* Button: Start a Project */}
              <a
                href="#contact"
                className="bg-gradient-to-r from-orange-500 to-purple-600 text-white font-exo font-semibold px-6 sm:px-8 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center min-w-[140px] max-w-xs sm:max-w-none mx-auto sm:mx-0"
              >
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Start a Project
              </a>

              {/* Button: View Portfolio */}
              <a
                href="#portfolio"
                className="border border-white/20 text-white font-exo font-semibold px-6 sm:px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center min-w-[140px] max-w-xs sm:max-w-none mx-auto sm:mx-0"
              >
                <Database className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                View Portfolio
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
