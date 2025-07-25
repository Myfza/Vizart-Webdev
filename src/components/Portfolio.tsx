import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, X } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Function to get images from public folder dynamically
  const getProjectImage = (projectId: number) => {
    // Try to get project-specific image first, fallback to default
    const projectImages: { [key: number]: string } = {
      1: 'project-1 (2).png',
      2: 'project-1 (1).png', 
      3: 'project-1 (7).png',
      4: 'project-1 (6).png',
      5: 'project-1 (5).png',
      6: 'project-1 (10).png',
      7: 'project-1.png',
      8: 'project-1 (4).png',
      9: 'project-1 (3).png',
      10: 'project-1 (8).png',
      11: 'project-1 (9).png',
    };
    
    return projectImages[projectId] || 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800';
  };
  const projects = [
    {
      id: 1,
      title: 'Virtual Mouse Using Hand Tracking',
      category: 'AI & Computer Vision',
      description: 'A virtual mouse system powered by hand tracking with MediaPipe and real-time video capture via OpenCV. Combined with PyAutoGUI, it allows hands-free cursor movement and clicking using intuitive gestures.',
      image: getProjectImage(1),
      technologies: ['Python', 'Mediapipe', 'Opencv', 'Pyautogui', 'Computer Vision'],
      features: [
  'AI-powered hand tracking',
  'Real-time gesture recognition',
  'Touchless cursor control',
  'Click and move with finger gestures',
  'Webcam-based input',
  'No external hardware required'
],
      liveUrl: 'https://virtual-mouse-tracking.netlify.app',
      githubUrl: 'https://github.com/Myfza/Ai-Mouse',
    },
    {
      id: 2,
      title: 'Automatic File Organizer',
      category: 'Full-Stack Development',
      description: 'This Python script automatically organizes files in a target folder by sorting them into subfolders based on file extensions. Its a simple way to keep your desktop or downloads folder clean and structured without manual effort.',
      image: getProjectImage(2),
      technologies: ['Python', 'OS Module', 'Shutil', 'React' , 'Tailwind CSS'],
      features: [
  'Automatic file sorting',
  'Extension-based categorization',
  'Real-time folder organization',
  'Lightweight and efficient'
],
      liveUrl: 'https://desktop-file-organizer.netlify.app/',
      githubUrl: 'https://github.com/Myfza/Auto-Manage-File',
    },
    {
      id: 3,
      title: 'E-commerce Landing Page',
      category: 'Full-Stack Development',
      description: 'A sleek and responsive e-commerce website built to showcase and sell a diverse range of products. The platform emphasizes a seamless user experience, from Browse to secure checkout.',
      image: getProjectImage(3),
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Vite', 'FakeStoreAPI '],
      features: [
  'Product listing and category filter',
  'Search functionality for products',
  'Featured Products section',
  'Responsive layout',
  'Add to cart',
],
      liveUrl: 'https://viztech-e-commerce.netlify.app/',
      githubUrl: 'https://github.com/Myfza/manufacturing-dashboard',
    },
    {
      id: 4,
      title: 'Vixoo - Movie Finder',
      category: 'Full-Stack Development',
      description: 'Vixoo is a fast, stylish, and interactive web application for discovering movies. Its built with a modern tech stack including Vite, TypeScript, and TailwindCSS, and integrates with the TMDb API for movie data. For user authentication and data storage, Vixoo leverages Supabase.',
      image: getProjectImage(4),
      technologies: ['React', 'TailwindCSS', 'TypeScript', 'Supabase','TMDb API'],
      features: ['Real-time Movie Search', 'Comprehensive Movie Details', 'User Authentication', 'Performance optimization','Save Favorite'],
      liveUrl: 'https://vixoo.netlify.app/',
      githubUrl: 'https://github.com/Myfza/Vixoo-Movie-FInder-Website',
    },
{
  id: 5,
  title: 'Vizgames - Discover Amazing Games ',
  category: 'Full-Stack Development',
  description: 'Vizgames is your ultimate platform to discover, track, and explore a vast library of video games. Find your next adventure, keep tabs on trending titles, and dive into detailed game information with ease.',
  image: getProjectImage(5),
  technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'RAWG API', 'Supabase'],
  features: ['Extensive game database', 'Advanced search & filtering', 'User authentication & favorites', 'Detailed game pages', 'Responsive design'],
  liveUrl: 'https://vizgames.netlify.app/',
  githubUrl: 'https://github.com/YourUsername/vizgames', 
},
{
  id: 6,
  title: 'Vizart - Interactive Design Portfolio',
  category: 'UI/UX & Brand Design',
  description: 'Vizart is a modern and interactive web-based portfolio showcasing my UI/UX and brand design projects. It features engaging animations, a clean design, and leverages Supabase for a dynamic experience.',
  image: getProjectImage(6),
  technologies: ['Figma', 'TailwindCSS', 'Framer Motion', 'Supabase', 'TypeScript','React'],
  features: ['Interactive design showcase', 'Smooth animations', 'Dynamic project filtering', 'Responsive & modern UI', 'Contact form integration'],
  liveUrl: 'https://vizart-portfolio-demo.netlify.app',
  githubUrl: 'https://github.com/YourUsername/vizart-portfolio',
},
    {
  id: 7,
  title: 'Vizart - Portfolio of Muhammad Yusuf Aditiya',
  category: 'UI/UX & Brand Design',
  description: 'Vizart is a modern, interactive, and futuristic web-based portfolio showcasing my UI/UX and brand design projects. It features engaging animations, vibrant gradient effects, a clean design, and leverages Supabase for a dynamic and seamless user experience.',
  image: getProjectImage(7),
  technologies: ['TypeScript', 'TailwindCSS', 'React', 'Vite', 'JSON'],
  features: ['Interactive design showcase', 'Smooth & **animative transitions**', 'Dynamic project filtering', 'Responsive & modern UI', 'Contact form integration', '**Gradient design elements**'],
  liveUrl: 'http://vizdev.netlify.app/',
  githubUrl: 'https://github.com/YourUsername/vizart-portfolio', 
},
    {
  id: 8, 
  title: 'VizIoT - Device Control Dashboard',
  category: 'Robotics & IoT Systems', 
  description: 'A cutting-edge and intuitive web interface designed for real-time control of various IoT devices. This dashboard boasts a futuristic UI with neon accents, smooth animations, and ensures secure, live management of all your connected devices.',
  image: getProjectImage(8), 
  technologies: ['React', 'TypeScript', 'Websocket', 'TailwindCSS', 'Supabase',],
  features: ['Real-time device control', 'Futuristic UI with dark mode', 'Secure user authentication', 'Live device status updates', 'Multi-device support', 'Responsive design'],
  liveUrl: 'https://viziot-dashboard.netlify.app/', 
  githubUrl: 'https://github.com/Myfza/Viziot-Monitor',
},
{
  id: 10,
  title: 'Vixart - Universal File Converter',
  category: 'Full-Stack Development',
  description: 'FileConvertPro is a robust and user-friendly web application designed for **fast and secure file conversions** across multiple formats. It supports a wide range of file types (e.g., images, documents, audio, video) and provides a seamless conversion experience with a clean, intuitive interface.',
  image: getProjectImage(9),
  technologies: ['React', 'Node.js', 'Python', 'TailwindCSS', 'Multer', 'FFmpeg (backend)', 'Cloudinary (for storage/processing)', 'WebAssembly (for client-side conversion)'],
  features: [
    'Support for multiple file formats (e.g., PDF, JPG, MP4, MP3)',
    'Fast & efficient conversion process',
    'Secure file handling & privacy',
    'Intuitive drag-and-drop interface',
    'Download converted files directly',
    'Responsive design for all devices'],
  liveUrl: 'https://vixart.netlify.app/', 
githubUrl:'https://github.com/Myfza/Vixert-File-Converter-Website', 
},
{
  id: 11, 
  title: 'VIZ Speed Test - Futuristic Internet Speed Test',
  category: 'Network Engineering',
  description: 'VIZ Speed Test is a futuristic and minimalist internet speed test tool built with modern web technologies. It provides real-time feedback on your connection speed, download, upload, and ping, all presented with a striking visual flair and a **neon-style dark theme UI.',
  image: getProjectImage(10),
  technologies: ['React', 'Vite', 'TypeScript', 'TailwindCSS', 'Chart.js / Recharts', 'Netlify'],
  features: [
    'Real-time download, upload, and ping measurement',
    'Multilingual interface with auto-detection',
    'Futuristic UI with neon accents & dark mode',
    'Fully responsive design (mobile, tablet, desktop)',
    'Live visual feedback with smooth animations & meters',
  ],
  liveUrl: 'https://viz-speed-test.netlify.app/',
  githubUrl: 'https://github.com/Myfza/viz-speed-test-website',
},
{
  id: 12,
  title: 'BookSelf – LocalStorage Based Personal Library App',
  category: 'Full-Stack Development',
  description: 'BookSelf is a lightweight, privacy-first personal book tracking application designed to help you easily manage your reading list. Track books you\'re currently reading, plan to read, or have finished, with all your data stored securely and privately in your **browser\'s LocalStorage.',
  image: getProjectImage(11),
  technologies: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'LocalStorage', 'Netlify'],
  features: [
    'Add, edit, and delete books',
    'Upload and preview custom book covers',
    'Track reading timeline (start dates, deadlines, progress)',
    'Dashboard statistics on reading habits',
    'Real-time search and filtering by title, author, or status',
    'Automated deadline warnings for approaching dates',
    'LocalStorage-based for complete data privacy (no accounts, no cloud)',
    'Backup and import system (JSON export/import)',
    'User isolation for secure, separate sessions',
  ],
  liveUrl: 'https://notebookself.netlify.app',
  githubUrl: 'https://github.com/Myfza/Personal-bookself-website', 
},
  ];

  const categories = [
    'All',
    'Robotics & IoT Systems', 
    'AI & Computer Vision',
    'Full-Stack Development',
    'UI/UX & Brand Design',
    'Network Engineering',
  ];
  
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleLiveDemo = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleViewCode = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="portfolio" className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-6 sm:px-8 md:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron mb-3 sm:mb-4 uppercase tracking-wide">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-poppins px-4 sm:px-0">
            Showcasing projects across automation, AI, IoT, full-stack development, UI/UX, brand identity, network engineering, and hardware systems—delivering functional, impactful solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-x-auto px-4 py-3 sm:py-4 mb-8 sm:mb-12"
        >
          <div className="flex space-x-2 sm:space-x-3 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-3 sm:px-4 py-2 sm:py-2.5 
                  rounded-full font-semibold 
                  text-xs sm:text-sm 
                  transition-all duration-300 
                  hover:scale-105 
                  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900
                  whitespace-nowrap
                  flex items-center justify-center
                  min-h-[36px] sm:min-h-[40px]
                  
                  ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg'
                    : 'bg-black/20 text-white border border-white/10 hover:bg-white/10 hover:shadow-md'
                  }
                `}
                aria-pressed={activeCategory === category}
                title={category}
              >
                <span className="category-button-text">
                  {category}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <article className="glass-card rounded-2xl overflow-hidden hover:neon-glow transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.category} project`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Eye className="text-white" size={32} aria-hidden="true" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4 sm:p-6">
                    <div className="text-xs sm:text-sm text-primary-orange mb-2 font-poppins">
                      {project.category}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 font-orbitron group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 font-poppins">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs glass rounded-full text-gray-400 min-w-[40px] text-center"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs text-primary-cyan min-w-[40px]">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
