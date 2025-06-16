import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Settings, HelpCircle, MessageSquare, X, Lightbulb, Palette, User } from 'lucide-react';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('suggestions');

  const suggestions = [
    { icon: Lightbulb, text: "Get creative writing prompts", action: () => console.log('Creative writing') },
    { icon: MessageSquare, text: "Start a conversation", action: () => console.log('Start chat') },
    { icon: Palette, text: "Generate color palettes", action: () => console.log('Color palettes') },
    { icon: HelpCircle, text: "Ask for help", action: () => console.log('Help') }
  ];

  const settings = [
    { icon: User, text: "Profile Settings", action: () => console.log('Profile') },
    { icon: Palette, text: "Theme Settings", action: () => console.log('Theme') },
    { icon: Settings, text: "General Settings", action: () => console.log('Settings') },
    { icon: HelpCircle, text: "Help & Support", action: () => console.log('Support') }
  ];

  const actionButtons = [
    {
      icon: MessageSquare,
      label: "Suggestions",
      color: "from-blue-500 to-blue-600",
      action: () => {
        setModalContent('suggestions');
        setShowModal(true);
        setIsOpen(false);
      }
    },
    {
      icon: Settings,
      label: "Settings",
      color: "from-purple-500 to-purple-600",
      action: () => {
        setModalContent('settings');
        setShowModal(true);
        setIsOpen(false);
      }
    },
    {
      icon: HelpCircle,
      label: "Help",
      color: "from-green-500 to-green-600",
      action: () => {
        setModalContent('help');
        setShowModal(true);
        setIsOpen(false);
      }
    }
  ];

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* Action Buttons */}
        <AnimatePresence>
          {isOpen && (
            <div className="absolute bottom-16 right-0 space-y-3">
              {actionButtons.map((button, index) => (
                <motion.button
                  key={button.label}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={button.action}
                  className={`flex items-center space-x-3 bg-gradient-to-r ${button.color} text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group`}
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button.icon className="w-5 h-5" />
                  <span className="font-medium whitespace-nowrap">{button.label}</span>
                </motion.button>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Main FAB */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: isOpen ? 45 : 0 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
          </motion.div>
        </motion.button>

        {/* Pulse Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">
                    {modalContent === 'suggestions' ? 'Suggestions' : 
                     modalContent === 'settings' ? 'Settings' : 'Help & Support'}
                  </h2>
                  <button
                    onClick={() => setShowModal(false)}
                    className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                {(modalContent === 'suggestions' ? suggestions : 
                  modalContent === 'settings' ? settings : suggestions).map((item, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={item.action}
                    className="w-full flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 text-left group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-gray-900">
                      {item.text}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingActionButton;