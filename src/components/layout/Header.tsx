'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import Button from '@/components/ui/Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Albums', href: '/albums' },
    { name: 'Wedding Films', href: '/films' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl lg:text-3xl font-display font-bold text-gradient"
            >
              Cine Magic
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-primary-500 transition-colors duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-white/80">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+94 77 621 6556</span>
            </div>
            <a
              href="https://instagram.com/cine_magic_creations"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-primary-500 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <Button variant="primary" size="sm">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-white/90 hover:text-primary-500 transition-colors duration-300 font-medium py-2"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2 text-white/80">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+94 77 621 6556</span>
                  </div>
                  <a
                    href="https://instagram.com/cine_magic_creations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-primary-500 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
                <Button variant="primary" size="md" className="w-full">
                  Book Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
