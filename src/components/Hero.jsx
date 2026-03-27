import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ChevronRight, Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block mb-10"
        >
          <div className="absolute inset-0 bg-accent-blue/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-white/10 p-1.5 glass overflow-hidden group">
            <motion.img 
              src={profileImg} 
              alt="AILI VARUN TEJA" 
              className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 block glass px-4 py-1.5 rounded-full border border-white/10 text-accent-blue font-medium text-sm tracking-wide w-fit mx-auto"
        >
          WELCOME TO MY PORTFOLIO
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-8xl font-black mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          AILI <span className="text-transparent bg-clip-text bg-neon-gradient">VARUN TEJA</span>
        </motion.h1>

        <motion.div 
          className="text-xl md:text-3xl font-semibold mb-8 text-gray-400 h-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typewriter
            words={['Web Developer', 'Software Engineer', 'Creative Developer', 'Problem Solver']}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.div>

        <motion.p 
          className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Highly motivated B.Tech student passionate about Modern Web Development, Software Engineering, and solving real-world problems.
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#projects" className="neon-button group">
            View Projects
            <ChevronRight className="inline-block ml-1 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a href="#contact" className="neon-button-outline">
            Contact Me
          </a>
        </motion.div>

        <motion.div 
          className="mt-16 flex justify-center gap-8 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a href="https://github.com/0varunsunny0" target="_blank" className="hover:text-accent-blue transition-colors duration-300">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/varun-tej-sunny-018969352" target="_blank" className="hover:text-accent-blue transition-colors duration-300">
            <Linkedin size={24} />
          </a>
          <a href="mailto:varuntejsunny075@gmail.com" className="hover:text-accent-blue transition-colors duration-300">
            <Mail size={24} />
          </a>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-accent-blue rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
