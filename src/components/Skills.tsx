import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Smartphone, Zap, Database, Layout } from 'lucide-react';

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skills = [
    { 
      name: 'HTML & CSS', 
      level: 95, 
      icon: Code2,
      expertise: 'Expert',
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'JavaScript', 
      level: 90, 
      icon: Zap,
      expertise: 'Expert',
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'React', 
      level: 85, 
      icon: Layout,
      expertise: 'Advanced',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Tailwind CSS', 
      level: 92, 
      icon: Palette,
      expertise: 'Expert',
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      name: 'Python', 
      level: 80, 
      icon: Database,
      expertise: 'Intermediate',
      color: 'from-blue-600 to-indigo-600'
    },
    { 
      name: 'Responsive Design', 
      level: 95, 
      icon: Smartphone,
      expertise: 'Expert',
      color: 'from-purple-500 to-pink-500'
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 lg:px-8 bg-[#faf9f7] relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-black rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#cd7f32] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl gradient-text mb-6">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-[#cd7f32] mx-auto rounded-full" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#cd7f32]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`bg-gradient-to-br ${skill.color} p-3 rounded-xl text-white shadow-md`}>
                    <skill.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-gray-800">{skill.name}</h3>
                    <span className="text-sm text-[#cd7f32]">{skill.expertise}</span>
                  </div>
                </div>
              </div>

              <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                />
              </div>

              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-500">Proficiency</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="gradient-text"
                >
                  {skill.level}%
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
