import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

function CyberLayout({ children }) {
  return (
    <div className="h-screen overflow-y-auto flex flex-col relative overflow-x-hidden">
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