import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ParticleBackground from '../components/ParticleBackground';
import ServiceCard from '../components/ServiceCard';
import FeatureCard from '../components/FeatureCard';
import StatCounter from '../components/StatCounter';
import TestimonialCard from '../components/TestimonialCard';
import LocationCard from '../components/LocationCard';
import {
  Users, Code, Gamepad2, BarChart3, Cog, Zap, DollarSign,
  BarChart, Shield, Clock, Users2, Award, ThumbsUp
} from 'lucide-react';

const HomePage: React.FC = () => {
  // Services data
  const services = [
    {
      title: 'Staffing',
      description: 'Find the perfect talent for your organization with our comprehensive staffing solutions.',
      icon: <Users className="w-full h-full" />,
      imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '/services/staffing',
    },
    {
      title: 'Gaming',
      description: 'Cutting-edge gaming solutions and development services for immersive experiences.',
      icon: <Gamepad2 className="w-full h-full" />,
      imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '/services/gaming',
    },
    {
      title: 'Web & App Development',
      description: 'Custom web and mobile applications built with the latest technologies.',
      icon: <Code className="w-full h-full" />,
      imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '/services/web-app-development',
    },
    {
      title: 'Digital Transformations',
      description: 'Transform your business with innovative digital solutions and strategies.',
      icon: <BarChart3 className="w-full h-full" />,
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '/services/digital-transformations',
    },
  ];

  // Features data
  const features = [
    {
      id: 1,
      title: 'Achieve Faster Growth',
      description: ' Unlock your company’s potential with strategic solutions.',
      icon: <Zap className="w-full h-full" />,
      animation: {
        type: 'pulse',
        duration: 2,
      },
    },
    {
      id: 2,
      title: 'Minimize Cost',
      description: 'Optimize your operations and reduce costs with our efficient solutions.',
      icon: <DollarSign className="w-full h-full" />,
      animation: {
        type: 'bounce',
        duration: 2.5,
      },
    },
    {
      id: 3,
      title: 'Maximize Output',
      description: 'Increase productivity and output with our streamlined processes.',
      icon: <BarChart className="w-full h-full" />,
      animation: {
        type: 'rise',
        duration: 3,
      },
    },
    {
      id: 4,
      title: 'Streamline Business',
      description: 'Simplify your business operations with our integrated solutions.',
      icon: <Cog className="w-full h-full" />,
      animation: {
        type: 'rotate',
        duration: 8,
      },
    },
    {
      id: 5,
      title: 'Increase Business Process',
      description: 'Enhance your business processes with our advanced technologies.',
      icon: <BarChart3 className="w-full h-full" />,
      animation: {
        type: 'rise',
        duration: 2.5,
      },
    },
    {
      id: 6,
      title: 'Enhance Security',
      description: 'Protect your business with our comprehensive security solutions.',
      icon: <Shield className="w-full h-full" />,
      animation: {
        type: 'pulse',
        duration: 3,
      },
    },
  ];

  // Stats data
  const stats = [
    {
      value: 10,
      label: 'Clients Worldwide',
      icon: <Users2 className="w-full h-full" />,
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

  // Testimonials data
  const testimonials = [
    {
      name: 'Arjun Mehta',
      role: 'CTO',
      company: 'Neora Technologies',
      testimonial:
        'Working with RediHire has been a game-changer for our business. Their expertise in digital transformation helped us optimize our operations and boost efficiency.',
      rating: 5,
      imageUrl: '/Logo/Profile.png', // Local image
    },
    {
      name: 'Priya Sharma',
      role: 'CEO',
      company: 'Enith Solutions',
      testimonial:
        'The team at RediHire delivered our web platform ahead of schedule with exceptional quality. Their commitment to innovation and client success is unmatched.',
      rating: 5,
      imageUrl: '/Logo/Profile.png', // Local image
    },
    {
      name: 'Ravi Verma',
      role: 'Product Manager',
      company: 'Infovi Labs',
      testimonial:
        "RediHire's staffing solutions helped us find the right talent for our development team. Their thorough screening process ensured we got the perfect candidates.",
      rating: 4,
      imageUrl: '/Logo/Profile.png', // Local image
    },
    {
      name: 'Neha Iyer',
      role: 'HR Director',
      company: 'Quant Dynamics',
      testimonial:
        'RediHire’s hiring solutions have significantly improved our recruitment process. Their strategic approach helped us onboard top-tier professionals seamlessly.',
      rating: 5,
      imageUrl: '/Logo/Profile.png', // Local image
    },
    {
      name: 'Vikram Reddy',
      role: 'Head of Operations',
      company: 'Astobit Systems',
      testimonial:
        'Partnering with RediHire has been one of our best decisions. Their project management expertise ensured timely delivery of our critical IT solutions.',
      rating: 5,
      imageUrl: '/Logo/Profile.png', // Local image
    },
  ];

  // Locations data
  const locations = [
    {
      name: 'Hyderabad',
      imageUrl: '/Logo/hitex.png',
    },
    {
      name: 'Mangalagiri',
      imageUrl: '/Logo/Krishna.png',
    },
    {
      name: 'USA',
      imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];

  // Create a duplicate set of features for the infinite carousel effect
  const duplicatedFeatures = [...features, ...features, ...features];
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [featureWidth, setFeatureWidth] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  // Calculate carousel dimensions on mount and window resize
  useEffect(() => {
    const updateDimensions = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        setCarouselWidth(containerWidth);

        // Determine number of visible items based on screen width
        let itemsToShow = 4; // Default for desktop

        if (window.innerWidth < 640) {
          itemsToShow = 1; // Mobile
        } else if (window.innerWidth < 1024) {
          itemsToShow = 2; // Tablet
        } else if (window.innerWidth < 1280) {
          itemsToShow = 3; // Small desktop
        }

        setVisibleItems(itemsToShow);

        // Calculate the width of each feature card with some gap between them
        const cardWidth = (containerWidth / itemsToShow) - 16; // 16px for gap
        setFeatureWidth(cardWidth);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Animation for the infinite carousel
  const carouselVariants = {
    animate: {
      x: [0, -featureWidth * features.length],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30, // Slower for better readability
          ease: "linear",
        },
      },
    },
  };

  // Get animation style based on feature animation type
  const getAnimationStyle = (animationType: string, duration: number) => {
    switch (animationType) {
      case 'rotate':
        return {
          animate: { rotate: 360 },
          transition: { repeat: Infinity, duration, ease: "linear" }
        };
      case 'pulse':
        return {
          animate: { scale: [1, 1.2, 1] },
          transition: { repeat: Infinity, duration, ease: "easeInOut" }
        };
      case 'bounce':
        return {
          animate: { y: [0, -10, 0] },
          transition: { repeat: Infinity, duration, ease: "easeInOut" }
        };
      case 'rise':
        return {
          animate: { y: [0, -5, 0], opacity: [0.8, 1, 0.8] },
          transition: { repeat: Infinity, duration, ease: "easeInOut" }
        };
      default:
        return {};
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />

        <div className="container relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-4xl font-bold mb-8 text-black"
          >
            <span className="text-primary">Redi</span>hire – Your Partner in Talent, Technology & Innovation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl mb-8 text-black max-w-3xl mx-auto"
          >
            Empowering businesses with end-to-end employment solutions, project development, and cutting-edge gaming innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#services"
              className="btn btn-primary mr-4"
            >
              Our Services
            </a>
            <a
              href="contact"
              className="btn btn-outline text-white border-white hover:bg-white hover:text-primary"
            >
              Get Started
            </a>
          </motion.div>
        </div>

        <div className="absolute inset-0 bg-white opacity-10 z-0"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-gray-100">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Provide</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Innovative technology solutions designed to align with your business needs and accelerate growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                imageUrl={service.imageUrl}
                link={service.link}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Clients Carousel Section */}
      <section className="section bg-transparent">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Clients</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by forward-thinking companies worldwide
            </p>
          </motion.div>

          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={4000}
            loop={true}
            grabCursor={true}
            slidesPerView={5}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 20 },
              640: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 5, spaceBetween: 40 },
            }}
            className="w-full"
          >
            {[
              { logo: "/Logo/Clients/connectraz.png" },
              { logo: "/Logo/Clients/awign.png" },
              { logo: "/Logo/Clients/malayaj.png" },
              { logo: "/Logo/Clients/cbspl.png" },
              { logo: "/Logo/Clients/quicksilver.png" },
              { logo: "/Logo/Clients/kcs.png" },
              { logo: "/Logo/Clients/dncs.png" },
            ].map((client, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="block cursor-pointer"
                >
                  <img
                    src={client.logo}
                    alt={`Client ${index}`}
                    className="h-20 sm:h-24 object-contain opacity-80 hover:opacity-100 transition duration-300 ease-in-out"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Features Section - Infinite Horizontal Carousel */}
      <section className="section overflow-hidden">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solving Challenges, Creating Opportunities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our expertise ensures seamless solutions that turn challenges into business success.
            </p>
          </motion.div>

          {/* Mobile view: Use Swiper for better mobile experience */}
          <div className="block md:hidden">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              className="pb-10"
            >
              {features.map((feature, index) => (
                <SwiperSlide key={`mobile-${feature.id}`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl h-full">
                    <motion.div
                      className="w-16 h-16 mb-4 text-primary mx-auto"
                      {...getAnimationStyle(feature.animation.type, feature.animation.duration)}
                    >
                      {feature.icon}
                    </motion.div>

                    <h3 className="text-xl font-bold text-center mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-center">{feature.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop view: Use infinite carousel */}
          <div
            ref={carouselRef}
            className="hidden md:block relative w-full overflow-hidden"
            style={{ height: '320px' }}
          >
            <motion.div
              className="flex absolute"
              variants={carouselVariants}
              animate="animate"
              style={{ width: `${featureWidth * duplicatedFeatures.length}px` }}
            >
              {duplicatedFeatures.map((feature, index) => (
                <motion.div
                  key={`${feature.id}-${index}`}
                  className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 mx-2"
                  style={{ width: `${featureWidth}px` }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-16 h-16 mb-4 text-primary mx-auto"
                    {...getAnimationStyle(feature.animation.type, feature.animation.duration)}
                  >
                    {feature.icon}
                  </motion.div>

                  <h3 className="text-xl font-bold text-center mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-primary bg-opacity-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Stats</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Success in Numbers - A Testament to Our Excellence
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

      {/* Story Section */}
      <section className="section">
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
              <p className="text-gray-600 mb-10">
                Join us in redefining possibilities. </p>
              <a href="/about" className="btn btn-primary">
                Learn More About Us
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">What Our Clients Say</h3>

              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                spaceBetween={30}
                slidesPerView={1}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <TestimonialCard
                      name={testimonial.name}
                      role={testimonial.role}
                      company={testimonial.company}
                      testimonial={testimonial.testimonial}
                      rating={testimonial.rating}
                      imageUrl={testimonial.imageUrl}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section bg-gray-100">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Innovative products designed to solve real-world problems and drive business growth
            </p>
          </motion.div>

          {/* Added margin on larger screens for better spacing */}
          <div className="flex justify-center items-center min-w-screen md:mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-0 gap-10 place-items-center">
              {[
                { logo: "/Logo/C2C.png", url: "https://www.colleges2career.com", size: "h-24" },
                { logo: "/Logo/Lutti.png", url: "https://www.luttistudios.in", size: "h-20" },
                { logo: "/Logo/Eatup.png", url: "https://www.eatup.online", size: "h-28" },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: window.innerWidth < 640 ? index * 0.3 : 0.2 * index,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="block"
                >
                  <motion.img
                    src={item.logo}
                    alt="Logo"
                    className={`${item.size} mx-auto drop-shadow-lg transition-opacity duration-300 hover:opacity-80`}
                  />
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Global Presence Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Presence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We serve clients worldwide with offices and operations in key locations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {locations.map((location, index) => (
              <LocationCard
                key={index}
                name={location.name}
                imageUrl={location.imageUrl}
                delay={index}

              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;