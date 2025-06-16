import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-hero-gradient animate-gradient"></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8 animate-pulse-slow">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          AI-Powered Assistant
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
          <span className="block animate-float">Welcome to</span>
          <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-float" style={{animationDelay: '1s'}}>
            Gemini Clone
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-float" style={{animationDelay: '2s'}}>
          Experience the power of AI with our intelligent assistant. Get answers, create content, and explore possibilities like never before.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-float" style={{animationDelay: '3s'}}>
          <button className="group relative px-8 py-4 bg-white text-gray-900 font-semibold rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-white/25 active:scale-95">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0.5 bg-white rounded-full transition-all duration-300 group-hover:bg-transparent"></div>
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
              Get Started
            </span>
          </button>
          
          <button className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-white/50 hover:shadow-lg active:scale-95">
            Learn More
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
        
        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-16 animate-float" style={{animationDelay: '4s'}}>
          {['Smart AI', 'Fast Response', 'Secure', 'User Friendly'].map((feature, index) => (
            <span 
              key={feature}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm rounded-full hover:bg-white/20 transition-all duration-300 cursor-default"
              style={{animationDelay: `${4 + index * 0.2}s`}}
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;