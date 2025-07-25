import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  // Function to get certification images from public folder dynamically
  const getCertificationImage = (certId: number) => {
    // Try to get certification-specific image first, fallback to default
    const certImages: { [key: number]: string } = {
      1: '/Sertifikat 1.png',
      2: '/Sertifikat 2.png',
      3: '/Sertifikat 3.png',
    };
    
    // Fallback images if specific cert images don't exist
    const fallbackImages: { [key: number]: string } = {
      1: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=400',
      2: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      3: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
    };
    
    return certImages[certId] || fallbackImages[certId];
  };
  const certifications = [
    {
      id: 1,
      title: 'MTCNA (MikroTik Certified Network Associate)',
      issuer: 'MikroTik',
      date: 'Apr 2025',
      image: getCertificationImage(1),
      skills: ['Network Configuration', 'RouterOS', 'Mikrotik'],
      credentialUrl:
        'https://mikrotik.com/training/certificates/c453523cd5c80e799534',
    },
    {
      id: 2,
      title: 'Front-End Web Development',
      issuer: 'Dicoding',
      date: 'Dec 2023',
      image: getCertificationImage(2),
      skills: ['JacaScript', 'CSS', 'Responsive Design'],
      credentialUrl: 'https://www.dicoding.com/certificates/QLZ94QE3DP5D',
    },
    {
  id: 3,
  title: 'Prompt Engineering for Software Developers',
  issuer: 'Dicoding',
  date: 'July 2025', 
  image: getCertificationImage(3),
  skills: ['Prompt Design', 'LLM Usage', 'AI Development'],
  credentialUrl: 'https://www.dicoding.com/certificates/RVZKG48YQXD5',
}
  ];

  const handleCredentialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-6 sm:px-8 md:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron mb-3 sm:mb-4 uppercase tracking-wide">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-poppins px-4 sm:px-0">
            Validated expertise in  automation, AI, IoT, web development, network engineering, UI/UX, brand design, and computer hardware systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <article className="glass-card rounded-2xl overflow-hidden hover:neon-glow transition-all duration-300">
                {/* Certificate Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={`${cert.title} certification from ${cert.issuer}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Award Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full glass-card flex items-center justify-center">
                      <Award
                        className="text-primary-orange"
                        size={16}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-4 sm:p-6">
                  <div className="text-xs sm:text-sm text-primary-cyan mb-2 font-poppins">
                    {cert.issuer} • {cert.date}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 font-orbitron group-hover:gradient-text transition-all duration-300">
                    {cert.title}
                  </h3>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs glass rounded-full text-gray-400 font-poppins min-w-[50px] text-center"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* View Credential Button */}
                  <button
                    onClick={() => handleCredentialClick(cert.credentialUrl)}
                    className="w-full btn-secondary py-2 portfolio-card-button  py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 min-w-[120px]"
                    aria-label={`View ${cert.title} credential from ${cert.issuer}`}
                  >
                    <ExternalLink size={14} className="sm:w-4 sm:h-4" aria-hidden="true" />
                    View Credential
                  </button>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
