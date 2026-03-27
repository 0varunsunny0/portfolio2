import React from 'react';
import profileImg from '../assets/profile.jpg';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-primary relative z-10">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border border-white/10 overflow-hidden glass p-0.5">
            <img src={profileImg} alt="Varun" className="w-full h-full object-cover rounded-full" />
          </div>
          <p className="text-gray-500 font-medium">
            © 2026 <span className="text-accent-blue">Varun Teja</span> | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
