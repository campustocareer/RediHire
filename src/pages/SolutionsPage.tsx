import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, Building, Rocket } from 'lucide-react';

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      id: 'enterprise',
      title: 'Enterprise Solutions',
      description: 'Comprehensive technology solutions designed for large organizations with complex needs.',
      icon: <Building2 className="w-full h-full" />,
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: [
        'Enterprise Resource Planning (ERP)',
        'Customer Relationship Management (CRM)',
        'Business Intelligence & Analytics',
        'Cloud Infrastructure',
        'Cybersecurity Solutions',
      ],
    },
    {
      id: 'small-business',
      title: 'Small Business Solutions',
      description: 'Affordable and scalable solutions tailored for small to medium-sized businesses.',
      icon: <Building className="w-full h-full" />,
      imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: [
        'Business Management Software',
        'E-commerce Solutions',
        'Digital Marketing',
        'IT Support & Management',
        'Payment Processing',
      ],
    },
    {
      id: 'startup',
      title: 'Startup Solutions',
      description: 'Innovative and cost-effective solutions to help startups grow and scale quickly.',
      icon: <Rocket className="w-full h-full" />,
      imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      features: [
        'MVP Development',
        'Scalable Infrastructure',
        'Growth Hacking',
        'Investor Pitch Preparation',
        'Agile Development',
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
            Our Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 text-white max-w-3xl mx-auto"
          >
            Tailored technology solutions to address your specific business challenges
          </motion.p>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-12">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
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
                      src={solution.imageUrl}
                      alt={solution.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="text-white w-16 h-16">
                        {solution.icon}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">{solution.title}</h2>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {solution.features.map((feature, i) => (
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
                    to={`/solutions/${solution.id}`}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Find the Right Solution for Your Business</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our solutions can address your specific business challenges.
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

export default SolutionsPage;