import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Our Location',
      details: 'Plot no:16, Road no:4, RTC Colony, L.B nagar, Hyderabad , Telangana,500074.',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Number',
      details: '+91 8977787091',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Address',
      details: 'sales@redihire.com',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      details: 'Monday - Friday: 9AM - 6PM',
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
            Contact Us
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 text-white max-w-3xl mx-auto"
          >
            Get in touch with our team to discuss how we can help your business
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.details}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you! Fill out the form and our team will get back to you as soon as possible. Whether you have a question about our services, need a quote, or want to discuss a project, we're here to help.
              </p>
              
              <ContactForm />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7616.524705278044!2d78.552756!3d17.3511044!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1740773410850!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Our Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and processes
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-xl font-bold mb-2">What services do you offer?</h3>
              <p className="text-gray-600">
                We offer a wide range of technology services including staffing, gaming, web and app development, digital transformations, and digital marketing. Each service is tailored to meet the specific needs of our clients.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-xl font-bold mb-2">How do I request a quote for my project?</h3>
              <p className="text-gray-600">
                You can request a quote by filling out the contact form on this page or by calling our office directly. We'll get back to you within 24 hours to discuss your project requirements and provide a detailed quote.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-xl font-bold mb-2">Do you work with clients internationally?</h3>
              <p className="text-gray-600">
                Yes, we work with clients globally. Our team is experienced in collaborating remotely and we have clients across North America, Europe, Asia, and Australia. We use various tools and processes to ensure smooth communication and project delivery regardless of location.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-xl font-bold mb-2">What is your typical project timeline?</h3>
              <p className="text-gray-600">
                Project timelines vary depending on the scope and complexity of the project. During our initial consultation, we'll discuss your requirements and provide an estimated timeline. We pride ourselves on delivering projects on time and within budget.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">Do you provide ongoing support after project completion?</h3>
              <p className="text-gray-600">
                Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally after launch. Our team is available to provide technical support, updates, and enhancements as needed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;