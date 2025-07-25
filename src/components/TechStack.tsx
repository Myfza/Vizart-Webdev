import React from 'react';
import { motion } from 'framer-motion';

const TechIcon = ({ src, name, className = '' }) => {
  return (
    <img
      src={src}
      alt={name}
      title={name}
      className={`w-10 h-10 sm:w-12 sm:h-12 object-contain ${className}`}
    />
  );
};

const TechStack = () => {
  const techCategories = [
    {
      category: 'Frontend Development',
      technologies: [
        { name: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: 'from-gray-800 to-gray-600' },
        { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'from-blue-400 to-cyan-400' },
        { name: 'Vue.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', color: 'from-green-400 to-emerald-400' },
        { name: 'Tailwind CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: 'from-cyan-500 to-blue-500' },
        { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: 'from-orange-500 to-pink-500' },
        { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: 'from-blue-500 to-indigo-500' },
        { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: 'from-yellow-400 to-yellow-500' },
        { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: 'from-blue-600 to-blue-400' },
        { name: 'Astro', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/astro/astro-original.svg', color: 'from-purple-600 to-indigo-600' },
        { name: 'Vite', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg', color: 'from-purple-500 to-yellow-500' },
      ]
    },
    {
      category: 'Backend Development',
      technologies: [
        { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'from-green-500 to-emerald-400' },
        { name: 'Express.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: 'from-gray-700 to-gray-500' },
        { name: 'PHP', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', color: 'from-indigo-500 to-purple-500' },
        { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'from-yellow-500 to-blue-500' },
        { name: 'FastAPI', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg', color: 'from-emerald-500 to-teal-500' },
        { name: 'Laravel', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', color: 'from-red-500 to-pink-500' },
      ]
    },
    {
      category: 'Database & CMS',
      technologies: [
        { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: 'from-green-600 to-green-400' },
        { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: 'from-blue-600 to-blue-400' },
        { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: 'from-blue-700 to-blue-500' },
        { name: 'Supabase', src: 'https://raw.githubusercontent.com/supabase/supabase/master/packages/common/assets/images/supabase-logo-icon.svg', color: 'from-green-600 to-emerald-500' },
        { name: 'Firebase', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', color: 'from-yellow-500 to-orange-500' },
        { name: 'Ghost', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ghost/ghost-original.svg', color: 'from-gray-800 to-gray-600' },
        { name: 'Wordpress', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg', color: 'from-gray-800 to-gray-600' },
      ]
    },
    {
      category: 'DevOps & Tools',
      technologies: [
        { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: 'from-orange-500 to-red-400' },
        { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: 'from-gray-800 to-gray-600' },
        { name: 'Vercel', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', color: 'from-gray-900 to-gray-700' },
        { name: 'Netlify', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg', color: 'from-teal-400 to-cyan-400' },
        { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: 'from-sky-400 to-blue-400' },
      ],
    },
    {
      category: 'AI & Automation',
      technologies: [
        { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'from-yellow-400 to-blue-400' },
        { name: 'TensorFlow', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: 'from-orange-400 to-yellow-400' },
        { name: 'Pytorch', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', color: 'from-red-500 to-orange-400' },
        { name: 'ROS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ros/ros-original.svg', color: 'from-indigo-500 to-indigo-300' },
         { name: 'N8n', src: '/n8n-color.png',
      color: 'from-pink-500 to-pink-300',
    },
      ],
    },
    {
  category: 'UI/UX & Design',
  technologies: [
    {
      name: 'Figma',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      color: 'from-purple-500 to-pink-400',
    },
    {
      name: 'Framer',
      src: 'Framer-Icon.png',
      color: 'from-gray-500 to-gray-400',
    },
    {
      name: 'Adobe Photoshop',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg',
      color: 'from-blue-600 to-cyan-400',
    },
    {
      name: 'Adobe Illustrator',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-original.svg',
      color: 'from-orange-500 to-red-400',
    },
    {
      name: 'Canva',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
      color: 'from-blue-500 to-teal-400',
    },
    {
      name: 'LottieFiles',
      src: 'LottieFiles.png',
      color: 'from-blue-400 to-indigo-400',
    },
    {
      name: 'Notion',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg',
      color: 'from-gray-700 to-gray-500',
    },
    {
      name: 'Google Fonts',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
      color: 'from-red-500 to-yellow-500',
    },
    {
      name: 'Coolors',
      src: 'Coolors.png',
      color: 'from-purple-600 to-purple-400',
    },
    {
      name: 'MockFlow',
      src: 'mockflow-icon.png',
      color: 'from-blue-700 to-blue-500',
    },
        {
      name: 'Spline',
      src: 'spline.logo.png',
      color: 'from-pink-500 to-orange-400',
    },
        {
      name: 'Webflow',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg',
      color: 'from-indigo-400 to-blue-400',
    },
  ],
},
    {
      category: 'Other Tools',
      technologies: [
        {
  name: 'Winbox',
  src: 'Winbox.png',
  color: 'from-blue-500 to-sky-500',
},
{
  name: 'VirtualBox',
  src: 'vmware.png',
  color: 'from-blue-600 to-orange-500',
},
{
  name: 'Kali Linux',
  src: 'https://www.kali.org/images/favicon.png',
  color: 'from-gray-800 to-blue-500',
},
{
  name: 'Arduino IDE',
  src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg',
  color: 'from-teal-500 to-green-400',
},
        { name: 'Markdown', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg', color: 'from-gray-700 to-gray-500' },
        { name: 'Linux', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', color: 'from-yellow-400 to-orange-400' },
        { name: 'Yarn', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg',
      color: 'from-sky-500 to-blue-500',
    },
        { name: 'npm',src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
      color: 'from-red-500 to-pink-500',
    },
            {
      name: 'Nginx',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Bash',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
      color: 'from-gray-700 to-gray-500',
    },
        
      ],
    },
  ];

  return (
    <section id="techstack" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.1),transparent_50%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron mb-3 sm:mb-4 uppercase tracking-wide">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-poppins px-4 sm:px-0">
            Technologies and tools I use to build intelligent systems, from frontend interfaces to AI-powered automation and IoT hardware integration
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="space-y-8 sm:space-y-12">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold font-orbitron mb-6 sm:mb-8 text-center gradient-text">
                {category.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: categoryIndex * 0.1 + techIndex * 0.05,
                      duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    className="group cursor-pointer"
                  >
                    <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 text-center hover:border-white/20 transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[120px] sm:min-h-[140px]">
                      <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                      <div className="relative z-10 text-2xl sm:text-3xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                        <TechIcon src={tech.src} name={tech.name} />
                      </div>
                      <h4 className="relative z-10 font-poppins text-xs sm:text-sm font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300 text-center leading-tight">
                        {tech.name}
                      </h4>
                      <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 bg-gradient-to-br ${tech.color} blur-xl transition-opacity duration-300 -z-10`}></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;