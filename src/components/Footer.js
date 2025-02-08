import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, X, YoutubeIcon } from "lucide-react";

const XLogo = (props) => (
  <span className="group hover:text-cyber-blue">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="24"
      height="24"
      viewBox="0 0 256 256"
      style={{ fill: '#ffffff', transition: 'fill 0.3s ease' }}
      {...props}
    >
      <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10">
        <g transform="scale(5.12,5.12)">
          <path
            className="group-hover:fill-cyber-blue" // Change fill color on hover
            d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"
          ></path>
        </g>
      </g>
    </svg>
  </span>
);


const socialLinks = [
  { href: "https://www.instagram.com/mithibaitechspark/", icon: Instagram, label: "Instagram" },
  { href: "https://in.linkedin.com/company/mithibaitechspark", icon: Linkedin, label: "LinkedIn" },
  { href: "https://x.com/M_TechSpark", icon: XLogo, label: "X" },
  { href: "https://youtube.com/@mithibaitechspark", icon: YoutubeIcon, label: "YouTube" },
];

function Footer() {
  return (
    <footer className="bg-black text-white py-8 sm:py-12 px-4 border-t border-cyber-blue/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* TechSpark Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-cyber-blue mb-4 tracking-wide">Mithibai TechSpark</h3>
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
                  href="mailto:cp@mithibaitechspark.in"
                  className="hover:text-cyber-blue transition-colors duration-300"
                >
                  cp@mithibaitechspark.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>Phone:</span>
                <a 
                  href="tel:+911234567890"
                  className="hover:text-cyber-blue transition-colors duration-300"
                >
                  +91 91377 94913
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