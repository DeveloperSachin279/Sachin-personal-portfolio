import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Coffee } from 'lucide-react';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { icon: Award, value: '50+', label: 'Projects Completed' },
    { icon: Users, value: '40+', label: 'Happy Clients' },
    { icon: Coffee, value: '500+', label: 'Cups of Coffee' },
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-white relative">
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#cd7f32] rounded-full blur-3xl" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl gradient-text mb-6">Who I Am</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-[#cd7f32] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I specialize in creating modern, user-friendly websites and digital portfolios that help 
              individuals and businesses build a powerful online presence. From e-commerce stores to 
              personal portfolios, I transform ideas into interactive, result-driven experiences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Alongside web development, I provide drop services including video editing, voice-overs, 
              content creation, and graphic design — offering clients complete digital solutions in one 
              place. I'm always learning new tools and technologies to deliver creative, high-performance 
              results that help my clients grow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-[#faf9f7] rounded-2xl p-8 border border-gray-200 hover:border-[#cd7f32] transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <stat.icon className="text-[#cd7f32]" size={32} />
                  </div>
                  <div>
                    <p className="gradient-text mb-1">{stat.value}</p>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}