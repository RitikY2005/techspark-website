import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

const socialLinks = [
  { href: "https://www.instagram.com/mithibaitechspark/", icon: Instagram, label: "Instagram" },
  { href: "https://in.linkedin.com/company/mithibaitechspark", icon: Linkedin, label: "LinkedIn" },
  { href: "https://x.com/M_TechSpark", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Facebook, label: "Facebook" },
];

function Footer() {
  return (
    <footer className="bg-black text-white py-8 sm:py-12 px-4 border-t border-cyber-blue/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* TechSpark Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-cyber-blue mb-4 tracking-wide">TechSpark</h3>
            <p className="text-gray-300">Engraving Adaptability</p>
          </div>

          {/* Quick Links Section */}
          {/* <div className="space-y-4">
            <h3 className="text-xl font-bold text-cyber-blue mb-4 tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/team', label: 'Team' },
                { to: '/events', label: 'Events' }
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to}
                    className="text-gray-300 hover:text-cyber-blue transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-cyber-blue mb-4 tracking-wide">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <span>Email:</span>
                <a 
                  href="mailto:info@techspark.com"
                  className="hover:text-cyber-blue transition-colors duration-300"
                >
                  info@techspark.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>Phone:</span>
                <a 
                  href="tel:+911234567890"
                  className="hover:text-cyber-blue transition-colors duration-300"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li>Mithibai College, Mumbai</li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-cyber-blue mb-4 tracking-wide">
              Follow Us
            </h3>
            <ul className="flex space-x-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyber-blue transition-colors duration-300"
                    aria-label={label}
                  >
                    <Icon size={24} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} TechSpark. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 