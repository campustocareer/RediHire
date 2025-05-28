import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Building, Rocket, CheckCircle, ArrowLeft } from 'lucide-react';

const SolutionDetail: React.FC = () => {
  const { solution } = useParams<{ solution: string }>();
  
  const solutions = {
    'enterprise': {
      title: 'Enterprise Solutions',
      description: 'Comprehensive technology solutions designed for large organizations with complex needs.',
      icon: <Building2 className="w-full h-full" />,
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      longDescription: 'Our enterprise solutions are designed to address the complex needs of large organizations. We understand that enterprises require robust, scalable, and secure solutions that can handle large volumes of data and users. Our team of experts works closely with your organization to understand your specific requirements and deliver solutions that drive efficiency, productivity, and growth.',
      benefits: [
        'Streamlined business processes and improved efficiency',
        'Enhanced data security and compliance',
        'Scalable solutions that grow with your business',
        'Integrated systems for better data flow and decision-making',
        'Reduced operational costs and improved ROI',
      ],
      offerings: [
        {
          title: 'Enterprise Resource Planning (ERP)',
          description: 'Integrate and manage your core business processes with our comprehensive ERP solutions.',
        },
        {
          title: 'Customer Relationship Management (CRM)',
          description: 'Manage customer interactions and relationships to improve customer satisfaction and retention.',
        },
        {
          title: 'Business Intelligence & Analytics',
          description: 'Gain insights from your data to make informed business decisions and identify opportunities.',
        },
        {
          title: 'Cloud Infrastructure',
          description: 'Leverage the power of cloud computing for improved scalability, reliability, and cost-efficiency.',
        },
        {
          title: 'Cybersecurity Solutions',
          description: 'Protect your organization from cyber threats with our comprehensive security solutions.',
        },
      ],
    },
    'small-business': {
      title: 'Small Business Solutions',
      description: 'Affordable and scalable solutions tailored for small to medium-sized businesses.',
      icon: <Building className="w-full h-full" />,
      imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      longDescription: 'Our small business solutions are designed to help small to medium-sized businesses leverage technology to grow and compete effectively. We understand that small businesses have unique challenges and limited resources. That\'s why we offer affordable, scalable solutions that provide the functionality you need without unnecessary complexity or cost.',
      benefits: [
        'Affordable solutions with flexible pricing models',
        'Quick implementation and minimal disruption',
        'Scalable solutions that grow with your business',
        'Improved efficiency and productivity',
        'Enhanced customer experience and satisfaction',
      ],
      offerings: [
        {
          title: 'Business Management Software',
          description: 'Streamline your operations with integrated software for accounting, inventory, and more.',
        },
        {
          title: 'E-commerce Solutions',
          description: 'Sell your products online with our user-friendly and secure e-commerce platforms.',
        },
        {
          title: 'Digital Marketing',
          description: 'Reach more customers and grow your business with our digital marketing services.',
        },
        {
          title: 'IT Support & Management',
          description: 'Get reliable IT support and management services to keep your business running smoothly.',
        },
        {
          title: 'Payment Processing',
          description: 'Accept payments securely and efficiently with our payment processing solutions.',
        },
      ],
    },
    'startup': {
      title: 'Startup Solutions',
      description: 'Innovative and cost-effective solutions to help startups grow and scale quickly.',
      icon: <Rocket className="w-full h-full" />,
      imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      longDescription: 'Our startup solutions are designed to help new businesses launch and scale quickly. We understand that startups need to move fast, validate their ideas, and adapt to market feedback. Our team of experts works closely with founders to develop and implement solutions that enable rapid growth while keeping costs under control.',
      benefits: [
        'Rapid development and deployment',
        'Cost-effective solutions with flexible pricing',
        'Scalable architecture to accommodate growth',
        'Technical expertise and guidance',
        'Focus on core business while we handle the technology',
      ],
      offerings: [
        {
          title: 'MVP Development',
          description: 'Quickly build and launch a Minimum Viable Product to validate your idea and attract investors.',
        },
        {
          title: 'Scalable Infrastructure',
          description: 'Build a technical foundation that can scale as your business grows.',
        },
        {
          title: 'Growth Hacking',
          description: 'Implement data-driven strategies to acquire and retain users quickly and cost-effectively.',
        },
        {
          title: 'Investor Pitch Preparation',
          description: 'Get help preparing your technical pitch and demo for investor presentations.',
        },
        {
          title: 'Agile Development',
          description: 'Adopt agile methodologies to quickly respond to market feedback and changing requirements.',
        },
      ],
    },
  };
  
  const currentSolution = solution ? solutions[solution as keyof typeof solutions] : null;
  
  if (!currentSolution) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Solution Not Found</h1>
        <p className="mb-8">The solution you're looking for doesn't exist or has been moved.</p>
        <Link to="/solutions" className="btn btn-primary">
          View All Solutions
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="container relative z-10 px-4">
          <Link to="/solutions" className="inline-flex items-center text-white mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Solutions
          </Link>
          
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-2/3 mb-8 md:mb-0 md:pr-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {currentSolution.title}
              </h1>
              
              <p className="text-xl mb-8 text-white">
                {currentSolution.description}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/3 flex justify-center"
            >
              <div className="w-32 h-32 bg-white bg-opacity-10 rounded-full flex items-center justify-center text-white p-6">
                {currentSolution.icon}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={currentSolution.imageUrl}
                  alt={currentSolution.title}
                  className="w-full h-80 object-cover rounded-lg mb-8"
                />
                
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-600 mb-8">
                  {currentSolution.longDescription}
                </p>
                
                <h2 className="text-2xl font-bold mb-4">Our Offerings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {currentSolution.offerings.map((offering, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
                    >
                      <h3 className="text-xl font-bold mb-2">{offering.title}</h3>
                      <p className="text-gray-600">{offering.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-100 rounded-lg p-6 sticky top-24"
              >
                <h2 className="text-2xl font-bold mb-4">Benefits</h2>
                <ul className="space-y-3 mb-8">
                  {currentSolution.benefits.map((benefit, index) => (
                    <li key={index} className="flex">
                      <CheckCircle className="w-6 h-6 text-primary mr-2 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact" className="btn btn-primary w-full text-center">
                  Get Started
                </Link>
              </motion.div>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our {currentSolution.title} can help your business grow and succeed.
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

export default SolutionDetail;