import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Globe, MessageSquare, Sparkles } from 'lucide-react';
import Card from '../Card/Card';

const Features = () => {
  const features = [
    {
      title: "AI-Powered Intelligence",
      content: "Advanced machine learning algorithms provide intelligent responses and contextual understanding for natural conversations.",
      icon: Brain,
      gradient: "from-purple-500 to-pink-600",
      ctaText: "Explore AI",
      ctaAction: () => console.log('AI clicked')
    },
    {
      title: "Lightning Fast",
      content: "Optimized performance ensures instant responses and seamless user experience across all devices and platforms.",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-600",
      ctaText: "See Speed",
      ctaAction: () => console.log('Speed clicked')
    },
    {
      title: "Secure & Private",
      content: "Enterprise-grade security with end-to-end encryption ensures your conversations remain private and protected.",
      icon: Shield,
      gradient: "from-green-500 to-teal-600",
      ctaText: "Learn Security",
      ctaAction: () => console.log('Security clicked')
    },
    {
      title: "Global Accessibility",
      content: "Multi-language support and responsive design make our platform accessible to users worldwide on any device.",
      icon: Globe,
      gradient: "from-blue-500 to-cyan-600",
      ctaText: "Go Global",
      ctaAction: () => console.log('Global clicked')
    },
    {
      title: "Smart Conversations",
      content: "Context-aware dialogue system remembers conversation history and provides relevant, personalized responses.",
      icon: MessageSquare,
      gradient: "from-indigo-500 to-purple-600",
      ctaText: "Start Chat",
      ctaAction: () => console.log('Chat clicked')
    },
    {
      title: "Creative Assistant",
      content: "Generate creative content, brainstorm ideas, and get inspiration for your projects with our AI-powered creativity tools.",
      icon: Sparkles,
      gradient: "from-pink-500 to-rose-600",
      ctaText: "Get Creative",
      ctaAction: () => console.log('Creative clicked')
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the advanced capabilities that make our AI assistant the perfect companion for your daily tasks and creative projects.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                title={feature.title}
                content={feature.content}
                icon={feature.icon}
                gradient={feature.gradient}
                ctaText={feature.ctaText}
                ctaAction={feature.ctaAction}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already leveraging the power of AI for their daily tasks and creative projects.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;