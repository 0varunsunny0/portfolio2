import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 bg-primary/50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">About <span className="text-accent-blue">Me</span></h2>
          <div className="w-20 h-1 bg-neon-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 relative group"
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent-blue/20 rounded-full blur-xl group-hover:bg-accent-blue/40 transition-colors"></div>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-neon-gradient p-0.5 overflow-hidden">
                <div className="w-full h-full bg-primary rounded-2xl overflow-hidden">
                  <img 
                    src={profileImg} 
                    alt="AILI VARUN TEJA" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">AILI VARUN TEJA</h3>
                <p className="text-accent-blue font-medium">B.Tech Student</p>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6">
              I am a dedicated B.Tech student at Kamala Institute of Technology and Science. 
              My journey is fueled by a passion for modern web technologies and software engineering.
            </p>

            <div className="grid gap-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-accent-blue">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Education</p>
                  <p className="font-medium">B.Tech Student</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-accent-blue">
                  <Target size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Focus</p>
                  <p className="font-medium">Modern Web & Software Solutions</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Objectives */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <GraduationCap className="text-accent-blue" />
                Education
              </h3>
              <p className="text-gray-300 mb-2 font-semibold text-lg">Kamala Institute of Technology and Science</p>
              <p className="text-gray-400">Bachelor of Technology</p>
              <p className="text-accent-blue mt-2 font-medium">2023 - Present</p>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <Target className="text-accent-blue" />
                Career Objective
              </h3>
              <p className="text-gray-300 leading-relaxed">
                "Seeking an internship or entry-level opportunity to apply my skills in Modern 
                Web Technologies, Software Development, and problem-solving to contribute to 
                innovative projects in a professional environment."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
