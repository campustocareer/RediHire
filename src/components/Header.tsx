import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOverlayOpen, setServicesOverlayOpen] = useState(false);
  const [solutionsOverlayOpen, setSolutionsOverlayOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);

  const services = [
    { name: 'Staffing', path: '/services/staffing' },
    { name: 'Gaming', path: '/services/gaming' },
    { name: 'Web & App Development', path: '/services/web-app-development' },
    { name: 'Digital Transformations', path: '/services/digital-transformations' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
  ];

  

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOverlayOpen(false);
      }
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setSolutionsOverlayOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOverlayOpen(false);
    setSolutionsOverlayOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
 <header className="sticky top-0 z-50 bg-white shadow-md">
  <div className="w-full flex items-center justify-between py-2 px-4">
        <Link to="/" className="flex items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center ">
              <div className="flex flex-col items-start">
              <img src="/Logo/Logo.png" alt="Company Logo" className="w-40 h-auto" />


              </div>
            </div>

          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active-nav-link' : ''}`}>
            Home
          </Link>

          <div ref={servicesRef} className="relative">
            <button
              className={`nav-link flex items-center ${location.pathname.includes('/services') ? 'active-nav-link' : ''}`}
              onClick={() => {
                setServicesOverlayOpen(!servicesOverlayOpen);
                setSolutionsOverlayOpen(false);
              }}
            >
              Services <ChevronDown className="ml-1 w-4 h-4" />
            </button>

            {servicesOverlayOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50"
              >
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white"
                  >
                    {service.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>

         

          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active-nav-link' : ''}`}>
            About Us
          </Link>

          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active-nav-link' : ''}`}>
            Contact Us
          </Link>
            <Link to="/carrerspage" className={`nav-link ${isActive('/carrerspage') ? 'active-nav-link' : ''}`}>
            Careers
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t"
        >
          <div className="container py-4 space-y-4">
            <Link
              to="/"
              className="block py-2 text-gray-800 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-gray-800 hover:text-primary"
                onClick={() => setServicesOverlayOpen(!servicesOverlayOpen)}
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOverlayOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOverlayOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-primary">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="block py-1 text-gray-600 hover:text-primary"
                      onTouchEnd={() => {
                        setMobileMenuOpen(false);
                        window.location.href = service.path; // Force navigation
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

          
            <Link
              to="/about"
              className="block py-2 text-gray-800 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className="block py-2 text-gray-800 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
             <Link
              to="/carrerspage"
              className="block py-2 text-gray-800 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;