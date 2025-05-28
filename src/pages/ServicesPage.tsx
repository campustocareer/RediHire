import React,{ useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Code, Gamepad2, BarChart3, TrendingUp } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const buttonRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      console.log('Touched!', event);
    };

    buttonRefs.current.forEach((btn) => {
      if (btn) {
        btn.addEventListener('touchstart', handleTouchStart, { passive: false });
      }
    });

    return () => {
      buttonRefs.current.forEach((btn) => {
        if (btn) {
          btn.removeEventListener('touchstart', handleTouchStart);
        }
      });
    };
  }, []);
  const services = [
    {
      id: 'staffing',
      title: 'Staffing',
      description: 'Find the perfect talent for your organization with our comprehensive staffing solutions.',
      icon: <Users className="w-full h-full" />,
      imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: [
        'IT Staffing',
        'Non-IT Staffing',
        'Permanent Staffing',
        'Contract Staffing',
        'HeadHunting',
        'End-to-End Staffing Solutions',
      ],
    },
    {
      id: 'gaming',
      title: 'Gaming',
      description: 'Innovative game development services, including immersive experiences, educational simulations, and AR/VR gaming, tailored for diverse audiences.',
      icon: <Gamepad2 className="w-full h-full" />,
      imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: [
        'Immersive Games',
        'Autistic Games',
        'EdTech Simulations',
        'Mobile Gaming',
        'AR/VR Games',
        'Game Platforms',
      ],
    },
    {
      id: 'web-app-development',
      title: 'Web & App Development',
      description: 'Custom web and mobile applications built with the latest technologies.',
      icon: <Code className="w-full h-full" />,
      imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: [
        'Web Applications',
        'Mobile Apps',
        'E-commerce Solutions',
        'Progressive Web Apps',
        'Custom Software',
      ],
    },
    {
      id: 'digital-transformations',
      title: 'Digital Transformations',
      description: 'Transform your business with innovative digital solutions and strategies.',
      icon: <BarChart3 className="w-full h-full" />,
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: [
        'Business Process Automation',
        'Cloud Migration',
        'Digital Strategy',
        'Legacy System Modernization',
        'Data Analytics',
      ],
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Boost your online presence and reach your target audience with our digital marketing services.',
      icon: <TrendingUp className="w-full h-full" />,
      imageUrl: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: [
        'SEO Optimization',
        'Social Media Marketing',
        'Content Marketing',
        'Email Campaigns',
        'PPC Advertising',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="container relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Our Services
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 text-white max-w-3xl mx-auto"
          >
            Comprehensive technology solutions tailored to meet your business needs
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                } gap-8 items-center`}
              >
                <div className="md:w-1/2">
                  <div className="relative rounded-lg overflow-hidden h-64 md:h-80">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="text-white w-16 h-16">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg
                            className="w-5 h-5 text-primary mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={`/services/${service.id}`}
                    className="btn btn-primary inline-block"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our services can help your business grow and succeed.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;