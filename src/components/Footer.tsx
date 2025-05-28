import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const size: string = "text-sm";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            {/* Logo Section */}
            <div className="mb-6">
              <img src="/Logo/F_Logo.png" alt="Company Logo" className="w-48 h-auto" />

            </div>

            <p className={`mb-4 text-gray-400 ${size}`}>
              Empowering businesses with end-to-end employment solutions, project development, and cutting-edge gaming innovation.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/19jUuJv7x1/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/c2c2025?s=21" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/redihire?igsh=MTNjZTZ1YmVjMjRnaQ==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/redihire" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Contact Us
                </Link>
              </li>
               <li>
                <Link
                  to="/carrerspage"
                  className="text-gray-400 hover:text-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>


          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/staffing"
                  className="text-gray-400 hover:text-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Staffing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/gaming"
                  className="text-gray-400 hover:text-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Gaming
                </Link>
              </li>
              <li>
                <Link
                  to="/services/web-app-development"
                  className="text-gray-400 hover:text-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Web & App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/digital-transformations"
                  className="text-gray-400 hover:text-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Digital Transformations
                </Link>
              </li>
              <li>
                <Link
                  to="/services/digital-marketing"
                  className="text-gray-400 hover:text-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Plot no:16, Road no:4, RTC Colony, L.B nagar, Hyderabad , Telangana,500074.
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary shrink-0" />
                <span className="text-gray-400">+91 8977787091</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary shrink-0" />
                <span className="text-gray-400">sales@Redihire.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4 text-center text-gray-500 bg-gray-950">
        <div className="container">
          <p>© {new Date().getFullYear()} Redihire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
