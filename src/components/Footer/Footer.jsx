import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github, 
  Mail, 
  Send,
  Heart,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (footerElement) observer.unobserve(footerElement);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const socialLinks = [
    { 
      icon: Facebook, 
      href: '#', 
      color: 'hover:text-blue-600',
      hoverEffect: 'hover:rotate-12 hover:scale-110'
    },
    { 
      icon: Twitter, 
      href: '#', 
      color: 'hover:text-sky-500',
      hoverEffect: 'hover:-rotate-12 hover:scale-110'
    },
    { 
      icon: Instagram, 
      href: '#', 
      color: 'hover:text-pink-600',
      hoverEffect: 'hover:rotate-12 hover:scale-110'
    },
    { 
      icon: Linkedin, 
      href: '#', 
      color: 'hover:text-blue-700',
      hoverEffect: 'hover:-rotate-12 hover:scale-110'
    },
    { 
      icon: Github, 
      href: '#', 
      color: 'hover:text-gray-800',
      hoverEffect: 'hover:rotate-12 hover:scale-110'
    }
  ];

  const footerLinks = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'API', 'Documentation']
    },
    {
      title: 'Company',
      links: ['About', 'Blog', 'Careers', 'Press']
    },
    {
      title: 'Support',
      links: ['Help Center', 'Contact', 'Status', 'Community']
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribing:', email);
      setEmail('');
      // Add your subscription logic here
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer id="footer" className="bg-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600" />
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">G</span>
                  </div>
                  <span className="font-bold text-xl">Gemini Clone</span>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Experience the future of AI-powered conversations. Built with modern technology for seamless interactions.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -3 }}
                      className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 ${social.color} ${social.hoverEffect} hover:shadow-lg hover:shadow-blue-500/25`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Links Sections */}
              {footerLinks.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: (sectionIndex + 1) * 0.1 }}
                >
                  <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <motion.li key={linkIndex}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                        >
                          {link}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              {/* Newsletter Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
                <p className="text-gray-400 mb-4">
                  Subscribe to our newsletter for the latest updates and features.
                </p>
                
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Subscribe</span>
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border-t border-gray-800"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center space-x-2 text-gray-400">
                  <span>© 2024 Gemini Clone. Made with</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Heart className="w-4 h-4 text-red-500 fill-current" />
                  </motion.div>
                  <span>by Suresh Gongali</span>
                </div>
                
                <div className="flex items-center space-x-6 text-gray-400 text-sm">
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Terms of Service
                  </a>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0 
        }}
        onClick={scrollToTop}
        className="fixed bottom-20 right-20 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-30"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </>
  );
};

export default Footer;