import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Zap } from 'lucide-react';

const achievements = [
  {
    title: 'Technical Hackathon Participation',
    description: 'Collaborated with a cross-functional team to build an AI-powered solution within a competitive 24-hour environment.',
    icon: <Trophy size={28} className="text-yellow-400 shrink-0" />
  },
  {
    title: 'AI-Assisted Web Development',
    description: 'Developed and optimized web applications using modern AI tools and frameworks, enhancing developer productivity.',
    icon: <Zap size={28} className="text-accent-blue shrink-0" />
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">My <span className="text-accent-blue">Achievements</span></h2>
          <div className="w-20 h-1 bg-neon-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass p-8 flex items-start gap-6 hover:bg-white/10 transition-colors border-white/5"
            >
              <div className="p-4 bg-white/5 rounded-2xl">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 line-height-relaxed max-w-2xl">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
