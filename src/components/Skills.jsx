import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Layout, Database, Terminal, Users } from 'lucide-react';

const skills = [
  { name: 'Python Programming', icon: <Terminal size={32} />, color: 'from-blue-400 to-cyan-400' },
  { name: 'Front-end Development', icon: <Layout size={32} />, color: 'from-yellow-400 to-orange-400' },
  { name: 'Databases & APIs', icon: <Database size={32} />, color: 'from-green-400 to-emerald-400' },
  { name: 'AI Web Tools', icon: <Code size={32} />, color: 'from-red-400 to-rose-400' },
  { name: 'Team Collaboration', icon: <Users size={32} />, color: 'from-indigo-400 to-blue-400' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Core <span className="text-accent-blue">Skills</span></h2>
          <div className="w-20 h-1 bg-neon-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="glass p-6 text-center group cursor-default h-full flex flex-col items-center justify-center border-white/5 hover:border-accent-blue/40"
            >
              <div className={`mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} p-0.5 group-hover:shadow-[0_0_20px_0_rgba(79,172,254,0.5)] transition-all`}>
                <div className="w-full h-full bg-primary/90 rounded-2xl flex items-center justify-center text-white">
                  {skill.icon}
                </div>
              </div>
              <p className="font-semibold text-gray-300 group-hover:text-accent-blue transition-colors text-sm md:text-base">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
