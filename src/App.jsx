import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './Components/Sidebar/Sidebar';
import Mains from './Components/Main/main';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import LoginPage from './components/Auth/LoginPage';
import Features from './components/Features/Features';
import FloatingActionButton from './components/FloatingActionButton/FloatingActionButton';
import ChatInterface from './components/Chat/ChatInterface';
import Footer from './components/Footer/Footer';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);

  // Add smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <Features />
      
      {/* Chat Demo Section */}
      <section id="chat" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Try Our Chat Interface
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience seamless conversations with our AI assistant. Clean design, smooth animations, and intelligent responses.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ChatInterface />
          </motion.div>
        </div>
      </section>

      {/* Original Gemini Clone Interface */}
      <section id="gemini-interface" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Full Gemini Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the complete interface with sidebar navigation and advanced features.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex min-h-[600px]">
              <Sidebar />
              <Mains />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About This Project
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              This Gemini Clone showcases modern web development techniques with React, Framer Motion, 
              and Tailwind CSS. Built with performance, accessibility, and user experience in mind.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { title: "React 18", desc: "Latest React features with hooks and context" },
                { title: "Framer Motion", desc: "Smooth animations and micro-interactions" },
                { title: "Tailwind CSS", desc: "Utility-first CSS framework for rapid styling" }
              ].map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-gray-50 rounded-xl"
                >
                  <h3 className="font-bold text-lg mb-2">{tech.title}</h3>
                  <p className="text-gray-600">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingActionButton />

      {/* Login Modal */}
      <LoginPage 
        isOpen={showLogin} 
        onClose={() => setShowLogin(false)} 
      />
    </div>
  );
};

export default App;