<div className="w-full">
  <button
    className="w-full portfolio-card-button btn-primary py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 font-medium"
    aria-label={`View details for ${project.title}`}
  >
    <Eye size={14} className="sm:w-4 sm:h-4" aria-hidden="true" />
    <span className="whitespace-nowrap">View Details</span>
  </button>
</div>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className="glass-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 p-2 glass-card rounded-full hover:neon-glow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label="Close project details"
                  >
                    <X size={20} aria-hidden="true" />
                  </button>

                  {/* Project Image */}
                  <div className="h-64 md:h-80 overflow-hidden rounded-t-2xl">
                    <img
                      src={selectedProject.image}
                      alt={`${selectedProject.title} - ${selectedProject.category} project`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Project Details */}
                  <div className="p-8">
                    <div className="text-primary-orange mb-2 font-poppins">
                      {selectedProject.category}
                    </div>
                    <h3 id="modal-title" className="text-3xl font-bold mb-4 font-orbitron gradient-text">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-6 font-poppins leading-relaxed">
                      {selectedProject.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      {/* Technologies */}
                      <div>
                        <h4 className="text-xl font-semibold mb-4 font-orbitron">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech: string) => (
                            <span
                              key={tech}
                              className="px-3 py-1 glass rounded-full text-sm text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-xl font-semibold mb-4 font-orbitron">Key Features</h4>
                        <ul className="space-y-2">
                          {selectedProject.features.map((feature: string, index: number) => (
                            <li key={index} className="flex items-center gap-2 text-gray-300">
                              <div className="w-2 h-2 rounded-full bg-primary-orange" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <button 
                        onClick={() => handleLiveDemo(selectedProject.liveUrl)}
                        className="btn-primary px-6 py-3 rounded-lg flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                        aria-label={`View live demo of ${selectedProject.title}`}
                      >
                        <ExternalLink size={20} aria-hidden="true" />
                        Live Demo
                      </button>
                      <button 
                        onClick={() => handleViewCode(selectedProject.githubUrl)}
                        className="btn-secondary px-6 py-3 rounded-lg flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                        aria-label={`View source code for ${selectedProject.title}`}
                      >
                        <Github size={20} aria-hidden="true" />
                        View Code
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;