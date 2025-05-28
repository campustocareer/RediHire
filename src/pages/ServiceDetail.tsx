import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Code, Gamepad2, BarChart3, TrendingUp, CheckCircle, ArrowLeft } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { service } = useParams<{ service: string }>();
  
  const services = {
    'staffing': {
      title: 'Staffing Solutions',
      description: 'Find the perfect talent for your organization with our comprehensive staffing solutions.',
      icon: <Users className="w-full h-full" />,
      imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      longDescription: 'Our staffing solutions are designed to help you find the right talent for your organization. We understand that finding the right people is crucial for your business success. Our team of experienced recruiters works closely with you to understand your requirements and find candidates who not only have the right skills but also fit your company culture.',
      benefits: [
        'Access to a large pool of pre-screened candidates',
        'Reduced time-to-hire and recruitment costs',
        'Flexible staffing options to meet your business needs',
        'Industry-specific expertise and knowledge',
        'Acess to large data of pre-screened freshers',
        'Comprehensive candidate assessment and verification',
      ],
      offerings: [
        {
          title: 'IT Staffing',
          description: 'Hire skilled IT professionals,to drive innovation and ensure the success of your projects.',
          titleClass: 'text-red-500 font-bold',
        },
        {
          title: 'Non-IT Staffing',
          description: 'Find top talent for non-technical roles across various industries.',
        },
        {
          title: 'Permanent Staffing',
          description: 'Recruit full-time employees who align with your company’s goals and culture.',
        },
        {
          title: 'Contract Staffing',
          description: 'Engage professionals on a contractual basis for short-term or project-based needs.',
        },
        {
          title: 'HeadHunting',
          description: 'Source and hire high-caliber professionals for leadership and specialized roles.',
        },
        {
          title: 'End-to-End Staffing Solutions',
          description: 'Comprehensive staffing services, from sourcing to onboarding, tailored to your business needs.',
        },
      ],
    },
    'gaming': {
      title: 'Gaming Solutions',
      description: 'Innovative game development services, including immersive experiences, educational simulations, and AR/VR gaming, tailored for diverse audiences.',
      icon: <Gamepad2 className="w-full h-full" />,
      imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      longDescription: 'We provide cutting-edge gaming solutions, from immersive experiences to educational STEM simulations and autistic-friendly games. Our expertise spans mobile gaming, AR/VR experiences, and custom gaming platforms, ensuring high performance and engagement. With a focus on innovation, inclusivity, and seamless performance, we bring your gaming vision to life across multiple platforms. ',
      benefits: [
        'Expertise in Game Development',
        'Cross-platform compatibility and optimization',
        'Engaging user experience and interface design',
        'Scalable architecture for growing player bases',
        'Customized Gaming Solutions',
        'Ongoing support and maintenance services',
        'Engaging User Experiences ',
      ],
      offerings: [
        {
          "title": "Immersive Games",
          "description": "Create deeply engaging and interactive gaming experiences using cutting-edge technology."
        },
        {
          "title": "Autistic Games",
          "description": "Develop specialized games tailored for neurodivergent learners, supporting K-5 to 10th grade students with engaging and accessible gameplay."
        },
        {
          "title": "EdTech Simulations",
          "description": "Deliver interactive STEM learning experiences through educational simulations for K-5 and 6th to 12th grade students."
        },
        {
          "title": "Mobile Gaming",
          "description": "Build high-performance and engaging games optimized for iOS and Android platforms."
        },
        {
          "title": "AR/VR Games",
          "description": "Create augmented and virtual reality games that offer immersive and innovative experiences."
        },
        {
          "title": "Gaming Platforms",
          "description": "Develop and deploy custom gaming platforms and communities to enhance player engagement."
        },
      ],
    },
    'web-app-development': {
      title: 'Web & App Development',
      description: 'Custom web and mobile applications built with the latest technologies.',
      icon: <Code className="w-full h-full" />,
      imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      longDescription: 'Our web and app development services focus on creating custom solutions that address your specific business needs. We use the latest technologies and best practices to build scalable, secure, and user-friendly applications. Whether you need a simple website or a complex enterprise application, our team has the expertise to deliver high-quality solutions on time and within budget.',
      benefits: [
        'Custom solutions tailored to your specific requirements',
        'Responsive design for optimal user experience across devices',
        'Scalable architecture to accommodate growth',
        'Secure development practices and regular security updates',
        'Ongoing maintenance and support services',
      ],
      offerings: [
        {
          title: 'Web Applications',
          description: 'Develop custom web applications with modern frameworks and technologies.',
        },
        {
          title: 'Mobile Apps',
          description: 'Create native and cross-platform mobile applications for iOS and Android.',
        },
        {
          title: 'E-commerce Solutions',
          description: 'Build online stores and marketplaces with secure payment processing.',
        },
        {
          title: 'Progressive Web Apps',
          description: 'Develop fast, reliable, and engaging web applications that work offline.',
        },
        {
          title: 'Custom Software',
          description: 'Create bespoke software solutions to address your unique business challenges.',
        },
      ],
    },
    'digital-transformations': {
      title: 'Digital Transformations',
      description: 'Transform your business with innovative digital solutions and strategies.',
      icon: <BarChart3 className="w-full h-full" />,
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      longDescription: 'Our digital transformation services help businesses adapt to the rapidly changing digital landscape. We work with you to identify opportunities for improvement and implement solutions that enhance efficiency, reduce costs, and improve customer experience. Our holistic approach ensures that your digital transformation journey is smooth and successful.',
      benefits: [
        'Improved operational efficiency and reduced costs',
        'Enhanced customer experience and engagement',
        'Data-driven decision making capabilities',
        'Increased agility and adaptability to market changes',
        'Competitive advantage through innovation',
      ],
      offerings: [
        {
          title: 'Business Process Automation',
          description: 'Automate repetitive tasks and workflows to improve efficiency and reduce errors.',
        },
        {
          title: 'Cloud Migration',
          description: 'Move your infrastructure and applications to the cloud for improved scalability and cost-efficiency.',
        },
        {
          title: 'Digital Strategy',
          description: 'Develop a comprehensive digital strategy aligned with your business goals.',
        },
        {
          title: 'Legacy System Modernization',
          description: 'Update and transform your legacy systems to modern, scalable architectures.',
        },
        {
          title: 'Data Analytics',
          description: 'Implement data analytics solutions to gain insights and make informed decisions.',
        },
      ],
    },
    'digital-marketing': {
      title: 'Digital Marketing',
      description: 'Boost your online presence and reach your target audience with our digital marketing services.',
      icon: <TrendingUp className="w-full h-full" />,
      imageUrl: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      longDescription: 'Our digital marketing services help businesses increase their online visibility, attract more customers, and grow their revenue. We use data-driven strategies and the latest marketing tools to create campaigns that deliver results. Our team of marketing experts works closely with you to understand your business goals and target audience, ensuring that our marketing efforts are aligned with your objectives.',
      benefits: [
        'Increased online visibility and brand awareness',
        'Higher website traffic and conversion rates',
        'Better ROI compared to traditional marketing',
        'Targeted marketing to reach your ideal customers',
        'Data-driven insights to optimize marketing strategies',
      ],
      offerings: [
        {
          title: 'SEO Optimization',
          description: 'Improve your website\'s visibility in search engine results to attract more organic traffic.',
        },
        {
          title: 'Social Media Marketing',
          description: 'Build and engage with your audience on social media platforms to increase brand awareness.',
        },
        {
          title: 'Content Marketing',
          description: 'Create valuable content that attracts and engages your target audience.',
        },
        {
          title: 'Email Campaigns',
          description: 'Design and implement effective email marketing campaigns to nurture leads and drive conversions.',
        },
        {
          title: 'PPC Advertising',
          description: 'Run targeted pay-per-click advertising campaigns to drive immediate traffic and conversions.',
        },
      ],
    },
  };
  
  const currentService = service ? services[service as keyof typeof services] : null;
  
  if (!currentService) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="mb-8">The service you're looking for doesn't exist or has been moved.</p>
        <Link to="/services" className="btn btn-primary">
          View All Services
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="container relative z-10 px-4">
          <Link to="/services" className="inline-flex items-center text-white mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-2/3 mb-8 md:mb-0 md:pr-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {currentService.title}
              </h1>
              
              <p className="text-xl mb-8 text-white">
                {currentService.description}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/3 flex justify-center"
            >
              <div className="w-32 h-32 bg-white bg-opacity-10 rounded-full flex items-center justify-center text-white p-6">
                {currentService.icon}
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
                  src={currentService.imageUrl}
                  alt={currentService.title}
                  className="w-full h-80 object-cover rounded-lg mb-8"
                />
                
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-600 mb-8">
                  {currentService.longDescription}
                </p>
                
                <h2 className="text-2xl font-bold mb-4">Our Offerings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {currentService.offerings.map((offering, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
                    >
                      <h3 className="text-xl font-bold mb-2 "style={{ color: '#FF1717' }}>{offering.title}</h3>
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
                  {currentService.benefits.map((benefit, index) => (
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
              Contact us to discuss how our {currentService.title} can help your business grow and succeed.
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

export default ServiceDetail;