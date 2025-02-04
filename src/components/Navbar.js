import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navRef=useRef(null);

// for the mobile navbar - when clicked outside the navbar div , it closes automatically
  useEffect(() => {
    
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        // Trigger the close action (or any other logic)
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    // <nav className="px-4 py-3 sm:py-4 bg-[#2a3135] fixed w-full top-0 z-50 shadow-lg opacity-75"></nav>
    <nav className="px-4 py-3 sm:py-4 w-full top-0 z-50 sm:opacity-75">
      <div className="container mx-auto relative">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center gap-2 no-underline">
              <img 
                src="/techspark-logo.png" 
                alt="TechSpark Logo" 
                className="h-8 sm:h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-spark text-black tracking-wide">TechSpark</span>
              </div>
              {/* <img 
                src="/techspark-logo.png" 
                alt="TechSpark Logo" 
                className="h-8 sm:h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-bold text-white tracking-wide">TechSpark</span>
                <span className="text-xs sm:text-sm text-cyber-blue tracking-widest -mt-1">2025</span>
              </div> */}
            </Link>
          </motion.div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              //{ path: '/team', label: 'Team' },
              { path: '/contact', label: 'Contact' },
              //{ path: '/events', label: 'Events' }
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-[#2a3135] font-medium relative group no-underline 
                          hover:text-xl transition-colors duration-300
                          text-lg tracking-wide"
              >
                {link.label}
                <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 
                               transition-all duration-300 
                               group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>

        <motion.div 
          ref={navRef}
          className={`${isMenuOpen ? 'flex' : 'hidden'} absolute top-10 left-0 w-full z-9999999 md:hidden flex-col gap-4 pt-4 rounded-md shadow-[0px_0px_10px_black] bg-black/95 text-cyber-pink`}
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
        >
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' },
            // { path: '/team', label: 'Team' },
            { path: '/contact', label: 'Contact' },
            // { path: '/events', label: 'Events' }
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-medium py-2 px-4 rounded-lg
                        hover:bg-cyber-blue/10 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;