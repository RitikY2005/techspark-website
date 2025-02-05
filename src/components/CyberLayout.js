import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

function CyberLayout({ children }) {
  return (
    <div className="font-tech h-screen overflow-y-auto flex flex-col relative overflow-x-hidden">
      {/* Base Background */}
      <div className="fixed inset-0  no-repeat bg-cover bg-center " style={{backgroundImage:'url("grad.avif")'}} />

      {/* Static Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-cyber-purple/20 to-black opacity-50"  />

      {/* Cyberpunk Grid - Adjusted size for mobile */}
      <div className="fixed inset-0  bg-[length:12px_12px] sm:bg-cyber opacity-30" />

      {/* Static Glow Effect */}
      <div className="fixed inset-0 bg-gradient-to-r from-cyber-blue/5 via-cyber-purple/5 to-cyber-pink/5" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-auto">
      <div className='hidden md:flex absolute top-0 left-0 w-full  justify-center items-center h-[150px] sm:h-[300px] md:h-[600px] '>
        <motion.div
          className="absolute flex justify-center items-center w-[150px] sm:w-[300px] md:w-[600px]  opacity-5"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <img
            src="/techspark-logo.png"
            alt="TechSpark Logo Background"
            className="w-full h-full"
          />
        </motion.div></div>
        <Navbar />
        {/* <main className="flex-grow pt-16 sm:pt-20"> */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default CyberLayout;