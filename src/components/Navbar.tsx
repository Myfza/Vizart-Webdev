import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  User,
  Code,
  Briefcase,
  Mail,
  Award,
  MessageSquare,
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      // Only apply auto-hide behavior on mobile devices
      if (window.innerWidth < 1024) { // lg breakpoint
        if (currentScrollY < lastScrollY || currentScrollY < 100) {
          // Scrolling up or near top - show navbar
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down and past threshold - hide navbar
          setIsVisible(false);
          setIsMenuOpen(false); // Close mobile menu when hiding
        }
      } else {
        // Always visible on desktop
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Handle window resize to reset visibility on desktop
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update the scroll handler to include lastScrollY dependency
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      // Only apply auto-hide behavior on mobile devices
      if (window.innerWidth < 1024) { // lg breakpoint
        if (currentScrollY < lastScrollY || currentScrollY < 100) {
          // Scrolling up or near top - show navbar
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down and past threshold - hide navbar
          setIsVisible(false);
          setIsMenuOpen(false); // Close mobile menu when hiding
        }
      } else {
        // Always visible on desktop
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Handle window resize to reset visibility on desktop
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY]);

  const navItems = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Portfolio', href: '#portfolio', icon: Briefcase },
    { name: 'Experience', href: '#experience', icon: Award },
    { name: 'Testimonials', href: '#testimonials', icon: MessageSquare },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
<header
  className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
    isScrolled
      ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
      : 'bg-transparent'
  } ${
    isVisible ? 'translate-y-0' : '-translate-y-full'
  }`}
>

      <nav className="container mx-auto px-6 sm:px-8 md:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          {/* Logo - Left Aligned with Proper Spacing */}
          <div className="flex items-center space-x-1 flex-shrink-0">
            <img
              src="/llogo-vizart.png"
              alt="Vizart Logo"
              className="w-16 h-10 sm:w-20 sm:h-12 md:w- md:h-14 rounded-lg object-contain hover:scale-15 transition-transform duration-300"
              style={{ 
                marginLeft: '0',
                marginRight: '16px'
              }}
            />
            {/* Optional: Brand text for larger screens */}
            <div className="hidden md:block">
              <span className="text-sm font-orbitron font-bold text-white/80">
                VIZART
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-poppins font-medium text-sm tracking-wide hover:bg-white/5 px-3 py-2 rounded-lg"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button - Right Aligned */}
          <div className="hidden lg:block flex-shrink-0">
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-4 py-2 rounded-full font-poppins font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Let's Connect
            </button>
          </div>

          {/* Mobile Menu Button - Right Aligned */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center flex-shrink-0"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[72px] z-50 mobile-menu-overlay-enhanced">
            <div className="flex flex-col space-y-1 p-6 max-h-[calc(100vh-72px)] overflow-y-auto">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="mobile-menu-item-enhanced flex items-center space-x-4 text-gray-200 hover:text-white px-5 py-4 rounded-xl transition-all duration-300 font-poppins text-base min-h-[56px] w-full text-left group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 to-white/5 group-hover:from-orange-500/20 group-hover:to-purple-600/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-white/10 group-hover:border-white/20">
                      <IconComponent size={18} className="flex-shrink-0 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="font-medium tracking-wide">{item.name}</span>
                  </button>
                );
              })}
              
              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-orange-500/30 via-purple-600/30 to-transparent my-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm"></div>
              </div>
              
              {/* CTA Button */}
              <button
                onClick={() => scrollToSection('#contact')}
                className="mt-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-6 py-4 rounded-2xl font-poppins font-semibold text-center hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 text-base min-h-[56px] w-full transform hover:scale-[1.02] active:scale-[0.98] border border-white/10 hover:border-white/20"
              >
                Let's Connect
              </button>
              
              {/* Menu Footer */}
              <div className="pt-6 text-center border-t border-white/5 mt-4">
                <p className="text-xs text-gray-500 font-poppins">
                  Muhammad Yusuf Aditiya
                </p>
                <p className="text-xs text-gray-600 font-poppins mt-1">
                  Automation Engineer & Developer
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;