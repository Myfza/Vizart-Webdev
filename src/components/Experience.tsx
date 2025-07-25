import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Network Technician Intern',
      company: 'PT Tunas Link Indonesia',
      location: 'Indonesia',
      period: 'Aug 2024 - Dec 2024',
      type: 'Internship',
      description:
        'Worked as a field technician for fiber optic installation and maintenance. Responsible for routing, splicing, signal testing, and troubleshooting connectivity issues to ensure reliable network performance across client sites.',
      achievements: [
        'Handled FO installation and repairs using Fusion Splicer, OTDR, and VFL tools',
        'Conducted signal loss testing and optical power measurements',
        'Executed splicing and routing of fiber cables for stable data transmission',
        'Configured MikroTik routers and STB settings for client-side connectivity',
        'Collaborated with field engineers to meet service-level standards and technical compliance',
        'Diagnosed and resolved connectivity faults for enterprise clients',
      ],
      technologies: [
        'Fusion Splicer',
        'OTDR',
        'Optical Power Meter',
        'Visual Fault Locator (VFL)',
        'Fiber Optic Cabling',
      ],
      logo: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      id: 2,
      title: 'Freelance Full-Stack Developer',
      company: 'Various Clients',
      location: 'Remote',
      period: 'Dec 2023 - Present',
      type: 'Freelance',
      description:
        'Creating full-stack web applications for startups and businesses with scalable architecture, clean UI, and secure backend integration.',
      achievements: [
        'Developed responsive front-end interfaces using React and Tailwind CSS',
        'Built scalable RESTful APIs with Node.js and Python',
        'Implemented data models and queries with PostgreSQL',
        'Integrated secure authentication using JWT and OAuth2',
        'Deployed web apps using Vercel and Netlify with CI/CD workflows',
      ],
      technologies: [
        'React',
        'Tailwind CSS',
        'Node.js',
        'Python',
        'PostgreSQL',
        'JWT / OAuth2',
        'Vercel / Netlify',
      ],
      logo: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      id: 3,
      title: 'Founder & Visual Content Designer',
      company: 'Sixteenskye Media',
      location: 'Remote',
      period: 'Jan 2025 - Present',
      type: 'Personal Brand',
      description:
        'Built and managed a digital media platform focused on motivational content and creative education. Responsible for visual identity, content strategy, and audience growth across social platforms.',
      achievements: [
        'Designed  engaging social media graphics with consistent visual style',
        'Conducted research and scripting for short-form motivational content',
        'Grew Instagram reach by 3x through design consistency and content planning',
        'Established brand tone and identity that resonates with Gen-Z audiences',
      ],
      technologies: [
        'Figma',
        'Adobe Photoshop',
        'Illustrator',
        'Content Strategy',
        'Social Media Branding',
      ],
      logo: 'https://images.pexels.com/photos/7194900/pexels-photo-7194900.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-6 sm:px-8 md:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron mb-3 sm:mb-4 uppercase tracking-wide">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-poppins px-4 sm:px-0">
            Engineering smart solutions through automation, AI, full-stack
            development, UI/UX design, and advanced network systems
          </p>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 sm:p-8 hover:neon-glow transition-all duration-300">
                <div className="grid lg:grid-cols-4 gap-6 sm:gap-8">
                  {/* Company Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover flex-shrink-0"
                      />
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold font-orbitron group-hover:gradient-text transition-all duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-sm sm:text-base text-primary-orange font-poppins">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="font-poppins">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="font-poppins">{exp.location}</span>
                      </div>
                      <div className="inline-block px-2 py-1 rounded-full glass text-xs font-poppins mt-2">
                        {exp.type}
                      </div>
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="lg:col-span-3">
                    <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 font-poppins leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 font-orbitron">
                        Job Description
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm sm:text-base text-gray-300"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary-orange mt-2 flex-shrink-0" />
                            <span className="font-poppins">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 font-orbitron">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 sm:px-3 py-1 glass rounded-full text-xs sm:text-sm text-gray-300 font-poppins min-w-[60px] text-center"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <div className="glass-card rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-orbitron gradient-text">
              Ready to Collaborate?
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 font-poppins">
              I'm always looking for exciting opportunities to work on
              innovative robotics and automation projects.
            </p>
            <button className="btn-primary px-6 sm:px-8 py-3 rounded-lg flex items-center gap-2 mx-auto font-exo min-w-[160px] max-w-xs">
              <ExternalLink size={16} className="sm:w-5 sm:h-5" />
              View Full Resume
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
