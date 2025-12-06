import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Sparkles, Users } from 'lucide-react';

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive, fast, and modern websites using the latest technologies and best practices.',
      features: ['Custom Development', 'Responsive Design', 'Performance Optimization'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Palette,
      title: 'Portfolio Design',
      description: 'Creating stunning portfolio websites that showcase your work and help you stand out from the crowd.',
      features: ['Creative Design', 'Personal Branding', 'Interactive Elements'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Sparkles,
      title: 'UI/UX Customization',
      description: 'Designing beautiful and intuitive user interfaces that provide exceptional user experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Users,
      title: 'Drop Service Provider',
      description: 'Connecting you with skilled professionals for all your creative and technical needs.',
      features: ['Video & Photo Editing', 'Music & Song Production', 'Content Writing Services'],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="services" className="py-20 px-6 lg:px-8 bg-[#faf9f7] relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-black rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#cd7f32] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl gradient-text mb-6">What I Offer</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-[#cd7f32] mx-auto rounded-full" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Comprehensive web development services tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#cd7f32]"
            >
              <motion.div
                className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-shadow duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon className="text-white" size={28} />
              </motion.div>

              <h3 className="text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#cd7f32]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.div
                className="mt-6 pt-6 border-t border-gray-200"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <a
                  href="#contact"
                  className="text-[#cd7f32] hover:text-black transition-colors duration-300 flex items-center gap-2 group/link"
                >
                  Get Started
                  <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center"
        >
          <h3 className="text-3xl gradient-text mb-4">Need a Custom Solution?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I offer custom web development solutions tailored to your specific requirements. 
            Let's discuss your project and bring your vision to life.
          </p>
          <motion.button
            onClick={() => handleScroll('#contact')}
            className="px-8 py-4 bg-black text-white rounded-full hover:bg-[#cd7f32] transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}