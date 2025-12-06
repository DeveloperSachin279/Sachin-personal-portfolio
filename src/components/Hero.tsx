import { motion } from 'motion/react';
import { ArrowDown, Download, Calendar } from 'lucide-react';
import heroImage from 'figma:asset/939e58deabda23185f47a3016773aab5a09e9169.png';
import resumeImage from 'figma:asset/508da967e36a7dcee441e6350fbb64c9fb048aa0.png';
import { useState } from 'react';
import { ResumePreviewModal } from './ResumePreviewModal';

export function Hero() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#cd7f32] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl mb-6 gradient-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Designing and Developing Your Digital Presence.
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I'm Sachin Lodhi, a passionate Web Developer & Portfolio Maker creating responsive, 
              interactive websites for individuals and businesses.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-black text-white rounded-full flex items-center gap-2 hover:bg-[#cd7f32] transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(205, 127, 50, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ArrowDown className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>

              <motion.button
                onClick={() => setIsResumeModalOpen(true)}
                className="group px-8 py-4 bg-white text-black border-2 border-black rounded-full flex items-center gap-2 hover:bg-black hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
                <Download className="group-hover:translate-y-1 transition-transform" size={20} />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square">
              <img
                src={heroImage}
                alt="Sachin Lodhi - Web Developer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <p className="gradient-text mb-2">Building Digital Solutions</p>
              <p className="text-sm text-gray-600">Web Developer & Portfolio Maker</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <ResumePreviewModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        resumeUrl={resumeImage}
      />
    </section>
  );
}