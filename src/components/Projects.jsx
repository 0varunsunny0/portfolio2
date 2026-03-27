import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Trophy, BookOpen, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const projects = [
  {
    id: 'academic',
    title: 'Digital Time Capsule',
    description: 'Applied programming concepts and logical problem solving to build a robust foundation for modern software applications.',
    tag: 'College Project',
    icon: <BookOpen className="text-blue-400" />,
    delay: 0.1,
    images: [] // No images for this yet
  },
  {
    id: 'hackathon',
    title: 'Academic Flow',
    description: 'Built a gamified academic management platform (Academic Flow) with features like student dashboards, avatar systems, and automated attendance tracking.',
    tag: 'Hackathon',
    icon: <Trophy className="text-yellow-400" />,
    delay: 0.2,
    images: [
      '/projects/hackathon/1.jpg',
      '/projects/hackathon/2.jpg',
      '/projects/hackathon/3.jpg',
      '/projects/hackathon/4.jpg',
      '/projects/hackathon/5.jpg'
    ]
  }
];

const ProjectModal = ({ project, onClose }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  if (!project) return null;

  const nextImg = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % project.images.length);
  };

  const prevImg = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="glass w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <div>
            <h3 className="text-2xl font-bold text-accent-blue">{project.title}</h3>
            <p className="text-sm text-gray-400 mt-1">{project.tag} • Screenshot {currentIdx + 1} of {project.images.length}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow relative bg-primary/50 flex items-center justify-center min-h-[300px]">
          <img 
            src={project.images[currentIdx]} 
            alt={`${project.title} screenshot ${currentIdx + 1}`}
            className="max-w-full max-h-[60vh] object-contain shadow-2xl"
          />
          
          {project.images.length > 1 && (
            <>
              <button 
                onClick={prevImg}
                className="absolute left-4 p-2 bg-black/50 hover:bg-accent-blue/20 rounded-full border border-white/10 text-white transition-all transform hover:scale-110"
              >
                <ChevronLeft size={30} />
              </button>
              <button 
                onClick={nextImg}
                className="absolute right-4 p-2 bg-black/50 hover:bg-accent-blue/20 rounded-full border border-white/10 text-white transition-all transform hover:scale-110"
              >
                <ChevronRight size={30} />
              </button>
            </>
          )}
        </div>

        <div className="p-6 bg-white/5 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-300 text-sm md:max-w-[70%] leading-relaxed">
            {project.description}
          </p>
          <div className="flex gap-4">
            <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-accent-blue font-bold px-4 py-2 glass hover:bg-white/20 transition-all">
              <Github size={18} /> Code
            </a>
            <a href="#" className="flex items-center gap-2 text-sm font-medium bg-accent-blue text-black font-bold px-4 py-2 rounded transition-all hover:shadow-neon">
              <ExternalLink size={18} /> Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-primary/50 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Featured <span className="text-accent-blue">Projects</span></h2>
          <div className="w-20 h-1 bg-neon-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: project.delay, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="glass-card group flex flex-col h-full overflow-hidden"
            >
              <div className="h-56 bg-gradient-to-br from-accent-blue/20 to-accent-cyan/10 relative overflow-hidden flex items-center justify-center cursor-pointer"
                   onClick={() => project.images.length > 0 && setSelectedProject(project)}>
                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] group-hover:bg-primary/5 transition-colors"></div>
                
                {project.images.length > 0 ? (
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                ) : (
                  <div className="relative z-10 p-6 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:scale-110 group-hover:shadow-neon transition-all duration-500">
                      {project.icon}
                    </div>
                  </div>
                )}
                
                {project.images.length > 0 && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <div className="flex items-center gap-2 bg-accent-blue text-black px-4 py-2 rounded-full font-bold shadow-neon scale-75 group-hover:scale-100 transition-transform">
                      <Eye size={20} /> View Project Details
                    </div>
                  </div>
                )}
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-accent-blue transition-colors leading-tight">{project.title}</h3>
                  <span className="px-3 py-1 bg-accent-blue/10 border border-accent-blue/30 rounded-full text-[10px] uppercase font-bold tracking-wider text-accent-blue">
                    {project.tag}
                  </span>
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-accent-blue transition-colors duration-300 group-hover:translate-x-1">
                    <Github size={18} /> Source Code
                  </button>
                  {project.images.length > 0 && (
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 text-sm font-medium text-accent-blue hover:underline transition-colors duration-300 group-hover:translate-x-1"
                    >
                      <Eye size={18} /> Screenshots
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
