import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import uiuxImage from 'figma:asset/0b2b2a254bfdccd0c155ce04cffd0575b7fdca76.png';

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce website with shopping cart, payment integration, and responsive design.',
      image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2NDg3NTcwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Tailwind', 'Node.js'],
      liveUrl: 'https://gadget-store-in.store.shoopy.in/',
    },
    {
      title: 'Portfolio Website',
      description: 'Creative portfolio with smooth animations and modern design for a creative professional.',
      image: 'https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2NDk3MjM3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://renewed-mindset-656459.framer.app/',
    },
    {
      title: 'Web Development Tool',
      description: 'Interactive tool for developers with modern UI and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1762340273799-1542580a069a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHRvb2x8ZW58MXx8fHwxNzY0OTY4MzU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'TypeScript', 'API'],
      liveUrl: 'https://learnwellai-studybuddy.netlify.app/',
    },
    {
      title: 'Responsive Dashboard',
      description: 'Analytics dashboard with real-time data visualization and responsive layout.',
      image: 'https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNwb25zaXZlJTIwd2ViJTIwZGVzaWdufGVufDF8fHx8MTc2MTQ3NTM4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Charts', 'Tailwind'],
      liveUrl: 'https://demo.nextadmin.co',
    },
    {
      title: 'UI/UX Design System',
      description: 'Complete design system with reusable components and style guide.',
      image: uiuxImage,
      tags: ['Figma', 'CSS', 'React'],
      liveUrl: uiuxImage,
    },
    {
      title: 'Business Landing Page',
      description: 'Clean and professional landing page with conversion-focused design.',
      image: 'https://images.unsplash.com/photo-1632246030676-6229211f2907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxhbmRpbmclMjBwYWdlfGVufDF8fHx8MTc2NDk2NjY0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['HTML', 'Tailwind', 'SEO'],
      liveUrl: 'https://demo.nextmerce.com',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#cd7f32] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl gradient-text mb-6">My Work & Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-[#cd7f32] mx-auto rounded-full" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            A showcase of my recent work and creative projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4"
                >
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-[#cd7f32] hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-[#faf9f7] text-gray-700 rounded-full border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}