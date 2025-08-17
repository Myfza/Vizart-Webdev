import React from 'react';
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Mail,
  MapPin,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 border-t border-white/10">
      <div className="container mx-auto px-6 sm:px-8 md:px-6 lg:px-8 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div>
            <div className="mb-3 sm:mb-4">
              <h2 className="text-lg sm:text-xl font-bold font-orbitron gradient-text-enhanced animate-gradient">
                Muhammad Yusuf Aditiya
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-400 font-poppins">
              Designing intelligent connected systems that bridge the physical
              and digital worlds.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 font-orbitron">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors font-poppins"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors font-poppins"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors font-poppins"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors font-poppins"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors font-poppins"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 font-orbitron">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail
                  size={16}
                  className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300 cursor-pointer flex-shrink-0"
                />
                <p className="text-sm sm:text-base text-gray-400 font-poppins hover:text-white transition-colors cursor-pointer">
                  vizart.id@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin
                  size={16}
                  className="text-gray-400 hover:text-primary-cyan hover:scale-110 transition-all duration-300 cursor-pointer flex-shrink-0"
                />
                <p className="text-sm sm:text-base text-gray-400 font-poppins hover:text-white transition-colors cursor-pointer">
                  Indonesia
                </p>
              </div>
            </div>

            {/* Follow Me Section */}
            <div className="mt-6">
              <h5 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 font-orbitron">
                Follow Me
              </h5>
              <div className="flex gap-2 sm:gap-3">
                <a
                  href="https://github.com/Myfza"
                  className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/myfza/"
                  className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://instagram.com/vizart.in"
                  className="text-gray-400 hover:text-pink-400 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-sky-400 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-500 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-xs sm:text-sm text-gray-400 mb-4 md:mb-0 font-poppins text-center md:text-left">
            © 2025 Muhammad Yusuf Aditiya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
