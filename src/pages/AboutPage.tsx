import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, ThumbsUp ,Lightbulb, ShieldCheck} from 'lucide-react';
import StatCounter from '../components/StatCounter';


const AboutPage: React.FC = () => {
  // Stats data
  const stats = [
    {
      value: 10,
      label: 'Clients Worldwide',
      icon: <Users className="w-full h-full" />,
    },
    {
      value: 5,
      label: 'Products Delivered',
      icon: <Award className="w-full h-full" />,
    },
    {
      value: 24,
      label: '24/7 Support',
      icon: <Clock className="w-full h-full" />,
      suffix: '/7',
    },
    {
      value: 99,
      label: 'Satisfaction Rate',
      icon: <ThumbsUp className="w-full h-full" />,
      suffix: '%',
    },
  ];

  // Team members data
  const teamMembers = [

    {
      name: "Charan",
      role: "Board Member",
      image: "/Logo/profile.webp", // Ensure this matches the correct image filename
      bio: " "
    },
    {
      name: "Chandra",
      role: "Board Member",
      image: "/Logo/C.png", // Ensure this matches the correct image filename
      bio: " "
    },
    {
      name: "Mahesh Lakshman",
      role: "Board Member",
      image: "/Logo/M.png", // Ensure this matches the correct image filename
      bio: " "
    },
    {
      name: "Rohit Sai",
      role: "Board Member",
      image: "/Logo/SA.png", // Ensure this matches the correct image filename
      bio: " "
    }
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
            About Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 text-white max-w-3xl mx-auto"
          >
            Learn more about our company, our mission, and the team behind our success
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2024, REDIHIRE was built with a vision to bridge the gap between talent and opportunity. We specialize in end-to-end employment solutions, career guidance, and complete project development across IT and non-IT sectors.              </p>
              <p className="text-gray-600 mb-4">
                At REDIHIRE, we not only connect individuals with the right career paths but also undertake full-scale project development, ensuring seamless execution from ideation to delivery. Our expertise extends to crafting cutting-edge games, leveraging the latest technology to create immersive and innovative experiences.              </p>
              <p className="text-gray-600 mb-4">
                Driven by a passion for excellence, we are committed to empowering businesses and individuals alike, shaping the future with strategic hiring, advanced development solutions, and groundbreaking game technology.              </p>
              <p className="text-gray-600 mb-4">
                Join us in redefining possibilities. </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Our team"
                className="rounded-lg shadow-lg"
              />

            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mb-6">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative technology solutions that drive growth, improve efficiency, and create competitive advantage. We are committed to delivering exceptional value to our clients through our expertise, dedication, and continuous innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mb-6">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the global leader in providing transformative technology solutions that enable businesses to thrive in the digital age. We envision a world where technology is a catalyst for positive change, helping businesses of all sizes achieve their full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Numbers that speak for our success and commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCounter
                key={index}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section
      <section className="py-16 bg-gray-100">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals who drive our vision and lead our company to success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-gray-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="text-xl font-bold mt-4">{member.name}</h3>
              {member.role && <p className="text-primary font-medium mb-2">{member.role}</p>}
              <p className="text-gray-600">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section> */}
    <section className="py-16 bg-gray-100">
  <div className="container max-w-4xl mx-auto text-center px-4">
    {/* Title */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our Team</h2>
    </motion.div>

    {/* Description Box */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md p-8 text-left text-gray-700 max-w-3xl mx-auto"
    >
      <p className="mb-6 text-lg leading-relaxed">
        Our team is composed of seasoned professionals and passionate experts dedicated to driving innovation and excellence. 
        With diverse backgrounds in technology, business strategy, and customer experience, we collaborate to deliver impactful solutions that empower our clients and community.
      </p>
      <p className="text-base leading-relaxed">
        We value integrity, creativity, and continuous learning. Our team fosters a culture of open communication and collaboration, ensuring every challenge is met with innovative thinking and a client-first mindset.
      </p>
      <p className="mt-6 text-base leading-relaxed">
        Together, we strive to create meaningful experiences and build a company that stands at the forefront of industry trends while staying true to our core mission and values.
      </p>
    </motion.div>
        {/* Icons Row */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex justify-center gap-8 mb-12 mt-12"
    >
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-28">
        <Users className="text-primary" size={48} />
        <p className="mt-4 text-gray-700 font-semibold">Teamwork</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-28">
        <Lightbulb className="text-primary" size={48} />
        <p className="mt-4 text-gray-700 font-semibold">Innovation</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-28">
        <ShieldCheck className="text-primary" size={48} />
        <p className="mt-4 text-gray-700 font-semibold">Integrity</p>
      </div>
    </motion.div>
  </div>
</section>



      {/* Values Section */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our actions and decisions every day
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mb-6">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-600">
              We are committed to delivering the highest quality in everything we do, continuously striving to exceed expectations and set new industry standards. While embracing innovation, we also preserve traditional values, ensuring integrity, trust, and excellence in every aspect of our work.              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mb-6">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
              We foster a culture of innovation, constantly exploring new ideas and technologies to drive progress. By challenging the status quo and embracing creativity, we develop groundbreaking solutions that solve complex challenges. Our forward-thinking approach keeps us ahead in a fast-evolving world. </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary mb-6">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Collaboration</h3>
              <p className="text-gray-600">
              We believe in the power of teamwork and collaboration, bringing together like-minded individuals to drive success. By working closely with our clients and partners, we harness collective expertise and effort to achieve shared goals and create lasting value.              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary bg-opacity-10">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Reach out to us today to discover how our innovative technology solutions can drive your business growth and success.            </p>
            <a href="/contact" className="btn btn-primary">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;