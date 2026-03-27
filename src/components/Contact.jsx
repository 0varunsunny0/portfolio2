import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-primary/50 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Contact <span className="text-accent-blue">Me</span></h2>
          <div className="w-20 h-1 bg-neon-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
                I'm currently looking for internships and new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-black transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email</p>
                  <a href="mailto:varuntejsunny075@gmail.com" className="text-lg font-semibold hover:text-accent-blue transition-colors">varuntejsunny075@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-black transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Phone</p>
                  <a href="tel:+919347987004" className="text-lg font-semibold hover:text-accent-blue transition-colors">+91 9347987004</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-black transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Location</p>
                  <p className="text-lg font-semibold">Telangana, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/0varunsunny0" target="_blank" className="w-10 h-10 glass flex items-center justify-center hover:bg-accent-blue hover:text-black transition-all">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/varun-tej-sunny-018969352" target="_blank" className="w-10 h-10 glass flex items-center justify-center hover:bg-accent-blue hover:text-black transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 border-white/10"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="How can I help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                ></textarea>
              </div>
              <button 
                type="button"
                className="neon-button w-full flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
